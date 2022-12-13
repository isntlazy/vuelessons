<template>
  <div>
    <TheHeader />
    <div v-if="false" class="flex flex-col items-center bg-amber-700 py-2">
      <span class="text-slate-200 font-semibold text-xs">
        🎁 Банер на десктопі про якусь важливу новину або новий доданий курс!
      </span>
    </div>
    <slot />
  </div>
</template>
