<script setup>
const route = useRoute()
const articles = await queryContent('').where({ tags: { $containsAny: [`#${route.params.tag}`] } }).find()
console.log(articles)
if (!articles.length) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

<template>
  <h1>{{ route.params.tag }}</h1>
  <span>tag: </span>
  <h1>some tag here</h1>
  {{ articles }}
</template>
