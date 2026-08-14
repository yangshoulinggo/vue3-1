<script setup>
import PageHeader from '../components/PageHeader.vue'
</script>

<template>
  <div class="about-view">
    <PageHeader title="关于" subtitle="关于 views 与 components 的说明" />
    <div class="content">
      <h2>为什么这样分？</h2>
      <p>
        <strong>views/</strong> 中的组件是<strong>页面级</strong>的,每个文件对应路由表中的一条路由。
        它们负责组装页面结构、管理页面数据,并调用 <strong>components/</strong> 中的可复用组件。
      </p>
      <p>
        <strong>components/</strong> 中的组件是<strong>功能级</strong>的,关注单一职责,
        可以被任意页面重复使用。例如本项目的 <code>PageHeader</code> 被三个页面同时复用。
      </p>

      <h2>引用关系</h2>
      <pre class="code-block">路由 → views/页面组件 → components/可复用组件

/src/router/index.js
  ├─ /home        → views/HomeView.vue        → components/PageHeader.vue
  ├─ /product     → views/ProductTableView.vue → components/PageHeader.vue
  │                                         → components/ProductTable/Index.vue
  │                                           → components/ProductTable/EditableLabel.vue
  └─ /about       → views/AboutView.vue        → components/PageHeader.vue</pre>

      <h2>判断标准</h2>
      <ul class="rule-list">
        <li>这个组件是否直接对应一个路由地址? → 是 → 放 <code>views/</code></li>
        <li>这个组件会被多个页面复用吗? → 是 → 放 <code>components/</code></li>
        <li>这个组件只服务于某个页面的局部 UI? → 可以放 <code>components/</code> 或页面同目录</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.content h2 {
  font-size: 18px;
  color: #303133;
  margin: 24px 0 12px;
}

.content p {
  line-height: 1.8;
  color: #606266;
  font-size: 14px;
}

.content code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}

.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre;
}

.rule-list {
  padding-left: 20px;
  line-height: 2.2;
  color: #303133;
  font-size: 14px;
}

.rule-list code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}
</style>
