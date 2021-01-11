<template>
  <div class="productView">
    <span>
      <button
        type="button"
        class="btn btn-circle btn-outline-dark"
        @click="goBack"
      >
        <fa icon="arrow-left" type="fas" class="classname"></fa>
      </button>
    </span>
    <h1>{{ product.name }}</h1>
    <div class="card flex-row flex-wrap">
    <div class="card-header border-0">
      <img :src="product.image">
    </div>
    <div class="card-block px-2">
      <ul class="list-group">
        <li class="list-group-item" v-for="des in product.description" :key="des">{{ des }}</li>
      </ul>
      <p> Цена ${{ product.price }}</p>
      <p>Осталось на складе: {{ product.inStock }}</p>
      <button
        type="button"
        class="btn btn-outline-success"
        @click="addToCart(product)"
        v-if="product.inStock >= 1"
      >
        В корзину
      </button>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    product() {
      return this.$store.getters.items
        .find((d) => d.products.find((a) => a.id == this.id))
        .products.find((a) => a.id == this.id);
    },
  },
  methods: {
    goBack() {
      let path = this.$store.getters.items.find((d) =>
        d.products.find((a) => a.id == this.id)
      );
      this.$router.push({
        name: "Products",
        params: { productcategory: path.productName },
      });
    },
    addToCart(product) {
      if (this.$store.state.user.id) {
        this.$store.dispatch("addItem", product);
      } else {
        this.$router.replace({ name: "SignIn" });
      }
    },
  },
};
</script>

<style scoped>
img {
  max-width: 300px
}
.productView {
  margin: 10px;
  padding: 20px;
  background: #fff;
  width: 95%;
}
span {
  display: flex;
  cursor: pointer;
}

.btn-circle {
  width: 25px;
  height: 25px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
}
svg {
  transform: translateY(-7px);
  height: 20px;
}
</style>
