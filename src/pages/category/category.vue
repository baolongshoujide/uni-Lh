<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import { computed, ref } from 'vue'
import type { BannerItem } from '@/types/home'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { getCategoryTopAPI } from '@/services/category'
import type { CategoryTopItem } from '@/types/category'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGoodsStore } from '@/stores/modules/goods'

const goodsStore = useGoodsStore()
const search = ref('')
// 和主页共用搜索记录。
const searchHistoryKey = 'category-search-history'
const savedSearchHistory = uni.getStorageSync(searchHistoryKey)
const searchList = ref<string[]>(Array.isArray(savedSearchHistory) ? savedSearchHistory : [])
const isSearchFocused = ref(false)
let searchBlurTimer: ReturnType<typeof setTimeout> | undefined
let preserveSearchAfterBlur = false
const searchResults = computed(() => goodsStore.searchGoods(search.value))

// 保存关键词到本地历史记录，最多保留 10 条。
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
  // 从商品 store 加载商品，供当前搜索框本地匹配。
  goodsStore.loadAllGoods()
}

// 唯一匹配项回车直接打开；多个匹配项保留列表供选择。
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

// 点击匹配商品后打开它的详情页。
const openSearchResult = (id: string) => {
  addSearchHistory(search.value)
  isSearchFocused.value = false
  uni.hideKeyboard()
  uni.navigateTo({ url: `/pages/goods/goods?id=${id}` })
}

const selectSearchHistory = (keyword: string) => {
  if (searchBlurTimer) clearTimeout(searchBlurTimer)
  search.value = keyword
  isSearchFocused.value = true
  uni.hideKeyboard()
}

// 清除本地搜索记录。
const clearSearchHistory = () => {
  searchList.value = []
  uni.removeStorageSync(searchHistoryKey)
}

const onSearchBlur = () => {
  // 回车隐藏键盘后，如果有多个结果，暂时保留关键词和结果面板。
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

const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const res = await getHomeBannerAPI(2)
  bannerList.value = res.result
}

const categoryTopList = ref<CategoryTopItem[]>([])
const activeIndex = ref(0)
const selectedCategoryKey = 'index-selected-category-name'

const applySelectedCategory = () => {
  const selectedName = uni.getStorageSync(selectedCategoryKey) as string
  if (!selectedName || categoryTopList.value.length === 0) return

  const normalizedName = selectedName.replace(/\s+/g, '')
  let selectedIndex = categoryTopList.value.findIndex(
    (item) => item.name.replace(/\s+/g, '') === normalizedName,
  )
  if (selectedIndex < 0) {
    selectedIndex = categoryTopList.value.findIndex((item) => {
      const categoryName = item.name.replace(/\s+/g, '')
      return categoryName.includes(normalizedName) || normalizedName.includes(categoryName)
    })
  }
  if (selectedIndex >= 0) activeIndex.value = selectedIndex
  uni.removeStorageSync(selectedCategoryKey)
}

const getCategoryTopList = async () => {
  const res = await getCategoryTopAPI()
  categoryTopList.value = res.result
  applySelectedCategory()
}

const isPageSkeleton = ref(true)

onLoad(async () => {
  try {
    await Promise.allSettled([getBannerList(), getCategoryTopList()])
  } finally {
    isPageSkeleton.value = false
  }
})

onShow(() => {
  applySelectedCategory()
})
</script>

<template>
  <PageSkeleton v-if="isPageSkeleton"></PageSkeleton>
  <view class="viewport" v-else>
    <!-- 搜索框 -->
    <view class="search">
      <view class="search-box">
        <text class="icon-search"></text>
        <input
          class="search-input"
          type="text"
          v-model="search"
          placeholder="女靴"
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
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          v-for="(item, index) in categoryTopList"
          :key="item.id"
          class="item"
          :class="{ active: index === activeIndex }"
          @tap="activeIndex = index"
        >
          <text class="name"> {{ item.name }} </text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 焦点图 -->
        <LhSwiper class="banner" :list="bannerList" />
        <!-- 内容区域 -->
        <view class="panel" v-for="item in categoryTopList[activeIndex]?.children" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item?.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/goods/goods?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './components/category.scss';
</style>
