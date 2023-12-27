<script setup>
const categories = [
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "ВБШвнг(А)",
    href: "/category",
  },
  {
    title: "Коаксиальный кабель",
    href: "/category",
  },
  {
    title: "КГтп-ХЛ",
    href: "/category",
  },
  {
    title: "ТППэп",
    href: "/category",
  },
  {
    title: "КВВГнг(А)",
    href: "/category",
  },
  {
    title: "ВВГнг(А)-FRLSLTx",
    href: "/category",
  },
  {
    title: "ППГнг(А)-FRHF",
    href: "/category",
  },
  {
    title: "ВБШвнг(А)-LS",
    href: "/category",
  },
  {
    title: "КПСнг(А)-FRLS",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
  {
    title: "АВВГнг",
    href: "/category",
  },
];
</script>
<template>
  <section class="container section">
    <h4 class="f32 section__title">Популярные категории</h4>
    <div class="categories">
      <a
        v-for="(category, index) in categories"
        :key="index"
        :href="category.href"
        class="categories__item"
        >{{ category.title }}</a
      >
      <div class="more">
        <span class="more__icon" />
        Ещё
      </div>
    </div>
  </section>
</template>
<style scoped>
.section {
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
}
.section__title {
  margin-bottom: 48px;
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    padding: 0 15px;
  }
}
.categories {
  display: grid;
  grid-template-columns: repeat(10, auto);
  gap: 16px;
  @media (max-width: 1024px) {
    padding: 0 15px;
    display: flex;
    max-width: 100vw;
    gap: 8px;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.categories__item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-decoration: none;
  border: 1px solid var(--Line-2, #dce6ef);
  color: var(--Black, #000);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  background: white;
  @media (max-width: 1024px) {
    padding: 4px 16px;
    text-wrap: nowrap;
    height: 60px;
  }
  &:hover,
  :focus {
    background: #f2f6fa;
  }
}

.more {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 8px;
  color: var(--blue);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  &:hover,
  :focus {
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    display: none;
    padding: 10px;
  }
}
.more__icon {
  width: 12px;
  height: 24px;
  background-image: url("/mainPage/categories__cebab.svg");
}
</style>
