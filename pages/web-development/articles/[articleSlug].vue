<script lang="ts" setup>
const device = useDevice()
const route = useRoute()

const NUMBER_OF_OTHER_ARTICLES = 2

const articles = await queryContent('web-development', 'articles')
  .where({ _path: `/web-development/articles/${route.params.articleSlug}` })
  .find()
// checking if this article exists
if (!articles.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const otherArticles = await queryContent('web-development', 'articles')
  .where({ _path: { $ne: `/web-development/articles/${route.params.articleSlug}` }, category: { $eq: 'Веб-розробка' } })
  .limit(NUMBER_OF_OTHER_ARTICLES)
  .find()

</script>
<template>
  <div>
    <div class="px-3 md:px-6 xl:px-0">
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center space-x-1 md:space-x-3">
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
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <a href="/web-development/articles" class="ml-1 text-sm font-medium text-gray-700 md:ml-2 hover:underline">Статті</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <span class="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400">{{ articles[0].title }}</span>
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex w-full flex-col lg:flex-row">
        <main class="basis-3/4 flex flex-col lg:pr-16 content">
          <article>
            <div class="bg-cover mb-6 h-72 w-full rounded-t-lg bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')]" />
            <ContentDoc />
          </article>
        </main>
        <aside class="basis-1/4 flex flex-col">
          <ArticleCard
            v-for="article in otherArticles"
            :key="article.title"
            class="mb-8"
            :title="article.title"
            :content="article.description"
            :date-published="article.datePublishedFormatted"
            :category="article.category"
            :path="article._path"
          />
        </aside>
      </div>
    </div>
  </div>
</template>
