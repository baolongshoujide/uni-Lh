<!--
此文件为开发者工具生成，生成时间: 2026/10/16 16:37:17
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\detail\detail.wxml 引入模板

```
<import src="detail.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\detail\detail.wxss 中引入样式
```
@import "./detail.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar" style="padding-top: 47px">
      <view class="wrap wrap">
        <navigator
          class="back icon-home sk-pseudo sk-pseudo-circle"
          open-type="switchTab"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-686 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view
      :scroll-y="true"
      class="viewport viewport"
      id="scroller"
      :enable-back-to-top="true"
    >
      <view class="overview sk-image" style="padding-top: 67px">
        <view
          class="status icon-clock sk-transparent sk-text-0-0000-650 sk-text sk-pseudo sk-pseudo-circle"
          >等待付款</view
        >
        <view class="tips sk-transparent">
          <text class="money sk-transparent sk-text-0-0000-985 sk-text">应付金额: ¥ 99.00</text>
          <text class="time sk-transparent sk-text-0-0000-253 sk-text">支付剩余</text> 00 时 29 分
          59 秒
        </view>
        <view
          class="button sk-transparent sk-text-28-7879-739 sk-text"
          style="background-position-x: 50%"
          >去支付</view
        >
      </view>
      <view class="shipment shipment">
        <view class="item sk-image">
          <view class="message sk-transparent sk-text-14-2857-580 sk-text">
            您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
          </view>
          <view class="date sk-transparent sk-text-14-2857-904 sk-text"> 2023-04-14 13:14:20 </view>
        </view>
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-200 sk-text"> 张三 13333333333 </view>
          <view class="address sk-transparent sk-text-14-2857-96 sk-text">
            广东省 广州市 天河区 黑马程序员
          </view>
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-110 sk-text"
                >ins风小碎花泡泡袖衬110-160cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-582 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-949 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-741 sk-text"
                >ins风小碎花泡泡袖衬110-160cm</view
              >
              <view class="type sk-transparent sk-text-22-2222-670 sk-text">藏青小花， 130</view>
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-642 sk-text">99.00</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
          <view class="action action">
            <view
              class="button primary sk-transparent sk-text-29-0323-942 sk-text"
              style="background-position-x: 50%"
              >申请售后</view
            >
            <navigator
              class="button sk-transparent sk-text-29-0323-300 sk-text"
              style="background-position-x: 50%"
            >
              去评价
            </navigator>
          </view>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-892 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-247 sk-text sk-pseudo sk-pseudo-circle"
              >99.00</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-690 sk-text">运费: </view>
            <view class="symbol sk-transparent sk-text-0-0000-39 sk-text sk-pseudo sk-pseudo-circle"
              >10.00</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-18 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-301 sk-text sk-pseudo sk-pseudo-circle"
              >109.00</view
            >
          </view>
        </view>
      </view>
      <view class="detail detail">
        <view class="title sk-transparent sk-text-0-0000-195 sk-text">订单信息</view>
        <view class="row row">
          <view class="item sk-transparent">
            订单编号:
            <text class="copy sk-transparent sk-text-0-0000-436 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-839 sk-text"
            >下单时间: 2023-04-14 13:14:20</view
          >
        </view>
      </view>
      <xtx-guess class="r r"></xtx-guess>
      <view class="toolbar-height toolbar-height" style="padding-bottom: 34px"></view>
      <view class="toolbar toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-126 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-489 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
/*
此文件为开发者工具生成，生成时间: 2026/10/16 16:37:17

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pagesOrder\detail\detail.wxss 中引入样式
```
@import "./detail.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-686 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-650 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-985 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-0-0000-253 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-28-7879-739 {
  background-image: linear-gradient(
    transparent 28.7879%,
    #1c2c46 0%,
    #1c2c46 71.2121%,
    transparent 0%
  ) !important;
  background-size: 100% 63.4615rpx;
  position: relative !important;
}
.sk-text-14-2857-580 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-904 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-200 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-96 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-110 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-582 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #1c2c46 0%,
    #1c2c46 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-949 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-741 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-670 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #1c2c46 0%,
    #1c2c46 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-642 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-29-0323-942 {
  background-image: linear-gradient(
    transparent 29.0323%,
    #1c2c46 0%,
    #1c2c46 70.9677%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-29-0323-300 {
  background-image: linear-gradient(
    transparent 29.0323%,
    #1c2c46 0%,
    #1c2c46 70.9677%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-892 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-247 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-690 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-39 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-18 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-301 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-195 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text-0-0000-436 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 19.2308rpx;
  position: relative !important;
}
.sk-text-0-0000-839 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-14-2857-126 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-489 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
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
  background-color: transparent;
}
</style>
