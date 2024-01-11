<template>
  <div v-on:click="closeModal" class="bg">
    <NestedList v-on:click="bgClick" :items="items"> </NestedList>
    <div v-on:click="closeModal" class="close"></div>
  </div>
</template>
<style scoped>
.close {
  cursor: pointer;
  background: url("/closeWhite.svg");
  width: 32px;
  height: 32px;
  position: absolute;
  right: 20px;
  top: 10px;
  &:hover {
    opacity: 0.7;
  }
}
.bg {
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.64);
  z-index: 101;
}
</style>
<script>
import NestedList from "~/components/NestedList.vue";

export default {
  components: {
    NestedList,
  },
  emits: ["update:modalVisible"],
  methods: {
    closeModal() {
      this.$emit("update:modalVisible", false);
    },
    bgClick(e) {
      e.stopPropagation();
    },
  },
  data() {
    return {
      items: [
        {
          title: "Item 1",
          children: [
            {
              title: "Subitem 1",
              children: [
                {
                  title: "SuSubbitem 1",
                  children: [
                    {
                      title: "SuSubSubbitem 1",
                      children: [{ title: "SuSubSubSubSubbitem" }],
                    },
                  ],
                },
                {
                  title: "Item 2",
                  children: [{ title: "22" }, "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },

            {
              title: "Subitem 1",
              children: [
                {
                  title: "Item 1",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 2",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },

            {
              title: "Subitem 1",
              children: [
                {
                  title: "Item 1",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 2",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },
          ],
        },
        {
          title: "Item 2",
          title: "Item 1",
          children: [
            {
              title: "Subitem 1",
              children: [
                {
                  title: "SuSubbitem 1",
                  children: [
                    {
                      title: "SuSubSubbitem 1",
                      children: [{ title: "SuSubSubSubSubbitem" }],
                    },
                  ],
                },
                {
                  title: "Item 2",
                  children: [{ title: "22" }, "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },

            {
              title: "Subitem 1",
              children: [
                {
                  title: "Item 1",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 2",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },

            {
              title: "Subitem 1",
              children: [
                {
                  title: "Item 1",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 2",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },
          ],
        },
        {
          title: "Item 3",
          title: "Item 1",
          children: [
            {
              title: "Subitem 1",
              children: [
                {
                  title: "SuSubbitem 1",
                  children: [
                    {
                      title: "SuSubSubbitem 1",
                      children: [{ title: "SuSubSubSubSubbitem" }],
                    },
                  ],
                },
                {
                  title: "Item 2",
                  children: [{ title: "22" }, "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },

            {
              title: "Subitem 1",
              children: [
                {
                  title: "Item 1",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 2",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },

            {
              title: "Subitem 1",
              children: [
                {
                  title: "Item 1",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 2",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
                {
                  title: "Item 3",
                  children: ["Subitem 1", "Subitem 2", "Subitem 3"],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
