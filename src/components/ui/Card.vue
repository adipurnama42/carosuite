<script setup>
defineProps({
  padding: {
    type: String,
    default: "md",
  },
});
</script>

<template>
  <div
    class="bg-white rounded-2xl border border-slate-100 shadow-sm"
    :class="{
      'p-3': padding === 'sm',
      'p-5': padding === 'md',
      'p-6': padding === 'lg',
      'p-0': padding === 'none',
    }"
  >
    <slot />
  </div>
</template>
