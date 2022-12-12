<script lang="ts" setup>
const device = useDevice()
definePageMeta({
  layout: false
})

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
      href: 'https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap'
    }
  ]
})

</script>

<template>
  <div>
    <NuxtLayout :name="device.isMobile ? 'mobile':'default'">
      <WelcomeComponent />
      <ContentDoc />
    </NuxtLayout>
  </div>
</template>
