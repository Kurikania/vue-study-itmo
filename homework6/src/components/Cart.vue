<template>
  <div class="cart">
    <button type="button" class="btn btn-outline-light" @click="showModal = !showModal"><fa icon="shopping-cart" type="fas" class="classname"></fa></button>

    <div v-if="showModal" class="modal-mask">
      <div class="modal-container">
        <h4>Ваш заказ</h4>
         <div v-for="(item, index) in cart" :key="index">
        <div>{{ item.name }}</div>
        <div>
          <img :src="item.image[0]" alt />
        </div>
        <div>{{ "$" + item.price }}</div>
        <div>         
          <button type="button" class="btn btn-dark btn-circle" @click="removeItem(index, item.id)"> <fa icon="times" type="fas" class="classname"></fa> </button>
        </div>
      </div>
        <p>Total {{ orderSum }}</p>
        <div style="display: flex; justify-content: space-between">
         <button type="button" class="btn btn-outline-dark" @click="showModal = !showModal">Закрыть корзину</button>
         <button type="button" class="btn btn-outline-dark" @click="goToOrder">Оформить заказ</button>
        </div>
      </div>
    </div>
  <!-- <span>Total {{ orderSum }}</span>
    <button @click="showList()" id="show">
      {{ cartCount }}
    </button>
    <div id="shoppingList" v-if="cartCount">
      <div v-for="(item, index) in cart" :key="index">
        <div>{{ item.name }}</div>
        <div>
          <img :src="item.image[0]" alt />
        </div>
        <div>{{ "$" + item.price }}</div>
        <div>
          <button @click="removeItem(index, item.id)">Remove</button>
        </div>
      </div>
      <div>
        <div>
          <button @click="showList()">Back to shopping</button>
          <router-link :to="{ name: 'OrderForm' }"
            ><button @click="showList()">Buy Now</button>
          </router-link>
        </div>
      </div>
    </div> -->
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
    // cart() {
    //   return this.$store.getters.StoreCart.map((cartitems) => {
    //     return this.$store.getters.products.find((itemForSale) => {
    //       return cartitems === itemForSale.id;
    //     });
    //   });
    // },
    orderSum() {
      return this.$store.getters.cart.reduce((a, b) => a + (b.price || 0), 0);
    },
  },
  methods: {
    goToOrder() {
      this.showModal = false; 
      this.$router.replace({ name: 'OrderForm' });
    }
  }
};
</script>

<style scoped>
#app {
  padding: 1rem;
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
  font-family: Helvetica, Arial, sans-serif;
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
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
}
svg {
  height: 15px
}
/* .cart-btn {
  
} */
</style>
