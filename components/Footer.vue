<script></script>
<template>
  <footer class="footer container">
    <div class="column1">
      <img class="logo" src="/footer/logo.svg" />
      <p class="adress">Москва, ул. Кусковская, д. 20А, офис 706</p>
      <p class="©">© ООО ЭКС™ 2023</p>
    </div>
    <div class="column2">
      <div class="mail">
        <span class="mail__icon" />
        <p class="mail__text">zakaz@e-kc.ru</p>
      </div>
      <div class="phone">
        <span class="phone__icon" />
        <p class="phone__text">+7 (495) 777-83-45</p>
      </div>
      <p class="workTime">
        Режим работы: <br />
        пн-пт: 9:00 - 18:00
      </p>
    </div>
    <nav class="nav">
      <div class="nav__column">
        <a href="/" class="nav__item">О нас</a>
        <a href="/" class="nav__item">Производители</a>
        <a href="/" class="nav__item">Информация</a>
      </div>
      <div class="nav__column">
        <a href="/" class="nav__item">Оплата</a>
        <a href="/" class="nav__item">Доставка</a>
        <a href="/" class="nav__item">Контакты</a>
      </div>
    </nav>
    <div class="info">
      <p class="info__text">
        Информация о технических характеристиках, наличии на складе, стоимости и
        изображениях товаров не является публичной офертой
      </p>
      <a href="/" class="report">Сообщить об ошибке на сайте</a>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  padding: 40px 120px 32px 120px;
  background-image: url("/footer/bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}
.logo {
  margin-bottom: 0px;
}
.column1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  p {
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: black;
  }
}
.mail,
.phone {
  display: flex;
  align-items: center;
  gap: 2px;
}
.mail {
  margin-bottom: 18px;
}
.phone {
  margin-bottom: 4px;
}
.mail__icon {
  width: 24px;
  height: 24px;
  background-image: url("/footer/mail__icon.svg");
}
.phone__icon {
  width: 24px;
  height: 24px;
  background-image: url("/footer/phone__icon.svg");
}
.mail__text {
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.phone__text {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}
.workTime {
  color: var(--grey);
  padding-left: 26px;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.nav {
  display: flex;
  gap: 100px;
}
.nav__column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.nav__item {
  text-decoration: none;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  &:hover,
  :focus {
    opacity: 0.5;
  }
}

.info__text {
  color: var(--grey);
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  max-width: 240px;
  margin-bottom: 25px;
}
.report {
  cursor: pointer;
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: var(--blue);
  padding-bottom: 2px;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 90, 188, 0.24);
  &:hover,
  :focus {
    opacity: 0.8;
  }
}
</style>
