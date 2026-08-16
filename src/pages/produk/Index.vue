<script setup>
import { computed, ref } from "vue";
import {
  Package,
  Pencil,
  Trash2,
  Plus,
  Search,
  Filter,
  AlertTriangle,
} from "lucide-vue-next";

import PageHeader from "@/components/ui/PageHeader.vue";
import Card from "@/components/ui/Card.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import EmptyState from "@/components/ui/EmptyState.vue";

// ========================================
// DUMMY DATA
// ========================================

const products = ref([
  {
    id: 1,
    name: "Es Kopi Susu",
    category: "Minuman",
    hpp: 6500,
    sellingPrice: 18000,
    stock: 25,
    unit: "cup",
  },

  {
    id: 2,
    name: "Nasi Goreng Spesial",
    category: "Makanan",
    hpp: 12000,
    sellingPrice: 28000,
    stock: 15,
    unit: "porsi",
  },

  {
    id: 3,
    name: "Matcha Latte",
    category: "Minuman",
    hpp: 8500,
    sellingPrice: 22000,
    stock: 18,
    unit: "cup",
  },

  {
    id: 4,
    name: "Kentang Goreng",
    category: "Snack & Cemilan",
    hpp: 7000,
    sellingPrice: 17000,
    stock: 10,
    unit: "porsi",
  },
]);

// ========================================
// FILTER
// ========================================

const search = ref("");
const selectedCategory = ref("");

const categories = computed(() => {
  return [...new Set(products.value.map((product) => product.category))];
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    const matchCategory =
      !selectedCategory.value || product.category === selectedCategory.value;

    return matchSearch && matchCategory;
  });
});

// ========================================
// HELPERS
// ========================================

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getProfit(product) {
  return product.sellingPrice - product.hpp;
}

function getProfitPercentage(product) {
  if (product.hpp <= 0) {
    return 0;
  }

  return Math.round((getProfit(product) / product.hpp) * 100);
}

// ========================================
// ACTIONS
// ========================================

function editProduct(product) {
  console.log("Edit product:", product);
}

function deleteProduct(product) {
  const confirmed = confirm(`Hapus produk "${product.name}"?`);

  if (!confirmed) {
    return;
  }

  products.value = products.value.filter((item) => item.id !== product.id);
}
</script>

<template>
  <div>
    <!-- ================================ -->
    <!-- PAGE HEADER -->
    <!-- ================================ -->

    <PageHeader
      title="Produk & HPP"
      description="Kelola produk, resep, dan kalkulasi HPP."
    >
      <template #actions>
        <BaseButton>
          <Plus :size="15" />

          Tambah Produk
        </BaseButton>
      </template>
    </PageHeader>

    <!-- ================================ -->
    <!-- FILTER -->
    <!-- ================================ -->

    <Card padding="sm" class="mb-5">
      <div class="flex flex-col sm:flex-row gap-2">
        <!-- Search -->

        <div class="relative flex-1">
          <Search
            :size="16"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            v-model="search"
            type="text"
            placeholder="Cari produk..."
            class="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <!-- Category -->

        <div class="relative sm:w-48">
          <Filter
            :size="15"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            v-model="selectedCategory"
            class="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg bg-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Semua Kategori</option>

            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </Card>

    <!-- ================================ -->
    <!-- PRODUCTS -->
    <!-- ================================ -->

    <div
      v-if="filteredProducts.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <Card
        v-for="product in filteredProducts"
        :key="product.id"
        padding="md"
        class="hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        <!-- Product Header -->

        <div class="flex items-start gap-3 mb-4">
          <div
            class="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0"
          >
            <Package :size="20" class="text-blue-600" />
          </div>

          <div class="min-w-0">
            <div class="font-bold text-slate-800 text-sm truncate">
              {{ product.name }}
            </div>

            <div class="mt-1">
              <span
                class="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-semibold"
              >
                {{ product.category }}
              </span>
            </div>
          </div>
        </div>

        <!-- Product Information -->

        <div class="space-y-2 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-400"> HPP </span>

            <span class="font-semibold text-slate-600">
              {{ formatRupiah(product.hpp) }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-400"> Harga Jual </span>

            <span class="font-bold text-blue-600">
              {{ formatRupiah(product.sellingPrice) }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-400"> Profit </span>

            <span class="font-bold text-emerald-600">
              {{ formatRupiah(getProfit(product)) }}

              ({{ getProfitPercentage(product) }}%)
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-slate-400"> Stok </span>

            <span class="text-slate-600">
              {{ product.stock }}
              {{ product.unit }}
            </span>
          </div>
        </div>

        <!-- Actions -->

        <div class="flex gap-2 mt-4 pt-3 border-t border-slate-100">
          <button
            @click="editProduct(product)"
            class="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-xs font-semibold rounded-lg transition-colors"
          >
            <Pencil :size="12" />

            Edit
          </button>

          <button
            @click="deleteProduct(product)"
            class="flex-1 flex items-center justify-center gap-1.5 py-1.5 border border-slate-200 hover:border-red-400 hover:bg-red-50 text-slate-400 hover:text-red-500 text-xs font-semibold rounded-lg transition-colors"
          >
            <Trash2 :size="12" />

            Hapus
          </button>
        </div>
      </Card>
    </div>

    <!-- ================================ -->
    <!-- EMPTY -->
    <!-- ================================ -->

    <Card v-else padding="none">
      <EmptyState
        title="Belum Ada Produk"
        description="Tambahkan produk untuk mulai mengelola HPP dan harga jual."
      >
        <template #action>
          <BaseButton>
            <Plus :size="14" />

            Tambah Produk
          </BaseButton>
        </template>
      </EmptyState>
    </Card>
  </div>
</template>
