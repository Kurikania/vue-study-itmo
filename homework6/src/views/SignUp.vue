<template>
  <div class="row  h-100 justify-content-center align-items-center">
    <div class="col-md-6 mx-auto">
      <div class="card rounded-0 shadow">
        <div class="card-header">
          <h3 class="mb-0">Зарегистрироваться</h3>
        </div>
        <div class="card-body">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Ваша почта</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="username">Логин</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Пароль</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        id="exampleInputPassword1"
      />
      <small>не менее 6 символов</small>
    </div>
    <button type="button" class="btn btn-outline-dark"  @click.prevent="signup">Отправить</button>
    <small>
    Есть профиль? 
              <router-link to="/signin">Войти</router-link>
    </small>
  </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      try {
        let authRes = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.email.toLowerCase(),
            this.password
          );
        await db
          .collection("users")
          .doc(authRes.user.uid)
          .set({ name: this.name, email: this.email });
        this.$store.dispatch("setUserData", {
          id: authRes.user.uid,
          name: this.name,
          email: this.email,
        });
        this.$router.replace({ name: 'Home' });
      } catch (error) {
        alert(error)
       console.log(error);
      }
    },
  },
};
</script>