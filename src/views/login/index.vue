<script setup lang="ts"></script>
<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 标题 -->
    <div class="title">
      <h2>锋域</h2>
      <div>来千锋不是一阵子，是一辈子</div>
    </div>
    <!-- 登录选项按钮组 -->
    <van-row :gutter="10">
      <van-col span="24">
        <van-button type="primary" round @click="$router.push({ path: '/loginTo', query: { type: 'psd' } })">
          账号密码登录
        </van-button>
      </van-col>
      <van-col span="24">
        <van-button type="primary" round @click="$router.push({ path: '/loginTo', query: { type: 'sms' } })">
          手机号码登录
        </van-button>
      </van-col>
    </van-row>
  </div>
</template>
<style lang="less" scoped>
.login {
  height: 100vh;
  .title {
    text-align: center;
    height: 80%;
    h2 {
      padding-top: 300px;
    }
  }
  .van-row {
    padding: 0 20px;
  }
  .van-button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
