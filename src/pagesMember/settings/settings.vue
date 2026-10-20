<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
const OnLogout = () => {
  uni.showModal({
    title: '确认退出',
    confirmText: '是的',
    content: '是否退出登录',
    success: (res) => {
      if (res.confirm) {
        memberStore.clearProfile()
        uni.navigateBack()
      }
    },
  })
}
</script>

<template>
  <view class="viewport">
    <!-- 列表1 -->
    <view class="list" v-if="memberStore.profile">
      <navigator url="/pagesMember/address/address" hover-class="none" class="item arrow">
        我的收货地址
      </navigator>
    </view>
    <!-- 列表2 -->
    <view class="list">
      <button hover-class="none" class="item arrow" open-type="openSetting">授权管理</button>
      <button hover-class="none" class="item arrow" open-type="feedback">问题反馈</button>
      <button hover-class="none" class="item arrow" open-type="contact">联系我们</button>
    </view>
    <!-- 列表3 -->
    <view class="list">
      <navigator hover-class="none" class="item arrow" url=" ">关于小兔鲜儿</navigator>
    </view>
    <!-- 操作按钮 -->
    <view class="action" v-if="memberStore.profile">
      <view @tap="OnLogout" class="button">退出登录</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
:global(page) {
  background-color: #080c18;
}

.viewport {
  padding: 20rpx;
}

/* 列表 */
.list {
  padding: 0 20rpx;
  background-color: rgba(20, 30, 50, 0.75);
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  .item {
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #e8f2ff;
    border-top: 1rpx solid rgba(0, 184, 255, 0.2);
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: rgba(20, 30, 50, 0.75);
    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }
    &:first-child {
      border: none;
    }
    &::after {
      right: 5rpx;
    }
  }
  .arrow::after {
    content: '\e6c2';
    position: absolute;
    top: 50%;
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 操作按钮 */
.action {
  text-align: center;
  line-height: 90rpx;
  margin-top: 40rpx;
  font-size: 32rpx;
  color: #e8f2ff;
  .button {
    background-color: rgba(20, 30, 50, 0.75);
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
}
</style>
