<script setup>
const route = useRoute()
const articles = await queryContent('web-development', 'articles').where({ category: { $eq: 'Веб-розробка' } }).find()
console.log(articles)
if (!articles.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

<template>
  <div class="mx-3 mb-6 lg:mb-0 lg:mx-0">
    <nav class="flex mb-4" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary hover:underline">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            Головна
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <a href="/web-development" class="ml-1 text-sm font-medium text-gray-700 md:ml-2 hover:underline">Веб-розробка</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            <span class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">Статті</span>
          </div>
        </li>
      </ol>
    </nav>
    <ContentDoc />
    <div class="flex flex-wrap w-full lg:mt-8">
      <div v-for="article in articles" :key="article.title" class="flex flex-col basis-full lg:basis-1/3 mb-0 pt-6 lg:mb-6 lg:pt-0 lg:pr-8">
        <ArticleCard
          :title="article.title"
          :content="article.description"
          :date-published="article.datePublishedFormatted"
          :category="article.category"
          :path="article._path"
        />
      </div>
    </div>
  </div>
</template>
