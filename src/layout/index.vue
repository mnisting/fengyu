<script setup lang="ts"></script>
<template>
  <section class="layout">
    <!-- 主体 -->
    <main v-waterMarker="{ text: '千锋教育版权所有', textColor: 'rgba(180, 180, 180, 0.4)' }">
      <router-view v-slot="{ Component }">
        <transition appear name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- </el-watermark> -->
      <!-- 内容 -->
    </main>
    <footer>2023 © QFADMIN 前端扛把子@千锋教育 🔥 👊🏻👊🏻👊🏻</footer>
    <!-- 主体 -->
  </section>
</template>
<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
  main {
    flex: 1;
    width: 96%;
    flex: 1;
    margin: 20px auto;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  footer {
    width: 100%;
    height: 39px;
    background-color: #fff;
    font-size: 12px;
    border-top: 1px solid #e4e7ed;
    color: #00000073;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
