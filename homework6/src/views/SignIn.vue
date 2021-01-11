<template>
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6 mx-auto">
        <div class="card rounded-0 shadow">
          <div class="card-header">
            <h3 class="mb-0">Войти</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Ваша почта</label>
                <input
                  type="email"
                  v-model = "email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input
                  type="password"
                  v-model = "password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button @click.prevent="signIn" class="btn btn-outline-dark">Войти</button> 
              <small>  Нет профиля? 
              <router-link to="/signup">Зарегистрироваться</router-link>
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
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const authRes = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email.toLowerCase(), this.password);

        const dbUser = await db.collection("users").doc(authRes.user.uid).get();

        const userData = dbUser.data();
        this.$store.dispatch("setUserData", {
          id: dbUser.id,
          name: userData.name,
          email: userData.email,
        });

        this.$router.replace({ name: "Home" });
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
};
</script>

<style scoped>

</style>