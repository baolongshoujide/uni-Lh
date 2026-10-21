<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:18:26
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\my\my.wxml 引入模板

```
<import src="my.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\my\my.wxss 中引入样式
```
@import "./my.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <scroll-view
      :enable-back-to-top="true"
      :scroll-y="true"
      class="viewport data-v-d3687551 sk-image"
    >
      <view class="profile profile data-v-d3687551 data-v-d3687551" style="padding-top: 47px">
        <view class="overview overview data-v-d3687551 data-v-d3687551">
          <navigator class="data-v-d3687551 data-v-d3687551" hover-class="none">
            <image class="avatar data-v-d3687551 sk-image" mode="aspectFill"></image>
          </navigator>
          <view class="meta meta data-v-d3687551 data-v-d3687551">
            <view class="nickname data-v-d3687551 sk-transparent sk-text-0-0000-67 sk-text"
              >暴龙兽基德</view
            >
            <navigator class="extra extra data-v-d3687551 data-v-d3687551" hover-class="none">
              <text class="update data-v-d3687551 sk-transparent sk-text-16-6667-776 sk-text"
                >更新头像昵称</text
              >
            </navigator>
          </view>
        </view>
        <navigator
          class="settings data-v-d3687551 sk-transparent sk-text-14-2857-803 sk-text"
          hover-class="none"
        >
          设置
        </navigator>
      </view>
      <view class="orders orders data-v-d3687551 data-v-d3687551">
        <view class="title data-v-d3687551 sk-transparent">
          我的订单
          <navigator class="navigator data-v-d3687551 sk-transparent" hover-class="none">
            查看全部订单
            <text class="icon-right data-v-d3687551 sk-pseudo sk-pseudo-circle"></text>
          </navigator>
        </view>
        <view class="section section data-v-d3687551 data-v-d3687551">
          <navigator
            class="icon-currency navigator data-v-d3687551 sk-transparent sk-text-14-2857-272 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待付款</navigator
          >
          <navigator
            class="icon-gift navigator data-v-d3687551 sk-transparent sk-text-14-2857-360 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待发货</navigator
          >
          <navigator
            class="icon-check navigator data-v-d3687551 sk-transparent sk-text-14-2857-849 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待收货</navigator
          >
          <navigator
            class="icon-comment navigator data-v-d3687551 sk-transparent sk-text-14-2857-54 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >待评价</navigator
          >
        </view>
      </view>
      <view class="guess guess data-v-d3687551 data-v-d3687551">
        <view is="components/LhGuess" class="r r data-v-d3687551 data-v-d3687551">
          <view class="caption LhGuess--caption data-v-a4651e40 LhGuess--data-v-a4651e40">
            <text
              class="text LhGuess--text data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-0-0000-774 sk-text sk-pseudo sk-pseudo-circle"
              >猜你喜欢</text
            >
          </view>
          <view class="guess LhGuess--guess data-v-a4651e40 LhGuess--data-v-a4651e40">
            <navigator
              class="guess-item LhGuess--guess-item data-v-a4651e40 LhGuess--data-v-a4651e40"
            >
              <image
                class="image LhGuess--image data-v-a4651e40 LhGuess--data-v-a4651e40 sk-image"
                mode="aspectFill"
              ></image>
              <view
                class="name LhGuess--name data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-14-2857-650 sk-text"
                >手动压缩，节省空间app</view
              >
              <view class="price LhGuess--price data-v-a4651e40 LhGuess--data-v-a4651e40">
                <text
                  class="small LhGuess--small data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-opacity"
                  >¥</text
                >
                <text
                  class="data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-0-0000-746 sk-text"
                  >79.00</text
                >
              </view>
            </navigator>
            <navigator
              class="guess-item LhGuess--guess-item data-v-a4651e40 LhGuess--data-v-a4651e40"
            >
              <image
                class="image LhGuess--image data-v-a4651e40 LhGuess--data-v-a4651e40 sk-image"
                mode="aspectFill"
              ></image>
              <view
                class="name LhGuess--name data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-14-2857-54 sk-text"
                >三种调性一款轻硬无短板的综合竿app</view
              >
              <view class="price LhGuess--price data-v-a4651e40 LhGuess--data-v-a4651e40">
                <text
                  class="small LhGuess--small data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-opacity"
                  >¥</text
                >
                <text
                  class="data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-0-0000-328 sk-text"
                  >251.00</text
                >
              </view>
            </navigator>
            <navigator
              class="guess-item LhGuess--guess-item data-v-a4651e40 LhGuess--data-v-a4651e40"
            >
              <image
                class="image LhGuess--image data-v-a4651e40 LhGuess--data-v-a4651e40 sk-image"
                mode="aspectFill"
              ></image>
            </navigator>
            <navigator
              class="guess-item LhGuess--guess-item data-v-a4651e40 LhGuess--data-v-a4651e40"
            >
              <image
                class="image LhGuess--image data-v-a4651e40 LhGuess--data-v-a4651e40 sk-image"
                mode="aspectFill"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:18:26

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\my\my.wxss 中引入样式
```
@import "./my.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
@import '@/components/style/LhGuess.scss';
@import './style/my.scss';
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-67 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-16-6667-776 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #1c2c46 0%,
    #1c2c46 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text-14-2857-803 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: absolute !important;
}
.sk-text-14-2857-272 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-360 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-849 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-54 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-774 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-text-14-2857-650 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-0-0000-746 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-328 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
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
