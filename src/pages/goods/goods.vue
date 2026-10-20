<script setup lang="ts">
import { getGoodsAPI } from '@/services/goods'
import type { GoodsResult } from '@/types/goods'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
const { safeAreaInsets } = uni.getSystemInfoSync()
const previewHeightRpx = ref(750)
import AddressPanel from './compontens/AddressPanel.vue'
import ServicePanel from './compontens/Service.Panel.vue'
import type {
  SkuPopupEvent,
  SkuPopupInstanceType,
} from '@/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js'
import { addCartAPI } from '@/services/cart.ts'
import { useAddressStore } from '@/stores/modules/address.ts'

const query = defineProps<{
  id: string
}>()
// 获取数据
const goodsList = ref<GoodsResult>()
const getGoodsList = async () => {
  const res = await getGoodsAPI(query.id || '4001877')
  goodsList.value = res.result
  localdata.value = {
    _id: res.result.id,
    name: res.result.name,
    goods_thumb: res.result.mainPictures[0],
    spec_list: res.result.specs.map((item) => {
      return {
        name: item.name,
        list: item.values,
      }
    }),
    sku_list: res.result.skus.map((item) => {
      return {
        _id: item.id,
        goods_id: res.result.id,
        goods_name: res.result.name,
        Image: item.picture,
        // 组件要求，价格需要乘以100才能计算
        price: item.price * 100,
        sku_name_arr: item.specs.map((v) => v.valueName),
        stock: item.inventory,
      }
    }),
  }
}
// 控制轮播图底部的数字显示
const currentIndex = ref(0)
const Onchange: UniHelper.SwiperOnChange = (ev) => {
  currentIndex.value = ev.detail!.current
}
const onPreviewImageLoad = (ev: { detail: { width: number; height: number } }) => {
  const { width, height } = ev.detail
  if (width > 0 && height > 0) {
    previewHeightRpx.value = (750 * height) / width
  }
}
// 轮播图预览
const OnImage = (i: string) => {
  uni.previewImage({
    current: i,
    urls: goodsList.value!.mainPictures,
  })
}
// 弹出层
const popup = ref<{
  open: (type?: UniHelper.UniPopupType) => void
  close: () => void
}>()
// 弹出层渲染条件
const popupName = ref<'address' | 'service'>()
const openPopup = (name: typeof popupName.value) => {
  popupName.value = name
  popup.value?.open()
}
// sku组件是否展示
const isShowSku = ref(false)
// sku绑定数据
const localdata = ref({})

enum SkuModel {
  Both = 1,
  Cart = 2,
  Buy = 3,
}
const mode = ref<SkuModel>(SkuModel.Buy)
// 打开弹窗时动态修改参数
const OpenSkuPopup = (x: SkuModel) => {
  isShowSku.value = true
  mode.value = x
}
const skuPopupRef = ref<SkuPopupInstanceType>()
const selectArr = computed(() => {
  // 利用实例的selectArr方法获取数据，再拼接成字符串。去掉头尾的空格，没有值的话显示后面文字
  return skuPopupRef?.value?.selectArr?.join(' ').trim() || '请选择商品规格'
})

const OnAddCart = async (ev: SkuPopupEvent) => {
  console.log(ev)
  await addCartAPI({
    skuId: ev._id,
    count: ev.buy_num,
  })
  uni.showToast({ title: '添加成功' })
  isShowSku.value = false
}

const addressStore = useAddressStore()
const OnBuyNow = async (ev: SkuPopupEvent) => {
  console.log(goodsList.value?.userAddresses.find((v) => v.isDefault))
  uni.navigateTo({
    url: `/pagesOrder/create/create?skuId=${ev._id}&count=${ev.buy_num}&addressId=${
      addressStore.address?.id || goodsList.value?.userAddresses!.find((v) => v.isDefault)?.id
    }`,
  })
  console.log(ev)
}

onLoad(() => {
  getGoodsList()
})
const refValue = ref(0)
onShow(() => {
  refValue.value++
})
</script>

<template>
  <!-- SKU弹窗组件.两个很长的一个是修改购物车的背景颜色，一个是立即购买的背景颜色 -->
  <!-- 最后那个是设置按钮颜色，主要是贴合主题，必须动态 -->
  <vk-data-goods-sku-popup
    :localdata="localdata"
    v-model="isShowSku"
    :mode="mode"
    ref="skuPopupRef"
    price-color="#ff3344"
    add-cart-background-color="#00b8ff"
    buy-now-background-color="#00b8ff"
    :actived-style="{
      color: '#00b8ff',
      borderColor: '#00b8ff',
      background: 'rgba(0, 184, 255, 0.12)',
    }"
    @add-cart="OnAddCart"
    @buy-now="OnBuyNow"
  ></vk-data-goods-sku-popup>
  <scroll-view scroll-y class="viewport">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview" :style="{ height: `${previewHeightRpx}rpx` }">
        <swiper @change="Onchange" circular :style="{ height: `${previewHeightRpx}rpx` }">
          <swiper-item v-for="(item, index) in goodsList?.mainPictures" :key="item">
            <image
              class="preview-image"
              @load="index === 0 ? onPreviewImageLoad : undefined"
              @tap="OnImage(item)"
              mode="aspectFit"
              :src="item"
            />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">{{ currentIndex + 1 }}</text>
          <text class="split">/</text>
          <text class="total">{{ goodsList?.mainPictures.length }}</text>
        </view>
      </view>

      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{ goodsList?.price }}</text>
        </view>
        <view class="name ellipsis">{{ goodsList?.name }} </view>
        <view class="desc"> {{ goodsList?.desc }} </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow" @tap="OpenSkuPopup(SkuModel.Both)">
          <text class="label">选择</text>
          <text class="text ellipsis"> {{ selectArr }} </text>
        </view>
        <view class="item arrow" @tap="openPopup('address')">
          <text class="label">送至</text>
          <text class="text ellipsis" v-if="addressStore.address">
            {{ addressStore.address.fullLocation }}
          </text>
          <text class="text ellipsis" v-else> 请选择收获地址 </text>
        </view>
        <view class="item arrow" @tap="openPopup('service')">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>

    <!-- 商品详情 -->
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item" v-for="item in goodsList?.details?.properties" :key="item.name">
            <text class="label">{{ item.name }}</text>
            <text class="value">{{ item.value }}</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
          class="detail-image"
          mode="widthFix"
          v-for="item in goodsList?.details?.pictures"
          :key="item"
          :src="item"
        ></image>
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator
          v-for="item in goodsList?.similarProducts"
          :key="item.id"
          class="goods"
          hover-class="none"
          :url="`/pages/goods/goods?id=${item.id}`"
        >
          <image class="image" mode="aspectFill" :src="item.picture"></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <navigator class="icons-button" url="/pages/cart/cart2" open-type="navigate">
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view @tap="OpenSkuPopup(SkuModel.Cart)" class="addcart"> 加入购物车 </view>
      <view @tap="OpenSkuPopup(3)" class="buynow"> 立即购买 </view>
    </view>
  </view>
  <uni-popup ref="popup" text="white" background-color="#080c18" type="bottom">
    <AddressPanel
      :refValue="refValue"
      v-if="popupName === 'address'"
      @close="popup?.close"
    ></AddressPanel>
    <ServicePanel v-if="popupName === 'service'" @close="popup?.close"></ServicePanel>
  </uni-popup>
</template>

<style lang="scss" scoped>
:global(page) {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  background-color: #080c18;
}

.panel {
  margin-top: 20rpx;
  background-color: rgba(20, 30, 50, 0.75);
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #e8f2ff;
      font-weight: 600;
      border-left: 4rpx solid #00b8ff;
    }
    navigator {
      font-size: 24rpx;
      color: #96a8c2;
    }
  }
}

.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: '\e6c2';
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 商品信息 */
.goods {
  background-color: rgba(20, 30, 50, 0.75);
  .preview {
    width: 100%;
    position: relative;

    .preview-image {
      display: block;
      width: 100%;
      height: 100%;
    }
    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
      .current {
        font-size: 26rpx;
      }
      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }
      .total {
        font-size: 24rpx;
      }
    }
  }
  .meta {
    position: relative;
    border-bottom: 1rpx solid rgba(0, 184, 255, 0.2);
    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #00b8ff;
    }
    .number {
      font-size: 56rpx;
    }
    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #e8f2ff;
    }
    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #ff3344;
    }
  }
  .action {
    padding-left: 20rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid rgba(0, 184, 255, 0.2);
      font-size: 26rpx;
      color: #e8f2ff;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
    .detail-image {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #e8f2ff;
      border-bottom: 1rpx dashed rgba(0, 184, 255, 0.2);
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  .content {
    padding: 0 20rpx 200rpx;
    background-color: #080c18;
    display: flex;
    flex-wrap: wrap;
    .goods {
      width: 340rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 7rpx;
      border-radius: 10rpx;
      background-color: rgba(20, 30, 50, 0.75);
    }
    .image {
      width: 300rpx;
      height: 260rpx;
    }
    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #e8f2ff;
    }
    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #ff3344;
    }
    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }
  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(20, 30, 50, 0.75);
  height: 100rpx;
  padding: 0 20rpx var(--window-bottom);
  border-top: 1rpx solid rgba(0, 184, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  .buttons {
    display: flex;
    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .addcart {
      background-color: #00b8ff;
    }
    .buynow,
    .payment {
      background-color: #00b8ff;
      margin-left: 20rpx;
    }
  }
  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    flex: 1;
    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #e8f2ff;
      background-color: rgba(20, 30, 50, 0.75);
      &::after {
        border: none;
      }
    }
    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
