<template>
  <div class="listing is-list">
    <div v-for="(message, index) in limitedMessages" :key="message.id" class="listing is-item">
      <div class="listing is-header">
        <div class="listing is-title">
          <h3>Request for {{ getProductName(message.product_id) }}</h3>
        </div>
      </div>
      <div class="listing is-bottom">
        <div class="listing is-description">
          <p>{{ getTruncatedDiscussion(message.discussion) }}</p>
        </div>
        <button @click="openModal(message)" class="button is-dark">
          View Discussion
        </button>
      </div>
    </div>
    <MessagesModal
      :isOpen="isModalOpen"
      :discussion="currentDiscussion"
      :products="products"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import messagesData from '@/database.json'
import MessagesModal from '@/components/MessagesModal.vue'

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const messages = ref(messagesData.messages)
const products = ref(messagesData.products)
const isModalOpen = ref(false)
const currentDiscussion = ref({})

const limitedMessages = computed(() => {
  if (props.limit) {
    return messages.value.slice(-props.limit).reverse()
  }
  return messages.value
})

const openModal = (message) => {
  currentDiscussion.value = message
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const getProductName = (productId) => {
  const product = products.value.find(p => p.id === productId)
  return product ? product.name : 'Unknown Product'
}

const getTruncatedDiscussion = (discussion) => {
  if (!discussion || discussion.length === 0) {
    return 'No discussion available'
  }
  const latestReply = discussion[discussion.length - 1].reply
  const words = latestReply.split(' ')
  return words.length > 25 ? words.slice(0, 25).join(' ') + '...' : latestReply
}
</script>
