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
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
    }
  ]
})

</script>

<template>
  <div>
    <NuxtLayout :name="device.isMobile ? 'mobile':'default'">
      <div class="flex w-full flex-row">
        <div class="basis-2/5 flex flex-col">
          <div class="bg-cover w-full rounded-t-lg h-72 bg-[url('https://images.unsplash.com/photo-1670901391503-f6a80a0d91a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80')]" />
          <div class="flex flex-col w-full">
            <div class="uppercase text-sm font-extrabold text-secondary mt-4 mb-2">Веб-розробка</div>
            <h3 class="text-2xl font-bold mb-2 text-primary">Верстка сайту на Vue + Tailwind</h3>
            <p class="text-base text-primary">
              сьогодні я вирішив порізати з нуля проект з апворку використовуючи CSS фреймворк Tailwind, який досі не використовував комерційно, проте його популярність уже зараз можна побачити на просторах інтернету, що й зацікавило в плані використання його як основний інструмент у наступному проекті
            </p>
            <span class="mt-4 font-light text-primary">8 липня 2022</span>
          </div>
        </div>
        <div class="basis-3/5 rounded-lg flex flex-col items-center pl-8">
          <div class="flex w-full">
            <div class="flex flex-col basis-1/2 pr-4">
              <div class="bg-cover w-full rounded-t-lg h-44 bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')]" />
              <div class="flex flex-col w-full">
                <div class="flex justify-between mt-2 mb-1 text-xs">
                  <div class="uppercase font-extrabold text-secondary">Веб-розробка</div>
                  <span class="font-light text-primary">8 липня 2022</span>
                </div>
                <h3 class="text-xl font-bold mb-1 text-primary">Верстка сайту на Vue + Tailwind</h3>
                <p class="text-sm text-primary">
                  сьогодні я вирішив порізати з нуля проект з апворку використовуючи CSS фреймворк Tailwind, який досі не використовував комерційно
                </p>
              </div>
            </div>
            <div class="flex flex-col basis-1/2 pl-4">
              <div class="bg-cover w-full rounded-t-lg h-44 bg-[url('https://images.unsplash.com/photo-1670768563220-c13cfa7e1dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80')]" />
              <div class="flex flex-col w-full">
                <div class="flex justify-between mt-2 mb-1 text-xs">
                  <div class="uppercase font-extrabold text-secondary">Веб-розробка</div>
                  <span class="font-light text-primary">8 липня 2022</span>
                </div>
                <h3 class="text-xl font-bold mb-1 text-primary">Верстка сайту на Vue + Tailwind</h3>
                <p class="text-sm text-primary">
                  сьогодні я вирішив порізати з нуля проект з апворку використовуючи CSS фреймворк Tailwind, який досі не використовував комерційно
                </p>
              </div>
            </div>
          </div>
          <div class="flex mt-8 w-full">
            <div class="flex flex-col basis-1/2 pr-4">
              <div class="bg-cover w-full rounded-t-lg h-44 bg-[url('https://plus.unsplash.com/premium_photo-1661538820886-a6865273458e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2411&q=80')]" />
              <div class="flex flex-col w-full">
                <div class="flex justify-between mt-2 mb-1 text-xs">
                  <div class="uppercase font-extrabold text-secondary">Веб-розробка</div>
                  <span class="font-light text-primary">8 липня 2022</span>
                </div>
                <h3 class="text-xl font-bold mb-1 text-primary">Верстка сайту на Vue + Tailwind</h3>
                <p class="text-sm text-primary">
                  сьогодні я вирішив порізати з нуля проект з апворку використовуючи CSS фреймворк Tailwind, який досі не використовував комерційно
                </p>
              </div>
            </div>
            <div class="flex flex-col basis-1/2 pl-4">
              <div class="bg-cover w-full rounded-t-lg h-44 bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--pl8LqxGv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zhchycb77n7vz6252uy7.jpg')]" />
              <div class="flex flex-col w-full">
                <div class="flex justify-between mt-2 mb-1 text-xs">
                  <div class="uppercase font-extrabold text-secondary">Веб-розробка</div>
                  <span class="font-light text-primary">8 липня 2022</span>
                </div>
                <h3 class="text-xl font-bold mb-1 text-primary">Типи даних в Javascript</h3>
                <p class="text-sm text-primary">
                  сьогодні я вирішив порізати з нуля проект з апворку використовуючи CSS фреймворк Tailwind, який досі не використовував комерційно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-8 w-full h-px bg-gray-200 border-0">
      <ContentDoc v-if="false" />
    </NuxtLayout>
  </div>
</template>
