<template>
  <section class="main" >
    <div class="slideOne">	
    <input  type="checkbox" id="type" v-model="isGrid" value="true"  />
    <label for="type"></label>
    </div>
    <div class="center" :class="{active: isGrid}">
    <div
      :class="{cardRow: isGrid}"     
      class="card"
      v-for="(article, index) in articles"
      :key="index"
      style="display: flex"  
    >
      <img :src="article.image" alt="" />
      <div>
        <h3>
          <a :href="article.link"> {{ article.title }} </a>
        </h3>
        <p>{{ article.text }}</p>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isGrid: false, 
      articles: [
        {
          title: "Vanilla Cake",
          image:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/01/vanilla-cake-600x900.jpg",
          text:
            "Not to mention its versatility: This vanilla cake batter is strong enough for shaped cakes, tiered cakes (see the slight variation in my homemade wedding cake recipe), and holds up beautifully under fondant. Use this batter for vanilla cupcakes, bundt cake, or even piñata cake. It’s classy enough for a wedding celebration, but unassuming enough for a big family dinner.",
          link: "https://sallysbakingaddiction.com/vanilla-cake/",
        },
        {
          title: "Cupcake",
          image:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/03/sprinkle-cupcakes-with-vanilla-buttercream-600x900.jpg",
          text:
            "Maintaining all the flavor from my favorite vanilla cupcakes, these confetti cupcakes are soft, fluffy, and extra moist. Creamy vanilla buttercream and extra sprinkles are the perfect finishing touch. I guarantee you’ll use this birthday cupcakes recipe time and time again!",
          link: "https://sallysbakingaddiction.com/confetti-cupcakes/",
        },
        {
          title: "Cherry pie",
          image:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2015/07/sweet-cherry-pie-almonds-600x900.jpg",
          text:
            "When summer hits, I rush to my rolling pin in delight. “It’s time for fruit pie! It’s time for fruit pie!” I don’t say to myself. But you know. I’m really excited. The first pie I make every season is apple pie. Runner up is cherry. Cherry pie always makes an appearance on my table in July. There’s no denying the indulgence of this brightly-hued delicacy. In fact, it’s one of summer’s finest rewards.",
          link:
            "https://sallysbakingaddiction.com/sweet-cherry-pie-with-toasted-almonds/",
        },
        {
          title: "Chocolate Cake",
          image:
            "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/dark-chocolate-mousse-cake-600x900.jpg",
          text:
            "My s’mores chocolate mousse inspired me to play around in the kitchen the other week. I’ve always loved chocolate mousse, back to my childhood when my mom served it as an easy (yet totally elegant) dessert on the holiday table. Chocolate mousse is simple divinity in its own right, but when paired with chocolate cake, it’s downright decadent.",
          link: "https://sallysbakingaddiction.com/dark-chocolate-mousse-cake/",
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
} 
input[type=checkbox] {
	visibility: hidden;
}
.slideOne {
	width: 50px;
	height: 10px;
	background: #333;
	margin: 20px auto;

	border-radius: 50px;
	position: relative;

	box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2);
}

.slideOne label {
	display: block;
	width: 16px;
	height: 16px;
	border-radius: 50px;

	transition: all .4s ease;
	cursor: pointer;
	position: absolute;
	top: -3px;
	left: -3px;

	box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3);
	background: rgb(46, 191, 145);;

	background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);

}

.slideOne input[type=checkbox]:checked + label {
	left: 37px;
}

.main {
  width: 95vw;
  margin: auto;
  margin-bottom: 50px;
}
.card {
  align-self: center;
  width: 600px;
  margin: 20px;
  padding: 10px;
  box-shadow: 0 0 15px rgb(46, 191, 145);
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cardRow {
  height: 220px;
  font-size: 0.8em;
  width: 300px;
  align-items: center;
}
.cardRow img {
  width: 80px !important;
  height: 150px !important;
}
.cardRow p {
  margin-left: 10px !important;
}
.active {
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-around;
}
.card img {
  width: 200px;
  height: auto;
}
.card p {
  text-align: left;
  margin-left: 40px;
}
</style>