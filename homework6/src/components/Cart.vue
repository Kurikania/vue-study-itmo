<template>
  <div class="cart">
    <button type="button" class="btn btn-outline-light" @click="openModal">
      <fa icon="shopping-cart" type="fas" class="classname"></fa>
      <span v-if="cart.length > 0">({{ cart.length }})</span>
    </button>
    <div v-if="showModal" class="modal-mask">
      <div class="modal-container">
        <h4>Ваш заказ</h4>
        <div v-for="(item, index) in cart" :key="index" class="cart-item">
          <div>{{ index + 1 }}.</div>
          <!-- <div>
            <img :src="item.image" alt />
          </div> -->
          <div>
            <router-link
              @click="showModal = false"
              :to="{ name: 'productView', params: { id: item.id } }"
            >
              {{ item.name }}
            </router-link>
            {{ "$" + item.price }}
          </div>
          &nbsp;&nbsp;
          <div>
            <button
              type="button"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
              class="btn btn-dark btn-circle"
              @click="removeItem(item, index)"
            >
              <fa icon="times" type="fas" class="classname"></fa>
            </button>
          </div>
          <hr />
        </div>
        <hr />
        <p>Итого: {{ orderSum }}</p>
        <div style="display: flex; justify-content: space-between">
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="showModal = !showModal"
          >
            Закрыть корзину
          </button>
          <button
            type="button"
            v-if="cart.length > 0"
            class="btn btn-outline-dark"
            @click="goToOrder"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartCount() {
      return this.cart.length;
    },
    orderSum() {
      return this.$store.getters.cart.reduce((a, b) => a + (b.price || 0), 0);
    },
  },
  methods: {
    goToOrder() {
      this.showModal = false;
      this.$router.replace({ name: "OrderForm" });
    },
    removeItem(item, index) {
      let data = [item, index];
      this.$store.dispatch("removeItem", data);
    },
    openModal() {
      if (this.$store.state.user.id) {
        this.showModal = true;
      } else {
        this.$router.replace({ name: "SignIn" });
      }
    },
  },
};
</script>

<style scoped>
#app {
  padding: 1rem;
}

img {
  height: 80px;
}

.cart-item {
  display: flex;
  align-items: center;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn-circle {
  width: 16px;
  height: 16px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
}
svg {
  height: 25px;
}
.btn-circle svg {
  height: 10px;
}
/* .cart-btn {
  
} */
</style>
