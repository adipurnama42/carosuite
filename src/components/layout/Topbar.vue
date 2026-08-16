<script setup>
import { Menu, Store } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    default: "Dashboard",
  },
});

const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
  <header
    class="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm"
  >
    <div
      class="flex items-center justify-between px-3 sm:px-5 lg:px-6"
      style="height: 52px"
    >
      <div class="flex items-center gap-2">
        <button
          @click="emit('toggle-sidebar')"
          class="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 text-slate-600"
        >
          <Menu :size="20" />
        </button>

        <h1 class="font-bold text-slate-800 text-sm sm:text-base">
          {{ title }}
        </h1>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <div
          class="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm text-slate-500"
        >
          <Store :size="13" />

          <span> Caro Studio </span>
        </div>

        <RouterLink
          to="/profil"
          class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm"
        >
          A
        </RouterLink>
      </div>
    </div>
  </header>
</template>
