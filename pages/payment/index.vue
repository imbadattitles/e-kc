<template>
  <section class="section">
    <div class="section__text">
      <h1 class="section__title">Способы оплаты</h1>
      <div class="textGroup">
        <h3 class="textGroup__title underline">Для юридических лиц:</h3>
        <div>
          <h4 class="f16">
            <span class="circle" />Оплата продукции юридическими лицами
            производится по безналичному расчету.
          </h4>
          <h4 class="f16">
            <span class="circle" />Документы для бухгалтерской отчетности
            предоставляются при выдаче товара.
          </h4>
        </div>
      </div>
      <div class="textGroup">
        <h3 class="textGroup__title underline">Для физических лиц:</h3>
        <div class="flexGroup">
          <h5 class="grey">Безналичный расчет:</h5>
          <div class="ol">
            <p>
              <span>1.</span>
              Оплата счета физические лица осуществляют переводом денежных
              средств на расчётный счёт компании в отделении банка РФ.
            </p>
            <p><span>2.</span> Через личный кабинет онлайн-банк.</p>
            <p>
              <span>3.</span>
              Дистанционная оплата банковской картой VISA, Mastercard, МИР или
              через СБП ( Система быстрых платежей ).
            </p>
          </div>
          <p class="blue f16">Описание процесса оплаты</p>
        </div>
      </div>
      <div class="cards">
        <img src="/info/icon-visa.svg" alt="visa" class="card" />
        <img src="/info/icon-mastercard.svg" alt="mastercard" class="card" />
        <img src="/info/icon-mir.svg" alt="mir" class="card" />
        <img src="/info/SBP.svg" alt="SBP" class="card" />
        <img src="/info/icon-alfa.svg" alt="alfa" class="card" />
      </div>
      <p class="f16">
        <span class="blue underline">Возврат переведенных средств</span>
        производится на Ваш банковкий счет в течение 5-30 банковских дней (срок
        зависитот вашего банка). Подробные условия возврата товара описаны на
        странице <span class="blue">«Возврат товара»</span>
      </p>
      <div style="margin-top: 20px" class="textGroup">
        <h4 class="grey">Наличный расчет:</h4>
        <div>
          <p class="f16">
            Оплатить заказ наличными можно в кассе операционного офиса по
            адресу:
          </p>
          <h5 class="f16">
            Москва, ул. Кусковская, д. 20А, офис 706 <br />
            Часы работы офиса: пн-пт. с 9:00 до 18:00
          </h5>
        </div>
      </div>
    </div>
    <div class="section__map">
      <div class="map"></div>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin-top: 180px;
  margin-bottom: 100px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  @media (max-width: 1024px) {
    margin-top: 150px;
    margin-bottom: 0;
    gap: 24px;
    padding: 0;
  }
}
.section__text {
  width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
  @media (max-width: 1024px) {
    gap: 24px;
    padding: 0 15px;
    width: 100vw;
  }
}
.section__map {
  width: 1160px;
  margin: auto;
  @media (max-width: 1024px) {
    max-width: 100vw;
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.section__title {
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  letter-spacing: -0.4px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
.textGroup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media (max-width: 1024px) {
    gap: 8px;
  }
}
.f16 {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}
.ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    display: flex;
    gap: 5px;
    align-items: flex-start;
  }
}
.ul {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.flexGroup {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.underline {
  position: relative;
}
.underline::after {
  content: "";
  width: 100%;
  height: 2px;
  background: black;
  position: absolute;
  bottom: -2px;
  left: 0;
}

.blue {
  color: var(--akcent);
}
.blue.underline::after {
  content: "";
  width: 100%;
  height: 2px;
  background: var(--akcent);
  position: absolute;
  bottom: -4px;
  left: 0;
  opacity: 0.2;
}
.textGroup__title {
  color: black;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
  display: inline;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}
.circle {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 20px;
  margin-left: 5px;
  margin-right: 10px;
  background: black;
}
.grey {
  color: var(--grey);
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

.cards {
  margin: 10px 0px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 16px;
  }
}
.map {
  width: 100%;
  height: 560px;
  background: var(--grey);
}
.requisites {
  margin-top: 20px;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-top: 2px solid #dce6ef;
}
</style>
