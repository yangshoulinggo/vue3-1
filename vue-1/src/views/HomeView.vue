<script setup>
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <div class="home-view">
    <PageHeader title="首页" subtitle="views 与 components 的区别演示" />
    <div class="content">
      <h2>目录职责划分</h2>
      <table class="compare-table">
        <thead>
          <tr>
            <th>目录</th>
            <th>职责</th>
            <th>特点</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>src/views/</code></td>
            <td>页面级组件</td>
            <td>与路由一一对应,代表一个完整页面</td>
          </tr>
          <tr>
            <td><code>src/components/</code></td>
            <td>可复用组件</td>
            <td>被多个页面引用,不直接对应路由</td>
          </tr>
        </tbody>
      </table>

      <h2>本项目示例</h2>
      <ul class="example-list">
        <li>
          <strong>views/</strong> — HomeView、ProductTableView、AboutView
          <span class="hint">（每个对应一个路由页面）</span>
        </li>
        <li>
          <strong>components/</strong> — PageHeader、ProductTable、EditableLabel
          <span class="hint">（被页面复用的通用组件）</span>
        </li>
      </ul>

      <p class="tip">
        本页面就复用了 <code>components/PageHeader.vue</code> 组件来渲染标题区域。
        点击上方导航查看其他页面。
      </p>
    </div>
  </div>
</template>

<style scoped>
.content h2 {
  font-size: 18px;
  color: #303133;
  margin: 24px 0 12px;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.compare-table th,
.compare-table td {
  padding: 10px 12px;
  border: 1px solid #ebeef5;
  text-align: left;
}

.compare-table th {
  background: #f5f7fa;
  font-weight: 600;
  color: #606266;
}

.compare-table code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}

.example-list {
  padding-left: 20px;
  line-height: 2;
  color: #303133;
}

.example-list code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}

.hint {
  color: #909399;
  font-size: 13px;
}

.tip {
  margin-top: 20px;
  padding: 12px 16px;
  background: #ecf5ff;
  border-radius: 6px;
  color: #409eff;
  font-size: 14px;
}

.tip code {
  background: #d9ecff;
  padding: 2px 6px;
  border-radius: 3px;
}
</style>
