<script setup lang="ts">
import { ref } from 'vue';

const imgUrl = ref('https://img2.woyaogexing.com/2021/06/04/bc180642bdd0489f865c03efd6ebc324!400x400.jpeg');

// 打开消息页面
const openMessage = () => {
  console.log('打开消息页面');
};
</script>
<template>
  <div class="personalCenter">
    <div class="userBox">
      <!-- 顶部消息按钮 -->
      <div class="message">
        <van-icon name="chat-o" color="#fff" @click="openMessage" />
      </div>
      <!-- 用户头像和用户名 -->
      <van-cell class="user" is-link to="userDetail">
        <template #title>
          <img :src="imgUrl" alt="" />
          <div>好好先生</div>
        </template>
      </van-cell>
    </div>
    <!-- 服务相关 -->
    <div class="serviceBox">
      <van-cell-group inset>
        <van-cell title="面试题收藏集" icon="star" is-link to="personalCenter" />
      </van-cell-group>
      <van-cell-group inset>
        <van-cell title="设置" icon="setting" is-link to="personalCenter" />
      </van-cell-group>
    </div>
  </div>
</template>
<style lang="less" scoped>
.personalCenter {
  height: 100vh;
  background-color: #528fff;
  display: flex;
  flex-direction: column;
  .userBox {
    .message {
      text-align: right;
      padding: 20px 20px 0 0;
    }
    :deep(.user) {
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      background-color: unset;
      .van-cell__right-icon {
        color: #fff;
      }
      .van-cell__title {
        display: flex;
        align-items: center;
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-right: 20px;
      }
    }
  }
  .serviceBox {
    flex: 1;
    background-color: #f5f5f5;
    border-radius: 20px;
    .van-cell-group {
      margin: 10px;
    }
  }
}
</style>
