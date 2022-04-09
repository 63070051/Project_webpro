<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import axios from "axios";
import navbar from "./component/navbar.vue";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      loginuser: [],
    };
  },
  components :{
    Navbar : navbar
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>
