
<template>
  <div class="gallery">
    <div
      v-for="(image, index) in images"
      :key="index"
      :style="{ backgroundImage: `url(&quot;${image}&quot;)` }"
      alt=""
      :id="index"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-600x900.jpg",
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/03/sprinkle-cupcakes-with-vanilla-buttercream-600x900.jpg",
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/07/sweet-cherry-pie-almonds-600x900.jpg",
        "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/dark-chocolate-mousse-cake-600x900.jpg",
      ],
    };
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
  width: 100%;
  background-position: center;
}
</style>