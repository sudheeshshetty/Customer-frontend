<template>
  <div id="main">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
export default {
  name: "Main",
  components: {
    Header
  }
};
</script>

<style scoped>
</style>