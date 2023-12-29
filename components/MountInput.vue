<script setup lang="ts">
import { ref } from "vue";
const inputStatus = ref<"block" | "edit">("block");
const addCart = () => {
  inCart.value = true;
};
const modalOpen = () => {
  modalVisible.value = true;
};
const props = defineProps({
  type: {
    type: String,
    default: "counter",
  },
});
const modalVisible = ref(false);
const inCart = ref(false);
const edIzm = "шт.";
const EdVisible = ref(true);
const focus = () => {
  EdVisible.value = false;
};
</script>
<template>
  <Modal
    v-if="props.type === 'modal' && modalVisible"
    v-model:modalVisible="modalVisible"
  />
  <div class="item__costRow-change">
    <div class="item__costRow-input">
      <input
        value="1"
        @focus="EdVisible = false"
        @blur="EdVisible = true"
        :disabled="!inCart"
      />
      <div v-if="EdVisible" class="colWo">шт.</div>
      <div v-if="inCart" class="change">
        <div class="minus"></div>
        <div class="plus"></div>
      </div>
    </div>

    <div
      v-if="props.type === 'counter'"
      v-on:click="addCart"
      :class="!inCart ? 'blue' : 'red'"
      class="item__costRow-btn"
    >
      <span :class="!inCart ? 'iconPlus' : 'iconOk'" />
    </div>
    <div
      v-if="props.type === 'modal'"
      v-on:click="modalOpen"
      class="item__costRow-btn blue"
    >
      <span class="iconArrow" />
    </div>
  </div>
</template>

<style scoped>
.item__costRow-change {
  position: relative;
  display: flex;
  @media (max-width: 1024px) {
    width: 100%;
  }
}
.item__costRow-input {
  outline: none;
  position: relative;
  background: white;
  border-right: none;
  width: 100px;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  /* Lato 13 Reg */
  font-family: Lato;
  padding: 11px 8px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  @media (max-width: 1024px) {
    width: 100%;
  }
  input {
    outline: none;
    border: none;
    width: 100%;
    color: var(--Black, #000);
    text-align: right;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .colWo {
    color: var(--Black, #000);
    text-align: right;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
}
.change {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
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
.iconArrow {
  width: 24px;
  height: 24px;
  background-image: url("/searchResult/iconArrow.svg");
}
</style>
