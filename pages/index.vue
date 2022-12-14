<script lang="ts" setup>
const device = useDevice()
const numberOfLastArticles = { desktop: 5, mobile: 3 }
definePageMeta({
  layout: false
})

</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div class="px-3 lg:px-0">
        <div class="flex w-full flex-row flex-wrap lg:px-0">
          <div class="lg:basis-2/5 basis-full flex flex-col">
            <ArticleCard :is-main="!device.isMobile" />
          </div>
          <div class="lg:basis-3/5 basis-full rounded-lg flex flex-col items-center lg:pl-8">
            <div class="flex flex-wrap w-full">
              <div class="flex flex-col basis-full lg:basis-1/2 pt-6 lg:pt-0 lg:pr-4">
                <ArticleCard />
              </div>
              <div class="flex flex-col basis-full lg:basis-1/2 pt-6 lg:pt-0 lg:pl-4">
                <ArticleCard />
              </div>
              <div v-if="!device.isMobile" class="flex flex-col basis-full lg:basis-1/2 lg:pr-4 pt-6">
                <ArticleCard />
              </div>
              <div v-if="!device.isMobile" class="flex flex-col basis-full lg:basis-1/2 lg:pl-4 pt-6">
                <ArticleCard />
              </div>
            </div>
          </div>
        </div>
        <hr class="my-8 w-full h-px bg-gray-200 border-0">
        <div class="flex w-full flex-col mb-20">
          <div class="flex flex-col">
            <h2 class="text-3xl uppercase text-secondary font-extrabold mb-8">Веб-розробка</h2>
            <div class="flex flex-wrap">
              <div class="flex flex-row flex-wrap flex basis-full lg:basis-10/12">
                <div class="flex flex-col basis-full lg:basis-1/3 lg:pr-8">
                  <ArticleCard />
                </div>
                <div class="flex flex-col basis-full pt-6 lg:pt-0 lg:basis-1/3 lg:pr-8">
                  <ArticleCard />
                </div>
                <div class="flex flex-col basis-full pt-6 lg:pt-0 lg:basis-1/3 lg:pr-8">
                  <ArticleCard />
                </div>
              </div>
              <div class="flex basis-full pt-12 lg:pt-0 lg:basis-2/12 justify-center items-center text-primary uppercase font-bold text-base">
                <div class="flex flex-col items-center">
                  <span class="mb-1">Переглянути усі</span>
                  <img class="w-1/3" src="../assets/img/arrow-right.svg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentDoc v-if="false" />
    </NuxtLayout>
  </div>
</template>
