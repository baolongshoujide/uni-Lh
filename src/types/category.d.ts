import type { GoodsItem } from './global'

/** 一级分类项 */
export type CategoryTopItem = {
  /** 二级分类集合[ 二级分类项 ] */
  children: CategoryChildItem[]
  /** 一级分类id */
  id: string
  /** 一级分类图片集[ 一级分类图片项 ] */
  imageBanners: string[]
  /** 一级分类名称 */
  name: string
  /** 一级分类图片 */
  picture: string
}

/** 二级分类项 */
export type CategoryChildItem = {
  /** 商品集合[ 商品项 ] */
  goods: GoodsItem[]
  /** 二级分类id */
  id: string
  /** 二级分类名称 */
  name: string
  /** 二级分类图片 */
  picture: string
}

export interface EmptyObject {
  /**
   * 联想词Id集合
   */
  associatedIds?: string[]
  /**
   * 品牌id
   */
  brandId?: string
  /**
   * 分类id
   */
  categoryId?: string
  /**
   * 所输入的关键词
   */
  keyword?: string
  /**
   * 只显示特惠
   */
  onlyDiscount?: boolean
  /**
   * 页码
   */
  page?: number
  /**
   * 页尺寸
   */
  pageSize?: number
  /**
   * 排序字段，取值范围：[publishTime,orderNum,price,evaluateNum]
   */
  sortField?: string
  /**
   * 排序规则，asc为正序，desc为倒序，默认为desc
   */
  sortMethod?: string
  [property: string]: any
}
