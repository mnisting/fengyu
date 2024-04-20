<script setup lang="ts">
import { ref, reactive } from 'vue';
import ComLogin from './components/comLogin.vue';
import { accountRules, psdRules } from './components/rules';
import { useRouter } from 'vue-router';

const router = useRouter();

// 表单参数
const formData = reactive({
  account: '',
  psd: ''
});

const formRef = ref();
// 登录
const onLogin = () => {
  formRef.value
    ?.validate()
    .then(() => {
      console.log('pass');
    })
    .catch(() => {
      console.log('fail');
      1;
    });
};

// 切换登录方式
const onSwitch = () => {
  router.push({
    path: '/login/sms'
  });
};
</script>
<template>
  <div class="account">
    <ComLogin login-type="手机号码登录" @switch-type="onSwitch" @on-submit="onLogin">
      <van-form ref="formRef">
        <!-- 账号密码登录 -->
        <van-cell-group>
          <van-field v-model="formData.account" placeholder="请输入手机号/用户名" :rules="accountRules" name="account" />
          <van-field v-model="formData.psd" type="password" placeholder="请输入密码" :rules="psdRules" name="psd" />
        </van-cell-group>
      </van-form>
    </ComLogin>
  </div>
</template>
<style lang="less" scoped></style>
