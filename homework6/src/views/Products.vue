<template>
  <div>
    <GoBack />
    <div class="container-fluid products">
      <h1>{{ productcategory }}</h1>
      <div class="row">
        <p class="p-2">{{products.coverText}}</p>
        <div
          class="col-md-4 mb-3"
          v-for="(product, index) in products.products"
          :key="index"
        >
          <div class="card shadow">
            <router-link
              :to="{ name: 'productView', params: { id: product.id } }"
            >
              <div class="card-img-top" :style="{ backgroundImage: 'url(' + product.image + ')' }" />
            </router-link>
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>          
              <button type="button" class="btn btn-outline-success" v-if="product.inStock >= 1" @click="addToCart(product)">
                В корзину
              </button>
              <button type="button" class="btn btn-outline-dark" @click="goto(product.id)">
                Подробнее
              </button>
            </div>
          </div>
        </div>
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
      return this.$store.getters.items.find((d) => {
        return d.productName == this.productcategory;
      });
    },
  },
  props: {
    productcategory: {
      type: String,
      required: true,
    },
  },
    methods: {
      addToCart(product) {
        if (this.$store.state.user.id) {
        this.$store.dispatch("addItem", product);
        } else {
          this.$router.replace({ name: "SignIn" });
        }
      }, 
      goto(product) {
        this.$router.push({ name: 'productView', params: { id: product }})
      }
    }
};
</script>

<style scoped>
.card-img-top {
  height: 300px;
  width: 100%;
    background-position: center;
    background-size: cover;
}

.products {
  margin: 10px;
  padding: 20px;
  background: #fff;
  width: 95%;
}
</style>