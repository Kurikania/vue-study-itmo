<template>
  <div class="about">
    <h1>Editable Text</h1>
    <div class="container">              
          <input type="text" v-if = "text.edit" v-model = "text.content"
          @blur= "text.edit = false; $emit('update')"
          @keyup.enter = "text.edit=false; $emit('update')">
                <div v-else>
            <label @click = "text.edit = true;"> {{text.content}} </label>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {content:'Edit Me!',edit:false},        
      
    }
  },

}
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;    
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
  font-size: 1.5em;  
}
input[type="text"] {
  text-align: center;
  padding: 5px;
  font-size: inherit;  
   border: 1px solid #5bd658;
}

</style>
