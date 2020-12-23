<template>
  <div class="home">
    <section class="main">
      <h2>What will you have today?</h2>
      <div class="services">
        <ul >
          <li class="checkbox"  v-for="(service, index) in services" :key="index" >
            <input
              class="checkbox-flip"
              type="checkbox"
              :value="service"
              name=""
              :id="index"
              v-model="selectesServices"
            />
            <label :for="index"> <span></span>
              {{ service.name }} - {{ service.price }}</label
            >
          </li>
        </ul>
      </div>
      <div v-if="selectesServices" class="total"> 
        Your Order {{ totalSum }}
        <button @click="emptyCart">Checkout</button>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Task1",
  components: {},
  data() {
    return {
      services: [
        { name: "Vanilla Cake", price: 200, description: "" },
        { name: "Cupcake", price: 100, description: "" },
        { name: "Cherry pie", price: 300, description: "" },
        { name: "Chocolate Cake", price: 250, description: "" },
      ],
      selectesServices: [],
    };
  },
  computed: {
    totalSum() {
      return this.selectesServices.reduce((a, b) => a + (b.price || 0), 0);
    },
  },
  methods: {
    emptyCart() {
      this.selectesServices.length = 0
    }
  }
};
</script>

<style lang="scss" scoped >
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #15171E;
  color: #d0d1d2;
}

button {
    width: 100px;
    background: #8360c3;
    font-weight: bold;
    color: white ;
    border: none;
    margin: 10px 5px;
    padding: 10px; 
  }

.checkbox {
  margin: 10px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  font-family: Helvetica;
  letter-spacing: 1px;
}

.checkbox-flip {
  display: none;
}

.checkbox-flip + label span {
  display: inline-block;
  width: 25px;
  height: 19px;
  margin: 0 5px -4px 0;
  /*layout relationship between check and label*/
}
.checkbox-flip + label span:before, .checkbox-flip + label span:after {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  content: "";
  position: absolute;
  z-index: 1;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: 2px solid #8360c3;
}
.checkbox-flip + label span:after {
  z-index: 0;
  border: none;
}

.checkbox-flip:checked + label span:before {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
  background: #8360c3;
}



</style>
