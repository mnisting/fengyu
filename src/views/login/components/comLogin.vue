<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const emit = defineEmits(['switchType', 'onSubmit']);
const props = defineProps({
  // 页面标题
  pageTitle: {
    type: String,
    default: '登录'
  },
  loginType: {
    type: String,
    default: '登录'
  }
});

// 隐私协议勾选框
const checked = ref<Boolean>(false);
// 打开用户协议
const openUserAgreement = () => {
  console.log('打开用户协议');
};
const openPrivacyAgreement = () => {
  console.log('打开隐私协议');
};

// 隐私协议未勾选时提示弹窗
const dlgShow = ref<Boolean>(false);
const onClick = () => {
  // console.log('login');
  if (!checked.value) {
    dlgShow.value = true;
  } else {
    emit('onSubmit');
  }
};
// 弹窗确认
const onConfirm = () => {
  // console.log('confirm');
  checked.value = true;
  emit('onSubmit');
};

// 切换登录方式
const switchLoginType = () => {
  emit('switchType');
};
</script>
<template>
  <div class="comLogin">
    <!-- 导航栏 -->
    <van-nav-bar :title="props.pageTitle" left-arrow @click-left="router.push('/login')" />
    <!-- 标题 -->
    <div class="title">
      <img src="@/assets/images/logo.png" alt="" />
      <div style="color: #666; margin-top: 10px; font-size: 14px">来千锋不是一阵子，是一辈子</div>
    </div>
    <!-- 登录部分 -->
    <div class="content">
      <!-- 插槽，自定义中间部分的表单内容 -->
      <slot></slot>
      <!-- 隐私协议 -->
      <div class="checkbox">
        <van-checkbox v-model="checked" />
        <div class="tips">
          <span>同意</span>
          <div @click="openUserAgreement">锋域用户协议、</div>
          <div @click="openPrivacyAgreement">隐私协议</div>
        </div>
      </div>
      <van-button color="#1b24a7" round @click="onClick"> {{ pageTitle }} </van-button>
      <div class="switchDiv" @click="switchLoginType">{{ loginType }}</div>
    </div>
    <!-- 隐私协议提示弹窗 -->
    <van-dialog v-model:show="dlgShow" title="服务协议及隐私保护" show-cancel-button @confirm="onConfirm">
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
.comLogin {
  // height: 100vh;
  :deep(.van-nav-bar .van-icon) {
    color: unset;
  }
  .title {
    margin: 60px 20px;
  }
  .content {
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
          color: #1b24a7;
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
      color: '#666';
    }
  }
  .dlgTips {
    padding: 20px;
  }
}
</style>
