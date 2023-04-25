<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
<!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
<!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <!--  基本信息表  -->
      <a-card title="基本信息" class="table-card">
        <a-table :columns="columns_table1" :data="data_table1" :scroll="{x: 1300}" :bordered="{cell:true}" :stripe="true" />
      </a-card>
      <!--  基本情况表  -->
      <a-card title="基本情况" class="table-card">
        <a-table :columns="columns_table2" :data="data_table2" :scroll="{x: 1300}" :bordered="{cell:true}" :stripe="true" />
      </a-card>
      <!--  运行状态表  -->
      <a-card title="运行状态" class="table-card">
        <a-table :columns="columns_table3" :data="data_table3" :scroll="{x: 1300}" :bordered="{cell:true}" :stripe="true" />
      </a-card>
      <!--  考核状态表   -->
      <a-card title="考核状态" class="table-card">
        <a-table :columns="columns_table4" :data="data_table4" :scroll="{x: 1300}" :bordered="{cell:true}" :stripe="true" />
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
// 异步加载组件SideBar
import { defineAsyncComponent } from 'vue'
const SideBar = defineAsyncComponent(() => import('../../components/SideBar.vue'))

const columns_table1 = [
  {
    'title': '序号',
    'dataIndex': 'key',
    'align': ('center' as 'center'),
    'cell-style': {'width': '500px'}
  },
  {
    'title': '基地',
    'dataIndex': 'base',
    'align': ('center' as 'center'),
  },
  {
    'title': '基地类型',
    'dataIndex': 'baseType',
    'align': ('center' as 'center'),
  },
  {
    'title': '基地级别',
    'dataIndex': 'baseLevel',
    'align': ('center' as 'center'),
  },
  {
    'title': '依托学院',
    'dataIndex': 'college',
    'align': ('center' as 'center'),
  },
  {
    'title': '主管部门',
    'dataIndex': 'department',
    'align': ('center' as 'center'),
  },
  {
    'title': '负责人',
    'dataIndex': 'leader',
    'align': ('center' as 'center'),
  },
  {
    'title': '批准时间',
    'dataIndex': 'approvalTime',
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
    'title': '基地',
    'dataIndex': 'base',
    'align': ('center' as 'center'),
  },
  {
    'title': '实验室主任',
    'dataIndex': 'director',
    'align': ('center' as 'center'),
  },
  {
    'title': '实验室副主任',
    'dataIndex': 'viceDirector',
    'align': ('center' as 'center'),
  },
  {
    'title': '实验室联系人',
    'dataIndex': 'contact',
    'align': ('center' as 'center'),
  },
  {
    'title': '研究方向数量',
    'dataIndex': 'researchDirectionNum',
    'align': ('center' as 'center'),
  },
  {
    'title': '固定人员数',
    'dataIndex': 'fixedNum',
    'align': ('center' as 'center'),
  },
  {
    'title': '是否财务设立专卡',
    'dataIndex': 'hasFinancialCard',
    'align': ('center' as 'center'),
  },
  {
    'title': '实验室场地面积',
    'dataIndex': 'area',
    'align': ('center' as 'center'),
  },
  {
    'title': '实验室简介更新时间',
    'dataIndex': 'updateTime',
    'align': ('center' as 'center'),
  }
]

const columns_table3 = [
  {
    'title': '序号',
    'dataIndex': 'key',
    'align': ('center' as 'center'),
  },
  {
    'title': '基地',
    'dataIndex': 'base',
    'align': ('center' as 'center'),
  },
  {
    'title': '本年度召开学术委员会次数',
    'dataIndex': 'committeeNum',
    'align': ('center' as 'center'),
  },
  {
    'title': '本年度召开主任办公会次数',
    'dataIndex': 'officeNum',
    'align': ('center' as 'center'),
  },
  {
    'title': '本年度实验室开放活动次数',
    'dataIndex': 'activityNum',
    'align': ('center' as 'center'),
  },
  {
    'title': '本年度是否开展开放合作课题',
    'dataIndex': 'hasCooperativeProject',
    'align': ('center' as 'center'),
  }
]

const columns_table4 = [
  {
    'title': '序号',
    'dataIndex': 'key',
    'align': ('center' as 'center'),
  },
  {
    'title': '基地',
    'dataIndex': 'base',
    'align': ('center' as 'center'),
  },
  {
    'title': '最新年度考核时间',
    'dataIndex': 'yearlyAssessmentTime',
    'align': ('center' as 'center'),
  },
  {
    'title': '最新年度考核结果',
    'dataIndex': 'yearlyAssessmentResult',
    'align': ('center' as 'center'),
  },
  {
    'title': '最新周期考核时间',
    'dataIndex': 'periodAssessmentTime',
    'align': ('center' as 'center'),
  },
  {
    'title': '最新周期考核结果',
    'dataIndex': 'periodAssessmentResult',
    'align': ('center' as 'center'),
  }
]

const data_table1 = reactive([{}, {}, {}, {}, {}, {}])

const data_table2 = reactive([{}, {}, {}, {}, {}, {}])

const data_table3 = reactive([{}, {}, {}, {}, {}, {}])

const data_table4 = reactive([{}, {}, {}, {}, {}, {}])
</script>

<style scoped>
.table-card {
  margin-bottom: 20px;
}
</style>