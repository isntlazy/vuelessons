<script setup lang="ts">
const menuItems = [
  {
    label: 'Головна',
    path: '/'
  },
  {
    label: 'Веб-розробка',
    path: '/web-development'
  },
  // {
  //   label: 'Продуктивність',
  //   path: '/productivity'
  // },
  // {
  //   label: 'Гаджети',
  //   path: '/gadgets'
  // },
  {
    label: 'Контакти',
    path: '/contacts'
  }
]
const isMobileMenuActive = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuActive.value = !isMobileMenuActive.value
}
</script>
<template>
  <header>
    <nav class="bg-primary border-gray-200 px-2 sm:px-4 py-6">
      <div class="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center -mt-4">
          <img src="../assets/img/logo.svg" class="ml-3 mr-3 h-14 lg:h-16 lg:ml-0" alt="Rankova Kava Logo">
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="toggleMobileMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
        </button>
        <div :class="{ 'hidden': !isMobileMenuActive }" class="mt-4 lg:mt-0 md:block md:w-auto">
          <ul class="flex flex-col px-4 pt-2 md:flex-row md:space-x-12 md:mt-0 md:text-xs md:font-semibold tracking-wider md:border-0 uppercase">
            <li v-for="menuItem in menuItems" :key="menuItem.label" class="">
              <NuxtLink :to="menuItem.path" class="block mt-2 lg:mt-0 pt-2 pr-4 text-white md:bg-transparent cursor-pointer pb-1 lg:pb-2 px-2 border-b-2 border-primary hover:border-b-2 hover:border-secondary" aria-current="page">
                {{ menuItem.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
a.router-link-active {
  @apply border-b-2 border-secondary;
}
</style>
