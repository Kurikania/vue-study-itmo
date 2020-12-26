<template>
  <div class="dynamic-component-demo-posts-tab">
    <ul class="dynamic-component-demo-posts-sidebar">
      <li
        v-for="(article, index) in articles"
        :key="index"
        @click="numArt = index"
      >
        {{ article.title }}
      </li>
    </ul>
    <div class="dynamic-component-demo-post-container">
      <div class="dynamic-component-demo-post">
        <h3>{{ selectedPost.title }}</h3>
        <div v-html="selectedPost.text"></div>
      </div>     
    </div>
  </div>
</template>
<script>
export default {
  name: "tabPosts",
  data() {
    return {
      articles: [
        {
          title: "Vanilla Cake",
          text:
            "Not to mention its versatility: This vanilla cake batter is strong enough for shaped cakes, tiered cakes (see the slight variation in my homemade wedding cake recipe), and holds up beautifully under fondant. Use this batter for vanilla cupcakes, bundt cake, or even piñata cake. It’s classy enough for a wedding celebration, but unassuming enough for a big family dinner.",
          link: "https://sallysbakingaddiction.com/vanilla-cake/",
        },
        {
          title: "Cupcake",
          text:
            "Maintaining all the flavor from my favorite vanilla cupcakes, these confetti cupcakes are soft, fluffy, and extra moist. Creamy vanilla buttercream and extra sprinkles are the perfect finishing touch. I guarantee you’ll use this birthday cupcakes recipe time and time again!",
          link: "https://sallysbakingaddiction.com/confetti-cupcakes/",
        },
        {
          title: "Cherry pie",
          text:
            "When summer hits, I rush to my rolling pin in delight. “It’s time for fruit pie! It’s time for fruit pie!” I don’t say to myself. But you know. I’m really excited. The first pie I make every season is apple pie. Runner up is cherry. Cherry pie always makes an appearance on my table in July. There’s no denying the indulgence of this brightly-hued delicacy. In fact, it’s one of summer’s finest rewards.",
          link:
            "https://sallysbakingaddiction.com/sweet-cherry-pie-with-toasted-almonds/",
        },
        {
          title: "Chocolate Cake",
          text:
            "My s’mores chocolate mousse inspired me to play around in the kitchen the other week. I’ve always loved chocolate mousse, back to my childhood when my mom served it as an easy (yet totally elegant) dessert on the holiday table. Chocolate mousse is simple divinity in its own right, but when paired with chocolate cake, it’s downright decadent.",
          link: "https://sallysbakingaddiction.com/dark-chocolate-mousse-cake/",
        },
      ],
      numArt: 0,
    };
  },
  computed: {
    selectedPost() {
      return this.articles[this.numArt]
    }
  }
};
</script>

<style >

ul {
  margin: 0;
  padding: 0 !important;
}
.dynamic-component-demo-posts-tab {
  width: 70%;
  display: flex;
  align-items: center;
  font-size: 1.2em;
}
li {
  width: auto;
  list-style: none;
  background: #2e2e2e;
  padding: 0 2em;
  line-height: 3em;
  color: white;
  white-space: nowrap;
}
li:hover {
  background: #00939c;
}
.li.active {
  background: #00939c;
}

.dynamic-component-demo-post {
  align-self: flex-start;
  padding-left: 50px;
}
</style>