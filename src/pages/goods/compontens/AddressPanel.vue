<script setup lang="ts">
import { getMemberAddressAPI } from '@/services/address'
import { useAddressStore } from '@/stores/modules/address'
import type { AddressItem } from '@/types/address'
import { ref, watch } from 'vue'

const emit = defineEmits<{
  (event: 'close'): void
}>()
const addressList = ref<AddressItem[]>([])
const getAddressList = async () => {
  const res = await getMemberAddressAPI()
  addressList.value = res.result
}

const addressStore = useAddressStore()
const addressChange = (item: AddressItem) => {
  addressStore.addressChange(item)
}

const query = defineProps<{
  refValue: number
}>()
watch(
  () => query.refValue,
  () => {
    getAddressList()
  },
)
getAddressList()
</script>

<template>
  <view class="address-panel">
    <!-- 关闭按钮 -->
    <text class="close icon-close" @tap="emit('close')"></text>
    <!-- 标题 -->
    <view class="title">配送至</view>
    <!-- 内容 -->
    <view class="content" @tap="emit('close')">
      <view @tap="addressChange(item)" class="item" v-for="item in addressList" :key="item.id">
        <view class="user">{{ item.receiver }} {{ item.contact }}</view>
        <view class="address">{{ item.fullLocation }}{{ item.address }}</view>
        <text
          class="icon"
          :class="{
            'icon-checked': addressStore.address?.id === item.id,
          }"
        ></text>
        <navigator
          class="edit"
          hover-class="none"
          @tap.stop="() => {}"
          :url="`/pagesMember/address-form/address-form?id=${item.id}`"
        >
          修改
        </navigator>
      </view>
    </view>
    <view class="footer">
      <view class="button primary">
        <navigator hover-class="none" url="/pagesMember/address-form/address-form">
          新建地址
        </navigator>
      </view>
      <view v-if="false" class="button primary">确定</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.address-panel {
  padding: 0 30rpx;
  border-radius: 10rpx 10rpx 0 0;
  position: relative;
  background-color: rgba(20, 30, 50, 0.75);
}

.title {
  line-height: 1;
  padding: 40rpx 0;
  text-align: center;
  font-size: 32rpx;
  font-weight: normal;
  border-bottom: 1rpx solid rgba(0, 184, 255, 0.2);
  color: #e8f2ff;
}

.close {
  position: absolute;
  right: 24rpx;
  top: 24rpx;
}

.content {
  min-height: 300rpx;
  max-height: 540rpx;
  overflow: auto;
  padding: 20rpx;
  .item {
    padding: 30rpx 110rpx 30rpx 60rpx;
    background-size: 40rpx;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png);
    position: relative;
  }
  .icon {
    color: #96a8c2;
    font-size: 40rpx;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
  }
  .icon-checked {
    color: #00b8ff;
  }
  .icon-ring {
    color: #e8f2ff;
  }
  .edit {
    position: absolute;
    top: 50%;
    right: 50rpx;
    transform: translateY(-50%);
    color: #00b8ff;
    font-size: 26rpx;
  }
  .user {
    font-size: 28rpx;
    color: #e8f2ff;
    font-weight: 500;
  }
  .address {
    font-size: 26rpx;
    color: #96a8c2;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 0 40rpx;
  font-size: 28rpx;
  color: #e8f2ff;

  .button {
    flex: 1;
    height: 72rpx;
    text-align: center;
    line-height: 72rpx;
    margin: 0 20rpx;
    color: #fff;
    border-radius: 72rpx;
  }

  .primary {
    color: #fff;
    background-color: #00b8ff;
  }

  .secondary {
    background-color: #00b8ff;
  }
}
</style>
