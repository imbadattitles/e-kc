<template>
  <div class="rubrics">
    <a
      v-for="(item, index) in items"
      :key="index"
      href="/"
      class="rubrics__item"
      >Рубрика {{ index }}</a
    >
  </div>
</template>
<style scoped>
.rubrics {
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 16px;
  @media (max-width: 1024px) {
    justify-content: flex-start;
    overflow-y: auto;
    max-width: 100vh;
    padding: 0 15px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.rubrics__item {
  text-decoration: none;
  padding: 4px;
  cursor: pointer;
  text-align: center;
  flex: 1;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  border: 1px solid #e2e2e2;
  background: white;
  &:hover,
  &:focus {
    color: #1461b4;
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    flex: none;
    padding: 4px 12px;
  }
}
</style>
<script setup>
const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
</script>
