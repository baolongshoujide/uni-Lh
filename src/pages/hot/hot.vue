<script setup lang="ts">
import { getHotRecommendAPI } from '@/services/hot'
import type { HotResult } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const query = defineProps<{
  type: string
}>()
// 动态控制导航名
const currhotMap = hotMap.find((item) => item.type === query.type)
uni.setNavigationBarTitle({ title: currhotMap!.title })

// 获取数据
const hotList = ref<HotResult>()
const getHotRecommendList = async () => {
  const res = await getHotRecommendAPI(currhotMap!.url, {
    subType: '',
    pageSize: 10,
    page: 1,
  })
  console.log(res)
  hotList.value = res.result
}

const isFinish = ref(false)
const scrolltolower = async () => {
  // 当前选中的选项卡
  const OnTab = hotList.value?.subTypes[activeIndex.value]
  if (OnTab!.goodsItems!.page < OnTab!.goodsItems!.pages) {
    OnTab!.goodsItems.page++
  } else {
    isFinish.value = true
    return uni.showToast({
      icon: 'none',
      title: '已经到底了~',
      duration: 2000,
    })
  }

  console.log(OnTab)
  const res = await getHotRecommendAPI(currhotMap!.url, {
    subType: OnTab!.id,
    pageSize: OnTab?.goodsItems.pageSize,
    page: OnTab?.goodsItems.page,
  })
  console.log(res)
  // 接收获取过来的第二页的数据
  const newList = res.result.subTypes[activeIndex.value].goodsItems.items
  // 将第二页数据加入到原数据中
  OnTab?.goodsItems.items.push(...newList)
}
const activeIndex = ref(0)
onLoad(() => {
  getHotRecommendList()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="hot-cover">
      <image mode="aspectFill" :src="hotList?.bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        v-for="(item, index) in hotList?.subTypes"
        :key="item.id"
        >{{ item.title }}</text
      >
    </view>

    <!-- 推荐列表 -->
    <scroll-view
      v-for="(item, index) in hotList?.subTypes"
      :key="item.id"
      v-show="index === activeIndex"
      @scrolltolower="scrolltolower"
      scroll-y
      class="scroll-view"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ isFinish ? '已经到底了~' : '正在加载……' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
:global(page) {
  height: 100%;
  background-color: #080c18;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.hot-cover {
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  image {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(0, 184, 255, 0.12);
  color: #e8f2ff;
  background-color: rgba(20, 30, 50, 0.75);
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #00b8ff;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: rgba(20, 30, 50, 0.75);
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #ff3344;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #96a8c2;
  padding: 20rpx 0 50rpx;
}
</style>
