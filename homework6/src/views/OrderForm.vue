<template>
  <div class="order">
    <h1>Ваш зказ</h1>
    <div v-if="cart.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Изображение</th>
            <th scope="col">Название</th>
            <th scope="col">Цена</th>
            <th scope="col">Удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td style="margin: auto">
              {{ index + 1 }}
            </td>
            <td style="margin: auto">
              <img style="height: 80px" :src="item.image" alt />
            </td>
            <td> <router-link  :to="{name: 'productView', params: { id: item.id }}">{{ item.name }} </router-link></td>
            <td>{{ "$" + item.price }}</td>
            <td><button
              type="button"
               style="display: flex; align-items: center; justify-content: center ; padding: 1px"
              class="btn btn-dark btn-circle"
              @click="removeItem(item, index)"
            >
              <fa icon="times" type="fas" class="classname"></fa>
            </button></td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        class="btn btn-dark itemSlider_btn"
        @click="finishOrder"
      >
        Оплатить
      </button>
      <button
        type="button"
        class="btn btn-danger itemSlider_btn"
        @click="deleteAll"
      >
        Очистить
      </button>
    </div>

    <div v-else>
      <h3>Корзина пуста</h3>
      <button type="button" class="btn btn-dark itemSlider_btn" @click="goTo">
        На главную
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
export default {
  methods: {
    goTo() {
      this.$router.push({ name: "Home" });
    },
    async finishOrder() {
      console.log(...this.cart)
      let currentUser = db.collection("users").doc(this.authUserId);
      await currentUser
        .collection("orders")
        .doc()
        .set({ date: Date.now(),
          ...this.cart });
      this.deleteAll();
       this.$router.push({ name: "OrderFinish" });
    },
    deleteAll() {
      this.$store.dispatch("clearCart")
    },
        removeItem(item, index) {
      let data = [item, index];
      this.$store.dispatch("removeItem", data);
    },
  },
  computed: {
    authUserId() {
      return this.$store.state.user.id;
    },
    cart() {
      return this.$store.getters.cart;
    },
  },
};
</script>

<style scoped>
.order {
  margin: 10px;
  padding: 20px;
  background: #fff;
  width: 95%;
}
.table {
  width: inherit;
}

.classname {
  height: 25px;
}
</style>