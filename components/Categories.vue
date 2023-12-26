<script setup>
const catalog = [
  {
    img: "/catalog/item1.png",
    title: "Электрооборудование",
    link: "/",
  },
  {
    img: "/catalog/item2.png",
    title: "Кабель-провод",
    link: "/",
  },
  {
    img: "/catalog/item3.png",
    title: "Светотехника",
    link: "/",
  },
  {
    img: "/catalog/item4.png",
    title: "Низковольтное оборудование",
    link: "/",
  },
  {
    img: "/catalog/item5.png",
    title: "Электроустановочные изделия",
    link: "/",
  },
  {
    img: "/catalog/item6.png",
    title: "Материалы общестроительные",
    link: "/",
  },
  {
    img: "/catalog/item7.png",
    title: "Инженерные системы",
    link: "/",
  },
  {
    img: "/catalog/item8.png",
    title: "Инструмент и крепеж",
    link: "/",
  },
  {
    img: "/catalog/item9.png",
    title: "Общая рубрика",
    link: "/",
  },
];
</script>
<template>
  <div class="categories">
    <a
      v-for="(item, index) in catalog"
      :key="index"
      :href="item.link"
      class="categories__item"
    >
      <img :src="item.img" :alt="item.title" class="categories__item-img" />
      <div>
        <h3 class="categories__item-title">{{ item.title }}</h3>
      </div>
      <span class="borderTop" />
      <span class="borderRight" />
      <span class="borderBottom" />
      <span class="borderLeft" />
    </a>
  </div>
</template>

<style scoped>
.categories {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    @media (max-width: 524px) {
      grid-template-columns: 1fr;
    }
  }
}
.categories__item {
  padding: 24px 32px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  background: white;
  &:hover,
  :focus {
    opacity: 0.6;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px;
  }
}
.borderTop {
  position: absolute;
  width: 100%;
  height: 1px;
  top: -1px;
  left: -1px;
  background: #dce6ef;
}
.borderBottom {
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0px;
  left: -1px;
  background: #dce6ef;
}
.borderLeft {
  position: absolute;
  width: 1px;
  height: 100%;
  top: -1px;
  left: -1px;
  background: #dce6ef;
}
.borderRight {
  position: absolute;
  width: 1px;
  height: 100%;
  top: -1px;
  right: 0px;
  background: #dce6ef;
}

.categories__item-img {
  width: 190px;
  height: 120px;
  margin-bottom: 24px;
}
.categories__item-title {
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140% !important; /* 28px */
  letter-spacing: -0.2px;
  color: black;
  display: inline;
  padding-bottom: 3px;
  border-bottom: 1px solid #dce6ef;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}
</style>
