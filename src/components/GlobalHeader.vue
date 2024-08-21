<template>
    <div class="app is-header">
        <div class="header is-logo">
            <img src="@/assets/logo.svg" alt="Logo">
        </div>
        <div class="header is-title">
            <h1>{{ pageTitle }}</h1>
        </div>
        <div class="header is-user">
            <div class="user is-wrap">
                Current User
                <svg id="user" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path id="_4" data-name="4" d="M0,0H24V24H0Z" fill="none" />
                    <circle id="_3" data-name="3" cx="9" cy="9" r="9" transform="translate(3 3)" fill="none"
                        stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    <rect id="_2" data-name="2" width="6" height="6.5" rx="3" transform="translate(9 6.75)" fill="none"
                        stroke="#323232" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    <path id="_1" data-name="1"
                        d="M5.636,18.364h0A8.071,8.071,0,0,1,11.343,16h1.213a8.07,8.07,0,0,1,4.477,1.356l1.4.932"
                        fill="none" stroke="#323232" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" />
                </svg></div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => {
    return route.meta.title || 'Default Title'
})
</script>