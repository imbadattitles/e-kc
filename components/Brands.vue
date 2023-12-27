<script setup>
const letters = [
  "#",
  "*",
  "1",
  "2",
  "3",
  "7",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "l",
  "M",
  "N",
  "O",
  "#",
  "*",
  "1",
  "2",
  "3",
  "7",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "l",
  "M",
  "N",
  "O",
];
const items = [
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
  {
    letter: "A",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
      {
        name: "A4TECH",
        link: "/",
      },
      {
        name: "ABAC",
        link: "/",
      },
      {
        name: "ABB",
        link: "/",
      },
    ],
  },
  {
    letter: "B",
    items: [
      {
        name: "A-DATA",
        link: "/",
      },
      {
        name: "A.A.G.STUCCHI",
        link: "/",
      },
    ],
  },
];
</script>
<template>
  <div class="thisContainer">
    <div class="letters">
      <p v-for="(letter, index) in letters" :key="index" class="letter">
        {{ letter }}
      </p>
    </div>
    <div class="brands">
      <div v-for="(group, index) in items" :key="index" class="brands__group">
        <p class="brands__letter">{{ group.letter }}</p>
        <div class="brand__brands">
          <a
            v-for="(brand, index) in group.items"
            :key="index"
            :href="brand.link"
            class="brands__item"
            >{{ brand.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.thisContainer {
  margin: auto;
  max-width: 1060px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
}
.letters {
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 650px;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
}
.letter {
  cursor: pointer;
  color: var(--blue);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  padding-bottom: 2px;
  border-bottom: 1px dotted rgba(0, 90, 188, 0.4);
  &:hover,
  :focus {
    opacity: 0.6;
  }
}
.brands {
  column-count: 4;
  @media (max-width: 1024px) {
    column-count: 2;
  }
}

.brands__group {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
  margin-bottom: 24px;
}

.brands__letter {
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  color: var(--grey);
  margin-bottom: 8px;
}

.brand__brands {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.brands__item {
  text-decoration: none;
  color: var(--blue);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(0, 90, 188, 0.24);
  &:hover,
  :focus {
    opacity: 0.6;
  }
}
</style>
