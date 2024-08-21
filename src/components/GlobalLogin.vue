<template>
    <div class="login is-wrap">
        <div class="header is-logo">
        <img src="@/assets/logo.svg" alt="Logo">
      </div>
      <form @submit.prevent="login" class="login is-content">
        <div class="input is-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Your email" required />
        </div>
        <div class="input is-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Your password" required />
        </div>
        <button type="submit" class="button is-dark">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { signInWithEmailAndPassword } from 'firebase/auth'
  import { auth } from '@/firebase.js'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      router.push('/')
    } catch (error) {
      errorMessage.value = error.message
    }
  }
  </script>
  