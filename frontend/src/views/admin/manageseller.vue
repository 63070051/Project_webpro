<template>
  <div id="app">
    <Navbar />
    <div class="max-w-4xl mx-auto py-4 bg-gray-300 px-4 rounded-2xl space-y-8">
      <div class="flex justify-between  my-auto bg-white  px-4 py-4 rounded-2xl" v-for="(seller, index) in selleruser" :key="seller.User_user_id">
        <div>
          <p>Name : {{seller.user_firstname}} {{seller.user_lastname}} </p>
          <p>Age : {{seller.user_age}}</p>
          <p>Tel : {{seller.user_phone}}</p>
        </div>
        <div class="flex items-center">
            <div class="flex space-x-4 items-center" v-show="seller.s_vertified == 'Not-Vertified'">
                <button class="bg-green-500 hover:bg-green-600 duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="vertified(seller.user_id, index)">
                    ยืนยัน
                </button>
            </div>
            <div class="flex space-x-4 items-center" v-show="seller.s_vertified == 'Vertified'">
                <button class="bg-red-500 hover:bg-red-600 duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="cancelvertified(seller.user_id, index)">
                    ยกเลิก
                </button>
            </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import navbar from "../component/navbar.vue";
import footer from "../component/footer.vue";
// @ is an alias to /src
export default {
  name: "Manageseller",
  data() {
    return {
      selleruser: [],
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getseller();
  },
  methods: {
    getseller() {
        axios
        .post(`http://localhost:3000/getseller`)
        .then(response => {
          this.selleruser = response.data
        })
        .catch(error => {
            console.log('error')
          this.error = error.response.data.message;
        });
    },
    vertified(sellerid, index){
        axios
        .post(`http://localhost:3000/vertifiedseller/${sellerid}`)
        .then(response => {
            this.selleruser[index].s_vertified = 'Vertified'
            console.log('success')
        })
        .catch(error => {
            console.log('err')
          this.error = error.response.data.message;
        });
    },
    cancelvertified(sellerid, index){
        axios
        .post(`http://localhost:3000/cancelseller/${sellerid}`)
        .then(response => {
            this.selleruser[index].s_vertified = 'Not-Vertified'
            console.log('success')
        })
        .catch(error => {
            console.log('err')
          this.error = error.response.data.message;
        });
    }
  }
};
</script>
