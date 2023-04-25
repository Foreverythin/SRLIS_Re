<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
<!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
<!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <a-card class="table-card" title="实验室人员与研究方向">
        <a-table :columns="columns_table1" :data="data_table1" :bordered="{cell:true}" :stripe="true"></a-table>
      </a-card>
      <a-card class="table-card" title="固定人员">
        <a-table :columns="columns_table2" :data="data_table2" :bordered="{cell:true}" :stripe="true"></a-table>
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
// 异步加载组件SideBar
import { defineAsyncComponent } from 'vue'
const SideBar = defineAsyncComponent(() => import('../../components/SideBar.vue'))

const columns_table1 = [
  {
    'title': '序号',
    'dataIndex': 'key',
    'align': ('center' as 'center'),
  },
  {
    'title': '研究方向',
    'dataIndex': 'researchDirection',
    'align': ('center' as 'center'),
  },
  {
    'title': '方向带头人',
    'dataIndex': 'leader',
    'align': ('center' as 'center'),
  }
]

const columns_table2 = [
  {
    'title': '序号',
    'dataIndex': 'key',
    'align': ('center' as 'center'),
  },
  {
    'title': '姓名',
    'dataIndex': 'name',
    'align': ('center' as 'center'),
  },
  {
    'title': '职务',
    'dataIndex': 'position',
    'align': ('center' as 'center'),
  },
  {
    'title': '职称',
    'dataIndex': 'title',
    'align': ('center' as 'center'),
  }
]

const data_table1 = [
  {
    'key': '1',
    'researchDirection': '',
    'leader': 'xxx'
  },
  {
    'key': '2',
    'researchDirection': '',
    'leader': 'xxx'
  },
  {
    'key': '3',
    'researchDirection': '',
    'leader': 'xxx'
  }
]

const data_table2 = [{}, {}, {}, {}, {}, {}]

</script>

<style scoped>
.table-card {
  margin-bottom: 20px;
}
</style>