<template>

</template>

<script lang="ts" setup>
import router from "../../router"

// 获取当前路由的query参数
const path = router.currentRoute.value.query.path

router.replace(path!.toString())
</script>

<style scoped>

</style>