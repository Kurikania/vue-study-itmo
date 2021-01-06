<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
 import firebase from "firebase";
 import { db } from "../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      this.isLoading = true;
      try {
        const authRes = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email.toLowerCase(), this.password);

        const dbUser = await db.collection("users").doc(authRes.user.uid).get();

        const userData = dbUser.data();
        this.$store.dispatch("user/setUserData", {
          id: dbUser.id,
          name: userData.name,
          email: userData.email,
          partnerId: userData.partnerId || [],
          movieApiPage: userData.movieApiPage || 1,
          likedMovies: userData.likedMovies || [],
        });

        this.$router.replace({ name: "Home" });
      } catch (error) {
        this.errorMsg = "An error!!!";
        if (error.message) {
          this.errorMsg = error.message;
        }
      }
      this.isLoading = false;
    },
  },
};
</script>