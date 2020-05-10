<template>
  <div class="box box--A" :style="style">
    <div class="box-name">#{{ index }}</div>
    <div class="size-info">{{ w }}x{{ h }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Box",
  props: {
    index: Number
  },
  data: () => ({
    colors: ["#3e9aff", "#92e892", "#ffe9ad", "#e89293", "#a4a1ff"],
    w: 0,
    h: 0,
    backgroundColor: "#fff"
  }),
  created() {
    this.w = this.getRandomIntInclusive(1, 150);
    this.h = this.getRandomIntInclusive(1, 150);
    this.backgroundColor = this.getRandomColor();
  },
  computed: {
    style(): Record<string, string> {
      return {
        "min-width": this.w + "px",
        height: this.h + "px",
        "background-color": this.backgroundColor
      };
    }
  },
  methods: {
    getRandomIntInclusive(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
});
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  .box-name {
    display: block;
    color: whitesmoke;
  }

  .size-info {
    display: none;
    font-size: 9px;
    font-weight: bold;
    color: whitesmoke;
  }

  &:hover {
    .size-info {
      display: block;
    }

    .box-name {
      display: none;
    }
  }
}
</style>
