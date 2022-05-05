<template>
  <div id="app">
    <Navbar />
    <div class="max-w-6xl mx-auto py-4" style="min-height: 500px;">
      <div class='flex justify-between items-center'>
        <div>
          <p class="text-4xl mt-8">My Booking</p>
         <div class="w-24 h-1 bg-blue-600 mt-2 rounded-lg"></div> 
        </div>
        <div class='space-x-4 flex items-center'>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-sky-300"></div>
            <p>Pending</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-red-600"></div>
            <p>Cancel</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-emerald-400"></div>
            <p>Confirm</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-amber-500"></div>
            <p>Waiting admin</p>
          </div>

        </div>

      </div>
     
      <div class="grid grid-cols-3 gap-8 py-12">
        <div class="rounded-lg shadow-lg bg-white max-w-sm" v-for="car in cars" :key="car.car_id">
          <div data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              :src=selectimgcar(car.car_img)
              alt=""
            />
          </div>
          <div class="p-6 space-y-3">
            <h5 class="text-gray-900 text-xl font-bold">
              {{car.car_model}}
            </h5>
            <p class="text-gray-700 text-base">
              {{car.car_engine + ' / ' + car.car_gear}}
            </p>
            <p>
             {{convertdistance(car.car_distance)}}
            </p>
            <div
              class="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <span class="text-black text-md font-bold">Sell by</span>
              <div class="flex space-x-2">
                <p class="text-right font-bold text-md">{{car.user_firstname}}</p>
                <p class="text-right font-bold text-md">{{car.user_lastname}}</p>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="text-orange-500 font-bold text-xl float-right">
                {{convertprice(car.car_price)}}
              </p>
              <div v-if="car.sal_status == 'waiting admin'" class='flex gap-2 items-center'>
                <div class="rounded-full h-7 w-7 bg-amber-500"></div>
              <p class="text-amber-500">Waiting Admin</p>
              </div>
              <div v-else-if="car.sal_status == 'confirmed'" class='flex gap-2 items-center'>
                <div class="rounded-full h-7 w-7 bg-emerald-400"></div>
              <p class="text-emerald-400">Confirmed</p>
              </div>
              <div v-else-if="car.sal_status == 'cancel'" class='flex gap-2 items-center'>
                <div class="rounded-full h-7 w-7 bg-red-600"></div>
              <p class="text-red-600">Cancel</p>
              </div>
              <div v-else class='flex gap-2 items-center'>
                <div class="rounded-full h-7 w-7 bg-sky-300"></div>
              <p class="text-sky-300">Pending</p>
              </div>
            </div>
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
  name: "salesdata_customer",
  data() {
    return {
      loginuser: [],
      cars: []
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getdata();
    this.getcardata(this.$route.params.cusid);
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
      if(this.loginuser.customer_type != 1){
        alert("You've not permission")
        this.$router.push('/')
      }
    },
    getcardata(cusid){
      axios
        .get(`http://localhost:3000/getcuscarseller/${cusid}`)
        .then(response => {
            this.cars = response.data
            console.log(this.cars)
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    convertdate(date) {
      let now = new Date(date);
      return now.getMonth()+1 + '/' +now.getFullYear()
    },
    convertdistance(km) {
      let dis = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(km);
      return dis.slice(4, dis.length - 3) + ' กม.'
    },
    convertprice(price) {
      let price2 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(price);
      return price2.slice(4, price2.length - 3) + ' บาท'
    },
    selectimgcar(car_img) {
      if (car_img) {
        return "http://localhost:3000/" + car_img;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
  }
};
</script>
