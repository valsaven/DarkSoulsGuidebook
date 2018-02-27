<template>
  <div class="armor">
    <div class="container">
      <div class="content-item" v-for="topItem in Armor">
        <p>{{topItem.title}}</p>
        <ul>
          <li v-for="item in topItem.items">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

</style>

<script>
import Armor from '../assets/Data/armor.json';

module.exports = {
  name: 'armor',
  data() {
    return {
      Armor,
    };
  },
};
</script>
