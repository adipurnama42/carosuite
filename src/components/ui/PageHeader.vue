<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
  >
    <div>
      <h1 class="text-lg sm:text-xl font-bold text-slate-800">
        {{ title }}
      </h1>

      <p v-if="description" class="text-xs sm:text-sm text-slate-400 mt-0.5">
        {{ description }}
      </p>
    </div>

    <div>
      <slot name="actions" />
    </div>
  </div>
</template>
