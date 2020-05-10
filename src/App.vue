<template>
  <div id="app">
    <h1>{{ appName }}</h1>
    <div class="container">
      <div class="playground">
        <h3>Playground</h3>
        <div class="playground-sandbox" :style="actualProperties">
          <box
            v-for="b in maxBox"
            :index="b"
            :key="b"
            :style="actualPropertiesChildren"
          />
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
          <div class="box-setup">
            <button type="button" @click="maxBox++">Add Box</button>
            <button type="button" @click="maxBox--">Remove Box</button>
          </div>
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

import Box from "@/components/Box.vue";

import * as FlexboxProperties from "@/models/flexbox-properties";

export default Vue.extend({
  name: "App",
  components: { PropertySelector, Box },
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
    } as any,
    maxBox: 5
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

    .box-setup {
      display: flex;
      padding: 10px;
      > * {
        flex: 0 0 calc(50% - 10px);

        &:first-child {
          margin-right: 20px;
        }
      }
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

.appear-enter-active,
.appear-leave-active {
  transition: all 0.5s;
}
</style>
