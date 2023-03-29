<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
      <a-affix :offset-top="20">
        <FilterCard></FilterCard>
      </a-affix>
    </a-col>
    <a-col :span="17">
      <a-card class="table-card" title="实验室人员与研究方向">
        <a-table :columns="columns_table1" :data="data_table1"></a-table>
      </a-card>
      <a-card class="table-card" title="固定人员">
        <a-table :columns="columns_table2" :data="data_table2"></a-table>
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
import FilterCard from "../../components/FilterCard.vue"

const columns_table1 = [
  {
    'title': '序号',
    'dataIndex': 'key',
    'align': 'center'
  },
  {
    'title': '研究方向',
    'dataIndex': 'researchDirection',
    'align': 'center'
  },
  {
    'title': '方向带头人',
    'dataIndex': 'leader',
    'align': 'center'
  }
]

const columns_table2 = [
  {
    'title': '序号',
    'dataIndex': 'key',
  },
  {
    'title': '姓名',
    'dataIndex': 'name',
  },
  {
    'title': '职务',
    'dataIndex': 'position',
  },
  {
    'title': '职称',
    'dataIndex': 'title',
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

const data_table2 = [
  {
    'key': '1',
    'name': '',
    'position': '',
    'title': ''
  },
  {
    'key': '2',
    'name': '',
    'position': '',
    'title': ''
  },
  {
    'key': '3',
    'name': '',
    'position': '',
    'title': ''
  },
  {
    'key': '4',
    'name': '',
    'position': '',
    'title': ''
  },
  {
    'key': '5',
    'name': '',
    'position': '',
    'title': ''
  },
  {
    'key': '6',
    'name': '',
    'position': '',
    'title': ''
  }
]

</script>

<style scoped>
.table-card {
  margin-bottom: 20px;
}
</style>