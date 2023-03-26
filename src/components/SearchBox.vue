<template>
  <a-input-group>
    <a-select :options="options" :style="{width:'120px'}" v-model="selectedValue" :default-value="options[0]" />
    <a-input-search :style="{width:'300px'}" placeholder="请输入基地名称" search-button>
      <template #prefix>
        <IconSearch />
      </template>
      <template #button-default>
        <div @click="search">
          搜索
        </div>
      </template>
    </a-input-search>
  </a-input-group>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {IconSearch} from "@arco-design/web-vue/es/icon";

const selectedValue = ref('主页');

const options = reactive(['主页', '基本信息', '研究方向与人员', '学术/技术委员会', '考核状态', '实验室简介']);

const search = () => {
  console.log('search');
  console.log(selectedValue);
}
</script>

<style scoped>

</style>