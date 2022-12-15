<script setup>
const route = useRoute()
const articles = await queryContent('web-development', 'articles').where({ tags: { $containsAny: [`#${route.params.tag}`] } }).find()
console.log(articles)
if (!articles.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

<template>
  <ContentDoc />
  {{ articles }}
</template>
