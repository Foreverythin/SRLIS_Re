<template>
  <a-card title="筛选栏" style="margin-right: 20px;">
    <a-space direction="vertical" size="mini" fill>
      <template v-for="item in filterOptions">
        <a-select :placeholder="item.name" allow-clear size="large">
          <a-option v-for="option in item.options" :key="option">
            {{ option }}
          </a-option>
        </a-select>
      </template>
    </a-space>
    <template #actions>
      <a-button>清空</a-button>
      <a-button type="primary">筛选</a-button>
    </template>
  </a-card>
</template>

<script lang="ts" setup>

const filterOptions = [
  {
    'name': '基地类型',
    'options': ['国家实验室', '国家重点实验室', '国家工程技术研究中心', '国家工程实验室', '国地联合工程实验室', '国际合作基地',
      '教育部重点实验室', '教育部工程研究中心', '四川省重点实验室', '四川省工程实验室', '四川省工程技术研究中心', '四川省工程研究中心',
      '四川省国合基地', '国家铁路局创新基地']
  },
  {
    'name': '基地级别',
    'options': ['国家级', '教育部', '四川省', '国合基地', '行业基地']
  },
  {
    'name': '学院',
    'options': ['土木工程学院', '机械工程学院', '电气工程学院', '信息科学与技术学院', '计算机与人工智能学院', '经济管理学院',
      '外国语学院', '交通运输与物流学院', '材料科学与工程学院', '地球科学与环境工程学院', '建筑学院', '设计艺术学院',
      '物理科学与技术学院', '人文学院', '公共管理学院', '医学院', '生命科学与工程学院', '化学学院', '力学与航空航天学院',
      '数学学院', '马克思主义学院', '体育学院', '心理研究与咨询中心', '牵引动力国家重点实验室', '利兹学院',
      '茅以升学院', '智慧城市与交通学院/城市轨道交通学院', '轨道交通国家实验室', '天佑铁道学院', '创新创业学院 工程训练中心',
      '信息化研究院', '唐山研究院', '智慧控制与仿真工程研究中心', '智能检测研究院', '人工智能研究院', '网络空间安全研究院',
      '国际老龄科学研究院', '前沿科学研究院', '未来科技研究院']
  },
  {
    'name': '主管部门',
    'options': ['科技部', '国家发改委', '教育部', '四川省科技厅', '四川省发改委']
  },
  {
    'name': '查看方式',
    'options': ['按照类别', '按照学院']
  }
]

</script>

<style scoped>
</style>