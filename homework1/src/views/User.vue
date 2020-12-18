<template>
  <div class="user">
    <section class = "main">
      <div class="userpic" v-bind:style="{ backgroundImage: 'url(' + user.userpic + ')' }">        
      </div>
      <div v-if="tab === 'main'">
        <p> <strong>Full name:</strong>  {{user.name}}</p>
        <p> <strong>Username:</strong>  {{user.username}} </p>
        <p> <strong>email:</strong> {{user.email}} </p>
        <p> <strong>Age: </strong> {{user.age}} </p>
      </div>
      <div class="content" v-if="tab === 'hobbies'"> <img src="/assets/logo.png" alt=""> </div>
      <div class="content" v-if="tab === 'books'"> 
            <img src="/assets/51+8t5OpUyL._SX379_BO1,204,203,200_.jpg" alt=""> 
            <img src="/assets/download (1).jpg" alt=""> 
            <img src="/assets/s-l300.jpg" alt=""> </div>
      <div class="content" v-if="tab === 'music'"> <img src="/assets/fce0805b45c5c3ffe7ab7fd6d2a3d966.png" alt="">  </div>
      <div class="navigation"> 
        <ul>
          <li @click="currentTab('main')"> Main </li>
          <li @click="currentTab('hobbies')"> Hobbies </li>
          <li @click="currentTab('books')"> Books </li>
          <li @click="currentTab('music')"> Music </li>
        </ul>
      </div>
    </section>  
  </div>
</template>

<script>
export default {
  data() {
    return{
      user: {username: "johndoe90", name: "John Doe", age: "30", email: "johndoe90@mail.ru", userpic: "./assets/765-default-avatar.png"},
      tab: "main"
    }
  }, 
  methods: {
    currentTab(tab) {
      this.tab = tab
    }
  }  
}
</script>

<style scoped>
  .userpic {
    width: 100px;
    height: 100px;    
    border:5px solid white;
    border-radius: 50%;
    transform: translateY(-50px);
    background-size: cover;
  }
  img {
    width: 100px;
    height: 100px; 
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
  li{
    width: 100px;
    background: rgb(46, 191, 145);
    font-weight: bold;
    color: white;
    border: none;
    margin: 10px 5px;
    padding: 10px; 
    
  } 
  li:hover{
    background: #2aaf85;
  }
  .content img {
    height: 200px;
    width: auto;
    box-shadow: 0 0 15px rgb(46, 191, 145)
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>