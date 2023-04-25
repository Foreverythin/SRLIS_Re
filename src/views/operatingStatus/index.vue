<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
<!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
<!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <a-card title="运行状态">
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
    'title': '类型',
    'dataIndex': 'type',
    'align': ('center' as 'center'),
  },
  {
    'title': '时间',
    'dataIndex': 'time',
    'align': ('center' as 'center'),
  },
  {
    'title': '地点',
    'dataIndex': 'place',
    'align': ('center' as 'center'),
  },
  {
    'title': '备注',
    'dataIndex': 'remark',
    'align': ('center' as 'center'),
  }
]

const data = [
  {
    'key': '1',
    'type': '学术委员会',
    'time': '',
    'place': '',
    'remark': '',
  },
  {
    'key': '2',
    'type': '主任办公会',
    'time': '',
    'place': '',
    'remark': '',
  },
  {
    'key': '3',
    'type': '主任办公会',
    'time': '',
    'place': '',
    'remark': '',
  },
  {
    'key': '4',
    'type': '实验室开发活动',
    'time': '',
    'place': '',
    'remark': '',
  },
  {
    'key': '5',
    'type': '开发合作课题',
    'time': '',
    'place': '',
    'remark': '',
  }
]
</script>

<style scoped>

</style>