<template>
  <section class="main">
    <h1>Dad jokes</h1>
    <div class="jokes">
      <div class="text">
        <transition name="slide-fade">
          <div v-if="show">
            {{ phrase[jokeNum] }}
          </div>
        </transition>
      </div>
    </div>
    <div class="controls">
      <div class="icon" @click="backOneJoke">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          />
        </svg>
      </div>
      <div class="icon" @click="plsStop" :class="{ active: !isAuto }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
        </svg>
      </div>
      <div
        v-if="!isAuto"
        class="icon"
        :class="{ active: isAuto }"
        @click="nextJokeAuto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 22v-20l18 10-18 10z" />
        </svg>
      </div>
      <div v-else class="icon" :class="{ active: isAuto }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path class="icon" d="M3 22v-20l18 10-18 10z" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phrase: [],
      interval: null,
      jokeNum: -1,
      isAuto: true,
      show: true,
      setTime: null,
    };
  },
  mounted() {
    fetch("https://icanhazdadjoke.com/slack")
      .then((res) => {
        return res.json(); // Convert the data into JSON
      })
      .then((data) => {
        this.phrase.push(data.attachments[0].fallback);
      })
      .catch((err) => {
        console.log(err); // Log error if any
      });
    setTimeout(() => (this.show = false), 4000);
    this.jokeNum++;
    this.interval = setInterval(this.nextJoke, 4500);
  },
  methods: {
    nextJoke() {
      setTimeout(() => (this.show = true), 500);
      fetch("https://icanhazdadjoke.com/slack")
        .then((res) => {
          return res.json(); // Convert the data into JSON
        })
        .then((data) => {
          this.phrase.push(data.attachments[0].fallback);
        })
        .catch((err) => {
          console.log(err); // Log error if any
        });
      this.setTime = setTimeout(() => (this.show = false), 4000);
      this.jokeNum++;
    },
    nextJokeAuto() {
      this.isAuto = true;
      this.interval = setInterval(this.nextJoke, 4500);
    },
    plsStop() {
      clearTimeout(this.setTime);
      clearInterval(this.interval);
      this.show = true;
      this.isAuto = false;
    },
    backOneJoke() {
      this.isAuto = false;
      clearInterval(this.interval);
      this.show = false;
      this.jokeNum--;
      setTimeout(() => (this.show = true), 1000);
    },
  },
};
</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.jokes {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 50px;
}
.text {
  width: 60%;
  text-align: center;
  border: 1px solid gray;
  font-size: 2em;
  padding: 30px;
  min-height: 60px;
}
.active {
  fill: white;
  background: chocolate !important;
}
h1 {
  text-align: center;
  font-size: 3em;
  margin-bottom: 0;
}
.controls {
  display: flex;
  justify-content: center;
}
.controls div {
  margin: 20px 0 0;
  padding: 20px;
  color: white;
}
.controls div:hover {
  padding: 20px;
  background: chocolate;
}
.icon {
  fill: white;
  background: #2e2e2e;
}
</style>