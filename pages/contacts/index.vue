<template>
  <section class="section">
    <div class="section__text">
      <h1 class="section__title">Контакты</h1>
      <div class="textGroup">
        <h3 class="textGroup__title underline">Офис</h3>
        <p class="f16">Москва, улица Кусковская, дом 20А, офис В706</p>
        <div class="contacts">
          <div class="contacts__item">
            <span class="mail"></span>zakaz@e-kc.ru
          </div>
          <div class="contacts__item phone">
            <span class="phoneIcon"></span>+7 (495) 777-83-45
          </div>
        </div>
        <p class="f16">(Режим работы: пн-пт: 9:00 - 18:00)</p>
      </div>
    </div>

    <div class="section__map">
      <div class="map"></div>
    </div>

    <div class="section__text">
      <div class="textGroup">
        <h3 class="textGroup__title underline">Склад</h3>
        <p class="f16">
          Московская область, г. Мытищи, ул. Водопроводная аллея, д. 21
        </p>
        <div class="contacts">
          <div class="contacts__item phone">
            <span class="phoneIcon"></span>+7 (999) 928-69-65
          </div>
        </div>
        <p class="f16">(Режим работы: пн-пт: 9:00 - 18:00)</p>
      </div>
    </div>

    <div class="section__map">
      <div class="map"></div>
    </div>

    <div class="section__text">
      <div class="textGroup">
        <h3 class="textGroup__title">Время работы:</h3>
        <div class="ul">
          <h4 class="f16">
            <span class="circle" /><span class="underline">Прием заказов</span>
            через специализированную форму на сайте — круглосуточно.
          </h4>
          <h4 class="f16">
            <span class="circle" /><span class="underline"
              >Обработка заказов и консультации:</span
            >
            пн. – пт. с 9.00 до 18.00
          </h4>
          <h4 class="f16">
            <span class="circle" /><span class="underline">Доставка:</span> пн.
            – пн. – пт. с 10.00 до 18.00
          </h4>
          <h4 class="f16">
            <span class="circle" /><span class="underline">Самовывоз:</span> пн.
            пн. – пт. с 10.00 до 18.00
          </h4>
        </div>
      </div>
      <div class="requisites">
        <h3 class="textGroup__title underline">Реквизиты:</h3>
        <p class="f16">
          Общество с ограниченной ответственностью «ЭлектроКомплект-Сервис»
          <br />
          Сокращённо: ООО «ЭКС» <br />
          ИНН/КПП 7721801761/772001001 ОГРН: 1137746688166 <br />
          ОКПО: 17851156 ОКВЭД: 51.65.5; 45.31; 51.43.1; 51.70; <br />
          АО «АЛЬФА-БАНК», БИК 044525593, Кор/сч 30101810200000000593 <br />
          Р/счет 40702810601300023039 <br />
          Юридический адрес: 111141, город Москва, Кусковская улица, дом 20а,
          эт/пом/ком мансарда/XIIIв/5 <br />
          Почтовый адрес: 111141, город Москва, Кусковская улица, дом 20а,
          корпус В офис 706В <br />
          Гн. Директор: Нефедов Евгений Юрьевич <br />
          E-mail: nefedov_e@e-kc.ru
        </p>
      </div>
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
}
.section__text {
  width: 960px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
}
.section__map {
  width: 1160px;
  margin: auto;
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
}
.textGroup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
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
}

.cards {
  display: flex;
  align-items: center;
  gap: 8px;
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
.phoneIcon {
  width: 24px;
  height: 24px;
  background: url("/info/Call.svg");
}
.mail {
  width: 24px;
  height: 24px;
  background: url("/info/Mail.svg");
}
</style>
