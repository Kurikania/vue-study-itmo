<template>
  <div class = "profile">
    <h1>Мой профиль</h1>
    <p> Мое имя: {{ user.name }}</p>
    <p> Моя почта:{{ user.email }} </p>
    <hr />
    <h2>История покупок</h2>
  <div class="order shadow" v-for="(order, index) in orders" :key="index">
<h6>{{order[0].date}}</h6>
        <table class="table" >             
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in order" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ "$" + item.price }}</td>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
</template>

<script>
import { db } from "../main";
import moment from 'moment'
export default {
  data() {
    return {
      orders: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    async getData() {
      const authUserId = this.$store.state.user.id;
      console.log(this.$store.state.user.id)
      const currentUser = db.collection("users").doc(authUserId);
      await currentUser
        .collection("orders")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let entry = doc.data();
            entry[0].date = moment(entry.date).format('lll')
            delete entry['date']
            this.orders.push(entry);
            console.log(entry)
          });
        });
        
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.profile {
  margin: 10px;
  padding: 20px;
  background: #fff;
  width: 95%;
}

/* .table {
  width: auto;
} */
.order {
  padding: 10px;
  border-radius: 6px;
  /* box-shadow: 4px 4px 8px 2px rgba(34, 60, 80, 0.2); */
  margin-bottom: 10px;
}

</style>