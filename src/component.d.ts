/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import type LhGuess from './components/LhGuess.vue'
// 定义这个组件的类型
declare module 'vue' {
  export interface GlobalComponents {
    //
    LhSwiper: typeof import('./components/LhSwiper.vue')['default']
    LhGuess: typeof import('./components/LhGuess.vue')['default']
  }
}
export {}
// 定义组件实例化的类型，可以直接调用内部方法
export type LhGuessInstance = InstanceType<typeof LhGuess>
