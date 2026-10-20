<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:22:14
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesMember\address-form\address-form.wxml 引入模板

```
<import src="address-form.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesMember\address-form\address-form.wxss 中引入样式
```
@import "./address-form.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="content content data-v-20f8f915 data-v-20f8f915">
      <view class="uni-forms forms--uni-forms">
        <form>
          <view
            class="uni-forms-item item--uni-forms-item is-direction-left item--is-direction-left"
          >
            <view
              class="uni-forms-item__label item--uni-forms-item__label no-label item--no-label"
              style="width: auto; justify-content: flex-start"
            >
              <text></text>
            </view>
            <view class="uni-forms-item__content item--uni-forms-item__content">
              <text class="label data-v-20f8f915 sk-transparent sk-text-14-2857-88 sk-text"
                >收货人</text
              >
              <view
                class="input data-v-20f8f915 sk-image"
                placeholder="请填写收货人姓名"
                value="暴龙兽测试2"
              ></view>
              <view class="uni-forms-item__error item--uni-forms-item__error">
                <text></text>
              </view>
            </view>
          </view>
          <view
            class="uni-forms-item item--uni-forms-item is-direction-left item--is-direction-left"
          >
            <view
              class="uni-forms-item__label item--uni-forms-item__label no-label item--no-label"
              style="width: auto; justify-content: flex-start"
            >
              <text></text>
            </view>
            <view class="uni-forms-item__content item--uni-forms-item__content">
              <text class="label data-v-20f8f915 sk-transparent sk-text-14-2857-549 sk-text"
                >手机号码</text
              >
              <view
                class="input data-v-20f8f915 sk-image"
                placeholder="请填写收货人手机号码"
                value="13333333333"
              ></view>
              <view class="uni-forms-item__error item--uni-forms-item__error">
                <text></text>
              </view>
            </view>
          </view>
          <view
            class="uni-forms-item item--uni-forms-item is-direction-left item--is-direction-left"
          >
            <view
              class="uni-forms-item__label item--uni-forms-item__label no-label item--no-label"
              style="width: auto; justify-content: flex-start"
            >
              <text></text>
            </view>
            <view class="uni-forms-item__content item--uni-forms-item__content">
              <text class="label data-v-20f8f915 sk-transparent sk-text-14-2857-112 sk-text"
                >所在地区</text
              >
              <view
                class="picker data-v-20f8f915 sk-image"
                mode="region"
                value='["北京市","北京市","东城区"]'
              >
                <view class="data-v-20f8f915 sk-transparent sk-text-14-2857-481 sk-text"
                  >北京市 北京市 东城区</view
                >
              </view>
              <view class="uni-forms-item__error item--uni-forms-item__error">
                <text></text>
              </view>
            </view>
          </view>
          <view
            class="uni-forms-item item--uni-forms-item is-direction-left item--is-direction-left"
          >
            <view
              class="uni-forms-item__label item--uni-forms-item__label no-label item--no-label"
              style="width: auto; justify-content: flex-start"
            >
              <text></text>
            </view>
            <view class="uni-forms-item__content item--uni-forms-item__content">
              <text class="label data-v-20f8f915 sk-transparent sk-text-14-2857-834 sk-text"
                >详细地址</text
              >
              <view
                class="input data-v-20f8f915 sk-image"
                placeholder="街道、楼牌号等信息"
                value="我"
              ></view>
              <view class="uni-forms-item__error item--uni-forms-item__error">
                <text></text>
              </view>
            </view>
          </view>
          <view class="form-item form-item data-v-20f8f915 data-v-20f8f915">
            <label class="label data-v-20f8f915 sk-transparent sk-text-14-2857-863 sk-text"
              >设为默认地址</label
            >
            <switch class="switch switch data-v-20f8f915 data-v-20f8f915" color="#EFEFEF"></switch>
          </view>
        </form>
      </view>
    </view>
    <button class="button data-v-20f8f915 sk-transparent sk-button sk-pseudo sk-pseudo-circle">
      保存并使用
    </button>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:22:14

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesMember\address-form\address-form.wxss 中引入样式
```
@import "./address-form.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-88 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-549 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-112 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-481 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-834 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-863 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-button {
  color: #1c2c46 !important;
  background: #1c2c46 !important;
  border: none !important;
  box-shadow: none !important;
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
.sk-image {
  background: #1c2c46 !important;
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
