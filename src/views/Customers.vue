<template>
  <div>
    <h3 class="p-5">Customers</h3>
    <CustomerList/>
  </div>
</template>

<script>
import CustomerList from "@/components/CustomerList.vue";

export default {
  name: "Customers",
  props: {
    msg: String
  },
  components: {
    CustomerList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
