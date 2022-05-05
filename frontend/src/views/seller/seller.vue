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
  name: "Seller",
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
    this.getuser();
  },
  methods: {
    getuser(){
      let token = JSON.parse(localStorage.getItem('user'))
      axios
          .post(`http://localhost:3000/getuser`, {token : token})
          .then(response => {
            this.loginuser = response.data;
            this.getdata()
          })
          .catch(error => {
            this.error = error.response.data.message;
          });
    },
    getdata() {
      if(this.loginuser == 'error'){
          this.$router.push('/login')
      }
      else{
        axios
        .post(`http://localhost:3000/seller/${this.loginuser.user_id}`)
        .then((response) => {
          this.users = response.data[0];
          // console.log(this.users)
          if(!this.users.seller_type){
              this.$router.push('/vertified_seller')
          }
          else{
              this.$router.push('/addcar')
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
