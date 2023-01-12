<template>
  <NuxtLayout name="default">
    <main class="px-3 md:px-6 xl:px-0">
      <div class="flex flex-col items-center w-full justify-center">
        <span class="bg-red-100 text-red-700 text-xl font-semibold px-4 py-1 rounded">404</span>

        <h1 class="text-red-700 text-2xl uppercase mt-8">
          Халепа! Сторінку не знайдено 😿
        </h1>
        <img class="w-48" src="./assets/img/page-not-found.png" alt="Іконка помилки 404">
        <button type="button" class="flex flex-col my-12 items-center" @click="redirectToHome">
          <span class="mb-1 text-center uppercase font-bold text-primary">Повернутись на головну</span>
          <img class="w-16 mt-4" src="assets/icons/arrow-right.svg" alt="Стрілка перейти на головну">
        </button>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: '404 Сторінку не знайдено',
})
const props = defineProps({
  error: Object
})

console.log(props.error)

const redirectToHome = () => clearError({ redirect: '/' })
</script>
