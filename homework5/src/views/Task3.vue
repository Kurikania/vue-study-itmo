<template>
  <div>
    <form class="search_bar large">
      <input type="text" v-model="item" placeholder="Add your image" />
      <button @click.prevent="addImage">Get</button>
    </form>
    <div class="gallery">
      <gallery-item @deleteItem="deleteItem"
        v-for="image in images"
        :key="image.title"
        :galleyImage="image.src"
        :galleyTitle="image.title"
      />
    </div>
  </div>
</template>

<script>
import GalleryItem from "../components/galley-item";
export default {
  components: { GalleryItem },
  data() {
    return {
      images: [
        {
          src:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-600x900.jpg",
          title: "Image 1",
        },
        {
          src:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/03/sprinkle-cupcakes-with-vanilla-buttercream-600x900.jpg",
          title: "Image 2",
        },
        {
          src:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/07/sweet-cherry-pie-almonds-600x900.jpg",
          title: "Image 3",
        },
        {
          src:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/dark-chocolate-mousse-cake-600x900.jpg",
          title: "Image 4",
        },
      ],
      idNum: 5,
      item: "https://picsum.photos/500/500",
    };
  },
  methods: {
    addImage() {
      this.images.push({src:this.item, title: "Image " + this.idNum});
      this.idNum++
    },
    deleteItem(id) {
      this.images = this.images.filter(a => a.title !== id)
    }
  },
};
</script>

<style scoped>
.gallery {
  display: grid;
  max-width: 70%;
  margin: 20px auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(250px, auto);
}

.gallery div {
  position: relative;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

form {
  margin: 30px auto;
}

.search_bar {
  background: #fff;
  border: #b7b7b7 solid 1px;
  border-radius: 3px;
  box-shadow: 0 0 3px #ccc;
  position: relative;
  font-family: "Source Sans Pro", sans-serif;
  max-width: 420px;
}
.search_bar input[type="text"] {
  border: none;
  box-shadow: none;
  font-weight: 600;
  font-size: 14px;
  width: 80%;
  padding: 0.5em;
  margin: 0;
  overflow: hidden;
}
.search_bar input[type="text"]:focus {
  outline: none;
}
.search_bar button {
  background: chocolate;
  color: rgba(255, 255, 255, 0);
  border: 1px solid #be5d0c;
  min-width: 56px;
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 0 3px 3px 0;
  margin: 0;
}
.search_bar button:after {
  content: "";
  position: absolute;
  top: 18%;
  right: 0;
  bottom: 22%;
  left: 4%;
  background: url("https://img.icons8.com/android/24/ffffff/plus.png") no-repeat
    center center;
  background-size: contain;
}

.search_bar button:hover,
.search_bar button:focus {
  background: rgb(206, 90, 7);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.search_bar.large {
  max-width: 560px;
}
.search_bar.large input[type="text"] {
  font-size: 16px;
}
</style>