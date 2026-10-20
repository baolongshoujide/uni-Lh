<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:15:26
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\cart\cart.wxml 引入模板

```
<import src="cart.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\cart\cart.wxss 中引入样式
```
@import "./cart.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view is="pages/cart/components/cartdetail">
      <scroll-view
        :scroll-y="true"
        class="scroll-view cartdetail--scroll-view"
        :enable-back-to-top="true"
      >
        <view class="cart-blank cartdetail--cart-blank">
          <image class="image cartdetail--image sk-image"></image>
          <text class="text cartdetail--text sk-transparent sk-text-14-2857-376 sk-text"
            >购物车还是空的，快来挑选好货吧</text
          >
          <navigator hover-class="none" open-type="switchTab">
            <button
              class="button cartdetail--button sk-transparent sk-button sk-pseudo sk-pseudo-circle"
            >
              去首页看看
            </button>
          </navigator>
        </view>
        <view class="toolbar cartdetail--toolbar">
          <text
            class="all cartdetail--all checked cartdetail--checked sk-transparent sk-text-14-2857-909 sk-text sk-pseudo sk-pseudo-circle"
            >全选</text
          >
          <text class="text cartdetail--text sk-transparent sk-text-14-2857-148 sk-text"
            >合计:</text
          >
          <text
            class="amount cartdetail--amount sk-transparent sk-text-14-2857-986 sk-text sk-pseudo sk-pseudo-circle"
            >0</text
          >
          <view class="button-grounp cartdetail--button-grounp">
            <view
              class="button cartdetail--button payment-button cartdetail--payment-button disabled cartdetail--disabled sk-transparent sk-text-32-4324-304 sk-text"
              style="background-position-x: 50%"
            >
              去结算(0)
            </view>
          </view>
        </view>
        <view is="components/LhGuess" class="r cartdetail--r">
          <view class="caption LhGuess--caption data-v-a4651e40 LhGuess--data-v-a4651e40">
            <text
              class="text LhGuess--text data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-0-0000-542 sk-text sk-pseudo sk-pseudo-circle"
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
                class="name LhGuess--name data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-14-2857-902 sk-text"
                >手动压缩，节省空间app</view
              >
            </navigator>
            <navigator
              class="guess-item LhGuess--guess-item data-v-a4651e40 LhGuess--data-v-a4651e40"
            >
              <image
                class="image LhGuess--image data-v-a4651e40 LhGuess--data-v-a4651e40 sk-image"
                mode="aspectFill"
              ></image>
              <view
                class="name LhGuess--name data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-14-2857-508 sk-text"
                >三种调性一款轻硬无短板的综合竿app</view
              >
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:15:26

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\cart\cart.wxss 中引入样式
```
@import "./cart.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-376 {
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
.sk-text-14-2857-909 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-148 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-986 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 53.8462rpx;
  position: relative !important;
}
.sk-text-32-4324-304 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #1c2c46 0%,
    #1c2c46 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}
.sk-text-0-0000-542 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-text-14-2857-902 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-508 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
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
