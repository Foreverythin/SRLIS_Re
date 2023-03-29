<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
      <a-affix :offset-top="20">
        <FilterCard></FilterCard>
      </a-affix>
    </a-col>
    <a-col :span="17">
      <a-card title="考核状态">
        <a-table :columns="columns" :data="data"></a-table>
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
import FilterCard from "../../components/FilterCard.vue"

const columns = [
  {
    'title': '序号',
    'dataIndex': 'key',
  },
  {
    'title': '考核种类',
    'dataIndex': 'type',
  },
  {
    'title': '考核时间',
    'dataIndex': 'time',
  },
  {
    'title': '结果',
    'dataIndex': 'result',
  },
  {
    'title': '文件',
    'dataIndex': 'file',
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
  }
]
</script>

<style scoped>

</style>