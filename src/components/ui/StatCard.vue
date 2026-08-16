<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },

  value: {
    type: [String, Number],
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  icon: {
    type: Object,
    default: null,
  },

  color: {
    type: String,
    default: "blue",
  },
});
</script>

<template>
  <div class="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
    <div
      class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center mb-2"
    >
      <component
        v-if="icon"
        :is="icon"
        :size="16"
        :class="`text-${color}-600`"
      />
    </div>

    <div
      class="font-sora font-bold text-sm sm:text-base leading-tight truncate"
      :class="`text-${color}-600`"
    >
      {{ value }}
    </div>

    <div class="text-[11px] font-semibold text-slate-600 mt-0.5">
      {{ label }}
    </div>

    <div v-if="description" class="text-[10px] text-slate-400 mt-0.5 truncate">
      {{ description }}
    </div>
  </div>
</template>
