<script setup lang="ts"></script>
<template>
  <div class="login">
    <!-- 标题 -->
    <div class="title">
      <img src="@/assets/images/logo.png" alt="" />
      <div style="margin: 20px 0">来千锋不是一阵子，是一辈子</div>
      <div class="tips">*本小程序仅限企业内部使用，已设置内部白名单，使用手机号或千锋学员身份证登录</div>
    </div>
    <!-- 登录选项按钮组 -->
    <van-row :gutter="10">
      <van-col span="24">
        <van-button color="#1b24a7" round @click="$router.push('/login/account')"> 账号密码登录 </van-button>
      </van-col>
      <van-col span="24">
        <van-button round @click="$router.push('/login/sms')"> 手机号码登录 </van-button>
      </van-col>
      <van-col span="24">
        <div class="registryTip" @click="$router.push('/login/registry')">没有账号？去注册→</div>
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
    font-size: 14px;
    color: #666;
    img {
      margin-top: 160px;
    }
    .tips {
      font-size: 12px;
      text-align: left;
      margin: 20px 10px;
    }
  }
  .van-row {
    padding: 0 20px;
    text-align: center;
    .registryTip {
      color: #1b24a7;
      font-size: 12px;
    }
  }
  .van-button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
