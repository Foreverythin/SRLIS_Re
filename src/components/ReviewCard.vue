<template>
  <a-card title="审核" style="margin-right: 20px;">
    <div>
      <a-row v-for="content in data" class="row">
        <a-col :span="12">
          {{ content.title }}
        </a-col>
        <a-col :span="6">
          {{ content.number }}
        </a-col>
        <a-col :span="6">
          {{ content.status }}
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
const columns = [
  {
    title: 'title',
    dataIndex: 'title',
  },
  {
    title: 'number',
    dataIndex: 'number',
  },
  {
    title: 'status',
    dataIndex: 'status',
  }
]

const data = [
  {
    key: '1',
    title: '基本信息',
    number: '1条',
    status: '待审核',
  },
  {
    key: '2',
    title: '研究方向与人员',
    number: '6条',
    status: '待审核',
  },
  {
    key: '3',
    title: '学术/科技委员会',
    number: '3条',
    status: '待审核',
  },
  {
    key: '4',
    title: '运行状态',
    number: '4条',
    status: '待审核',
  },
  {
    key: '5',
    title: '考核状态',
    number: '1条',
    status: '待审核',
  },
  {
    key: '6',
    title: '实验室简介',
    number: '2条',
    status: '待审核',
  },
]
</script>

<style scoped>
.row {
  border-bottom: 1px solid #f0f0f0;
  padding: 8px 0 8px 10px;
  margin-bottom: 2px;
}

.row:hover {
  background-color: #f2f3f5;
}
</style>
