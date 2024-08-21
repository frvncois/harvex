<template>
  <div v-if="isAuthenticated" class="app is-auth">
    <Header />
    <div class="app is-main">
      <Nav />
      <router-view />
    </div>
  </div>
  <GlobalLogin v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase.js'
import Header from '@/components/GlobalHeader.vue'
import Nav from '@/components/GlobalNav.vue'
import GlobalLogin from '@/components/GlobalLogin.vue'

const isAuthenticated = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isAuthenticated.value = !!user
    if (isAuthenticated.value) {
      router.push('/') 
    }
  })
})
</script>
