<template>
  <div class="not-found">
    <p>404.</p>
    <h2>YOU DIED</h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

<style scoped>
.not-found {
  background-color: #000;
  color: #580c11;
}
</style>
