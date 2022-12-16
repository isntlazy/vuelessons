<script setup>
</script>
<template>
  <div class="flex flex-col">
    <nav class="flex mb-6" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary hover:underline">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            Головна
          </a>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <span href="#" class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">Веб-розробка</span>
          </div>
        </li>
      </ol>
    </nav>

    <ContentDoc />
    <div class="flex flex-wrap justify-center mt-8">
      <div class="flex flex-col mt-6">
        <div class="flex flex-wrap justify-between">
          <NuxtLink class="basis-1/2" to="/web-development/articles">
            <div class=" cursor-pointer transform duration-500 hover:shadow-md hover:-translate-y-1 flex flex-wrap md:flex-nowrap  w-full ">
              <img class="w-full md:w-40 h-auto" src="../../assets/img/articles.png" alt="">
              <div class="p-10 my-auto">
                <h2 class="text-2xl font-bold text-primary">
                  Усі статті з Веб-розробки
                </h2>
                <p class="text-base text-gray-400 mt-2">
                  Переглянути усі статті з розділу: Веб-розробка
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="basis-1/2" to="/web-development/articles/tag/javascript">
            <div class=" cursor-pointer transform duration-500 hover:shadow-md hover:-translate-y-1 flex flex-wrap md:flex-nowrap  w-full ">
              <img class="w-full md:w-40 h-auto" src="../../assets/img/javascript.png" alt="">
              <div class="p-10 my-auto">
                <h1 class="text-2xl font-bold text-primary">
                  <span class="text-secondary mr-1">#</span>JavaScript
                </h1>
                <p class="text-base text-gray-400 mt-2">
                  Найпоширеніша на сьогодні мова програмування
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="basis-1/2" to="/web-development/articles/tag/typescript">
            <div class="cursor-pointer transform duration-500 hover:shadow-md hover:-translate-y-1 flex flex-wrap md:flex-nowrap w-full ">
              <img class="w-full md:w-40 h-auto" src="../../assets/img/typescript.png" alt="">
              <div class="p-10 my-auto">
                <h1 class="text-2xl font-bold text-primary">
                  <span class="text-secondary mr-1">#</span>TypeScript
                </h1>
                <p class="text-base text-gray-400 mt-2">
                  Суперсет для джаваскріпта
                </p>
              </div>
            </div>
          </NuxtLink>
          <NuxtLink class="basis-1/2" to="/web-development/articles/tag/vuejs">
            <div class="cursor-pointer transform duration-500 hover:shadow-md hover:-translate-y-1 flex flex-wrap md:flex-nowrap w-full ">
              <img class="w-full md:w-40 h-auto" src="../../assets/img/vue.png" alt="">
              <div class="p-10 my-auto">
                <h1 class="text-2xl font-bold text-primary">
                  <span class="text-secondary mr-1">#</span>VueJS
                </h1>
                <p class="text-base text-gray-400 mt-2">
                  Фреймворк з простотою та чудовою документацією
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
