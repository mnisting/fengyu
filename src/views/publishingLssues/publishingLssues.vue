<template>
  <h3>填写详细描述</h3>

  <van-cell-group inset>
    <van-field
      v-model="message"
      rows="10"
      autosize
      placeholder="请描述你的问题"
      label-align="top"
      type="textarea"
      maxlength="50"
      show-word-limit
    />
  </van-cell-group>

  <h4>图片上传</h4>
  <div>
    <span>最多添加9张照片</span>
  </div>
  <van-uploader v-model="fileList" multiple :max-count="9" />

  <van-floating-panel v-if="tagpanel" v-model:height="height" :anchors="anchors">
    <div class="panel_title">
      <h4>选择标签</h4>
      <van-button type="primary" size="mini" @click="tagpanel = !tagpanel">确认</van-button>
    </div>

    <div style="text-align: center; padding: 15px">
      <van-tag
        v-for="i in 100"
        :plain="tagpanelList.find((_) => _ == `标签${i}`)"
        type="primary"
        size="large"
        style="margin: 6px"
        @click="pushtagpanel(`标签${i}`)"
        >标签{{ i }}</van-tag
      >
    </div>
  </van-floating-panel>

  <h4>选择标签</h4>
  <van-button type="default" @click="tagpanel = !tagpanel">选择标签</van-button>
  <br />
  <van-tag v-for="i in tagpanelList" type="primary" size="large" style="margin: 6px" @click="outtagpanel(i)">{{ i }}</van-tag>
</template>

<script setup lang="ts">
const tagpanel = ref(false);
const message = ref('');
const fileList = ref([
  { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
  // Uploader 根据文件后缀来判断是否为图片文件
  // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
  { url: 'https://cloud-image', isImage: true }
]);

const anchors = [100, Math.round(0.4 * window.innerHeight), Math.round(0.7 * window.innerHeight)];
const height = ref(anchors[0]);
const tagpanelList = ref([]);
const pushtagpanel = (i) => {
  tagpanelList.value.push(i);
};
const outtagpanel = (i) => {
  tagpanelList.value = tagpanelList.value.filter((_) => _ != i);
};
</script>

<style lang="less" scoped>
.panel_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
}
</style>
