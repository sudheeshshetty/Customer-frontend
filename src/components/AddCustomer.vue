<template>
  <form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" />
    </div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" />
    </div>
    <button type="button" class="btn btn-primary btn-add-customer">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddCustomer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-add-customer {
  width: 150px;
}
</style>
