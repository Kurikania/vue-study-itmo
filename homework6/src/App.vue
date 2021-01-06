<template>
<div>

  <nav class="navbar navbar-expand navbar-dark bg-dark">
   <router-link to="/" class="navbar-brand" >Navbar</router-link>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
         <router-link to="/" class="nav-link"  >Главная </router-link>
      </li>
      <li class="nav-item">
         <router-link to="/delivery" class = "nav-link" >Правила доставки</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/OrderForm" class="nav-link" href="#">Оформить заказ</router-link>
      </li>
      <li class="nav-item" style="align-self: center">
         <Cart />
      </li>
    </ul>
</nav>

    <router-view />
  <font-awesome-icon icon="user-secret" />
</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Cart from './components/Cart'
export default {
  components: { FontAwesomeIcon, Cart}
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-family: sans-serif;
}

html {
  font-size: 62.5%;
}

a {
  font-size: 1.6em; 
  text-decoration: none;
  color: white
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
