<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
<!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
<!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <a-card title="学术/科技委员会">
        <a-table :columns="columns" :data="data" :bordered="{cell:true}" :stripe="true" />
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
// 异步加载组件SideBar
import { defineAsyncComponent } from 'vue'
const SideBar = defineAsyncComponent(() => import('../../components/SideBar.vue'))

const columns = [
  {
    'title': '职务',
    'dataIndex': 'position',
    'align': ('center' as 'center'),
  },
  {
    'title': '姓名',
    'dataIndex': 'name',
    'align': ('center' as 'center'),
  },
  {
    'title': '职称',
    'dataIndex': 'title',
    'align': ('center' as 'center'),
  },
  {
    'title': '单位',
    'dataIndex': 'unit',
    'align': ('center' as 'center'),
  }
]

const data = [
  {
    'position': '主任',
  },
  {
    'position': '副主任',
  },
  {
    'position': '副主任',
  },
  {
    'position': '委员',
  },
  {
    'position': '委员',
  },
  {
    'position': '委员',
  },
  {
    'position': '委员',
  },
]
</script>

<style scoped>

</style>