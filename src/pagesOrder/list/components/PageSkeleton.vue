<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:24:15
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\list\list.wxml 引入模板

```
<import src="list.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\list\list.wxss 中引入样式
```
@import "./list.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport data-v-f9a555d9 data-v-f9a555d9">
      <view class="tabs tabs data-v-f9a555d9 data-v-f9a555d9">
        <text
          class="item data-v-f9a555d9 sk-transparent sk-text-27-4194-308 sk-text"
          style="background-position-x: 50%"
          >全部</text
        >
        <text
          class="item data-v-f9a555d9 sk-transparent sk-text-27-4194-876 sk-text"
          style="background-position-x: 50%"
          >待付款</text
        >
        <text
          class="item data-v-f9a555d9 sk-transparent sk-text-27-4194-597 sk-text"
          style="background-position-x: 50%"
          >待发货</text
        >
        <text
          class="item data-v-f9a555d9 sk-transparent sk-text-27-4194-625 sk-text"
          style="background-position-x: 50%"
          >待收货</text
        >
        <text
          class="item data-v-f9a555d9 sk-transparent sk-text-27-4194-15 sk-text"
          style="background-position-x: 50%"
          >待评价</text
        >
        <view class="cursor cursor data-v-f9a555d9 data-v-f9a555d9" style="left: 0%"></view>
      </view>
      <swiper class="swiper swiper data-v-f9a555d9 data-v-f9a555d9" :current="0" :autoplay="false">
        <swiper-item
          class="data-v-f9a555d9 data-v-f9a555d9"
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <view is="pagesOrder/list/components/OrderList" class="data-v-f9a555d9 data-v-f9a555d9">
            <scroll-view
              :refresher-enabled="true"
              :scroll-y="true"
              class="orders OrderList--orders data-v-52fbdc30 OrderList--data-v-52fbdc30"
              refresher-background="#080c18"
              refresher-default-style="white"
              :enable-back-to-top="true"
            >
              <view
                class="loading-text OrderList--loading-text data-v-52fbdc30 OrderList--data-v-52fbdc30 sk-transparent sk-text-14-2857-455 sk-text"
                style="padding-bottom: 34px; background-position-x: 50%"
                >正在加载...</view
              >
            </scroll-view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:24:15

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\list\list.wxss 中引入样式
```
@import "./list.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-27-4194-308 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-27-4194-876 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-27-4194-597 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-27-4194-625 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-27-4194-15 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-455 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
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
