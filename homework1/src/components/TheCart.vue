<template>
 <div  v-if="cart">
      <div class="cart__dropdown">
        <span>Товар в корзине</span>
        <button @click="closeCart">Закрыть</button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        addItem: {
            type: Boolean,
        }
    },
    computed: {
        cart() {
            return this.addItem
        }
    },    
    methods: {
        closeCart() {
            this.$emit("remove")
        }
    }, 
}
</script>

<style scoped>

  .cart-widget {
    position: relative;
  }
  .cart__dropdown {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 5px 12px 0px #9c9c9c;
    color: #2d2d2d;
    background-color: #ffffff;
    padding: 16px;
  }
    button {
    width: 100px;
    background:  #8360c3;
    font-weight: bold;
    color: white;
    border: none;
    margin: 10px 5px;
    padding: 10px; 
  }
</style>

