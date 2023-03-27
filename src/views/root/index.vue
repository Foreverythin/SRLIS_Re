<template>
  <a-layout style="height: 100%">
    <div style="width: 100%; text-align: center; margin-top: 10px;">
      <SearchBox/>
      <a-avatar id="avatar" :size="32">
        <IconUser/>
      </a-avatar>
    </div>
    <a-layout-header style="padding-right: 25px; display: flex;">
      <a-menu
          mode='horizontal'
          :default-selected-keys="[route.path]"
      >
        <a-menu-item :key="routes[0]" @click="toPage(routes[0])">
          <IconHome/>
          主页
        </a-menu-item>
        <a-menu-item :key="routes[1]" @click="toPage(routes[1])">
          <IconFile/>
          基本信息
        </a-menu-item>
        <a-menu-item :key="routes[2]" @click="toPage(routes[2])">
          <IconUserGroup/>
          研究方向与人员
        </a-menu-item>
        <a-menu-item :key="routes[3]" @click="toPage(routes[3])">
          <IconStamp/>
          学术/科技委员会
        </a-menu-item>
        <a-menu-item :key="routes[4]" @click="toPage(routes[4])">
          <IconDesktop/>
          考核状态
        </a-menu-item>
        <a-menu-item :key="routes[5]" @click="toPage(routes[5])">
          <IconDriveFile/>
          实验室简介
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content id="layout-content">
      <router-view/>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import {
  IconHome,
  IconUser,
  IconFile,
  IconUserGroup,
  IconDesktop,
  IconDriveFile,
  IconStamp
} from "@arco-design/web-vue/es/icon"
import SearchBox from "../../components/SearchBox.vue"
import router from "../../router/index"
import {useRoute} from "vue-router"
import {watch} from "vue";

const route = useRoute()

const routes = ['/home', '/basicInfo', '/researchDirection', '/committee', '/assessment', '/introduction']

const toPage = (path: string) => {
  router.replace({path: '/empty', query: {path}})
}

watch(route, (newValue, _) => {
  let path = newValue.path
  router.replace({path: '/empty', query: {path}})
})
</script>

<style>
#avatar {
  background-color: #3370ff;
  float: right;
  margin-right: 20px;
}

#avatar:hover {
  cursor: pointer;
  background-color: #2b6bfd;
}

.arco-tabs-nav-tab-list {
  margin-left: 20px;
}

#layout-content {
  /* 渐变背景色 */
  background: linear-gradient(180deg, #8aa7cb, #b6c2db);

  /* 白灰渐变背景色 */
  /*background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);*/

  padding-top: 20px;
}
</style>