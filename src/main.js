import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const app = createApp(App)

app.use(router)

app.mount('#app')
