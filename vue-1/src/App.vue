<script setup>
import ProductTable from './components/ProductTable/Index.vue'
</script>

<template>
  <div class="product-table-container">
    <h1>可编辑标签表格演示</h1>
    <ProductTable />
  </div>
</template>

<style scoped>
.product-table-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
