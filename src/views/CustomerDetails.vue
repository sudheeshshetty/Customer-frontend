<template>
  <div>
    <h3 class="p-5">Customer Details</h3>
    <CustomerDetail />
  </div>
</template>

<script>
import CustomerDetail from "@/components/CustomerDetail.vue";

export default {
  name: "CustomersDetails",
  props: {
    msg: String
  },
  components: {
    CustomerDetail
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
