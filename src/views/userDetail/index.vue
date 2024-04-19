<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
  <div class="userDetail">
    <van-nav-bar left-text="个人信息" left-arrow @click-left="router.back()" />

    <van-cell-group inset>
      <van-cell title="头像" is-link value="内容">
        <template #value>
          <van-icon name="search" class="search-icon" />
        </template>
      </van-cell>
      <van-cell title="昵称" is-link value="内容" />
      <van-cell title="手机号" is-link value="内容" />
    </van-cell-group>
  </div>
</template>
<style lang="less" scoped>
.userDetail {
  height: 100vh;
  background-color: #f5f5f5;
  .van-nav-bar {
    background-color: unset;
    :deep(.van-icon),
    :deep(.van-nav-bar__text) {
      color: #000;
    }
  }
  .van-cell-group {
    margin-top: 20px;
  }
}
</style>
