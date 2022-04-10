<template>
  <div id="app">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import navbar from "../component/navbar.vue";
import footer from "../component/footer.vue";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      loginuser: [],
    };
  },
  components :{
    Navbar : navbar,
    Footer : footer
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
