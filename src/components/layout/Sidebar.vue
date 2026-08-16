<script setup>
import { ref } from "vue";
import {
  X,
  LayoutDashboard,
  Package,
  CreditCard,
  BarChart3,
  MoreHorizontal,
  FlaskConical,
  Settings2,
  MonitorCheck,
  ShoppingBag,
  Wallet,
  CalendarDays,
  Target,
  Handshake,
  UserCircle,
  LogOut,
  ChevronDown,
} from "lucide-vue-next";

defineProps({
  mobileOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const groups = ref([
  {
    id: "produk",
    label: "Produk",
    icon: Package,
    open: false,
    items: [
      {
        label: "Bahan Baku",
        path: "/bahan-baku",
        icon: FlaskConical,
      },
      {
        label: "Biaya Operasional",
        path: "/operasional",
        icon: Settings2,
      },
      {
        label: "Produk & HPP",
        path: "/produk",
        icon: Package,
      },
    ],
  },
  {
    id: "transaksi",
    label: "Transaksi",
    icon: CreditCard,
    open: false,
    items: [
      {
        label: "Kasir",
        path: "/kasir",
        icon: MonitorCheck,
      },
      {
        label: "Penjualan",
        path: "/penjualan",
        icon: ShoppingBag,
      },
      {
        label: "Pengeluaran",
        path: "/pengeluaran",
        icon: Wallet,
      },
    ],
  },
  {
    id: "laporan",
    label: "Laporan & Target",
    icon: BarChart3,
    open: false,
    items: [
      {
        label: "Laporan Harian",
        path: "/laporan-harian",
        icon: CalendarDays,
      },
      {
        label: "Laporan Bulanan",
        path: "/laporan-bulanan",
        icon: BarChart3,
      },
      {
        label: "Target Laba",
        path: "/target",
        icon: Target,
      },
    ],
  },
  {
    id: "lainnya",
    label: "Lainnya",
    icon: MoreHorizontal,
    open: false,
    items: [
      {
        label: "Pemasok",
        path: "/pemasok",
        icon: Handshake,
      },
      {
        label: "Profil",
        path: "/profil",
        icon: UserCircle,
      },
    ],
  },
]);

function toggleGroup(group) {
  group.open = !group.open;
}
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-40 h-screen w-60 bg-primary-900 flex flex-col overflow-y-auto transition-transform duration-300"
    :class="mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <!-- Logo -->
    <div class="flex items-center justify-between px-4 py-4 flex-shrink-0">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
        >
          <img src="/icon-caro-suite.png" alt="CaroSuite" class="w-7 h-7" />
        </div>

        <span class="font-bold text-white text-lg"> CaroSuite </span>
      </div>

      <button
        @click="emit('close')"
        class="lg:hidden text-blue-300 hover:text-white p-1"
      >
        <X :size="18" />
      </button>
    </div>

    <!-- User -->
    <div
      class="mx-3 mb-3 px-3 py-2.5 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2.5"
    >
      <div
        class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm"
      >
        A
      </div>

      <div class="min-w-0">
        <div class="text-white text-xs font-semibold truncate">Admin Caro</div>

        <div class="text-blue-300 text-[10px] truncate">Caro Studio</div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-2 pb-2 space-y-0.5">
      <!-- Dashboard -->
      <RouterLink
        to="/"
        class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-blue-200 hover:bg-white/10 hover:text-white text-xs font-medium transition-all"
        active-class="bg-white/15 text-white font-semibold"
      >
        <LayoutDashboard :size="15" />

        <span> Dashboard </span>
      </RouterLink>

      <!-- Groups -->
      <div v-for="group in groups" :key="group.id">
        <button
          @click="toggleGroup(group)"
          class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-blue-200 hover:bg-white/10 hover:text-white text-xs font-semibold transition-all"
        >
          <component :is="group.icon" :size="14" />

          <span class="flex-1 text-left">
            {{ group.label }}
          </span>

          <ChevronDown
            :size="13"
            class="transition-transform"
            :class="group.open ? 'rotate-180' : ''"
          />
        </button>

        <!-- Sub Menu -->
        <div v-show="group.open" class="pl-2">
          <RouterLink
            v-for="item in group.items"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-2 pl-5 pr-3 py-1.5 rounded-lg text-[11px] font-medium text-blue-300 hover:bg-white/10 hover:text-white transition-all"
            active-class="bg-white/15 text-white font-semibold"
          >
            <component :is="item.icon" :size="13" />

            <span>
              {{ item.label }}
            </span>
          </RouterLink>
        </div>
      </div>
    </nav>

    <!-- Logout -->
    <div class="px-2 pb-3 border-t border-white/10 pt-2">
      <button
        class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-blue-300 hover:bg-red-500/20 hover:text-red-300 text-xs font-medium transition-all"
      >
        <LogOut :size="15" />

        <span> Keluar </span>
      </button>
    </div>
  </aside>
</template>
