<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { accountRules, psdRules, telRules, smsRules } from './rules';
const route = useRoute();
const router = useRouter();

// 登录相关参数
const account = ref('');
const psd = ref('');
const tel = ref('');
const sms = ref('');

// 获取验证码
const getCode = () => {
  console.log('getCode');
};

// 隐私协议勾选框
const checked = ref(false);
// 打开用户协议
const openUserAgreement = () => {
  console.log('打开用户协议');
};
const openPrivacyAgreement = () => {
  console.log('打开隐私协议');
};

const formRef = ref();
// 登录
const handleSubmit = () => {
  formRef.value
    ?.validate()
    .then(() => {
      console.log('pass');
    })
    .catch(() => {
      console.log('fail');
    });
};
// 隐私协议未勾选时提示弹窗
const dlgShow = ref(false);
const handleLogin = () => {
  // console.log('login');
  if (!checked.value) {
    dlgShow.value = true;
  } else {
    handleSubmit();
  }
};
const confirm = () => {
  // console.log('confirm');
  checked.value = true;
  handleSubmit();
};

// 切换登录方式
const switchLoginType = () => {
  router.push({
    path: '/loginTo',
    query: {
      type: route.query.type === 'psd' ? 'sms' : 'psd'
    }
  });
};
</script>
<template>
  <div class="loginTo">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="router.push('/login')" />
    <!-- 标题 -->
    <div class="title">
      <h4>锋域</h4>
      <div>来千锋不是一阵子，是一辈子</div>
    </div>
    <!-- 登录部分 -->
    <van-form ref="formRef">
      <!-- 账号密码登录 -->
      <van-cell-group v-if="route.query.type === 'psd'">
        <van-field v-model="account" placeholder="请输入手机号/用户名" :rules="accountRules" name="account" />
        <van-field v-model="psd" type="password" placeholder="请输入密码" :rules="psdRules" name="psd" />
      </van-cell-group>
      <!-- 手机号验证码登录 -->
      <van-cell-group v-else>
        <van-field v-model="tel" type="tel" placeholder="请输入手机号" :rules="telRules" name="tel" />
        <van-field v-model="sms" center clearable placeholder="请输入短信验证码" :rules="smsRules">
          <template #button>
            <van-button size="small" type="primary" @click="getCode">发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <!-- 隐私协议 -->
      {{ checked }}
      <div class="checkbox">
        <van-checkbox v-model="checked" />
        <div class="tips">
          <span>同意</span>
          <div @click="openUserAgreement">锋域用户协议、</div>
          <div @click="openPrivacyAgreement">隐私协议</div>
        </div>
      </div>
      <van-button type="primary" round @click="handleLogin"> 登录 </van-button>
      <div class="switchDiv" @click="switchLoginType">{{ route.query.type === 'psd' ? '手机号码登录' : '账号密码登录' }}</div>
    </van-form>
    <!-- 隐私协议提示弹窗 -->
    <van-dialog v-model:show="dlgShow" title="服务协议及隐私保护" show-cancel-button @confirm="confirm">
      <div class="dlgTips">
        <span>为了更好地保障您的合法权益，请您阅读并同意 </span>
        <span @click="openUserAgreement" style="color: #1989fa">锋域用户协议、</span>
        <span @click="openPrivacyAgreement" style="color: #1989fa">隐私协议，</span>
        <span>未注册的手机号验证登录后自动创建锋域账号。</span>
      </div>
    </van-dialog>
  </div>
</template>
<style lang="less" scoped>
.loginTo {
  height: 100vh;
  .title {
    text-align: center;
    margin: 100px 0;
  }
  .van-form {
    padding: 0 20px;
    .checkbox {
      display: flex;
      font-size: 14px;
      margin-top: 20px;
      align-items: center;
      .tips {
        display: flex;
        margin-left: 10px;
        span {
          margin-right: 8px;
        }
        div {
          color: #1989fa;
        }
      }
    }
    .van-button {
      width: 100%;
      margin: 20px 0;
    }
    .switchDiv {
      font-size: 12px;
      margin-left: 10px;
    }
  }
  .dlgTips {
    padding: 20px;
  }
}
</style>
