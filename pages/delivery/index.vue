<template>
  <section class="section">
    <div class="section__text">
      <h1 class="section__title">Доставка</h1>
      <div class="textGroup">
        <h4 class="f16">
          <span class="underline">Стандартная доставка</span> по Москве и
          Московской области производится в течение 1 рабочего дня с момента
          поступления денежных средств на расчетный счет Компании.
        </h4>
        <h4 class="f16">
          <span class="underline">Срочная доставка</span> возможна в день
          поступления денежных средств, при наличии свободного транспорта.
        </h4>
      </div>
      <div class="textGroup">
        <h3 class="textGroup__title">Стоимость доставки</h3>
        <div>
          <h4 class="f16">
            <span class="circle" /> В пределах МКАД от 1500 рублей с НДС.
          </h4>
          <h4 class="f16">
            <span class="circle" /> За МКАД плюс 50 рублей/км.
          </h4>
        </div>
        <p class="grey">
          * В стоимость доставки не входит услуга подъема и разгрузки товара!
          Возможность заказа данных услуг уточняйте у личного менеджера.
        </p>
      </div>
      <div class="textGroup">
        <h3 class="textGroup__title">Доставка в регионы</h3>
        <h4 class="f16">
          Доставка в регионы осуществляется через транспортные компании.
          Стоимость расcчитывается по тарифам перевозчика.
        </h4>
      </div>
      <div class="textGroup">
        <h3 class="textGroup__title">Самовывоз</h3>
        <h4 class="f16">
          Самовывоз со склада на следующий день после поступления денежных
          средств.
        </h4>
      </div>
      <div class="textGroup">
        <h3 class="textGroup__title">Пункт выдачи готовой продукции</h3>
        <div>
          <h4 class="f16">
            <span class="circle" />М.О. г. Мытищи, Водопроводная аллея д.21.
          </h4>
          <h4 class="f16">
            <span class="circle" />Время работы: Пн-Пт; с 10-00 до 18-00
          </h4>
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
    padding: 0;
    margin-top: 160px;
    margin-bottom: 0px;
    gap: 24px;
  }
}
.section__text {
  max-width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
  @media (max-width: 1024px) {
    gap: 24px;
    padding: 0 15px;
  }
}
.section__map {
  width: 1160px;
  margin: auto;
  @media (max-width: 1024px) {
    width: 100vw;
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
.ul {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.contacts__item {
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: -0.2px;
  &.phone {
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.2px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
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
  bottom: -4px;
  left: 0;
  @media (max-width: 1024px) {
    bottom: -3px;
  }
}
.blue.underline::after {
  content: "";
  width: 100%;
  height: 2px;
  background: var(--blue);
  position: absolute;
  bottom: -2px;
  left: 0;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.cards {
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 1024px) {
    justify-content: space-between;
    gap: 20px;
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
  @media (max-width: 1024px) {
    padding-top: 20px;
  }
}
</style>
