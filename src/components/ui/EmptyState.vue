<script setup>
import { Inbox } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    default: "Belum ada data",
  },

  description: {
    type: String,
    default: "Data akan muncul di sini.",
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center py-12 text-center">
    <div
      class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3"
    >
      <Inbox :size="22" class="text-slate-400" />
    </div>

    <h3 class="text-sm font-semibold text-slate-700">
      {{ title }}
    </h3>

    <p class="text-xs text-slate-400 mt-1 max-w-xs">
      {{ description }}
    </p>

    <div class="mt-4">
      <slot name="action" />
    </div>
  </div>
</template>
