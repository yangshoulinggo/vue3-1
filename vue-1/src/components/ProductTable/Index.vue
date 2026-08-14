<script setup>
import { ref, onMounted } from 'vue'
import EditableLabel from './EditableLabel.vue'

const products = ref([])
const loading = ref(true)

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, name: '梨形朱泥清代小品经典款紫砂壶', image: 'https://picsum.photos/seed/teapot/128/128', tag: '茶具' },
        { id: 102, name: '全防水HABU旋钮牛皮户外徒步登山鞋', image: 'https://picsum.photos/seed/shoes/128/128', tag: '男鞋' },
        { id: 103, name: '毛茸茸小棉袄,儿童羊羔绒背心73-90cm', image: 'https://picsum.photos/seed/children1/128/128', tag: '儿童服饰' },
        { id: 104, name: '基础百搭,儿童套头针织毛衣1-9岁', image: 'https://picsum.photos/seed/children2/128/128', tag: '儿童服饰' }
      ])
    }, 800)
  })
}

onMounted(async () => {
  products.value = await fetchProducts()
  loading.value = false
})
</script>

<template>
  <div class="product-table">
    <table>
      <thead>
        <tr>
          <th class="col-id">编号</th>
          <th class="col-image">图片</th>
          <th class="col-name">名称</th>
          <th class="col-tag">标签</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="4" class="loading-cell">加载中...</td>
        </tr>
        <tr v-else v-for="row in products" :key="row.id">
          <td class="col-id">{{ row.id }}</td>
          <td class="col-image">
            <div class="image-wrapper">
              <img :src="row.image" :alt="row.name" />
            </div>
          </td>
          <td class="col-name">{{ row.name }}</td>
          <td class="col-tag">
            <EditableLabel v-model="row.tag" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.product-table {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 14px;
}

thead {
  background: #f5f7fa;
}

th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #606266;
  border-bottom: 1px solid #ebeef5;
}

td {
  padding: 12px 16px;
  border-bottom: 1px solid #ebeef5;
  color: #303133;
  vertical-align: middle;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background: #fafafa;
}

.loading-cell {
  text-align: center;
  color: #909399;
  padding: 32px 0;
}

.col-id {
  width: 80px;
  color: #909399;
}

.col-image {
  width: 100px;
}

.col-name {
  width: auto;
}

.col-tag {
  width: 160px;
}

.image-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 6px;
  overflow: hidden;
  background: #f0f0f0;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
