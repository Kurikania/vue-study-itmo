<template>
  <div>
    <TheNavbar />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
  * {
    font-family: sans-serif;
  }
</style>
