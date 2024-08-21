<template>
    <div class="product is-wrap">
      <div class="product is-content">
        <div class="product is-title">
          <h1>{{ product.name }}</h1>
        </div>
        <div class="product is-details">
          <span class="tag is-category">
            {{ categoryName }}
          </span>
          <span class="tag is-details">THC — {{ product.thc_percentage }}%</span>
          <span class="tag is-details">CBD — {{ product.cbd_percentage }}%</span>
          <span class="tag is-details">TERPENES — {{ product.terpenes_percentage }}%</span>
        </div>
        <div class="product is-about">
          <p class="is-big">{{ product.short_description }}</p>
          <p>{{ product.long_description }}</p>
        </div>
        <div class="product is-specs">
          <div class="specs is-wrap">
            <div class="specs is-item">
              <span class="specs is-title">Certification</span>
              <span class="specs is-value">{{ product.certification}}</span>
            </div>
            <div class="specs is-item">
              <span class="specs is-title">Aromas</span>
              <span class="specs is-value">{{ splitValues(product.aromas) }}</span>
            </div>
            <div class="specs is-item">
              <span class="specs is-title">Terpenes</span>
              <span class="specs is-value">{{ splitValues(product.highest_terpenes) }}</span>
            </div>
          </div>
        </div>
        <form class="is-wrap" @submit.prevent="sendRequest">
          <h2>Request</h2>
          <div v-for="input in inputs" :key="input.id" class="input is-wrap">
            <input
              :id="input.id"
              type="number"
              v-model="input.value"
              @input="input.updateDisplay"
              :placeholder="input.placeholder"
            />
            <span v-if="input.value">{{ input.formattedValue }}</span>
          </div>
          <button class="button is-dark" type="submit">Send Request</button>
        </form>
      </div>
  
      <div class="gallery is-wrap">
        <div class="product is-images">
          <div class="product is-cover">
            <img :src="currentCoverImage" class="image is-cover" />
          </div>
          <div class="product is-gallery">
            <img
              v-for="(image, index) in testImages"
              :key="index"
              :src="image"
              class="image is-thumbnail"
              @click="updateCoverImage(image)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import productsData from '@/database.json'
  
  const route = useRoute();
  const product = ref({});
  const categoryName = ref('');
  const currentCoverImage = ref('');
  const testImages = ref([]); 

  onMounted(() => {
    const productId = route.params.id;
    product.value = productsData.products.find(p => p.id == productId) || {};
    const category = productsData.categories.find(c => c.id === product.value.category_id);
    categoryName.value = category ? category.name : 'Unknown';
  
    currentCoverImage.value = product.value.cover;
  });
  
  const splitValues = (value) => {
    return value ? value.split(', ').join(', ') : '';
  };
  
  const updateCoverImage = (image) => {
    currentCoverImage.value = image;
  };
  
  const inputs = ref([
    { id: 'input1', value: '', placeholder: 'Quantity', formattedValue: '', updateDisplay() { this.formattedValue = `${this.value} units`; } },
    { id: 'input2', value: '', placeholder: 'Price', formattedValue: '', updateDisplay() { this.formattedValue = `$${this.value}`; } },
  ]);
  
  const sendRequest = () => {
    console.log('Request sent', inputs.value);
  };
  </script>
  