<script lang="ts" setup>
const device = useDevice()
definePageMeta({
  layout: false
})

</script>

<template>
  <div>
    <NuxtLayout :name="device.isMobile ? 'mobile':'default'">
      <div class="flex w-full flex-row">
        <div class="basis-2/5 flex flex-col">
          <ArticleCard is-main />
        </div>
        <div class="basis-3/5 rounded-lg flex flex-col items-center pl-8">
          <div class="flex w-full">
            <div class="flex flex-col basis-1/2 pr-4">
              <ArticleCard />
            </div>
            <div class="flex flex-col basis-1/2 pl-4">
              <ArticleCard />
            </div>
          </div>
          <div class="flex mt-8 w-full">
            <div class="flex flex-col basis-1/2 pr-4">
              <ArticleCard />
            </div>
            <div class="flex flex-col basis-1/2 pl-4">
              <ArticleCard />
            </div>
          </div>
        </div>
      </div>
      <hr class="my-8 w-full h-px bg-gray-200 border-0">
      <div class="flex w-full flex-col mb-20">
        <div class="flex flex-col">
          <h2 class="text-3xl uppercase text-secondary font-extrabold mb-8">Веб-розробка</h2>
          <div class="flex">
            <div class="flex flex-row basis-10/12">
              <div class="flex flex-col basis-1/3 pr-8">
                <ArticleCard />
              </div>
              <div class="flex flex-col basis-1/3 pr-8">
                <ArticleCard />
              </div>
              <div class="flex flex-col basis-1/3 pr-8">
                <ArticleCard />
              </div>
            </div>
            <div class="flex basis-2/12 justify-center items-center text-primary uppercase font-bold text-base">
              <div class="flex flex-col items-center">
                <span class="mb-1">Переглянути усі</span>
                <img class="w-1/3" src="../assets/img/arrow-right.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentDoc v-if="false" />
    </NuxtLayout>
  </div>
</template>
