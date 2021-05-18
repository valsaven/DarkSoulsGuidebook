<template>
  <div class="armor">
    <div class="container">
      <div
        v-for="(topItem, index) in Armor"
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
import Armor from "../assets/data/armor.json";

export default defineComponent({
  name: 'Armor',
  data() {
    return {
      Armor,
    };
  },
});
</script>
