/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    LhSwiper: typeof import('./components/LhSwiper.vue')['default']
  }
}
export {}
