<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" v-bind:key="user._id">
        <router-link :to="{path:`customerdetails/${user._id}/`}">
          <div class="row">
            <div class="col-md-6 text-left">{{user.name}}</div>
            <div class="col-md-6 text-left">{{user.email}}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Req } from "@/helpers/req";

export default {
  name: "CustomerList",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    var data = {
      name: this.name,
      email: this.email
    };
    Req.get("users", data).then(users => {
      console.log(users);
      this.users = users.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-add-customer {
  width: 150px;
}
</style>
