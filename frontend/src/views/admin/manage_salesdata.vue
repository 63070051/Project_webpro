<template>
  <div id="app">
    <Navbar />
    <div class="max-w-6xl mx-auto py-4" style="min-height: 500px;">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-4xl mt-8">Admin Seller Data</p>
          <div class="w-24 h-1 bg-blue-600 mt-2 rounded-lg"></div>
        </div>
        <div class="space-x-4 flex items-center">
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-sky-300"></div>
            <p>pending</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-red-600"></div>
            <p>cancel</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-emerald-400"></div>
            <p>confirm</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-amber-500"></div>
            <p>waiting admin</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-8">
        <div
          class="rounded-lg shadow-lg bg-white max-w-sm"
          v-for="car in cars"
          :key="car.car_id"
        >
          <div data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg" :src="selectimgcar(car.car_img)" alt="" />
          </div>

          <div class="p-6 space-y-3">
            <h5 class="text-gray-900 text-xl font-bold">
              {{ car.car_model }}
            </h5>
            <p class="text-gray-700 text-base">
              {{ car.car_engine + " / " + car.car_gear }}
            </p>
            <p>
              {{ convertdistance(car.car_distance) }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-black text-md font-bold">Status</span>
              <div
                v-if="car.sal_status == 'waiting admin'"
                class="flex gap-2 items-center"
              >
                <div class="rounded-full h-4 w-4 bg-amber-500"></div>
                <p class="text-amber-500">Waiting Admin</p>
              </div>
              <div v-else-if="car.sal_status == 'confirmed'" class='flex gap-2 items-center'>
                <div class="rounded-full h-4 w-4 bg-emerald-400"></div>
              <p class="text-emerald-400">Confirmed</p>
              </div>
            </div>
            <div class="flex justify-between items-center ">
              <div>
                <span class="text-black text-md font-bold">Buyer's name</span>
              </div>
              <p class="text-right font-bold text-md">
                {{ car.cusfirstname + " " + car.cuslastname }}
              </p>
            </div>
            <div
              class="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <div>
                <span class="text-black text-md font-bold">Seller name</span>
              </div>
              <p class="text-right font-bold text-md">
                {{ car.sellfirstname + " " + car.selllastname }}
              </p>
            </div>

            <div class="flex justify-between items-center">
              <p class="text-orange-500 font-bold text-xl float-right">
                {{ convertprice(car.car_price) }}
              </p>
              <button v-show="car.sal_status == 'waiting admin'" @click="confirmed(car)" class="bg-sky-800 w-24 rounded rounded-lg py-1 text-white">
                approve
              </button>
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
  name: "managedata",
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
    this.getcardata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getcardata() {
      axios
        .get(`http://localhost:3000/getcarsaledata`)
        .then(response => {
          this.cars = response.data;
          this.cars.forEach(e => {
            console.log(e.sal_status == 'waiting admin');
          });
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    convertdate(date) {
      let now = new Date(date);
      return now.getMonth() + 1 + "/" + now.getFullYear();
    },
    convertdistance(km) {
      let dis = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(km);
      return dis.slice(4, dis.length - 3) + " กม.";
    },
    convertprice(price) {
      let price2 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(price);
      return price2.slice(4, price2.length - 3) + " บาท";
    },
    selectimgcar(car_img) {
      if (car_img) {
        return "http://localhost:3000/" + car_img;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    confirmed(car){
      axios
        .put(`http://localhost:3000/finalsell/${car.sal_id}/${this.loginuser.user_id}`)
        .then(response => {
          if(response.data == 'success'){
            let index = this.cars.indexOf(car)
            this.cars[index].sal_status = 'confirmed'
          }
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    }
  }
};
</script>
