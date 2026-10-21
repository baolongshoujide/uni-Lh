<script setup lang="ts">
import { deleteCartAPI, getCartAPI, putCartAPI, putCartSelectAPI } from '@/services/cart'
import { useMemberStore } from '@/stores'
import type { CartItem } from '@/types/cart'
import { useGuessList } from '@/composables'
import { onShow } from '@dcloudio/uni-app'
import { computed, onMounted, ref } from 'vue'
import PageSkeleton from './PageSkeleton.vue'

const memberStore = useMemberStore()
const { guessRef, OnScrolltolower } = useGuessList()

const cartList = ref<CartItem[]>()
// 只在购物车首次请求时展示整页骨架屏；后续回到页面时保留已有内容。
const isInitialLoading = ref(false)
let cartRequest: Promise<void> | undefined
const getCartList = async () => {
  if (cartRequest) return cartRequest
  if (!cartList.value) isInitialLoading.value = true
  cartRequest = (async () => {
    const res = await getCartAPI()
    cartList.value = res.result
  })()
  try {
    await cartRequest
  } finally {
    cartRequest = undefined
    isInitialLoading.value = false
  }
}

const onDelete = async (id: string) => {
  uni.showModal({
    content: '确认删除',
    confirmColor: '#00b8ff',
    showCancel: true,
    success: async (success) => {
      if (success.confirm) {
        await deleteCartAPI({ ids: [id] })
        getCartList().catch(() => undefined)
      }
    },
  })
}
let timeOut: ReturnType<typeof setTimeout> | undefined
const onChangeCount = (ev: any) => {
  clearTimeout(timeOut)
  timeOut = setTimeout(async () => {
    await putCartAPI(ev.index, { count: ev.value })
  }, 1000)
}

const onChangeSelect = async (item: CartItem) => {
  item.selected = !item.selected
  console.log(item.selected)
  await putCartAPI(item.skuId, { selected: item.selected })
}
const isSelectedAll = computed(() => {
  return cartList.value?.every((item) => item.selected)
})

const onChangeSelectAll = async () => {
  const selectAll = !isSelectedAll.value
  cartList.value?.forEach((item) => (item.selected = selectAll))
  await putCartSelectAPI({ selected: selectAll })
}

// 底部数据
const selectedList = computed(() => {
  return cartList.value?.filter((item) => item.selected)
})
const selectedNum = computed(() => {
  return selectedList.value?.reduce((sum, item) => {
    return sum + item.count
  }, 0)
})
const selectPrice = computed(() => {
  return selectedList.value?.reduce((sum, item) => {
    return sum + item.count * item.nowPrice
  }, 0)
})

const gotoPay = () => {
  if (selectedNum.value) {
    uni.showModal({
      content: '真的不再看看了么~',
      showCancel: true,
      confirmText: '立即结算',
      cancelText: '再逛逛吧',
      success: (success) => {
        if (success.confirm) {
          uni.navigateTo({ url: '/pagesOrder/create/create' })
        }
      },
    })
  }
  if (selectedNum.value === 0) {
    uni.showToast({ title: '请先勾选商品', icon: 'none' })
  }
}

onShow(() => {
  if (memberStore.profile) {
    getCartList().catch(() => undefined)
  }
})

onMounted(() => {
  if (memberStore.profile) {
    getCartList().catch(() => undefined)
  }
})
</script>

<template>
  <PageSkeleton v-if="isInitialLoading" />
  <scroll-view
    v-show="!isInitialLoading"
    scroll-y
    class="scroll-view"
    @scrolltolower="OnScrolltolower"
  >
    <!-- 已登录: 显示购物车 -->
    <template v-if="memberStore.profile">
      <!-- 购物车列表 -->
      <view class="cart-list" v-if="cartList?.length">
        <!-- 优惠提示 -->
        <view class="tips">
          <text class="label">满减</text>
          <text class="desc">满1件, 即可享受9折优惠</text>
        </view>
        <!-- 滑动操作分区 -->
        <uni-swipe-action>
          <!-- 滑动操作项 -->
          <uni-swipe-action-item v-for="item in cartList" :key="item.skuId" class="cart-swipe">
            <!-- 商品信息 -->
            <view class="goods">
              <!-- 选中状态 -->
              <text
                @tap="onChangeSelect(item)"
                class="checkbox"
                :class="{ checked: item.selected }"
              ></text>
              <navigator
                :url="`/pages/goods/goods?id=${item.id}`"
                hover-class="none"
                class="navigator"
              >
                <image mode="aspectFill" class="picture" :src="item.picture"></image>
                <view class="meta">
                  <view class="name ellipsis">{{ item.name }}</view>
                  <view class="attrsText ellipsis">{{ item.attrsText }}</view>
                  <view class="purchase-row">
                    <view class="price">{{ item.nowPrice }}</view>
                    <vk-data-input-number-box
                      v-model="item.count"
                      :min="1"
                      :max="item.stock"
                      :index="item.skuId"
                      :input-width="64"
                      :input-height="52"
                      :size="24"
                      @change="onChangeCount"
                    ></vk-data-input-number-box>
                  </view>
                </view>
              </navigator>
            </view>
            <!-- 右侧删除按钮 -->
            <template #right>
              <view @tap="onDelete(item.skuId)" class="cart-swipe-right">
                <button class="button delete-button">删除</button>
              </view>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <!-- 购物车空状态 -->
      <view class="cart-blank" v-else>
        <image src="/static/images/blank_cart.png" class="image" />
        <text class="text">购物车还是空的，快来挑选好货吧</text>
        <navigator open-type="switchTab" url="/pages/index/index" hover-class="none">
          <button class="button">去首页看看</button>
        </navigator>
      </view>
      <!-- 吸底工具栏 -->
      <view class="toolbar">
        <text @tap="onChangeSelectAll" class="all" :class="{ checked: isSelectedAll }">全选</text>
        <text class="text">合计:</text>
        <text class="amount">{{ selectPrice }}</text>
        <view class="button-grounp">
          <view
            @tap="gotoPay"
            class="button payment-button"
            :class="{ disabled: selectedNum === 0 }"
          >
            去结算({{ selectedNum }})
          </view>
        </view>
      </view>
    </template>
    <!-- 未登录: 提示登录 -->
    <view class="login-blank" v-else>
      <text class="text">登录后可查看购物车中的商品</text>
      <navigator url="/pages/login/login" hover-class="none">
        <button class="button">去登录</button>
      </navigator>
    </view>
    <!-- 猜你喜欢 -->
    <LhGuess ref="guessRef"></LhGuess>
    <!-- 底部占位空盒子 -->
    <view class="toolbar-height"></view>
  </scroll-view>
</template>

<style lang="scss">
@import './cartdetail.scss';
</style>
