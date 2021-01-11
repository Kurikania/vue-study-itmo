<template>
  <div class="order_finish">
    <h1>Спасибо за покупку!</h1>
    <p>
      Историю ваших покупок вы можете найти в<router-link to="/profile">
        своем профиле </router-link
      >.
    </p>
    <button type="button" class="btn btn-dark itemSlider_btn" @click="goTo">
      На главную
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    goTo() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.order_finish {
  margin: 10px;
  padding: 20px;
  background: #fff;
  width: 95%;
}
</style>