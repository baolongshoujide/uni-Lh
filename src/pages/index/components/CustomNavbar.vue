<script setup lang="ts">
import { computed, ref } from 'vue'
import { useGoodsStore } from '@/stores/modules/goods'

const { safeAreaInsets } = uni.getSystemInfoSync()
const goodsStore = useGoodsStore()

const search = ref('关')
// 使用 category 页相同的本地搜索记录，两个页面可以看到同一份记录。
const searchHistoryKey = 'category-search-history'
const savedSearchHistory = uni.getStorageSync(searchHistoryKey)
const searchList = ref<string[]>(Array.isArray(savedSearchHistory) ? savedSearchHistory : [])
const isSearchFocused = ref(false)
let searchBlurTimer: ReturnType<typeof setTimeout> | undefined
// 按回车后收起键盘时，暂时保留多个匹配结果，避免失焦逻辑提前清空搜索词。
let preserveSearchAfterBlur = false
const searchResults = computed(() => goodsStore.searchGoods(search.value))

// 将本次关键词放到记录首位，并最多保留 10 条。
const addSearchHistory = (value: string) => {
  const keyword = value.trim()
  if (!keyword) return

  const history = [keyword, ...searchList.value.filter((item) => item !== keyword)].slice(0, 10)
  searchList.value = history
  uni.setStorageSync(searchHistoryKey, history)
}

const onSearchFocus = () => {
  if (searchBlurTimer) clearTimeout(searchBlurTimer)
  isSearchFocused.value = true
  // 第一次打开搜索框时加载商品；后续由 store 状态避免重复加载。
  goodsStore.loadAllGoods()
}

// 回车时，唯一匹配项直接打开详情；多个匹配项留在列表里供用户选择。
const finishSearch = () => {
  const results = goodsStore.searchGoods(search.value)
  addSearchHistory(search.value)

  if (goodsStore.isLoading && results.length === 0) {
    isSearchFocused.value = true
    preserveSearchAfterBlur = true
    uni.hideKeyboard()
    setTimeout(() => {
      preserveSearchAfterBlur = false
    }, 300)
  } else if (results.length === 1) {
    openSearchResult(results[0].id)
  } else if (results.length > 1) {
    isSearchFocused.value = true
    preserveSearchAfterBlur = true
    uni.hideKeyboard()
    setTimeout(() => {
      preserveSearchAfterBlur = false
    }, 300)
  } else {
    uni.hideKeyboard()
    search.value = ''
    isSearchFocused.value = false
  }
}

// 打开所选商品详情页，并把当前关键词记入搜索记录。
const openSearchResult = (id: string) => {
  addSearchHistory(search.value)
  isSearchFocused.value = false
  uni.hideKeyboard()
  uni.navigateTo({ url: `/pages/goods/goods?id=${id}` })
}

// 点击历史词后，用这个词重新筛选本地商品。
const selectSearchHistory = (keyword: string) => {
  if (searchBlurTimer) clearTimeout(searchBlurTimer)
  search.value = keyword
  isSearchFocused.value = true
  uni.hideKeyboard()
}

// 清空本地保存的搜索记录。
const clearSearchHistory = () => {
  searchList.value = []
  uni.removeStorageSync(searchHistoryKey)
}

const onSearchBlur = () => {
  // 多个结果时回车会隐藏键盘，但搜索词要保留以便继续选择商品。
  if (preserveSearchAfterBlur) {
    preserveSearchAfterBlur = false
    return
  }
  addSearchHistory(search.value)
  searchBlurTimer = setTimeout(() => {
    search.value = ''
    isSearchFocused.value = false
  }, 180)
}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/assets/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <view class="search-box">
        <text class="icon-search"></text>
        <input
          class="search-input"
          type="text"
          v-model="search"
          placeholder="搜索商品"
          placeholder-class="search-placeholder"
          confirm-type="search"
          @focus="onSearchFocus"
          @blur="onSearchBlur"
          @confirm="finishSearch"
        />
      </view>
      <view class="search-history" v-if="isSearchFocused">
        <view class="history-header">
          <text class="history-title">{{ search.trim() ? '搜索结果' : '搜索记录' }}</text>
          <text v-if="searchList.length" class="history-clear" @tap="clearSearchHistory">清空</text>
        </view>
        <!-- 输入关键词时显示本地匹配商品，点商品名称进入详情。 -->
        <view v-if="search.trim() && searchResults.length" class="history-items search-results">
          <text
            class="history-item search-result"
            v-for="item in searchResults"
            :key="item.id"
            @tap="openSearchResult(item.id)"
            >{{ item.name }}</text
          >
        </view>
        <!-- 输入框为空时显示历史搜索词。 -->
        <view v-else-if="!search.trim() && searchList.length" class="history-items">
          <text
            class="history-item"
            v-for="item in searchList"
            :key="item"
            @tap="selectSearchHistory(item)"
            >{{ item }}</text
          >
        </view>
        <view v-else class="history-empty">
          {{
            search.trim()
              ? goodsStore.isLoading
                ? '正在搜索商品…'
                : '没有找到相关商品'
              : '暂无搜索记录'
          }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  z-index: 1000;
  background-color: #080c18;
  border-bottom: 1rpx solid rgba(0, 184, 255, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;
    .logo-image {
      width: 300rpx;
      height: 80rpx;
      margin: -50rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
  .search {
    position: relative;
    z-index: 1000;
    margin: 16rpx 0 20rpx;
    padding: 0 30rpx;
    .search-box {
      display: flex;
      align-items: center;
      height: 72rpx;
      padding: 0 24rpx;
      border-radius: 36rpx;
      background-color: rgba(20, 30, 50, 0.75);
    }
    .icon-search {
      flex: none;
      margin-right: 14rpx;
      color: #96a8c2;
      font-size: 30rpx;
    }
    .search-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      color: #e8f2ff;
      font-size: 26rpx;
    }
  }
}
.search-history {
  position: absolute;
  top: 100%;
  left: 30rpx;
  right: 30rpx;
  padding: 22rpx 24rpx 24rpx;
  border-radius: 0 0 16rpx 16rpx;
  border: 1rpx solid rgba(0, 184, 255, 0.25);
  background-color: rgba(20, 30, 50, 0.96);
  box-shadow: 0 12rpx 24rpx rgba(0, 0, 0, 0.3);
  z-index: 1001;
}
.history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18rpx;
}
.history-title {
  color: #e8f2ff;
  font-size: 26rpx;
  font-weight: 600;
}
.history-clear {
  color: #00b8ff;
  font-size: 24rpx;
}
.history-items {
  display: flex;
  flex-wrap: wrap;
  gap: 14rpx;
}
.search-results {
  flex-direction: column;
  gap: 8rpx;
}
.history-item {
  max-width: 100%;
  padding: 10rpx 20rpx;
  overflow: hidden;
  border-radius: 24rpx;
  background-color: rgba(8, 12, 24, 0.75);
  color: #96a8c2;
  font-size: 24rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search-result {
  box-sizing: border-box;
  width: 100%;
  border-radius: 8rpx;
}
.history-empty {
  padding: 12rpx 0;
  color: #96a8c2;
  font-size: 24rpx;
}
.search-placeholder {
  color: #96a8c2;
  font-size: 26rpx;
}
</style>
