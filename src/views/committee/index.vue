<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
      <a-affix :offset-top="20">
        <FilterCard></FilterCard>
      </a-affix>
    </a-col>
    <a-col :span="17">
      <a-card title="学术/科技委员会">
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
    'title': '职务',
    'dataIndex': 'position',
  },
  {
    'title': '姓名',
    'dataIndex': 'name',
  },
  {
    'title': '职称',
    'dataIndex': 'title',
  },
  {
    'title': '单位',
    'dataIndex': 'unit',
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