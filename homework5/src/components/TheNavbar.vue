<template>
  <nav id="navbar">
    <ul>
      <li><router-link to="/">Task 1</router-link></li>
      <li><router-link to="/task2">Task 2</router-link></li>
      <li><router-link to="/task3">Task 3</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: #f3f3f3
}
nav {
  width: 100%;
  color: #bbb;
  background: #2e2e2e;
  font-weight: bold;
  letter-spacing: 0.025em;
}

nav ul {
  text-align: center;
  margin: 0;
}

nav ul li {
  display: inline-block;
  padding: 0 3em;
  line-height: 3em;
}

nav ul li:hover {
  background: #00939c;
}
</style>
