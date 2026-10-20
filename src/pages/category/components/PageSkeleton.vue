<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:16:26
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport data-v-4046d630 data-v-4046d630">
      <view class="search search data-v-4046d630 data-v-4046d630">
        <view class="search-box search-box data-v-4046d630 data-v-4046d630">
          <text class="icon-search data-v-4046d630 sk-pseudo sk-pseudo-circle"></text>
          <view
            class="search-input data-v-4046d630 sk-image"
            placeholder="女靴"
            placeholder-class="search-placeholder"
            type="text"
            value="true"
          ></view>
        </view>
      </view>
      <view class="categories categories data-v-4046d630 data-v-4046d630">
        <scroll-view :scroll-y="true" class="primary primary data-v-4046d630 data-v-4046d630">
          <view class="item data-v-4046d630 active sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-962 sk-text"
              >居家</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-623 sk-text"
              >美食</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-669 sk-text"
              >服饰</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-737 sk-text"
              >母婴</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-52 sk-text">个护</text>
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-407 sk-text"
              >严选</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-896 sk-text"
              >数码</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-665 sk-text"
              >运动</text
            >
          </view>
          <view class="item data-v-4046d630 sk-pseudo sk-pseudo-circle">
            <text class="name data-v-4046d630 sk-transparent sk-text-14-2857-310 sk-text"
              >杂项</text
            >
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary data-v-4046d630 data-v-4046d630">
          <view is="components/LhSwiper" class="banner banner data-v-4046d630 data-v-4046d630">
            <view class="carousel LhSwiper--carousel data-v-ff4df5ed LhSwiper--data-v-ff4df5ed">
              <swiper
                :circular="true"
                class="data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"
                :interval="3000"
                :current="0"
                :autoplay="false"
              >
                <swiper-item
                  class="data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator
                    class="navigator LhSwiper--navigator data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"
                    hover-class="none"
                  >
                    <image
                      class="image LhSwiper--image data-v-ff4df5ed LhSwiper--data-v-ff4df5ed sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator LhSwiper--indicator data-v-ff4df5ed LhSwiper--data-v-ff4df5ed">
                <text
                  class="dot LhSwiper--dot data-v-ff4df5ed LhSwiper--data-v-ff4df5ed active LhSwiper--active"
                ></text>
                <text class="dot LhSwiper--dot data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"></text>
                <text class="dot LhSwiper--dot data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"></text>
                <text class="dot LhSwiper--dot data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"></text>
                <text class="dot LhSwiper--dot data-v-ff4df5ed LhSwiper--data-v-ff4df5ed"></text>
              </view>
            </view>
          </view>
          <view class="panel panel data-v-4046d630 data-v-4046d630">
            <view class="title title data-v-4046d630 data-v-4046d630">
              <text class="name data-v-4046d630 sk-transparent sk-text-27-4194-894 sk-text"
                >居家生活用品</text
              >
              <navigator
                class="more data-v-4046d630 sk-transparent sk-text-30-6452-368 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section data-v-4046d630 data-v-4046d630">
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-104 sk-text"
                  >钻石陶瓷涂层多用锅18cm 小奶锅</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-995 sk-text"
                    >149.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-22 sk-text"
                  >极光限定 珠光蓝珐琅锅</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-629 sk-text"
                    >199.00</text
                  >
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel data-v-4046d630 data-v-4046d630">
            <view class="title title data-v-4046d630 data-v-4046d630">
              <text class="name data-v-4046d630 sk-transparent sk-text-27-4194-235 sk-text"
                >收纳</text
              >
              <navigator
                class="more data-v-4046d630 sk-transparent sk-text-30-6452-811 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section data-v-4046d630 data-v-4046d630">
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-513 sk-text"
                  >给衣柜减减肥，真空防潮压缩袋</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-319 sk-text"
                    >79.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-788 sk-text"
                  >爆款明星好物，抽屉式透明储物柜</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-376 sk-text"
                    >129.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-609 sk-text"
                  >衣柜省空间神器，棉麻涤·收纳挂袋</view
                >
                <view class="price price data-v-4046d630 data-v-4046d630">
                  <text class="symbol data-v-4046d630 sk-transparent sk-opacity">¥</text>
                  <text class="number data-v-4046d630 sk-transparent sk-text-14-2857-680 sk-text"
                    >55.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-553 sk-text"
                  >换季好帮手，大容量防尘衣物收纳袋</view
                >
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-592 sk-text"
                  >可水洗的布艺收纳盒</view
                >
              </navigator>
              <navigator class="goods goods data-v-4046d630 data-v-4046d630" hover-class="none">
                <image class="image data-v-4046d630 sk-image"></image>
                <view
                  class="name ellipsis data-v-4046d630 sk-transparent sk-text-14-2857-100 sk-text"
                  >开发员自留款，带滚轮双层脏衣篓</view
                >
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:16:26

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-962 {
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
.sk-text-14-2857-623 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-669 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-737 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-52 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-407 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-896 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-665 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
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
.sk-text-27-4194-894 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-30-6452-368 {
  background-image: linear-gradient(
    transparent 30.6452%,
    #1c2c46 0%,
    #1c2c46 69.3548%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-104 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-995 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-22 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-629 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-27-4194-235 {
  background-image: linear-gradient(
    transparent 27.4194%,
    #1c2c46 0%,
    #1c2c46 72.5806%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-30-6452-811 {
  background-image: linear-gradient(
    transparent 30.6452%,
    #1c2c46 0%,
    #1c2c46 69.3548%,
    transparent 0%
  ) !important;
  background-size: 100% 59.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-513 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-319 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-788 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-376 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-609 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-680 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-553 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-592 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
  position: relative !important;
}
.sk-text-14-2857-100 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.6154rpx;
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
