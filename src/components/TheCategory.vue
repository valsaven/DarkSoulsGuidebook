<template>
  <div class="armor">
    <div class="container">
      <div
        v-for="(topItem, index) in categoryData"
        :key="index"
        class="content-item"
      >
        <p class="glow">{{ topItem.title }}</p>

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

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

interface CategoryItem {
  title: string;
  items: string[];
}

const route = useRoute();
const categoryData = ref<CategoryItem[]>([]);

const getCategoryData = async (category: string | string[]) => {
  const categoryName = Array.isArray(category) ? category[0] : category;

  if (!categoryName) {
    return [];
  }

  try {
    const data = await import(`../assets/data/${categoryName}.json`);
    return data.default;
  } catch (error) {
    console.error(`Error loading data for category: ${categoryName}`, error);
    return [];
  }
};

watch(
  () => route.params.category,
  async (newCategory) => {
    if (newCategory) {
      categoryData.value = await getCategoryData(newCategory);
    }
  },
  { immediate: true },
);

onMounted(async () => {
  categoryData.value = await getCategoryData(route.params.category as string);
});
</script>

<style scoped>
ul {
  display: inline-block;
  min-width: 300px;
  text-align: left;
}

li {
  list-style-type: none;

  &::before {
    color: #d5d4d4;
    content: '•';
    padding-right: 10px;
  }
}

.content-item li {
  color: #4c93d4;
}
</style>
