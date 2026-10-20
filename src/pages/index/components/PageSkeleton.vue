<!--
此文件为开发者工具生成，生成时间: 2026/10/21 00:04:29
使用方法：
在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/CustomNavbar" class="data-v-83a5a03c data-v-83a5a03c">
      <view
        class="navbar CustomNavbar--navbar data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2"
        style="padding-top: 47px"
      >
        <view class="logo CustomNavbar--logo data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2">
          <image
            class="logo-image CustomNavbar--logo-image data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-image"
          ></image>
          <text
            class="logo-text CustomNavbar--logo-text data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-transparent sk-text-3-5714-322 sk-text"
            >新鲜 · 亲民 · 快捷</text
          >
        </view>
        <view class="search CustomNavbar--search data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2">
          <view
            class="search-box CustomNavbar--search-box data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2"
          >
            <text
              class="icon-search CustomNavbar--icon-search data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-pseudo sk-pseudo-circle"
            ></text>
            <view
              class="search-input CustomNavbar--search-input data-v-ff0d84a2 CustomNavbar--data-v-ff0d84a2 sk-image"
              placeholder="搜索商品"
              placeholder-class="search-placeholder"
              type="text"
              value="true"
              selection-start="-1"
              selection-end="-1"
              cursor="-1"
            ></view>
          </view>
        </view>
      </view>
    </view>
    <scroll-view
      :refresher-enabled="true"
      :scroll-y="true"
      class="data-v-83a5a03c data-v-83a5a03c"
      style="flex: 1"
    >
      <view is="components/LhSwiper" class="data-v-83a5a03c data-v-83a5a03c">
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
      <view is="pages/index/components/CategoryPanel" class="data-v-83a5a03c data-v-83a5a03c">
        <view
          class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
        >
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-159 sk-text"
              style="background-position-x: 50%"
              >居家</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-296 sk-text"
              style="background-position-x: 50%"
              >锦鲤</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-188 sk-text"
              style="background-position-x: 50%"
              >服饰</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-932 sk-text"
              style="background-position-x: 50%"
              >母婴</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-692 sk-text"
              style="background-position-x: 50%"
              >个护</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-53 sk-text"
              style="background-position-x: 50%"
              >严选</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-120 sk-text"
              style="background-position-x: 50%"
              >数码</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-747 sk-text"
              style="background-position-x: 50%"
              >运动</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-478 sk-text"
              style="background-position-x: 50%"
              >杂项</text
            >
          </view>
          <view
            class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <image
              class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
            ></image>
            <text
              class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-22 sk-text"
              style="background-position-x: 50%"
              >品牌</text
            >
          </view>
        </view>
      </view>
      <view is="pages/index/components/HotPanel" class="data-v-83a5a03c data-v-83a5a03c">
        <view
          class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a"
        >
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-996 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-922 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-694 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-764 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-89 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-397 sk-text"
                >精心优选</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
            <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
              <text
                class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-766 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-29 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator
              class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              hover-class="none"
            >
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
              <image
                class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                mode="aspectFit"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
      <view is="components/LhGuess" class="r r data-v-83a5a03c data-v-83a5a03c">
        <view class="caption LhGuess--caption data-v-a4651e40 LhGuess--data-v-a4651e40">
          <text
            class="text LhGuess--text data-v-a4651e40 LhGuess--data-v-a4651e40 sk-transparent sk-text-0-0000-680 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2026/10/21 00:04:29

在 D:\VS  code\uniapp\heima-shop2\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-322 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #1c2c46 0%,
    #1c2c46 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-159 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-296 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-188 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-932 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-692 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-53 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-120 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-747 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-478 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-22 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-996 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-922 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-694 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-764 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-89 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-397 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-766 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-29 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #1c2c46 0%,
    #1c2c46 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-680 {
  background-image: linear-gradient(
    transparent 0%,
    #1c2c46 0%,
    #1c2c46 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
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
