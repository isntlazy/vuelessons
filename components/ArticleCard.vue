<script setup lang="ts">
export interface Props {
  isMain?: boolean,
  datePublished?: string,
  title: string,
  content? :string,
  category?: string,
  path: string
}
const props = withDefaults(
  defineProps<Props>(), {
    isMain: false,
    datePublished: '',
    title: '',
    content: '',
    category: ''
  }
)

const contentPreviewMaxLength = 140

const slicedContent = computed(() => {
  return props.content.length ? `${props.content.substring(0, props.isMain ? contentPreviewMaxLength * 4 : contentPreviewMaxLength)}...` : ''
})
</script>

<template>
  <NuxtLink :to="path">
    <article>
      <div :class="isMain ? 'h-72': 'h-44'" class="bg-cover w-full rounded-t-lg bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')]" />
      <div class="flex flex-col w-full">
        <div :class="isMain ? 'mt-4 mb-2 text-sm' : 'mt-2 mb-1 text-xs'" class="flex justify-between">
          <div class="uppercase font-extrabold text-secondary">
            {{ category }}
          </div>
          <span class="font-light text-primary">{{ datePublished }}</span>
        </div>
        <h3 :class="isMain ? 'text-2xl mb-2' : 'text-xl mb-1'" class="font-bold text-primary">
          {{ title }}
        </h3>
        <p :class="isMain ? 'text-base': 'text-sm'" class="text-primary">
          {{ slicedContent }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
