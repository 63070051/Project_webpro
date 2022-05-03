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
    this.getdata();
    this.checkvaliadate()
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    checkvaliadate(){
        if(this.loginuser.user_id != this.$route.params.sellerid){
            alert('You not permission');
            this.$router.push('/')
        }
    }
  },
};
</script>
