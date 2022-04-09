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
      users : []
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
      if(this.loginuser == null){
          this.$router.push('/login')
      }
      else{
        axios
        .get(`http://localhost:3000/seller/:id`)
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
        if(this.users.seller_type == null){
            this.$router.push('/vertified_seller')
        }
        else{
            this.$router.push('/seller')
        }
      }
    },
  },
};
</script>
