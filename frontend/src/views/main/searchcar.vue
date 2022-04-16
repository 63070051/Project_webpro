<template>
  <div id="app">
    <Navbar />
    <div class="flex justify-center my-6">
      <div class="mb-3 xl:w-96">
        <div class="input-group relative flex  w-full mb-4">
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto">
      <div class="filter grid grid-cols-5 gap-4">
        <div>
          <select
            name="driving_type"
            id="driving_type"
            v-model="brand"
            class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
          >
            <option value="Please Select" selected>Please Select</option>
            <option value="Mercedes Benz">Mercedes Benz</option>
            <option value="BMW">BMW</option>
            <option value="Nissan">Nissan</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        <div class="flex items-center col-span-2">
          <input
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="minprice"
            name="minprice"
            type="number"
            placeholder="MinPrice"
            v-model="minprice"
          />
          <div class="w-12 h-1 bg-black "></div>
          <input
            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="maxprice"
            name="maxprice"
            type="number"
            placeholder="MaxPrice"
            v-model="maxprice"
          />
        </div>

        <div>
          <select
            name="driving_type"
            id="driving_type"
            v-model="maxprice"
            class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
          >
            <option value="Please Select" selected>Please Select</option>
            <option value="Mercedes Benz">Mercedes Benz</option>
            <option value="BMW">BMW</option>
            <option value="Nissan">Nissan</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto py-4">
      <div class="grid grid-cols-3 gap-2">
        <div class="flex justify-center" v-for="car in cars" :key="car.car_id">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                :src="selectimgcar(car.car_img)"
                alt=""
              />
            </a>

            <div class="p-6 space-y-3">
              <h5 class="text-gray-900 text-xl font-medium">
                {{ car.car_model }}
              </h5>
              <p class="text-gray-700 text-base">
                {{ car.car_engine + " / " + car.car_gear }}
              </p>
              <p class="pb-2 border-b border-gray-300">
                {{ car.car_distance }} ก.ม.
              </p>
              <div class="flex justify-between">
                <p class="text-orange-500 font-bold text-xl float-right">
                  {{ car.car_price }}
                </p>
                
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
  name: "Searchcar",
  data() {
    return {
      loginuser: [],
      brand: "Please Select",
      cars: [],
      minprice: 0,
      maxprice: 9999999999,
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getdata();
    this.getcar();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getcar() {
      axios
        .post(`http://localhost:3000/getcar`)
        .then(response => {
          this.cars = response.data;
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    selectimgcar(car_img) {
      if (car_img) {
        console.log("http://localhost:3000/" + car_img);
        return "http://localhost:3000/" + car_img;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    }
  }
};
</script>
