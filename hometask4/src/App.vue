<template>
  <div>
    <div id="nav">
      <router-link to="/"><button>Task1</button></router-link> |
      <router-link to="/task2"> <button>Task 2</button></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
}
body {
  margin: 0;
  padding: 0;
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  font-family: sans-serif;
}
section.main {
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  background-color: white;
  padding: 20px 30px;
  box-shadow: 0 0 15px rgb(74, 13, 131);
  box-sizing: border-box;
  text-align: center;
}

#nav {
  display: flex;
  align-items: center;
  height: 100px;
  margin: 0 auto;
}
#nav button {
  width: 100px;
  background: white;
  font-weight: bold;
  color: #8360c3;
  border: none;
  margin: 10px 5px;
  padding: 10px;
}
ul,
li {
  list-style: none;
}
</style>
