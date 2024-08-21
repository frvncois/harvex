<template>
    <div class="sidebar is-left">
    </div>
    <div class="app is-content">
      <h2 class="section is-title">New Arrivals</h2>
      <ProductsListing :filter="activeFilter" :limit="4" />
    </div>
    <div class="sidebar is-right">
      <DashboardSidebar />
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import ProductsListing from '@/components/ProductsListing.vue'
    import DashboardSidebar from '@/components/DashboardSidebar.vue'
  </script>
  