<template>
  <div class="box">
    <h1>Hello World</h1>
    <el-button type="primary" :icon="Plus">Click me</el-button>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    height: 100px;
  }
}
</style>
