<template>
  <div class="item__costRow-change">
    <div class="item__costRow-input">
      <div v-if="inputStatus === 'edit'" class="change">
        <div class="minus"></div>
        <div class="plus"></div>
      </div>
      0 шт
    </div>
    <div
      v-on:click="inputCLick"
      :class="inputStatus === 'block' ? 'blue' : 'red'"
      class="item__costRow-btn"
    >
      <span :class="inputStatus === 'block' ? 'iconPlus' : 'iconOk'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const inputStatus = ref<"block" | "edit">("block");
const inputCLick = () => {
  inputStatus.value === "block"
    ? (inputStatus.value = "edit")
    : (inputStatus.value = "block");
};
</script>
<style scoped>
.item__costRow-change {
  position: relative;
  display: flex;
  @media (max-width: 1024px) {
    width: 100%;
  }
}
.item__costRow-input {
  width: 100px;
  color: var(--Black, #000);
  text-align: right;
  /* Lato 13 Reg */
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding: 11px 8px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  @media (max-width: 1024px) {
    width: 100%;
  }
}
.change {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  @media (max-width: 1024px) {
    left: 15px;
    gap: 20px;
  }
  .plus {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-position: center;
    background-image: url("/inputPlus.svg");
    background-repeat: no-repeat;
    &:hover,
    &:focus {
      transform: scale(1.3);
    }
  }
  .minus {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-position: center;
    background-image: url("/inputMinus.svg");
    background-repeat: no-repeat;
    &:hover,
    &:focus {
      transform: scale(1.3);
    }
  }
}
.item__costRow-btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 40px;
}
.item__costRow-btn.blue {
  background: var(--akcent);
  &:hover,
  &:focus {
    background: var(--blue);
  }
}
.item__costRow-btn.red {
  background: var(--red);
  &:hover,
  &:focus {
    background: red;
  }
}
.iconPlus {
  width: 24px;
  height: 24px;
  background-image: url("/searchResult/plus.svg");
}
.iconOk {
  width: 24px;
  height: 24px;
  background-image: url("/searchResult/ok.svg");
}
</style>
