<template>
  <div class="sidebar is-left">
    <div class="sidebar is-items">
      <div class="sidebar is-items">
        <button
          class="sidebar is-nav"
          :class="{ 'is-active': activeView === 'listings' }"
          @click="setView('listings')"
        >
          My Listings
        </button>
        <button
          class="sidebar is-nav"
          :class="{ 'is-active': activeView === 'add' }"
          @click="setView('add')"
        >
          Add Listing
        </button>
      </div>
    </div>
  </div>
  <div class="app is-content">
    <ProductsListing v-if="activeView === 'listings'" :filter="activeFilter" />
    <SubmitForm v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SubmitForm from '@/components/SubmitForm.vue'
import ProductsListing from '@/components/ProductsListing.vue'

const activeView = ref('listings')
const activeFilter = ref('populaire')

const setView = (view) => {
  activeView.value = view
}
</script>
