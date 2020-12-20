<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="container">
        <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search title.."/>        
        </div>
    <h1>Latest Posts r/ProgrammerHumor</h1>
    <hr>      
    <div>
      <div class="post" v-for="(post, index) in filteredList" 
      :item = "post" 
      :key="index"
        > 
        <div v-if="!post.data.is_video"> 
        <h3> {{ post.data.title }} </h3>     
     
        <img class="fullWidthImage"  @click="fullImage($event)" :src="post.data.url" alt=""> 
          <div id="modal01" class="modal" onclick="this.style.display='none'">
                <div class="w3-modal-content w3-animate-zoom">
                  <img :src="post.data.url" style="max-width:100%; max-height: 90vh">
                </div>
          </div>
          <p> {{post.data.selftext}} </p>
        </div>
        </div>
      </div> 
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      search: '',
      posts: [], 
        
    }
  },

  mounted() {
  fetch('https://www.reddit.com/r/ProgrammerHumor/top.json')
  .then((res) => {
    return res.json();   // Convert the data into JSON
  })
  .then((data) => {
    this.posts = data.data.children;   
  })
  .catch((err) => {
    console.log(err);   // Log error if any
  })
  }, 
    computed: {
    filteredList() {
      return this.posts.filter(post => {
        return post.data.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    fullImage(event) {    
       
      console.log(event.target.parentNode.children[1])
   event.target.parentNode.children[2].style.display = "block"
     
  },
  }
}

</script>

<style scoped>
.modal{
          z-index:3;
          display:none;
          padding:20px;
          position:fixed;
          left:0;top:0;
          width:100%;
          height:100%;
          overflow:auto;
          background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
.container {
  max-width: 800px;
  margin: 0 auto;
}
.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
.fullWidthImage  {
  height: 200px;
  max-width: 100%;
}

img:hover {
  cursor: pointer;
}
</style>

