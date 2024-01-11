<template>
  <ul class="ul">
    <li
      class="li"
      :class="{ first: index === 0 }"
      v-for="(item, index) in items"
      :key="index"
      @mouseover="openItem(index)"
      @mouseleave="closeItem(index)"
    >
      <slot name="group-title" :title="groupTitle" v-if="index === 0"></slot>
      <a :class="{ active: activeItem === index }" href="/" class="flex"
        >{{ item.title }} <span class="arrow"></span
      ></a>
      <NestedList
        v-if="activeItem === index && item.children && item.children.length > 0"
        :items="item.children"
        :group-title="item.title"
      >
        <template v-slot:group-title="{ title }">
          <h3 class="title">{{ title }}</h3>
        </template>
      </NestedList>
    </li>
  </ul>
</template>
<style scoped>
.ul {
  width: 320px;
  height: 100%;
  position: absolute;
  background: white;
  left: 320px;
  top: 0;
  border-right: 1px solid #dce6ef;
  &:first-child {
    left: 0;
  }
}
.arrow {
  width: 24px;
  height: 24px;
  background: url("/header/catalogArrow.svg");
}
.title {
  padding: 15px 16px;
  color: var(--Black, #000);
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.2px;
}
.active {
  background: #eef2f6;
}
.flex {
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  cursor: pointer;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  border-bottom: 1px solid var(--Line-2, #dce6ef);
}
.li {
  list-style: none;
}
</style>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    groupTitle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    openItem(index) {
      this.activeItem = index;
    },
    closeItem(index) {
      this.activeItem = -1;
    },
  },
};
</script>
