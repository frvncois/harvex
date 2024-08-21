<template>
    <div class="sidebar is-left">
        <div class="sidebar is-items">
            <div class="sidebar is-items"><a href="#" class="sidebar is-nav is-active">Populaire</a><a href="#"
                    class="sidebar is-nav">Récent</a><a href="#" class="sidebar is-nav">Favoris</a></div>
        </div>
    </div>
    <div class="app is-content">
        <MessagesListing />
    </div>
    <div class="sidebar is-right">
        <MessagesSidebar />
    </div>
</template>

<script setup>
import MessagesListing from '@/components/MessagesListing.vue'
import MessagesSidebar from '@/components/MessagesSidebar.vue'
</script>