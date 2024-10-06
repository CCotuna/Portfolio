<script setup></script>
<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-gray-200 overflow-visible">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative z-10">
            <div class="uppercase font-semibold">
                Portfolio
            </div>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button data-collapse-toggle="navbar-cta" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </div>
        <!-- Centered circle - middle of navigation bar -->
        <div class="absolute top-[1.85rem] left-1/2 transform -translate-x-1/2 w-24 h-24 bg-black rounded-full z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="200px" height="200px"
                class="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-in-out hover:rotate-360">
                <!-- Chicken Body -->
                <g fill="#FFFFFF">
                    <circle cx="32" cy="36" r="10" />
                </g>
                <!-- Chicken Beak -->
                <polygon points="32,34 34,36 30,36" fill="#FF6347" />
                <!-- Chicken Eyes -->
                <circle cx="30" cy="34" r="1.5" fill="#000000" />
                <circle cx="34" cy="34" r="1.5" fill="#000000" />
                <!-- Chicken Comb -->
                <path d="M30 31c0-1 1-3 2-3s2 2 2 3z" fill="#FF6347" />
            </svg>
        </div>
    </nav>
</template>
<style scoped></style>
