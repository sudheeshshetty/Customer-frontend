<template>
  <div class="row home">
    <div class="col-md-6 m-auto">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="col-md-6 m-auto p-5">
      <AddCustomer />
    </div>
  </div>
</template>

<script>
import AddCustomer from "@/components/AddCustomer.vue";

export default {
  name: "home",
  components: {
    AddCustomer
  }
};
</script>

<style scoped>
.home {
  min-height: 90vh;
  overflow: hidden;
}
</style>
