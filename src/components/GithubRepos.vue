<script setup>
import { ref, onMounted } from 'vue';

const repositories = ref([]);
const loading = ref(true);

const fetchRepositories = async () => {
    const response = await fetch('https://api.github.com/users/CCotuna/repos');
    const data = await response.json();

    console.log(data);
    const specificRepos = [
        'Delumino',
        'FocusTrailApp',
        'IE-FE-Collaborative-Bible-Translation-App',
        'IE-BE-Collaborative-Bible-Translation-App',
        'MVC-CRUD-Project',
        'Ruthie-Style',
        'Portfolio',
        'SistemeGestiuneDB',
        'Bulletin'
    ];
    repositories.value = data.filter(repo => specificRepos.includes(repo.name));
    loading.value = false;
};

onMounted(() => {
    fetchRepositories();
});
</script>

<template>
    <section class="bg-black mt-16 md:mt-0">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <template v-if="loading">
                    <div
                        class="h-full w-full text-center rounded-md bg-brown-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 flex flex-col items-center justify-center p-4 shadow-lg">
                        <div class="flex flex-col items-center">
                            <div class="loader mb-2"></div>
                            <h2 class="text-white text-lg font-semibold">Loading GitHub Repositories...</h2>
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div v-for="repo in repositories" :key="repo.id"
                        class="flex flex-col items-center justify-between rounded-md bg-brown-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 p-4 shadow-lg w-full min-w-[150px]">
                        <a :href="repo.html_url"
                            class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2 py-1 rounded-md mb-2">
                            <svg class="w-3 h-3 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 14">
                                <path
                                    d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                            </svg>
                            {{ repo.language || 'Code' }}
                        </a>
                        <h2 class="text-white text-lg font-semibold text-center mb-1">{{ repo.name }}</h2>
                        <p class="text-sm text-gray-300 text-center">{{ repo.description || 'No description' }}</p>
                        <a :href="repo.html_url"
                            class="mt-auto text-blue-400 hover:underline font-medium text-sm inline-flex items-center">
                            View
                            <svg class="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style>
.loader {
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top: 4px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
