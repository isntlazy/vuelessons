<script lang="ts" setup>
const device = useDevice()
const route = useRoute()
definePageMeta({
  layout: false
})

// todo handle 404 here

</script>
<template>
  <div>
    <NuxtLayout :name="device.isMobile ? 'mobile':'default'">
      <div class="flex w-full flex-row">
        <div class="basis-3/4 flex flex-col pr-16 content">
          <div class="bg-cover mb-6 h-72 w-full rounded-t-lg bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')]" />
          <ContentDoc :path="route.params.articleSlug" />
        </div>
        <div class="basis-1/4 flex flex-col">
          <ArticleCard />
          <div class="mt-8">
            <ArticleCard />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
