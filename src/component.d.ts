/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import type LhGuess from './components/LhGuess.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //
    LhSwiper: typeof import('./components/LhSwiper.vue')['default']
    LhGuess: typeof import('./components/LhGuess.vue')['default']
  }
}
export {}

export type LhGuessInstance = InstanceType<typeof LhGuess>
