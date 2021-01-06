<template>
  <div class="home">
    <div class="hero">
      <carousel class="productCarousel" :items-to-show="1">
        <slide v-for="(slide, index) in items" :key="index">
          <div
            class="itemSlider"
            :style="{ backgroundImage: 'url(' + slide.coverImage + ')' }"
          >
            <button type="button" class="btn btn-outline-dark itemSlider_btn" @click="goTo(slide.productName)">
              {{ slide.productName }}
            </button>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div></div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  data() {
    return {
      // slider: [
      //   {image: '', name: 'phones'},
      //   {image: '', name: 'tablets'},
      //   {image: '', name: 'accesories'},
      // ]
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {
    goTo(path) {
      this.$router.replace({ name: 'Products', params: { productcategory: path }, })
    }
  },
  name: "Home",
  components: { Carousel, Slide, Pagination, Navigation },
};
</script>

<style scoped>
body{
  background-color: darkslategrey;
}
.productCarousel {
  width: 95vw;
  margin: auto;
}
.hero {
  background:  darkslategrey;
  min-height: 100vh;
}
.itemSlider {
  width: 100%;
  background-repeat: no-repeat;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
}

.itemSlider_btn {
  font-size: 5em;
}
</style>
