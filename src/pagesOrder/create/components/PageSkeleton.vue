<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:23:05
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\create\create.wxml 引入模板

```
<import src="create.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\create\create.wxss 中引入样式
```
@import "./create.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <scroll-view
      :scroll-y="true"
      class="viewport viewport data-v-a30441de data-v-a30441de"
      style="padding-bottom: calc(52px + 34px)"
    >
      <navigator class="shipment data-v-a30441de sk-image" hover-class="none">
        <view class="user data-v-a30441de sk-transparent sk-text-14-2857-810 sk-text"
          >暴龙兽测试2 13333333333</view
        >
        <view class="address data-v-a30441de sk-transparent sk-text-14-2857-833 sk-text"
          >北京市 北京市 东城区 我</view
        >
        <text class="icon icon-right data-v-a30441de sk-pseudo sk-pseudo-circle"></text>
      </navigator>
      <view class="goods goods data-v-a30441de data-v-a30441de">
        <navigator class="item item data-v-a30441de data-v-a30441de" hover-class="none">
          <image class="picture data-v-a30441de sk-image"></image>
          <view class="meta meta data-v-a30441de data-v-a30441de">
            <view class="name ellipsis data-v-a30441de sk-transparent sk-text-14-2857-577 sk-text"
              >朱炳仁·铜忠义千秋关公风水摆件</view
            >
            <view class="attrs data-v-a30441de sk-transparent sk-text-22-2222-793 sk-text"
              >忠义千秋（大）</view
            >
            <view class="prices prices data-v-a30441de data-v-a30441de">
              <view
                class="pay-price symbol data-v-a30441de sk-transparent sk-text-14-2857-307 sk-text sk-pseudo sk-pseudo-circle"
                >14888.00</view
              >
              <view
                class="price symbol data-v-a30441de sk-transparent sk-text-14-2857-634 sk-text sk-pseudo sk-pseudo-circle"
                style="text-decoration-color: transparent"
                >14888.00</view
              >
            </view>
            <view class="count data-v-a30441de sk-transparent sk-opacity">x1</view>
          </view>
        </navigator>
      </view>
      <view class="related related data-v-a30441de data-v-a30441de">
        <view class="item item data-v-a30441de data-v-a30441de">
          <text class="text data-v-a30441de sk-transparent sk-text-14-2857-839 sk-text"
            >配送时间</text
          >
          <view
            class="data-v-a30441de sk-image"
            range='[{"type":1,"text":"时间不限 (周一至周日)"},{"type":2,"text":"工作日送 (周一至周五)"},{"type":3,"text":"周末配送 (周六至周日)"}]'
            range-key="text"
          >
            <view
              class="icon-fonts picker data-v-a30441de sk-transparent sk-text-14-2857-325 sk-text sk-pseudo sk-pseudo-circle"
              >时间不限 (周一至周日)</view
            >
          </view>
        </view>
        <view class="item item data-v-a30441de data-v-a30441de">
          <text class="text data-v-a30441de sk-transparent sk-text-14-2857-988 sk-text"
            >订单备注</text
          >
          <view
            class="input data-v-a30441de sk-image"
            placeholder="选题，建议留言前先与商家沟通确认"
            value="true"
          ></view>
        </view>
      </view>
      <view class="settlement settlement data-v-a30441de data-v-a30441de">
        <view class="item item data-v-a30441de data-v-a30441de">
          <text class="text data-v-a30441de sk-transparent sk-text-14-2857-117 sk-text"
            >商品总价:
          </text>
          <text
            class="number symbol data-v-a30441de sk-transparent sk-text-14-2857-607 sk-text sk-pseudo sk-pseudo-circle"
            >14888.00</text
          >
        </view>
        <view class="item item data-v-a30441de data-v-a30441de">
          <text class="text data-v-a30441de sk-transparent sk-text-14-2857-906 sk-text"
            >运费:
          </text>
          <text
            class="number symbol data-v-a30441de sk-transparent sk-text-14-2857-36 sk-text sk-pseudo sk-pseudo-circle"
            >9.00</text
          >
        </view>
      </view>
    </scroll-view>
    <view class="toolbar toolbar data-v-a30441de data-v-a30441de" style="padding-bottom: 34px">
      <view class="total-pay symbol data-v-a30441de sk-pseudo sk-pseudo-circle">
        <text class="number data-v-a30441de sk-transparent sk-text-14-2857-757 sk-text"
          >14897.00</text
        >
      </view>
      <view
        class="button data-v-a30441de sk-transparent sk-text-32-4324-14 sk-text"
        style="background-position-x: 50%"
        >提交订单</view
      >
    </view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:23:05

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\create\create.wxss 中引入样式
```
@import "./create.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-810 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-833 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-577 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-793 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #1c2c46 0%,
    #1c2c46 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-307 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-634 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-839 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-325 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-988 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-117 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-607 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-906 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-36 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-757 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 53.8462rpx;
  position: relative !important;
}
.sk-text-32-4324-14 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #1c2c46 0%,
    #1c2c46 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
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
