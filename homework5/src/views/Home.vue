<template>
      <div id="dynamic-component-demo">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab"
          >
            {{ tab }}
          </li>
        </ul>

        <keep-alive>
          <component :is="currentTabComponent" class="tab"></component>
        </keep-alive>
      </div>
</template>

<script>
// @ is an alias to /src

import tabPosts from "../components/tab-posts";
import tabGallery from "../components/tab-gallery";

export default {
  name: "Home",
  components: { tabPosts, tabGallery },
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "Gallery"],
    };
  },
  computed: {
    currentTabComponent() {
      return "tab" + this.currentTab;
    },
  },
};
</script>


<style scoped>
section.main {
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px 30px;
  box-sizing: border-box;
  text-align: center;
}
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
}
ul {
  display: flex;
  justify-content: center;
  background: #2e2e2e;
  margin: 0;
  padding: 0 !important;
}

</style>
