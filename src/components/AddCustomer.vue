<template>
  <div>
    <h3 class="pb-5">Add Customer</h3>
    <form>
      <div class="form-group text-left">
        <label for="email">Email address</label>
        <input @blur="validate" type="email" class="form-control" v-model="email" />
        <p v-if="!isvalidEmail" class="invalid p-2">Not a valid email</p>
      </div>
      <div class="form-group text-left">
        <label for="name">Name</label>
        <input type="text" class="form-control" v-model="name" />
      </div>

      <button type="button" v-on:click="addCustomer" class="btn btn-primary btn-add-customer">Add</button>
      <p v-if="!isvalidfields" class="invalid p-2">Need valid fields</p>
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
      email: "",
      isvalidEmail: true,
      isvalidfields: true
    };
  },
  methods: {
    validate: function() {
      var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (re.test(this.email)) {
        this.isvalidEmail = true;
      } else {
        this.isvalidEmail = false;
      }
    },
    addCustomer: function() {
      if (this.name && this.email && this.isvalidEmail) {
        this.isvalidfields = true;
        var data = {
          name: this.name,
          email: this.email
        };
        Req.post("users", data).then(user => {
          if (user.data == "User already found") {
            this.$toasted.show("Customer already present", { duration: 2000 });
          } else {
            console.log(user);
            this.$toasted.show("Customer created successfully", {
              duration: 2000
            });
            this.name = "";
            this.email = "";
          }
        });
      } else {
        this.isvalidfields = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-add-customer {
  width: 150px;
}
.invalid {
  color: red;
  font-size: 12px;
}
</style>
