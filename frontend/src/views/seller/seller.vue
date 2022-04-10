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
      users : []
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
      if(this.loginuser == null){
          this.$router.push('/login')
      }
      else{
        axios
        .post(`http://localhost:3000/seller/${this.loginuser.user_id}`)
        .then((response) => {
          this.users = response.data;
          console.log(this.users)
          if(this.users.seller_type == null){
              this.$router.push('/vertified_seller')
          }
          else{
              this.$router.push('/seller')
          }
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
      }
    },
  },
};
</script>
