<template>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-card
      v-for="item in list"
      :key="item"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    >
      <template #title>
        商品标题
      </template>
      <template #desc>
        商品标题desc
      </template>
      <template #num>
        商品标题num
      </template>
      <template #price>
        商品标题price
      </template>
      <template #tags>
      </template>
      <template #footer>
      </template>
    </van-card>
  </van-list>
</template>

<script setup lang="ts">
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style lang="scss" scoped></style>
