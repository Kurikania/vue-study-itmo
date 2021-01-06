<template>
  <div>
    <GoBack />
    <div class="container">
      <h1>{{ productcategory }}</h1>
      <div v-for="(product, index) in products" :key="index">
        <router-link
          :to="{
            name: 'productView',
            params: { id: product.id },
          }"
        >
          <span class="card__text">
            {{ product.name }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "../components/GoBack";
export default {
  components: { GoBack },
  computed: {
    products() {
      return this.$store.getters.items;
    },
  },
  props: {
    productcategory: {
      type: String,
      required: true,
    },
  },
};
</script>