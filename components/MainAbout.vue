<script setup>
const benefits = [
  {
    icon: "/mainPage/benefits__item1.svg",
    title: "Широкий ассортимент",
    body: "Компания поддерживает значительный складской запас наиболее популярных позиций кабельно-проводниковой и электротехнической продукции",
  },
  {
    icon: "/mainPage/benefits__item2.svg",
    title: "Качество",
    body: "Мы проводим  внутренний контроль качества поступающей продукции. Весь кабель текущего года и соответствует заявленным характеристикам",
  },
  {
    icon: "/mainPage/benefits__item3.svg",
    title: "Цена",
    body: "Постоянный мониторинг рынка производителей позволяет нам формировать оптимальные ценовые предложения",
  },
  {
    icon: "/mainPage/benefits__item4.svg",
    title: "Прозрачная система скидок",
    body: "Лояльность и сотрудничество вознаграждается",
  },
  {
    icon: "/mainPage/benefits__item5.svg",
    title: "Инновационная программа обработки запросов",
    body: "Многотоварные запросы обрабатываются в полуавтоматическом режиме в течение минут",
  },
  {
    icon: "/mainPage/benefits__item6.svg",
    title: "Высокая скорость отгрузки",
    body: "Минимальные сроки поставки. Заказы отправляются уже на следующий день",
  },
  {
    icon: "/mainPage/benefits__item7.svg",
    title: "Квалифицированные инженеры",
    body: "Наша команда поможет подобрать идеальную замену отсутствующему товару",
  },
  {
    icon: "/mainPage/benefits__item8.svg",
    title: "Собственная логистика",
    body: "У нас есть собственный транспорт, а также возможность организации доставки по всей стране через надежные транспортные компании",
  },
];
</script>
<template>
  <section class="container section">
    <div class="firstRow">
      <div class="h2__block">
        <h2 class="f32 h2__block-title">ООО «ЭлектроКомплект-Сервис»</h2>
        <p class="h2__block-text">
          Добро пожаловать в нашу компанию — вашего надежного партнера в мире
          электротехнической продукции. С гордостью служим вашим потребностям
          уже более 10 лет, предлагая не просто товары, но и высококачественный
          сервис.
        </p>
      </div>
      <div class="text__block">
        <p>
          Мы ценим ваше время: благодаря передовым технологиям, наша команда
          обрабатывает запросы в считанные минуты, гарантируя быструю отгрузку и
          доставку. Наши инженеры всегда готовы прийти на помощь и предложить
          оптимальные решения для ваших задач. А прозрачная система скидок
          делает сотрудничество с нами еще более выгодным. Доверьтесь
          профессионалам!
        </p>
      </div>
    </div>
    <div class="videos">
      <div class="videos__item">
        <div class="video">
          <span class="play" />
        </div>
        <p class="video__text">
          Как быстро посчитать стоимость товаров из вашего списка?
        </p>
      </div>
      <div class="videos__item">
        <div class="video">
          <span class="play" />
        </div>
        <p class="video__text">Как использовать функционал сайта?</p>
      </div>
    </div>
    <div class="benefits">
      <p class="f32 benefits__title">Преимущества сотрудничества с нами</p>
      <div class="benefits__grid">
        <div
          v-for="(item, index) in benefits"
          :key="index"
          class="benefits__item"
        >
          <img :src="item.icon" class="benefits__item-icon" />
          <h4 class="benefits__item-title">{{ item.title }}</h4>
          <h5 class="benefits__item-body">
            {{ item.body }}
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.section {
  padding-top: 60px;
}
.firstRow {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 60px;
}
.h2__block {
  padding: 0 32px;
}
.h2__block-title {
  margin-bottom: 24px;
}
.h2__block-text {
  color: black;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
  letter-spacing: -0.2px;
  max-width: 630px;
}
.text__block {
  padding: 0 32px;
  p {
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    max-width: 720px;
  }
}
.videos {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 80px;
}
.video {
  width: 780px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  margin-bottom: 24px;
}
.play {
  width: 64px;
  height: 64px;
  background-image: url("/mainPage/play.svg");
}
.video__text {
  padding-left: 32px;
  color: black;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
}

.benefits {
  margin-bottom: 80px;
}
.benefits__title {
  margin-bottom: 48px;
}
.benefits__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  justify-content: space-between;
}
.benefits__item {
  padding: 32px;
  border: 1px solid #dce6ef;
}
.benefits__item-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 16px;
}
.benefits__item-title {
  color: black;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.2px;
  margin-bottom: 8px;
}
.benefits__item-body {
  color: var(--grey);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
</style>
