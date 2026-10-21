<script setup lang="ts">
import { deleteMemberAddressIdAPI, getMemberAddressAPI } from '@/services/address'
import { useAddressStore } from '@/stores/modules/address'
import type { AddressItem } from '@/types/address'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

const addressList = ref<AddressItem[]>([])
const isInitialLoading = ref(false)
let hasLoadedAddresses = false
const getMemberAdress = async () => {
  if (!hasLoadedAddresses) isInitialLoading.value = true
  try {
    const res = await getMemberAddressAPI()
    addressList.value = res.result
  } finally {
    hasLoadedAddresses = true
    isInitialLoading.value = false
  }
}

const OnDelete = async (id: string) => {
  // const res = await deleteMemberAddressIdAPI(id)

  uni.showModal({
    content: '确认删除',
    showCancel: true,
    success: async (res) => {
      if (res.confirm) {
        await deleteMemberAddressIdAPI(id)
        uni.showToast({
          icon: 'none',
          title: '删除成功',
        })
        getMemberAdress()
      }
    },
  })
}

const OnAddressChange = (item: AddressItem) => {
  const addressStore = useAddressStore()
  addressStore.addressChange(item)
  uni.navigateBack()
}
onShow(() => {
  getMemberAdress().catch(() => undefined)
})
</script>

<template>
  <view class="viewport">
    <!-- 地址列表 -->
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="addressList.length" class="address">
        <uni-swipe-action class="address-list">
          <!-- 收货地址项 -->
          <uni-swipe-action-item class="item" v-for="item in addressList" :key="item.id">
            <view class="item-content" @tap="OnAddressChange(item)">
              <view class="user">
                {{ item.receiver }}
                <text class="contact">{{ item.contact }}</text>
                <text v-if="item.isDefault" class="badge">默认</text>
              </view>
              <view class="locate">{{ item.fullLocation }} {{ item.address }}</view>
              <navigator
                class="edit"
                hover-class="none"
                @tap.stop="() => {}"
                :url="`/pagesMember/address-form/address-form?id=${item.id}`"
              >
                修改
              </navigator>
            </view>
            <template #right>
              <button @tap="OnDelete(item.id)" class="delete-button">删除</button>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <!-- 添加按钮 -->
    <view class="add-btn">
      <navigator hover-class="none" url="/pagesMember/address-form/address-form">
        新建地址
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
:global(page) {
  height: 100%;
  overflow: hidden;
}

/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  border-radius: 0;
  padding: 0;
  background-color: #ff3344;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #080c18;

  .scroll-view {
    padding-top: 20rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background-color: rgba(20, 30, 50, 0.75);

  .item-content {
    line-height: 1;
    padding: 40rpx 10rpx 38rpx;
    border-bottom: 1rpx solid rgba(0, 184, 255, 0.2);
    position: relative;

    .edit {
      position: absolute;
      top: 36rpx;
      right: 30rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #96a8c2;
      line-height: 1;
    }
  }

  .item:last-child .item-content {
    border: none;
  }

  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #e8f2ff;

    .contact {
      color: #96a8c2;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #00b8ff;
      border-radius: 6rpx;
      border: 1rpx solid #00b8ff;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #e8f2ff;
  }
}

.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #96a8c2;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #00b8ff;
}
</style>
