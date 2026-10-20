<script setup lang="ts">
import { deleteCartAPI, getCartAPI, putCartAPI, putCartSelectAPI } from '@/services/cart'
import { useMemberStore } from '@/stores'
import type { CartItem } from '@/types/cart'
import { useGuessList } from '@/composables'
import { onShow } from '@dcloudio/uni-app'
import { computed, onMounted, ref } from 'vue'

const memberStore = useMemberStore()
const { guessRef, OnScrolltolower } = useGuessList()

const cartList = ref<CartItem[]>()
let cartRequest: Promise<void> | undefined
const getCartList = async () => {
  if (cartRequest) return cartRequest
  cartRequest = (async () => {
    const res = await getCartAPI()
    cartList.value = res.result
  })()
  try {
    await cartRequest
  } finally {
    cartRequest = undefined
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
  <scroll-view scroll-y class="scroll-view" @scrolltolower="OnScrolltolower">
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
// 根元素
:host {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #080c18;
}

// 滚动容器
.scroll-view {
  flex: 1;
}

// 购物车列表
.cart-list {
  padding: 0 20rpx;

  // 优惠提示
  .tips {
    display: flex;
    align-items: center;
    line-height: 1;
    margin: 30rpx 10rpx;
    font-size: 26rpx;
    color: #96a8c2;

    .label {
      color: #fff;
      padding: 7rpx 15rpx 5rpx;
      border-radius: 4rpx;
      font-size: 24rpx;
      background-color: #00b8ff;
      margin-right: 10rpx;
    }
  }

  // 购物车商品
  .goods {
    display: flex;
    padding: 20rpx 20rpx 20rpx 80rpx;
    border-radius: 10rpx;
    background-color: rgba(20, 30, 50, 0.75);
    border: 1rpx solid rgba(0, 184, 255, 0.2);
    position: relative;

    .navigator {
      display: flex;
      flex: 1;
      min-width: 0;
    }
    .navigator-wrap {
      display: flex;
      flex: 1;
      min-width: 0;
    }
    .checkbox {
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 80rpx;
      height: 100%;

      &::before {
        content: '\e6cd';
        font-family: 'erabbit' !important;
        font-size: 40rpx;
        color: #96a8c2;
      }

      &.checked::before {
        content: '\e6cc';
        color: #00b8ff;
      }
    }

    .picture {
      width: 170rpx;
      height: 170rpx;
      flex: none;
      border-radius: 6rpx;
    }

    .meta {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-left: 20rpx;
    }

    .name {
      height: 72rpx;
      font-size: 26rpx;
      color: #e8f2ff;
    }

    .attrsText {
      line-height: 1.8;
      padding: 0 15rpx;
      font-size: 24rpx;
      align-self: flex-start;
      margin-top: 12rpx;
      border-radius: 4rpx;
      color: #96a8c2;
      background-color: rgba(8, 12, 24, 0.75);
    }

    .purchase-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 0;
      gap: 8rpx;
      margin-top: auto;
      padding-top: 16rpx;

      .price {
        line-height: 1;
        font-size: 30rpx;
        font-weight: 600;
        color: #ff5b67;
        white-space: nowrap;

        &::before {
          content: '￥';
          font-size: 75%;
        }
      }
    }
  }

  .cart-swipe {
    display: block;
    margin: 20rpx 0;
  }

  .cart-swipe-right {
    display: flex;
    height: 100%;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      padding: 6px;
      line-height: 1.5;
      color: #fff;
      font-size: 26rpx;
      border-radius: 0;
    }

    .delete-button {
      background-color: #ff3344;
    }
  }
}

// 空状态
.cart-blank,
.login-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  .image {
    width: 400rpx;
    height: 281rpx;
  }
  .text {
    color: #e8f2ff;
    font-size: 26rpx;
    margin: 20rpx 0;
  }
  .button {
    width: 240rpx !important;
    height: 60rpx;
    line-height: 60rpx;
    margin-top: 20rpx;
    font-size: 26rpx;
    border-radius: 60rpx;
    color: #fff;
    background-color: #00b8ff;
  }
}

// 吸底工具栏
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: var(--window-bottom);
  z-index: 1;

  height: 100rpx;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx solid rgba(0, 184, 255, 0.2);
  border-bottom: 1rpx solid rgba(0, 184, 255, 0.2);
  background-color: rgba(20, 30, 50, 0.96);
  box-sizing: content-box;

  .all {
    margin-left: 25rpx;
    font-size: 14px;
    color: #e8f2ff;
    display: flex;
    align-items: center;
  }

  .all::before {
    font-family: 'erabbit' !important;
    content: '\e6cd';
    font-size: 40rpx;
    margin-right: 8rpx;
  }

  .checked::before {
    content: '\e6cc';
    color: #00b8ff;
  }

  .text {
    margin-right: 8rpx;
    margin-left: 32rpx;
    color: #e8f2ff;
    font-size: 14px;
  }

  .amount {
    font-size: 20px;
    color: #ff3344;

    .decimal {
      font-size: 12px;
    }

    &::before {
      content: '￥';
      font-size: 12px;
    }
  }

  .button-grounp {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 72rpx;
    font-size: 13px;
    color: #fff;

    .button {
      width: 240rpx;
      margin: 0 10rpx;
      border-radius: 72rpx;
    }

    .payment-button {
      background-color: #00b8ff;

      &.disabled {
        opacity: 0.6;
      }
    }
  }
}
// 底部占位空盒子
.toolbar-height {
  height: 100rpx;
}
</style>
