<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:17:32
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\goods\goods.wxml 引入模板

```
<import src="goods.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\goods\goods.wxss 中引入样式
```
@import "./goods.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view
      is="components/vk-data-goods-sku-popup/vk-data-goods-sku-popup"
      class="r r data-v-e000afeb data-v-e000afeb"
    ></view>
    <scroll-view
      :scroll-y="true"
      class="viewport viewport data-v-e000afeb data-v-e000afeb"
      :enable-back-to-top="true"
    >
      <view class="goods goods data-v-e000afeb data-v-e000afeb">
        <view class="preview preview data-v-e000afeb data-v-e000afeb" style="height: 390px">
          <swiper
            :circular="true"
            class="data-v-e000afeb data-v-e000afeb"
            style="height: 390px"
            :current="0"
            :autoplay="false"
          >
            <swiper-item
              class="data-v-e000afeb data-v-e000afeb"
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image class="preview-image data-v-e000afeb sk-image" mode="aspectFit"></image>
            </swiper-item>
          </swiper>
          <view class="indicator indicator data-v-e000afeb data-v-e000afeb">
            <text class="current data-v-e000afeb sk-transparent sk-opacity">1</text>
            <text class="split data-v-e000afeb sk-transparent sk-opacity">/</text>
            <text class="total data-v-e000afeb sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta meta data-v-e000afeb data-v-e000afeb">
          <view class="price price data-v-e000afeb data-v-e000afeb">
            <text class="symbol data-v-e000afeb sk-transparent sk-opacity">¥</text>
            <text class="number data-v-e000afeb sk-transparent sk-text-14-2857-615 sk-text"
              >4280.00</text
            >
          </view>
          <view class="name ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-80 sk-text"
            >朱炳仁·铜忠义千秋关公风水摆件</view
          >
          <view class="desc data-v-e000afeb sk-transparent sk-text-0-0000-255 sk-text"
            >众今礼敬关二爷，祈愿慈恩常荫庇app</view
          >
        </view>
        <view class="action action data-v-e000afeb data-v-e000afeb">
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-310 sk-text"
              >选择</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-335 sk-text"
              >请选择商品规格</text
            >
          </view>
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-946 sk-text"
              >送至</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-231 sk-text">
              请选择收获地址
            </text>
          </view>
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-90 sk-text"
              >服务</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-771 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view class="detail detail panel panel data-v-e000afeb data-v-e000afeb">
        <view class="title title data-v-e000afeb data-v-e000afeb">
          <text class="data-v-e000afeb sk-transparent sk-text-0-0000-567 sk-text">详情</text>
        </view>
        <view class="content content data-v-e000afeb data-v-e000afeb">
          <view class="properties properties data-v-e000afeb data-v-e000afeb">
            <view class="item item data-v-e000afeb data-v-e000afeb">
              <text class="label data-v-e000afeb sk-transparent sk-text-25-0000-170 sk-text"
                >风格</text
              >
              <text class="value data-v-e000afeb sk-transparent sk-text-25-0000-554 sk-text"
                >新中式、中式</text
              >
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar toolbar data-v-e000afeb data-v-e000afeb" style="padding-bottom: 34px">
      <view class="icons icons data-v-e000afeb data-v-e000afeb">
        <button
          class="icons-button data-v-e000afeb sk-transparent sk-button sk-pseudo sk-pseudo-circle"
        >
          <text class="icon-heart data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>收藏
        </button>
        <navigator class="icons-button data-v-e000afeb sk-transparent" open-type="navigate">
          <text class="icon-cart data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons buttons data-v-e000afeb data-v-e000afeb">
        <view
          class="addcart data-v-e000afeb sk-transparent sk-text-32-4324-757 sk-text"
          style="background-position-x: 50%"
        >
          加入购物车
        </view>
        <view
          class="buynow data-v-e000afeb sk-transparent sk-text-32-4324-516 sk-text"
          style="background-position-x: 50%"
        >
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:17:32

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\goods\goods.wxss 中引入样式
```
@import "./goods.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
@import './style/goods.scss';
.sk-transparent {
  color: transparent !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-615 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-80 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-0-0000-255 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-310 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-335 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-946 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-231 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-90 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-771 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-0-0000-567 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-25-0000-170 {
  background-image: linear-gradient(
    transparent 25%,
    #1c2c46 0%,
    #1c2c46 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-25-0000-554 {
  background-image: linear-gradient(
    transparent 25%,
    #1c2c46 0%,
    #1c2c46 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}
.sk-text-32-4324-757 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #1c2c46 0%,
    #1c2c46 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-text-32-4324-516 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #1c2c46 0%,
    #1c2c46 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-button {
  color: #1c2c46 !important;
  background: #1c2c46 !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #1c2c46 !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #1c2c46 !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #080c18;
}
</style>
