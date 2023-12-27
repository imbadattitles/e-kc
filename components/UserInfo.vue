<template>
  <div class="lk__user">
    <p class="FIO">Иванов Василий Митрофанович</p>
    <div class="lk__contacts">
      <p class="phone">+7 903 000 00 00</p>
      <p class="mail">mail@gmail.com</p>
    </div>
    <div class="lk__requisites">
      <p>ИНН: 0123456789</p>
      <p>КПП: 770201001</p>
    </div>
  </div>
</template>
<style scoped>
.lk__user {
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
}
.FIO {
  margin-bottom: 16px;
  color: black;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.18px;
  @media (max-width: 524px) {
    font-size: 16px;
  }
}
.lk__contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 24px;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  .mail {
    color: var(--blue);
    padding-bottom: 2px;
    border-bottom: 1px solid rgba(0, 90, 188, 0.24);
  }
}
.lk__requisites {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
</style>
