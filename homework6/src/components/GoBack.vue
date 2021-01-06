<template>
  <span>
    <button type="button" class="btn btn-circle btn-outline-dark" @click="goBack">
      <fa icon="arrow-left" type="fas" class="classname"></fa>
    </button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
span {
  display: flex;
  cursor: pointer;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
}
svg {
  height: 15px
}
</style>