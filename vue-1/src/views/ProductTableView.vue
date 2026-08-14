<script setup>
import PageHeader from '../components/PageHeader.vue'
import ProductTable from '../components/ProductTable/Index.vue'
</script>

<template>
  <div class="product-table-view">
    <PageHeader title="商品表格" subtitle="复用 components/ProductTable 组件" />
    <ProductTable />
  </div>
</template>
