<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
<!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
<!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <a-card title="考核状态">
        <a-table :columns="columns" :data="data" :bordered="{cell:true}" :stripe="true"></a-table>
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
    'title': '序号',
    'dataIndex': 'key',
    'align': ('center' as 'center'),
  },
  {
    'title': '考核种类',
    'dataIndex': 'type',
    'align': ('center' as 'center'),
  },
  {
    'title': '考核时间',
    'dataIndex': 'time',
    'align': ('center' as 'center'),
  },
  {
    'title': '结果',
    'dataIndex': 'result',
    'align': ('center' as 'center'),
  },
  {
    'title': '文件',
    'dataIndex': 'file',
    'align': ('center' as 'center'),
  }
]

const data = [
  {
    'key': '1',
    'type': '验收评估',
    'time': '2017',
    'result': '优秀',
    'file': '验收评估.pdf',
  },
  {
    'key': '2',
    'type': '年度考核',
    'time': '2018',
    'result': '优秀',
    'file': '年度考核.pdf',
  },
  {
    'key': '3',
    'type': '周期评估',
    'time': '2021',
    'result': '良好',
    'file': '周期评估.pdf',
  },
  {},
  {},
  {}
]
</script>

<style scoped>

</style>