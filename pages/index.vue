<script lang="ts" setup>
const device = useDevice()
const numberOfLastArticles = { desktop: 5, mobile: 3 }

const lastArticles = ref<any>([])
lastArticles.value = await queryContent('').where({ category: { $containsAny: ['Веб-розробка', 'Продуктивність'] } })
  .limit(device.isMobile ? numberOfLastArticles.mobile : numberOfLastArticles.desktop)
  .sort({ datePublished: -1 })
  .find()

const lastArticlesWithoutFirstOne = computed(() => {
  const arrWithoutFirstArticle = [...lastArticles.value]
  arrWithoutFirstArticle.shift()
  return arrWithoutFirstArticle
})

const lastWebDevelopmentArticles = await queryContent('web-development', 'articles')
  .where({ category: { $containsAny: ['Веб-розробка', 'Продуктивність'] } })
  .limit(3)
  .sort({ datePublished: -1 })
  .find()
</script>

<template>
  <main>
    <div class="px-3 md:px-6 xl:px-0">
      <section class="flex w-full flex-row flex-wrap lg:px-0">
        <div class="lg:basis-2/5 basis-full flex flex-col">
          <ArticleCard
            :title="lastArticles[0].title"
            :content="lastArticles[0].description"
            :date-published="lastArticles[0].datePublishedFormatted"
            :category="lastArticles[0].category"
            :is-main="!device.isMobile"
            :path="lastArticles[0]._path"
            :image="lastArticles[0].image"
            :imageAlt="lastArticles[0].imageAlt"
          />
        </div>
        <div class="lg:basis-3/5 basis-full rounded-lg flex flex-col items-center lg:pl-8">
          <div class="flex flex-wrap w-full">
            <article v-for="article in lastArticlesWithoutFirstOne" :key="article.title" class="flex flex-col basis-full lg:basis-1/2 mb-0 pt-6 lg:mb-6 lg:pt-0 lg:pl-4">
              <ArticleCard
                :title="article.title"
                :content="article.description"
                :date-published="article.datePublishedFormatted"
                :category="article.category"
                :path="article._path"
                :image="article.image"
                :imageAlt="article.imageAlt"
              />
            </article>
          </div>
        </div>
      </section>
      <hr class="my-8 w-full h-px bg-gray-200 border-0">
      <section class="flex w-full flex-col mb-20">
        <div class="flex flex-col">
          <h2 class="text-2xl uppercase text-secondary font-extrabold lg:mb-6">
            Веб-розробка
          </h2>
          <div class="flex flex-wrap">
            <div class="flex flex-row flex-wrap flex basis-full lg:basis-10/12">
              <div v-for="article in lastWebDevelopmentArticles" :key="article.title" class="flex flex-col basis-full lg:basis-1/3 lg:pr-8 mt-6 lg:mt-0">
                <ArticleCard
                  :title="article.title"
                  :content="article.description"
                  :date-published="article.datePublishedFormatted"
                  :category="article.category"
                  :path="article._path"
                  :image="article.image"
                  :imageAlt="article.imageAlt"
                />
              </div>
            </div>
            <div class="flex basis-full pt-12 lg:pt-0 lg:basis-2/12 justify-center items-center text-primary uppercase font-bold text-base">
              <NuxtLink to="/web-development/articles">
                <div class="flex flex-col items-center">
                  <span class="mb-1 text-center">Переглянути усі</span>
                  <img class="w-1/3" src="../assets/img/arrow-right.svg" alt="Стрілка подивитись усі">
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    <ContentDoc v-if="false" />
  </main>
</template>
