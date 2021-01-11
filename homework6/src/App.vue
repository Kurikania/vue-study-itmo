<template>
  <div class="vh-100">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
        <fa id="logo" icon="flushed" type="fas" class="classname"> </fa> My
        Store
      </router-link>
      <ul id="myTopnav" class="topnav navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Главная </router-link>
        </li>
        <li class="nav-item" v-if="userId">
          <router-link to="/OrderForm" class="nav-link" href="#"
            >Оформить заказ</router-link
          >
        </li>
        <li class="nav-item" v-if="!userId">
          <router-link to="/signin" class="nav-link" href="#">Войти</router-link>
        </li>
        <li class="nav-item" v-if="!userId">
          <router-link to="/signup" class="nav-link" href="#"
            >Зарегистрироваться</router-link
          >
        </li>
        <li v-if="userId" class="nav-item">
 <router-link to="/profile" class="nav-link" href="#">Мой профиль</router-link>
        </li>
        <li v-if="userId" class="nav-item">
          <a class="nav-link" @click="logoutUser">Выйти</a>
        </li>
        <li v-if="userId" class="nav-item" style="align-self: center">
          <Cart />
        </li>
        <li class="nav-item icon">
          <fa icon="bars" type="fa" class="classname" @click="navExpand"> </fa>
        </li>
      </ul>
    </nav>
    <div class="container h-75">
      <router-view />
    </div>
    <!-- <font-awesome-icon icon="user-secret" /> -->
  </div>
</template>

<script>
import firebase from "firebase";
import Cart from "./components/Cart";
export default {
  components: { Cart },
  computed: {
    userId() {
      return this.$store.state.user.id;
    },
  },
  methods: {
    navExpand() {
      var x = document.getElementById("myTopnav");
      if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
      } else {
        x.classList.add("responsive");
      }
    },
    async logoutUser() {
      await firebase.auth().signOut();
      this.$store.dispatch("clearData");
      this.$router.replace("/");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body {
  background-color: #6c757d !important;
}

html {
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: white;
}

.btn-circle {
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
}
svg {
  height: 25px;
}
#logo {
  height: 25px;
}

.topnav li.icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav li:not(:first-child) {
    display: none;
  }
  .topnav li.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .topnav.responsive {
    flex-direction: column !important;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive li.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive li {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
