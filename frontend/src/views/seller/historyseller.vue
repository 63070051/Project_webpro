<template>
  <div id="app">
    <Navbar />
    <div class="max-w-6xl mx-auto py-4" style="min-height: 500px;">
      <p class="text-4xl mt-8">My Cars</p>
      <div class="w-24 h-1 bg-blue-600 mt-2 rounded-lg"></div>
      <div class="grid grid-cols-3 gap-8 my-10">
        <div
          class="rounded-lg shadow-lg bg-white max-w-sm cursor-pointer"
          v-for="car in sellercar"
          :key="car.car_id"
        >
          <div
            @click="linktodetail(car.car_id)"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img class="rounded-t-lg" :src="selectimgcar(car.car_img)" alt="" />
          </div>

          <div class="p-6 space-y-3">
            <div class="space-y-3" @click="linktodetail(car.car_id)">
              <h5 class="text-gray-900 text-xl font-bold">
                {{car.car_modelyear}} {{car.car_brand}} {{car.car_model}}
              </h5>
              <p class="text-gray-700 text-base">
                {{ car.car_engine + " / " + car.car_gear }}
              </p>
              <p class="pb-2 border-b border-gray-300">
                {{ convertdistance(car.car_distance) }}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="text-orange-500 font-bold text-xl float-right">
                {{ convertprice(car.car_price) }}
              </p>
              <button
                class="bg-sky-800 w-20 rounded rounded-md text-white"
                @click="linkupdate(car.car_id)"
              >
                edit
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
  name: "Seller",
  data() {
    return {
      loginuser: [],
      users: [],
      sellercar: []
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getuser();
    this.getsellercar();
  },
  methods: {
    getuser() {
      let token = JSON.parse(localStorage.getItem('user'))
      axios
          .post(`http://localhost:3000/getuser`, {token : token})
          .then(response => {
            this.loginuser = response.data;
            this.checkvaliadate();
          })
          .catch(error => {
            this.error = error.response.data.message;
          });
    },
    checkvaliadate() {
      if (this.loginuser.user_id != this.$route.params.sellerid) {
        alert("You not permission");
        this.$router.push("/");
      }
    },
    getsellercar() {
      axios
        .get(
          `http://localhost:3000/getcarseller/${this.$route.params.sellerid}`
        )
        .then(response => {
          this.sellercar = response.data;
          //   console.log(this.sellercar)
        })
        .catch(error => {
          console.log(error);
        });
    },
    selectimgcar(car_img) {
      if (car_img) {
        // console.log("http://localhost:3000/" + car_img);
        return "http://localhost:3000/" + car_img;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    convertprice(price) {
      let price2 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(price);
      return price2.slice(4, price2.length - 3) + " บาท";
    },
    convertdistance(km) {
      let dis = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(km);
      return dis.slice(4, dis.length - 3) + " กม.";
    },
    linkupdate(carid) {
      this.$router.push(`/update_car/${carid}`);
    },
    linktodetail(carid) {
      this.$router.push(`/detail/${carid}`);
    }
  }
};
</script>
