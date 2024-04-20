<script setup lang="ts">
import { ref, reactive } from 'vue';
import ComLogin from './components/comLogin.vue';
import { telRules, smsRules } from './components/rules';
import { useRouter } from 'vue-router';

const router = useRouter();

// 表单参数
const formData = reactive({
  tel: '',
  sms: ''
});

// 获取验证码
const getCode = () => {
  console.log('获取验证码');
};

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
    });
};

// 切换登录方式
const onSwitch = () => {
  router.push({
    path: '/login/account'
  });
};
</script>
<template>
  <div class="account">
    <ComLogin login-type="账号密码登录" @switch-type="onSwitch" @on-submit="onLogin">
      <van-form ref="formRef">
        <!-- 手机号验证码登录 -->
        <van-cell-group>
          <van-field v-model="formData.tel" type="tel" placeholder="请输入手机号" :rules="telRules" name="tel" />
          <van-field v-model="formData.sms" center clearable placeholder="请输入短信验证码" :rules="smsRules">
            <template #button>
              <van-button size="small" color="#1b24a7" @click="getCode">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
      </van-form>
    </ComLogin>
  </div>
</template>
<style lang="less" scoped></style>
