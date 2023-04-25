<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
      <!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
      <!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <a-card title="材料审核">
        <template #extra>
          <span>
            <a-space>
              <a-typography-text style="font-size: 14px;">选择实验室</a-typography-text>
              <a-input placeholder="选择实验室" :style="{width:'160px'}"></a-input>
              <a-typography-text style="font-size: 14px; margin-left: 5px">选择日期</a-typography-text>
              <a-date-picker :style="{width:'160px'}"></a-date-picker>
              <a-typography-text style="font-size: 14px; margin-left: 5px">审核状态</a-typography-text>
              <a-select :style="{width:'110px'}" placeholder="审核状态">
                <a-option>已审核</a-option>
                <a-option>未审核</a-option>
              </a-select>
              <a-button type="primary">搜索</a-button>
            </a-space>
          </span>
        </template>
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
    'title': '材料',
    'dataIndex': 'material',
    'align': ('center' as 'center'),
  },
  {
    'title': '实验室',
    'dataIndex': 'lab',
    'align': ('center' as 'center'),
  },
  {
    'title': '时间',
    'dataIndex': 'time',
    'align': ('center' as 'center'),
  },
  {
    'title': '审核状态',
    'dataIndex': 'status',
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
    'material': '关于xxxx.pdf',
    'lab': '抗震工程技术四川省重点实验室',
    'time': '2022-10-08',
    'status': '已审核',
    'remark': '',
  },
  {
    'key': '',
    'material': '',
    'lab': '',
    'time': '',
    'status': '',
    'remark': '',
  },
  {
    'key': '',
    'material': '',
    'lab': '',
    'time': '',
    'status': '',
    'remark': '',
  },
  {
    'key': '',
    'material': '',
    'lab': '',
    'time': '',
    'status': '',
    'remark': '',
  }
]
</script>

<style scoped>

</style>