<script setup lang="ts">
import { ref } from "vue";
import useScreenSize from "~/components/size";
const { isDesktop } = useScreenSize();
const mode = ref<"procenka" | "orders">("orders");
const setMode = (newValue: "procenka" | "orders") => {
  mode.value = newValue;
};
</script>
<template>
  <section class="container section">
    <div class="section__title">
      <h1>Личный кабинет</h1>
      <div class="logOut">
        <span class="logOut__icon"></span>
        Выход
      </div>
    </div>
    <div class="section__grid">
      <userInfo />

      <div class="lk__main">
        <div class="lk__main-top">
          <div class="lk__switch">
            <button
              v-on:click="setMode('orders')"
              :class="mode === 'orders' && 'active'"
            >
              Мои заказы <span>24</span>
            </button>
            <button
              v-on:click="setMode('procenka')"
              :class="mode === 'procenka' && 'active'"
            >
              Проценка
            </button>
          </div>
          <div v-if="mode === 'orders' && isDesktop" class="lk__filters">
            <p class="lk__filters_item active">Все <span>221</span></p>
            <p class="lk__filters_item">Отправлено <span>16</span></p>
            <p class="lk__filters_item">Сохранено <span>16</span></p>
            <p class="lk__filters_item">Выставлен счет <span>16</span></p>
            <p class="lk__filters_item">Отгружено <span>16</span></p>
          </div>
          <select v-if="!isDesktop" class="filters__mob">
            <option value="" class="filters__mob-item">
              Все <span>221</span>
            </option>
            <option value="" class="filters__mob-item">
              Все <span>221</span>
            </option>
            <option value="" class="filters__mob-item">
              Все <span>221</span>
            </option>
            <option value="" class="filters__mob-item">
              Все <span>221</span>
            </option>
          </select>
        </div>
        <LkOrders v-if="mode === 'orders'" />
        <Procenka v-if="mode === 'procenka' && isDesktop" />
        <div v-if="mode === 'procenka' && !isDesktop" class="please">
          <div class="please__icon"></div>
          <p class="please__text">
            Перейдите на полную версию сайта, чтобы оценить функционал страницы
            «Проценка».
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.please {
  padding: 0 15px;
}
.please__icon {
  width: 64px;
  height: 64px;
  background-image: url("/lk/please__icon.svg");
  margin-top: 24px;
  margin-bottom: 8px;
}
.please__text {
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}
.section {
  margin-top: 140px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
    margin-top: 150px;
  }
}
.section__title {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
  h1 {
    color: black;
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    letter-spacing: -0.32px;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
  .logOut {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--grey);
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    .logOut__icon {
      width: 24px;
      height: 24px;
      background: url("/lk/logOut__icon.svg");
    }
  }
}
.section__grid {
  display: grid;
  gap: 32px;
  grid-template-columns: 240px auto;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
}
.lk__main-top {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1024px) {
    padding: 0 15px;

    flex-direction: column;
    gap: 24px;
  }
}
.lk__switch {
  display: flex;
  gap: 8px;
  button {
    cursor: pointer;
    padding: 11px 24px;
    background: white;
    border: 2px solid #dce6ef;
    border-radius: 48px;
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    span {
      color: var(--grey);
    }
    &.active {
      border: none;
      background: #eef2f6;
    }
    &:hover,
    :focus {
      opacity: 0.7;
    }
  }
}
.filters__mob {
  display: block;
  width: 100%;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  padding: 11px 16px;
  outline: none;
  border: 1px solid var(--Line-2, #dce6ef);
  span {
    color: var(--grey);
  }
}
.lk__filters {
  display: flex;
  @media (max-width: 524px) {
    display: none;
  }
  .lk__filters_item {
    padding: 11px 16px;
    background: white;
    cursor: pointer;
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    span {
      color: var(--grey);
    }
    &.active {
      background: #eef2f6;
    }
    &:hover,
    :focus {
      opacity: 0.7;
    }
  }
}
</style>
