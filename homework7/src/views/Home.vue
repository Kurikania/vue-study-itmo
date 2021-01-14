<template>
  <div class="home">
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Перемешать</button>
      <button v-on:click="newGame">Новая игра</button>
      <transition-group name="flip-list" tag="div" class="container">
        <!-- <div v-for="(row, index) in cells" :key="index"> -->
        <div
          v-for="cell in cells"
          :key="cell[0]"
          :id = "cell[0]"
          :style="cell[1] ? { 'background-color': 'yellow' } : null"
          class="cell"
          @click="colorChange(cell)"
          
        >
         <span :style="{ color: cell[3], fontSize: cell[2]  }">{{ cell[0] }}</span> 
        </div>
        <!-- </div> -->
      </transition-group>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      cells: [],
      sizes: ['16px', '18px', '22px', '24px'],
      colors: ['#582630', '#484041', '#297373', '#3B3355'],
    };
  },
  methods: {
    shuffle() {
      this.cells.sort(() => Math.random() - 0.5);
    },
    newGame() {
      this.cells = [];
      for (let i = 1; i <= 100; i++) {
        this.cells.push([i, false, this.sizes[Math.floor(Math.random()* this.sizes.length)], this.colors[Math.floor(Math.random()* this.colors.length)]]);
      }
      this.shuffle();
    },
    colorChange(cell) {
      console.log(cell)
      if (cell[0] === 1) {          
        this.cells.find(a => a[0] == cell[0])[1] = true
      } else if (this.cells.find(a => a[0] == cell[0] -1 )[1] === true) {                
        this.cells.find(a => a[0] == cell[0])[1] = true
      }
      console.log(this.cells[cell[0]-1][1] === true)
    },
  },
  created() {
    this.newGame();
  },
  computed: {
     fontSize() {
      return this.sizes[Math.floor(Math.random()* this.sizes.length)]
     },
     activeColor() {
       return this.colors[Math.floor(Math.random()* this.colors.length)]
     }
  }
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 1s;
}
.cell {
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 540px;
  margin-top: 10px;
}
</style>
