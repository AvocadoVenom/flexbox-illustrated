<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <div class="container">
      <div class="playground">
        <h3>Playground</h3>
        <div class="playground-sandbox" :style="actualProperties">
          <div class="box box--A" :style="actualPropertiesChildren">
            A
            <!-- <div class="size-info">150x150</div> -->
          </div>
          <div class="box box--B" :style="actualPropertiesChildren">
            B
            <!-- <div class="size-info">15x150</div> -->
          </div>
          <div class="box box--C" :style="actualPropertiesChildren">
            C
            <!-- <div class="size-info">150x15</div> -->
          </div>
          <div class="box box--D" :style="actualPropertiesChildren">
            D
            <!-- <div class="size-info">15x15</div> -->
          </div>
          <div class="box box--E" :style="actualPropertiesChildren">
            E
            <!-- <div class="size-info">75x100</div> -->
          </div>
        </div>
      </div>
      <div class="settings">
        <h3>Settings</h3>
        <div class="property-selectors">
          <property-selector
            v-for="(p, i) in flexProperties"
            :key="i"
            :property="p"
            :value="
              p.appliedToChildren
                ? actualPropertiesChildren[p.id]
                : actualProperties[p.id]
            "
            @change="onPropertyChanged"
          />
        </div>
      </div>
    </div>
    <div class="fixed-handbook-link">
      <a
        href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
        target="_blank"
        >Flexbox Handbook</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import PropertySelector, {
  FlexProperty
} from "@/components/PropertySelector.vue";

import * as FlexboxProperties from "@/models/flexbox-properties";

export default Vue.extend({
  name: "App",
  components: { PropertySelector },
  data: () => ({
    appName: "Flexbox Illustrated",
    FlexboxProperties,
    actualProperties: {
      "flex-direction": FlexboxProperties.FlexDirectionValues.ROW,
      "flex-wrap": FlexboxProperties.FlexWrapValues.NOWRAP,
      "justify-content": FlexboxProperties.JustifyContentValues.FLEX_START,
      "align-items": FlexboxProperties.AlignItemsValues.STRETCH,
      "align-content": FlexboxProperties.AlignContentValues.STRETCH
    } as any,
    actualPropertiesChildren: {
      "align-self": FlexboxProperties.AlignSelfValues.AUTO
    } as any
  }),
  computed: {
    flexProperties(): FlexProperty[] {
      return Object.entries({ ...FlexboxProperties }).map(([k, v]) => {
        const sanitizedWords = k.replace(/Values/g, "").split(/(?=[A-Z])/);
        return {
          name: sanitizedWords
            .map((x, i) => (i !== 0 ? x.toLocaleLowerCase() : x))
            .join(" "),
          id: sanitizedWords.join("-").toLocaleLowerCase(),
          appliedToChildren: ["align-self"].includes(
            sanitizedWords.join("-").toLocaleLowerCase()
          ),
          values: Object.values(v).map(x => x.toString())
        } as FlexProperty;
      });
    }
  },
  methods: {
    onPropertyChanged(data: FlexProperty & { value: string }): void {
      if (data.appliedToChildren) {
        this.actualPropertiesChildren[data.id] = data.value;
      } else {
        this.actualProperties[data.id] = data.value;
      }
    }
  }
});
</script>

<style lang="scss">
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  margin: 10px 0;
}

.container {
  display: flex;

  .playground {
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(70% - 10px);
    order: 1;
    margin-right: 20px;
    background-color: #f7f2b7;
    border-radius: 4px;

    .playground-sandbox {
      display: flex;
      height: 100%;
      margin: 20px;
      margin-top: 0;
      background-color: whitesmoke;
      min-height: 570px;

      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;

        .size-info {
          position: relative;
          top: 0;
          left: 10px;
          font-size: 9px;
        }

        &.box--A {
          min-width: 150px;
          height: 150px;
          background-color: #3e9aff;
        }
        &.box--B {
          min-width: 15px;
          height: 150px;
          background-color: #92e892;
        }
        &.box--C {
          min-width: 150px;
          height: 15px;
          background-color: #ffe9ad;
        }
        &.box--D {
          min-width: 15px;
          height: 15px;
          background-color: #e89293;
        }
        &.box--E {
          min-width: 75px;
          height: 100px;
          background-color: #a4a1ff;
        }
      }
    }
  }

  .settings {
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(30% - 10px);
    order: 2;
    background-color: #dae2f0;
    border-radius: 4px;

    .property-selectors {
      display: flex;
      flex-direction: column;
      align-content: stretch;
    }
  }
}

.fixed-handbook-link {
  position: fixed;
  right: 40px;
  bottom: 20px;
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;

    .playground {
      order: 2;
      margin-right: 0;
      margin-top: 20px;
    }

    .settings {
      order: 1;

      .property-selectors {
        display: flex;
        flex-direction: row;
        align-content: stretch;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
