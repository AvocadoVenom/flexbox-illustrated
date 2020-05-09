<template>
  <div class="container">
    <label for="name">{{ property.name }}</label>
    <select
      :name="property.name"
      :id="'select-' + property.name"
      @change="$emit('change', { ...property, value: $event.target.value })"
    >
      <option
        v-for="(v, i) in property.values"
        :key="i"
        :value="v"
        :selected="value === v"
        >{{ v }}</option
      >
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export interface FlexProperty {
  name: string;
  id: string;
  appliedToChildren: boolean;
  values: string[];
}

export default Vue.extend({
  name: "PropertySelector",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: String,
    property: Object as () => FlexProperty
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  select {
    min-width: 50%;
  }
}
</style>
