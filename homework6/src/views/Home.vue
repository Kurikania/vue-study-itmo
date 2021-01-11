<template>
  <div class="home">
    <div class="hero">
      <carousel :wrap-around="true" class="productCarousel" :items-to-show="1">
        <slide v-for="(slide, index) in items" :key="index">
          <div
            class="itemSlider"
            :style="{ backgroundImage: 'url(' + slide.coverImage + ')' }"
          ></div>
          <div class="itemSlider_content">
            <h2>{{ slide.productName }}</h2>
            <p class="itemSlider_p">{{ slide.coverText }}</p>
            <button
              type="button"
              class="btn btn-outline-danger itemSlider_btn"
              @click="goTo(slide.productName)"
            >
              Смотреть все
            </button>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="categories">
      <div
        class="container-fluid products"
        v-for="(products, index) in items"
        :key="index"
      >
        <h4 class="m-2">{{ products.productName }}</h4>
        <div class="row">
          <div
            class="col-md-4 mb-3"
            v-for="(product, index) in products.products"
            :key="index"
          >
            <div class="card shadow">
              <router-link
                :to="{ name: 'productView', params: { id: product.id } }"
              >
                <div

                  class="card-img-top"
                  :style="{ backgroundImage: 'url(' + product.image + ')' }"
                  style = "height: 300px; background-position: center"
                > </div>
              </router-link>
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  v-if="product.inStock >= 1"
                  @click="addToCart(product)"
                >
                  В корзину
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  @click="goto(product.id)"
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "../vue3-carousel";
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {
    goTo(path) {
      this.$router.push({
        name: "Products",
        params: { productcategory: path },
      });
    },
    goto(product) {
      this.$router.push({ name: "productView", params: { id: product } });
    },
  },
  name: "Home",
  components: { Carousel, Slide, Pagination, Navigation},
};
</script>

<style scoped>
h4 {
  color: white;
}
body {
  background-color: rgb(18, 24, 24);
}
.productCarousel {
  margin: auto;
}
.hero {
  min-height: 100vh;
}
.itemSlider {
  z-index: 100;
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  min-height: 90vh;
  height: inherit;
  background-size: cover;
  filter: blur(3px);
  background-position: center;
}

.itemSlider_content {
  height: inherit;
  margin: 20px;
  z-index: 101;
  text-shadow: 0 0 2px #ffffff, 0 0 8px #ffffff, 0 0 15px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.itemSlider_btn {
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 0 0 15px #ffffff;
}
.itemSlider_p {
  width: 90%;
  font-size: 1.5em;
}
.carousel__viewport {
  height: 90vh;
}
.carousel__slide {
  height: 90vh;
}
</style>
