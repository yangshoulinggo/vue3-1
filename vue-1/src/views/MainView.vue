<template>
    <div class="app">
        <nav class="nav-bar">
            <router-link to="/home" class="nav-link">首页</router-link>
            <router-link to="/product" class="nav-link">商品表格</router-link>
            <router-link to="/about" class="nav-link">关于</router-link>
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>
<style scoped>
.app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.nav-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #ebeef5;
}

.nav-link {
    padding: 6px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: #606266;
    font-size: 14px;
    transition: all 0.2s;
}

.nav-link:hover {
    background: #f5f7fa;
    color: #303133;
}

.nav-link.router-link-active {
    background: #409eff;
    color: #fff;
}
</style>
