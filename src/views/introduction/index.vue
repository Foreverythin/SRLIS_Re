<template>
  <a-row>
    <a-col :span="1"></a-col>
    <a-col :span="5">
<!--      <a-affix :offset-top="20">-->
      <SideBar></SideBar>
<!--      </a-affix>-->
    </a-col>
    <a-col :span="17">
      <a-card class="table-card" title="实验室简介">
        <a-card :bordered="false" :body-style="{'padding': 0}">
          牵引动力国家重点实验室于1989年获国家批准立项建设，1995年通过国家验收，2006年通过实验室国家认可（CNAL）。并于2003年、2008年、2013年和2018年四次通过国家评估，两次被评为优秀国家重点实验室。以实验室为主要支撑的“交通运输工程”学科连续20年位居全国第一（A+）并进入国家“双一流”建设序列。实验室把握世界轨道交通技术发展趋势，构建支撑轨道交通装备现代化发展的基础研究平台，以高速、重载列车和城市轨道车辆为核心开展基础性、前瞻性、战略性的创新研究，设有4个研究方向，即：机车车辆设计与可靠性理论；轨道交通系统动力学；牵引供电与传动；新型轨道交通技术。
          实验室孕育了在国际轨道交通动力学领域得到广泛应用的“沈氏理论”和“翟方法”，诞生了跑出世界最高台架试验速度的机车车辆整车滚动振动试验台，培养了包括院士、长江、杰青在内的一大批科学巨匠、科研精英和行业翘楚。实验室主动对接“一带一路”倡议、勇担“交通强国”使命，构建和完善了轨道交通装备现代化发展的应用基础研究平台，在我国铁路提速、高速、重载发展进程中，起到了不可替代的作用。
          以实验室为依托平台的基础上，先后建成现代轨道交通车辆设计与安全评估技术国家国际科技合作基地、轨道交通工程动力学国际合作联合实验室、中国拉共体轨道交通联合实验室等一系列国际科研平台。
        </a-card>
      </a-card>
      <a-card class="table-card" title="实验室照片">
        <a-table :columns="columns" :data="data" :bordered="{cell:true}" :stripe="true" />
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
    'title': '类型',
    'dataIndex': 'type',
    'align': ('center' as 'center'),
  },
  {
    'title': '照片',
    'dataIndex': 'photo',
    'align': ('center' as 'center'),
  }
]

const data = [
  {
    'key': '1',
    'type': '实验室整体',
    'photo': '实验室整体.JPG',
  },
  {
    'key': '2',
    'type': '仪器设备',
    'photo': '振动台.JPG',
  },
  {},
  {},
  {},
  {}
]
</script>

<style scoped>
.table-card {
  margin-bottom: 20px;
}
</style>