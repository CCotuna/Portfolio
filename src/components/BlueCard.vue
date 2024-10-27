<template>
    <div class="card relative bg-black text-white p-6 rounded-xl border border-gray-200 overflow-hidden"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div class="icon-container text-center mb-4">
            <i class="bi bi-credit-card-2-front-fill fs-2 text-4xl"></i>
        </div>

        <h2 class="text-xl font-bold mb-2 text-center">Intuitive Dashboard Design</h2>
        <p class="text-center">Experience an intuitive dashboard design that simplifies navigation and provides
            at-a-glance insights</p>

        <div class="circle-left absolute bg-blue-600 rounded-full" :class="{ 'circle-left-animate': hover }"></div>

        <div class="circle-right absolute bg-blue-600 rounded-full" :class="{ 'circle-right-animate': hover }"></div>

        <a v-if="circlesCovered" href="https://example.com" target="_blank"
            class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 text-white text-lg font-semibold">
            Learn More
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const hover = ref(false)
const circlesCovered = ref(false)

const handleMouseEnter = () => {
    hover.value = true
    setTimeout(() => {
        circlesCovered.value = true
    }, 500)
}

const handleMouseLeave = () => {
    hover.value = false
    circlesCovered.value = false
}
</script>

<style scoped>
.card {
    width: 350px;
    height: 200px;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Left Circle */
.circle-left {
    width: 50px;
    height: 50px;
    top: 40%;
    left: -25px;
    transition: all 0.5s ease-in-out;
}

.circle-left-animate {
    width: 500px;
    height: 500px;
    top: -200px;
    left: -250px;
    transition: all 0.5s ease-in-out;
}

/* Right Circle */
.circle-right {
    width: 80px;
    height: 80px;
    top: -10px;
    right: -40px;
    transition: all 0.5s ease-in-out;
}

.circle-right-animate {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -250px;
    transition: all 0.5s ease-in-out;
}

a {
    opacity: 0;
    transition: opacity 0.3s ease;
}

a:hover {
    opacity: 1;
}
</style>
