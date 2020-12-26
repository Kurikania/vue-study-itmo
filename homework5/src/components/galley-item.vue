<template>
  <div class="image" :style="{ backgroundImage: `url(&quot;${src}&quot;)` }">
    <input
      class="delete"
      type="button"
      value="Delete"
      @click="deleteItem(id)"
    />
  </div>
</template>

<script>
export default {
  name: "GalleryItem",
  props: ["galleyImage", "galleyTitle"],
  data() {
    return {
      id: this.galleyTitle,
      src: this.galleyImage,
    };
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      this.$emit('deleteItem', id);
    },
  },
};
</script>

<style scoped>
.image:hover {
  opacity: 0.5;
}
.image:hover input {
  display: block;
}
.image input {
  position: absolute;
  display: none;
}
.image input.delete {
  top: 0;
  left: 79%;
}
</style>