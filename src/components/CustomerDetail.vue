<template>
  <div>
    <h4 class="m-3">{{user.name}}</h4>
    <h5 class="m-3">{{user.email}}</h5>
    <button type="button" class="btn btn-danger m-3" v-on:click="deleteuser">Delete</button>
  </div>
</template>

<script>
import { Req } from "@/helpers/req";

export default {
  name: "CustomerList",
  props: {
    msg: String
  },
  data() {
    return {
      userId: this.$route.params.id,
      user: {}
    };
  },
  mounted() {
    console.log(this.$route);
    Req.get(`users/${this.userId}`).then(user => {
      this.user = user.data;
    });
  },
  methods: {
    deleteuser: function() {
      Req.delete(`users/${this.userId}`).then(user => {
        console.log(user);
        this.$router.push({ path: '/customers' })
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
