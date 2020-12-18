<template>
  <div class="home">
    <section class = "main">

      <h1>{{name}}</h1>
      <div class="container">
        <carousel :items-to-show="1">
          <slide v-for="(slide, index) in image" :key="index">
             <img :src="slide" >
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
        <div class="descr">
          <p>
             {{text}}
            <a href="" @click.prevent="openDetails">more details</a>
          </p>
          <p v-if="detailsShow">
            <ul v-for="(detail, index) in description" :key="index">      
                  <li> {{detail}}</li>      
            </ul>
            </p>
            <button @click="add">
              BUY NOW
            </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      name: 'HP Spectre x360',
      image: ['./assets/download.jpg','./assets/d1072af9c589a3f84eec870445c6da22b67924baa99cc8ee8dcdc75c1b0ea054.jpg','./assets/1004055_v01_b.jpg'],
      description: ["color: black" , "processor: Core i7", "production year: 2020", "material: metall", 'frequency: 15.6"'],
      text: ` HP Spectre X360 is a Windows 10 Professional laptop with a 13.30-inch display that has a resolution of 1920x1080 pixels. 
              It is powered by a Core i7 processor and it comes with 8GB of RAM.
               The HP Spectre X360 packs 256GB of SSD storage. Graphics are powered by Intel Integrated UHD Graphics 620.`,
      detailsShow: false
    }
  }, 
  methods: {
    openDetails() {
      this.detailsShow = !this.detailsShow
    },
    add() {
      this.$emit('cart-add')
    }
  }
}
</script>


<style scoped>  

  img {
    width: 250px
  }
  .carousel {
    width: 80%;
    max-width: 400px;
    align-self: center;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    width: 200px;
  }
  ul:nth-child(even) {
    background-color: #cebcf0
  }
  li{
    text-align: left;
    line-height: 1,5em;
    margin: 0;
  }
  button {  
    width: 100px;
    background: #2ebf91;
    font-weight: bold;
    color: white ;
    border: none;
    margin: 10px 5px;
    padding: 10px; 
  }
  button:hover {
    background: #2aaf85;
  }
  .descr {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    .container {
    display: flex;
    flex-direction: column;
    }
    img {
    width: 100px
  }
  }
</style>