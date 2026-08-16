<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },

  size: {
    type: String,
    default: "md",
  },

  type: {
    type: String,
    default: "button",
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      {
        'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',

        'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50':
          variant === 'secondary',

        'bg-red-500 text-white hover:bg-red-600': variant === 'danger',

        'bg-emerald-500 text-white hover:bg-emerald-600': variant === 'success',

        'text-slate-600 hover:bg-slate-100': variant === 'ghost',
      },

      {
        'px-2.5 py-1.5 text-xs': size === 'sm',

        'px-3.5 py-2 text-sm': size === 'md',

        'px-5 py-2.5 text-sm': size === 'lg',
      },
    ]"
  >
    <slot />
  </button>
</template>
