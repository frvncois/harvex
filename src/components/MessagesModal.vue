<template>
    <div v-if="isOpen" class="modal is-wrap">
      <div class="modal is-content">
        <div class="box">
          <h3 class="title is-4">{{ getProductName(discussion.product_id) }}</h3>
          <div class="discussion is-wrap">
            <div v-for="(item, index) in discussion.discussion" :key="index" class="discussion is-item">
              <p><strong>{{ item.message }}:</strong> {{ item.reply }}</p>
              <p class="is-small">{{ formatDate(item.sent_on) }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    },
    discussion: {
      type: Object,
      default: () => ({})
    },
    products: {
      type: Array,
      default: () => []
    }
  })
  
  const emit = defineEmits(['close'])
  
  const closeModal = () => {
    emit('close')
  }
  
  const getProductName = (productId) => {
    const product = props.products.find(p => p.id === productId);
    return product ? product.name : 'Unknown Product';
  }
  
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  </script>