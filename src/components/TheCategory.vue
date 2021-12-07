<template>
  <div class="armor">
    <div class="container">
      <div
        v-for="(topItem, index) in categoryData"
        :key="index"
        class="content-item"
      >
        <p>{{ topItem.title }}</p>

        <ul>
          <li
            v-for="(item, index2) in topItem.items"
            :key="index2"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteParams } from 'vue-router';

export default defineComponent({
  name: 'TheCategory',

  data() {
    return {
      categoryData: [],
    };
  },

  watch: {
    '$route.params': async function (toParams: RouteParams) {
      this.categoryData = await this.getCategoryData(toParams.category);
    },
  },

  async created() {
    this.categoryData = await this.getCategoryData(this.$route.params.category as string);
  },

  methods: {
    async getCategoryData(category: string | string[]) {
      if (!category) {
        return;
      }

      if (Array.isArray(category)) {
        [category] = category;
      }

      const data = await import(`../assets/data/${category}.json`);

      return data.default;
    },
  },
});
</script>

<style>
.content-item {
  background-color: #424242;
  border-radius: 4px;
  color: #fff;
  margin: 10px;
  padding: 8px;
  position: relative;
  text-align: center;
}

/* Elements */
ul {
  display: inline-block;
  min-width: 300px;
  text-align: left;
}

li {
  list-style-type: none;
}

li::before {
  color: #d5d4d4;
  content: '•';
  padding-right: 10px;
}

.content-item > ul > li {
  color: #4c93d4;
}
</style>
