<template>
    <div class="listing is-grid">
      <div
        v-for="(product, index) in limitedProducts"
        :key="product.id"
        class="listing is-item"
      >
        <div class="listing is-cover">
          <img :src="product.cover" alt="Product Cover" class="listing is-thumbnail" />
        </div>
        <div class="listing is-header">
          <div class="listing is-title">
            <h3>{{ product.name }}</h3>
            <span class="tag is-category">{{ getCategoryName(product.category_id) }}</span>
          </div>
        </div>
        <div class="listing is-bottom">
          <div class="listing is-description">
            <p>{{ getTruncatedDescription(product.short_description) }}</p>
          </div>
          <div class="listing is-tag">
            <span class="tag is-details">THC — {{ product.thc_percentage }}%</span>
            <span class="tag is-details">CBD — {{ product.cbd_percentage }}%</span>
          </div>
          <router-link :to="`/product/${product.id}`" class="button is-light">
            Learn more
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import productsData from '@/database.json'
  
  const props = defineProps({
    filter: {
      type: String,
      default: 'populaire'
    },
    limit: {
      type: Number,
      default: null 
    }
  })
  
  const products = ref(productsData.products)
  
  const filteredProducts = computed(() => {
    if (props.filter === 'populaire') {
      return products.value 
    } else if (props.filter === 'recent') {
      return products.value 
    } else if (props.filter === 'favoris') {
      return products.value 
    } else {
      return products.value
    }
  })
  
  const limitedProducts = computed(() => {
    if (props.limit) {
      return filteredProducts.value.slice(0, props.limit)
    }
    return filteredProducts.value
  })
  
  const getCategoryName = (categoryId) => {
    const category = productsData.categories.find(c => c.id === categoryId)
    return category ? category.name : 'Unknown'
  }
  
  const getTruncatedDescription = (description) => {
    if (!description) {
      return ''
    }
    const words = description.split(' ')
    return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : description
  }
  </script>
  