<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
      <a-affix :offset-top="20">
        <FilterCard></FilterCard>
      </a-affix>
    </a-col>
    <a-col :span="17">
      <!--  基本信息表  -->
      <a-card title="基本信息" class="table-card">
        <a-table :columns="columns_table1" :data="data_table1" :scroll="{x: 1300}" />
      </a-card>
      <!--  基本情况表  -->
      <a-card title="基本情况" class="table-card">
        <a-table :columns="columns_table2" :data="data_table2" :scroll="{x: 1300}" />
      </a-card>
      <!--  运行状态表  -->
      <a-card title="运行状态" class="table-card">
        <a-table :columns="columns_table3" :data="data_table3" :scroll="{x: 1300}" />
      </a-card>
      <!--  考核状态表   -->
      <a-card title="考核状态" class="table-card">
        <a-table :columns="columns_table2" :data="data_table2" :scroll="{x: 1300}" />
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
import FilterCard from "../../components/FilterCard.vue"
import {reactive} from "vue"

const columns_table1 = [
  {
    'title': '序号',
    'dataIndex': 'key'
  },
  {
    'title': '基地',
    'dataIndex': 'base'
  },
  {
    'title': '基地类型',
    'dataIndex': 'baseType'
  },
  {
    'title': '基地级别',
    'dataIndex': 'baseLevel'
  },
  {
    'title': '依托学院',
    'dataIndex': 'college'
  },
  {
    'title': '主管部门',
    'dataIndex': 'department'
  },
  {
    'title': '负责人',
    'dataIndex': 'leader'
  },
  {
    'title': '批准时间',
    'dataIndex': 'approvalTime'
  }
]

const columns_table2 = [
  {
    'title': '序号',
    'dataIndex': 'key'
  },
  {
    'title': '基地',
    'dataIndex': 'base'
  },
  {
    'title': '实验室主任',
    'dataIndex': 'director'
  },
  {
    'title': '实验室副主任',
    'dataIndex': 'viceDirector'
  },
  {
    'title': '实验室联系人',
    'dataIndex': 'contact'
  },
  {
    'title': '研究方向数量',
    'dataIndex': 'researchDirectionNum'
  },
  {
    'title': '固定人员数',
    'dataIndex': 'fixedNum'
  },
  {
    'title': '是否财务设立专卡',
    'dataIndex': 'hasFinancialCard'
  },
  {
    'title': '实验室场地面积',
    'dataIndex': 'area'
  },
  {
    'title': '实验室简介更新时间',
    'dataIndex': 'updateTime'
  }
]

const columns_table3 = [
  {
    'title': '序号',
    'dataIndex': 'key'
  },
  {
    'title': '基地',
    'dataIndex': 'base'
  },
  {
    'title': '本年度召开学术委员会次数',
    'dataIndex': 'committeeNum'
  },
  {
    'title': '本年度召开主任办公会次数',
    'dataIndex': 'officeNum'
  },
  {
    'title': '本年度实验室开放活动次数',
    'dataIndex': 'activityNum'
  },
  {
    'title': '本年度是否开展开放合作课题',
    'dataIndex': 'hasCooperativeProject'
  }
]

const columns_table4 = [
  {
    'title': '序号',
    'dataIndex': 'key'
  },
  {
    'title': '基地',
    'dataIndex': 'base'
  },
  {
    'title': '最新年度考核时间',
    'dataIndex': 'yearlyAssessmentTime'
  },
  {
    'title': '最新年度考核结果',
    'dataIndex': 'yearlyAssessmentResult'
  },
  {
    'title': '最新周期考核时间',
    'dataIndex': 'periodAssessmentTime'
  },
  {
    'title': '最新周期考核结果',
    'dataIndex': 'periodAssessmentResult'
  }
]

const data_table1 = reactive([
  {
    'key': '1',
    'base': '基地1',
    'baseType': '基地类型1',
    'baseLevel': '基地级别1',
    'college': '依托学院1',
    'department': '主管部门1',
    'leader': '负责人1',
    'approvalTime': '批准时间1'
  },
  {
    'key': '2',
    'base': '基地2',
    'baseType': '基地类型2',
    'baseLevel': '基地级别2',
    'college': '依托学院2',
    'department': '主管部门2',
    'leader': '负责人2',
    'approvalTime': '批准时间2'
  },
  {
    'key': '3',
    'base': '基地3',
    'baseType': '基地类型2',
    'baseLevel': '基地级别2',
    'college': '依托学院2',
    'department': '主管部门2',
    'leader': '负责人2',
    'approvalTime': '批准时间2'
  },
  {
    'key': '4',
    'base': '基地4',
    'baseType': '基地类型2',
    'baseLevel': '基地级别2',
    'college': '依托学院2',
    'department': '主管部门2',
    'leader': '负责人2',
    'approvalTime': '批准时间2'
  },
  {
    'key': '5',
    'base': '基地4',
    'baseType': '基地类型2',
    'baseLevel': '基地级别2',
    'college': '依托学院2',
    'department': '主管部门2',
    'leader': '负责人2',
    'approvalTime': '批准时间2'
  },
  {
    'key': '6',
    'base': '基地4',
    'baseType': '基地类型2',
    'baseLevel': '基地级别2',
    'college': '依托学院2',
    'department': '主管部门2',
    'leader': '负责人2',
    'approvalTime': '批准时间2'
  },
  {
    'key': '7',
    'base': '基地4',
    'baseType': '基地类型2',
    'baseLevel': '基地级别2',
    'college': '依托学院2',
    'department': '主管部门2',
    'leader': '负责人2',
    'approvalTime': '批准时间2'
  }
])

const data_table2 = reactive([
  {
    'key': '1',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  },
  {
    'key': '2',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  },
  {
    'key': '3',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  },
  {
    'key': '4',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  },
  {
    'key': '5',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  },
  {
    'key': '6',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  },
  {
    'key': '7',
    'base': '基地1',
    'director': '实验室主任1',
    'viceDirector': '实验室副主任1',
    'contact': '实验室联系人1',
    'researchDirectionNum': '5',
    'fixedNum': '100',
    'hasFinancialCard': '是',
    'area': '200',
    'updateTime': '2022-10-12'
  }
])

const data_table3 = reactive([
  {
    'key': '1',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是'
  },
  {
    'key': '2',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是',
  },
  {
    'key': '3',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是',
  },
  {
    'key': '4',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是',
  },
  {
    'key': '5',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是',
  },
  {
    'key': '6',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是',
  },
  {
    'key': '7',
    'base': '基地1',
    'committeeNum': '5',
    'officeNum': '5',
    'activityNum': '5',
    'hasCooperativeProject': '是',
  }
])

const data_table4 = reactive([
  {
    'key': '1',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  },
  {
    'key': '2',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  },
  {
    'key': '3',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  },
  {
    'key': '4',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  },
  {
    'key': '5',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  },
  {
    'key': '6',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  },
  {
    'key': '7',
    'base': '基地1',
    'yearlyAssessmentTime': '2023-02-11',
    'yearlyAssessmentResult': '优秀',
    'periodAssessmentLevel': '2023-02-13',
    'periodAssessmentResult': '优秀'
  }
])
</script>

<style scoped>
.table-card {
  margin-bottom: 20px;
}
</style>