<script setup>
import { ref } from "vue";
const phoneNumber = ref("");
const emit = defineEmits(["update:modalVisible"]);
const closeModal = () => {
  emit("update:modalVisible", false);
};
</script>
<template>
  <div class="bg">
    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <p class="modal__title">Восстановление пароля</p>
      <form class="modal__form">
        <input
          type="text"
          placeholder="Телефон или E-mail"
          class="modal__input"
        />
        <button class="form_btn">Продолжить</button>
      </form>
      <p class="modal__link f14">Вернуться ко входу</p>
    </div>

    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <p class="modal__title">Вход в личный кабинет</p>
      <form class="modal__form">
        <input
          type="text"
          placeholder="Телефон / E-mail"
          class="modal__input"
        />
        <input type="text" placeholder="Пароль" class="modal__input" />
        <button class="form_btn">Войти</button>
      </form>
      <p class="modal__link f14">Забыли пароль?</p>
      <div class="modal__links">
        <p class="f16 w700">Нет аккаунта? — Зарегистрируйтесь</p>
        <div class="links">
          <p class="modal__link f16">Я — частное лицо</p>
          <p class="modal__link f16">Я — юр. лицо</p>
        </div>
      </div>
    </div>

    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <p class="modal__title">Регистрация физ. лица</p>
      <p class="modal__step">1 шаг из 3</p>
      <form class="modal__form">
        <label class="label" for="1">Подтверждение номера телефона</label>
        <input
          v-mask="'(##) ###-####'"
          placeholder="+7 (___)___-__-__"
          id="1"
          type="tel"
          v-model="phoneNumber"
          class="modal__input"
        />
        <p class="grey">
          Нажимая на кнопку «Получить SMS-код»,я даю согласие на обработку своих
          персональных данных в соответствии с
          <span class="underline">Условиями</span>
        </p>
        <button class="form_btn">Получить SMS-код</button>
      </form>
    </div>

    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <p class="modal__title">Регистрация юр. лица</p>
      <p class="modal__step">1 шаг из 4</p>
      <form class="modal__form">
        <label class="label" for="2">Подтверждение E-mail</label>
        <input id="2" type="text" placeholder="E-mail*" class="modal__input" />
        <p class="grey">
          Нажимая на кнопку «Получить SMS-код»,я даю согласие на обработку своих
          персональных данных в соответствии с
          <span class="underline">Условиями</span>
        </p>
        <button class="form_btn">Получить код</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.bg {
  display: flex;
  background: rgba(0, 0, 0, 0.64);
  gap: 60px;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
.modal {
  padding: 64px 40px;
  position: relative;
  background: white;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.close {
  position: absolute;
  cursor: pointer;
  width: 24px;
  height: 24px;
  top: 8px;
  right: 8px;
  background: url("/loginClose.svg");
}
.modal__title {
  color: black;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
}
.modal__form {
  width: 100%;
}
.modal__input {
  border: none;
  width: 100%;
  background: #eef2f6;
  padding: 15px 24px;
  margin-top: 8px;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  outline: none;
  &::placeholder {
    color: var(--grey);
  }
  &:focus {
    outline: 2px solid var(--akcent);
    background: white;
  }
}
.form_btn {
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 10px;
  padding: 11px;
  color: white;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  border: none;
  background: var(--akcent);
  &:hover,
  &:active {
    background: #1461b4;
  }
}
.f14 {
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.f16 {
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}
.modal__link {
  display: inline;
  cursor: pointer;
  color: var(--blue);
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(23, 116, 216, 0.16);
}
.modal__links {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}
.links {
  display: flex;
  gap: 24px;
}
.modal__step {
  color: var(--grey);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 24px;
}

.label {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}
.grey {
  margin-top: 16px;
  color: var(--grey);
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.underline {
  position: relative;
}
.underline::after {
  content: "";
  width: 100%;
  height: 1px;
  background: var(--grey);
  position: absolute;
  bottom: -2px;
  left: 0;
}
.w700 {
  font-weight: 700;
}
</style>
