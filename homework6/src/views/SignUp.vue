<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <!-- <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      > -->
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <button type="submit" class="btn btn-primary"  @click.prevent="signup">Submit</button>
  </form>
</template>

<script>
import firebase from "firebase";
import { db } from "../firebase";
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
       console.log(error);
      }
    },
  },
};
</script>