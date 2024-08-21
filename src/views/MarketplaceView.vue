<template>
    <div class="sidebar is-left">
      <div class="sidebar is-items">
        <div class="sidebar is-items">
          <button
            class="sidebar is-nav"
            :class="{ 'is-active': activeFilter === 'populaire' }"
            @click="setFilter('populaire')"
          >
            Populaire
          </button>
          <button
            class="sidebar is-nav"
            :class="{ 'is-active': activeFilter === 'recent' }"
            @click="setFilter('recent')"
          >
            Récent
          </button>
          <button
            class="sidebar is-nav"
            :class="{ 'is-active': activeFilter === 'favoris' }"
            @click="setFilter('favoris')"
          >
            Favoris
          </button>
        </div>
      </div>
    </div>
    <div class="app is-content">
      <ProductsListing :filter="activeFilter" />
    </div>
    <div class="sidebar is-right">
      <ProductsFilters />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ProductsListing from '@/components/ProductsListing.vue'
  import ProductsFilters from '@/components/ProductsFilters.vue'
  
  const activeFilter = ref('populaire')
  
  const setFilter = (filter) => {
    activeFilter.value = filter
  }
  </script>
  