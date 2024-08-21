<template>
    <h2 class="section is-title">New Messages</h2>
    <MessagesListing :limit="2" />
</template>


<script setup>
import MessagesListing from '@/components/MessagesListing.vue'
</script>