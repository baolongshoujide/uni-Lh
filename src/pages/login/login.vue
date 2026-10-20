<script setup lang="ts">
import { getLoginWxMinSimpleAPI } from '@/services/login'
import type { LoginResult } from '@/types/member'
import { useMemberStore } from '@/stores'

// 企业级登录（个人用户不开放）
const onGetPhoneNumber: UniHelper.ButtonOnGetphonenumber = () => {
  uni.showModal({
    title: '提示',
    content: '个人开发者无法开发手机号登录。\n请点击下方模拟登录试试吧~',
    showCancel: false,
  })
}
// 模拟接口
const onGetPhoneNumberSimple = async () => {
  const res = await getLoginWxMinSimpleAPI('13000000000')
  ToLogin(res.result)
}
// 登陆成功后的跳转功能
const ToLogin = (memberDetail: LoginResult) => {
  uni.showToast({
    icon: 'success',
    title: '登陆成功',
  })
  const memberStore = useMemberStore()
  memberStore.setProfile(memberDetail)
  setTimeout(() => {
    uni.switchTab({ url: '/pages/my/my' })
  }, 500)
}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="../../static/assets/images/login-background-dragon-hidden.jpg"></image>
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <!-- <input class="input" type="text" placeholder="请输入用户名/手机号码" /> -->
      <!-- <input class="input" type="text" password placeholder="请输入密码" /> -->
      <!-- <button class="button phone">登录</button> -->

      <!-- 小程序端授权登录 -->
      <!-- 需要正常使用时，在button后加上open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber"两个事件 -->
      <button class="button phone" @tap="onGetPhoneNumber">
        <text class="icon icon-phone"></text>
        手机号快捷登录
      </button>
      <view class="extra">
        <view class="caption">
          <text>其他登录方式</text>
        </view>
        <view class="options">
          <!-- 通用模拟登录 -->
          <button @tap="onGetPhoneNumberSimple">
            <text class="icon icon-phone">模拟快捷登录</text>
          </button>
        </view>
      </view>
      <view class="tips">登录/注册即视为你同意《服务条款》和《小兔鲜儿隐私协议》</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;
  image {
    height: 350rpx;
    margin-top: 15vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid rgba(0, 184, 255, 0.2);
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #00b8ff;
  }

  .extra {
    flex: 1;
    padding: 70rpx 70rpx 0;
    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid rgba(0, 184, 255, 0.2);
      font-size: 26rpx;
      color: #96a8c2;
      position: relative;
      text {
        transform: translate(-40%);
        background-color: rgba(20, 30, 50, 0.75);
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;
      button {
        padding: 0;
        background-color: transparent;
      }
    }

    .icon {
      font-size: 24rpx;
      color: #e8f2ff;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }
    .icon-weixin::before {
      border-color: #00b8ff;
      color: #00b8ff;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #96a8c2;
  text-align: center;
}
</style>
