<template>
  <div>
    <h3 class="pb-5">Add Customer</h3>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="name" />
      </div>
      <button type="button" v-on:click="addCustomer" class="btn btn-primary btn-add-customer">Add</button>
    </form>
  </div>
</template>

<script>
import { Req } from "@/helpers/req";

export default {
  name: "AddCustomer",
  props: {
    msg: String
  },
  data() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    addCustomer: function() {
      var data = {
        name: this.name,
        email: this.email
      };
      Req.post("users", data).then(user => {
        console.log(user);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-add-customer {
  width: 150px;
}
</style>
