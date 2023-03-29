<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
      <a-affix :offset-top="20">
        <FilterCard></FilterCard>
      </a-affix>
    </a-col>
    <a-col :span="17">
      <a-card title="基本信息">
        <template #extra>
          <span>
            <a-space>
              <a-typography-text style="font-size: 16px;">选择实验室</a-typography-text>
              <a-input></a-input>
            </a-space>
          </span>
        </template>
        <a-descriptions :data="data" size="large" table-layout="fixed" :column="2" bordered />
      </a-card>
    </a-col>
    <a-col :span="1"></a-col>
  </a-row>
</template>

<script lang="ts" setup>
import FilterCard from "../../components/FilterCard.vue"

const data = [
  {
    'label': '基地名称',
    'value': '抗震工程技术四川省重点实验室'
  },
  {
    'label': '基地级别',
    'value': '四川省'
  },
  {
    'label': '主管部门',
    'value': '四川省科技厅'
  },
  {
    'label': '成立日期',
    'value': '2008.6'
  },
  {
    'label': '批复文件',
    'value': '关于xxxx.pdf'
  },
  {
    'label': '验收时间',
    'value': '2010.6'
  },
  {
    'label': '学院',
    'value': '土木工程学院'
  },
  {
    'label': '是否合建',
    'value': '否'
  },
  {
    'label': '负责人',
    'value': '赵灿辉'
  },
  {
    'label': '联系人',
    'value': '赵灿辉'
  }
]
</script>

<style scoped>

</style>