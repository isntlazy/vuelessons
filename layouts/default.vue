<script setup>
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
    }
  ]
})
</script>
<template>
  <div>
    <TheHeader />
    <div v-if="false" class="flex flex-col items-center bg-amber-700 py-2">
      <span class="text-slate-200 font-semibold text-xs">
        🎁 Банер на десктопі про якусь важливу новину або новий доданий курс!
      </span>
    </div>
    <div class="container max-w-screen-xl flex flex-col justify-between mx-auto mt-8">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
