<script setup>
import { ref } from "vue";

import Sidebar from "@/components/layout/Sidebar.vue";
import Topbar from "@/components/layout/Topbar.vue";

const sidebarOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-slate-100 text-slate-800">
    <Sidebar :mobile-open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/40 z-30 lg:hidden"
    ></div>

    <!-- Main -->
    <div class="flex flex-col min-h-screen lg:ml-60">
      <Topbar title="Dashboard" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="flex-1 p-3 sm:p-4 lg:p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>
