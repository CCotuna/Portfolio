<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>
<template>
    <div class="fixed end-6 bottom-6 group">
        <div ref="menu" v-if="menuOpen" class="flex flex-col items-center mb-4 space-y-2">
            <button type="button"
                class="relative flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                <i class="bi bi-share-fill text-xl"></i>
                <span class="sr-only">Share</span>
                <div
                    class="absolute right-16 ml-2 invisible group-hover:visible bg-gray-900 text-white text-sm rounded px-2 py-1">
                    Share
                </div>
            </button>

            <button type="button"
                class="relative flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                <i class="bi bi-printer-fill text-xl"></i>
                <span class="sr-only">Print</span>
                <div
                    class="absolute right-16 ml-2 invisible group-hover:visible bg-gray-900 text-white text-sm rounded px-2 py-1">
                    Print
                </div>
            </button>

            <button type="button"
                class="relative flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                <i class="bi bi-download text-xl"></i>
                <span class="sr-only">Download</span>
                <div
                    class="absolute right-16 ml-2 invisible group-hover:visible bg-gray-900 text-white text-sm rounded px-2 py-1">
                    Download
                </div>
            </button>

            <button type="button"
                class="relative flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 shadow-sm  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none">
                <i class="bi bi-clipboard-fill text-xl"></i>
                <span class="sr-only">Copy</span>
                <div
                    class="absolute right-16 ml-2 invisible group-hover:visible bg-gray-900 text-white text-sm rounded px-2 py-1">
                    Copy
                </div>
            </button>
        </div>

        <button type="button" @click="toggleMenu"
            class="flex items-center justify-center text-black bg-white border-2 border-black rounded-full w-14 h-14 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 focus:outline-none">
            <i class="bi bi-egg-fill text-2xl transition-transform" :class="{ 'rotate-45': menuOpen }"></i>
            <span class="sr-only">Open actions menu</span>
        </button>
    </div>
</template>
<style scoped></style>