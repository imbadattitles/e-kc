<template>
  <div class="grid">
    <SearchGridItem v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  border: 1px solid #dce6ef;
  border-right: 2px solid #dce6ef;
  border-bottom: 2px solid #dce6ef;
}
</style>
<script setup>
import { defineProps } from "vue";
const props = defineProps(["items"]);
</script>
