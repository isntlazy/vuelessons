<script setup>
</script>
<template>
  <div class="flex flex-col">
    <h1 class="text-3xl uppercase text-secondary font-extrabold mb-4">
      Веб-розробка
    </h1>
    <ContentDoc />
    <div class="flex flex-col mt-16">
      <div class="flex flex-wrap justify-between">
        <NuxtLink class="basis-1/2" to="/web-development/JavaScript">
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
        <NuxtLink class="basis-1/2" to="/web-development/TypeScript">
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
        <NuxtLink class="basis-1/2" to="/web-development/VueJS">
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
</template>
