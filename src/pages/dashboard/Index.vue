<script setup>
import {
  Banknote,
  TrendingUp,
  Calendar,
  Wallet,
  Trophy,
  Package,
} from "lucide-vue-next";

import PageHeader from "@/components/ui/PageHeader.vue";
import Card from "@/components/ui/Card.vue";
import StatCard from "@/components/ui/StatCard.vue";
import EmptyState from "@/components/ui/EmptyState.vue";
</script>

<template>
  <div>
    <!-- Header -->
    <PageHeader
      title="Dashboard"
      description="Ringkasan bisnis kamu hari ini."
    />

    <!-- Statistics -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
      <StatCard
        label="Omzet Hari Ini"
        value="Rp 0"
        description="0 transaksi"
        :icon="Banknote"
        color="blue"
      />

      <StatCard
        label="Profit Hari Ini"
        value="Rp 0"
        description="Bersih HPP"
        :icon="TrendingUp"
        color="green"
      />

      <StatCard
        label="Omzet Bulan Ini"
        value="Rp 0"
        description="0 transaksi"
        :icon="Calendar"
        color="blue"
      />

      <StatCard
        label="Pengeluaran"
        value="Rp 0"
        description="Bulan ini"
        :icon="Wallet"
        color="red"
      />

      <StatCard
        label="Profit Bersih"
        value="Rp 0"
        description="Omzet - HPP - Keluar"
        :icon="Trophy"
        color="green"
      />

      <StatCard
        label="Total Produk"
        value="0"
        description="Produk aktif"
        :icon="Package"
        color="purple"
      />
    </div>

    <!-- Dashboard Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Sales -->
      <Card class="lg:col-span-2">
        <div class="mb-4">
          <h3 class="font-bold text-slate-800">Ringkasan Penjualan</h3>

          <p class="text-xs text-slate-400 mt-0.5">
            Performa penjualan 7 hari terakhir
          </p>
        </div>

        <EmptyState
          title="Belum ada data penjualan"
          description="Data penjualan akan muncul setelah ada transaksi."
        />
      </Card>

      <!-- Best Seller -->
      <Card>
        <div class="mb-4">
          <h3 class="font-bold text-slate-800">Produk Terlaris</h3>

          <p class="text-xs text-slate-400 mt-0.5">Bulan ini</p>
        </div>

        <EmptyState
          title="Belum ada data"
          description="Produk terlaris akan muncul setelah ada transaksi."
        />
      </Card>
    </div>
  </div>
</template>
