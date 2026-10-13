<template>
	<view class="app">
		<view class="header">
			<text class="subtitle">请选择演示版本</text>
		</view>
		
		<view class="platform-info">
			<text class="platform-title">跨平台支持</text>
			<text class="platform-desc">支持编译到 安卓、iOS、鸿蒙App、鸿蒙元服务、小程序、Web</text>
		</view>
		
		<view class="card-container">
			<view class="demo-card" @click="pageTo('index-setup')">
				<view class="card-content">
					<text class="card-title">静态数据 - Vue3 组合式版</text>
					<text class="card-desc">setup 组合式，不依赖	uniCloud</text>
				</view>
				<view class="card-arrow"></view>
			</view>
			
			<view class="demo-card" @click="pageTo('index-static')">
				<view class="card-content">
					<text class="card-title">静态数据 - 选项式</text>
					<text class="card-desc">兼容Vue2、Vue3，不依赖	uniCloud</text>
				</view>
				<view class="card-arrow"></view>
			</view>
			
			<view class="demo-card" @click="pageTo('index-dynamic')">
				<view class="card-content">
					<text class="card-title">动态数据 - uniCloud</text>
					<text class="card-desc">依赖 uniCloud 云服务</text>
				</view>
				<view class="card-arrow"></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	/* eslint-disable */
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			pageTo(url){
				uni.navigateTo({ url })
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f8f9fa;
	}
	.app {
		padding: 15px;
		font-size: 14px;
	}
	
	.header {
		text-align: center;
		margin-bottom: 20px;
		
		.title {
			display: block;
			font-size: 20px;
			font-weight: 600;
			color: #333;
			margin-bottom: 4px;
		}
		
		.subtitle {
			display: block;
			font-size: 12px;
			color: #666;
		}
	}
	
	.card-container {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	.demo-card {
		background: #fff;
		border-radius: 8px;
		padding: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		cursor: pointer;
		
		&:active {
			transform: scale(0.98);
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
		}
	}
	
	.card-content {
		flex: 1;
		
		.card-title {
			display: block;
			font-size: 15px;
			font-weight: 500;
			color: #333;
			margin-bottom: 2px;
		}
		
		.card-desc {
			display: block;
			font-size: 11px;
			color: #999;
		}
	}
	
	.card-arrow {
		width: 6px;
		height: 6px;
		border-right: 1px solid #ccc;
		border-top: 1px solid #ccc;
		transform: rotate(45deg);
		flex-shrink: 0;
	}
	
	.platform-info {
		background: #f8f9fa;
		border-radius: 8px;
		padding: 12px 16px;
		margin-top: 8px;
		margin-bottom: 15px;
		border: 1px solid #e9ecef;
		
		.platform-title {
			display: block;
			font-size: 13px;
			font-weight: 500;
			color: #495057;
			margin-bottom: 4px;
		}
		
		.platform-desc {
			display: block;
			font-size: 11px;
			color: #6c757d;
			line-height: 1.4;
		}
	}
</style>
