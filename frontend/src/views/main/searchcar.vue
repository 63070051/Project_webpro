<template>
  <div id="app">
    <Navbar />
    <div class="max-w-6xl mx-auto mt-10">
      <div class="flex items-center space-x-3 mb-5">
        <div
          class="centered h-5 w-5 bg-cover bg-center"
          style="
            background-image: url('https://cdn.discordapp.com/attachments/958256273592307722/965169133807337472/search1.png');
          "
        ></div>
        <input
          class="
            w-full
            text-lg
            py-2
            border-b border-gray-300
            focus:outline-none focus:border-indigo-500
          "
          type="text"
          id="searchbox"
          name="searchbox"
          placeholder=""
        />
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div class="dropdown inline-block relative">
            <button class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0">
              <p>ราคา</p>
              <svg
                      class="fill-current h-4 w-4 text-amber-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
            </button>
            <div class="dropdown-menu absolute hidden text-gray-700 pt-1 drop-shadow-md	">
              <div style="width: 500px; height: 350px" class="bg-white rounded-lg z-50 flex flex-col justify-between">
                <div class=" px-6 py-5">
                  <div class="flex justify-between items-end">
                    <div>
                      <p class="text-gray-600 mb-1">ราคาต่ำสุด</p>
                      <div class="flex items-center">
                        <input type="text" class="border-2 rounded-l-md focus:outline-none py-1 px-2 w-40 font-semibold text-right">
                        <div class="border-y-2 border-r-2 px-1 py-1 rounded-r-md bg-gray-100 font-semibold">THB</div>
                      </div>
                    </div>
                    <div class="w-6 rounded bg-gray-300 mb-4" style="height: 3px"></div>
                    <div>
                      <p class="text-gray-600 mb-1">ราคาสูงสุด</p>
                      <div class="flex items-center">
                        <input type="text" class="border-2 rounded-l-md focus:outline-none py-1 px-2 w-40 font-semibold text-right">
                        <div class="border-y-2 border-r-2 px-1 py-1 rounded-r-md font-semibold">THB</div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-7">
                    <p>แนะนำ</p>
                      <div class="grid grid-cols-2 mt-3 gap-2">
                        <div class="border-2 w-44 text-center rounded-md hover:bg-gray-100">ภายใต้ THB 400,000</div>
                        <div class="border-2 w-44 text-center rounded-md hover:bg-gray-100">THB 400k - 600k</div>
                        <div class="border-2 w-44 text-center rounded-md hover:bg-gray-100">THB 600k - 800k</div>
                        <div class="border-2 w-44 text-center rounded-md hover:bg-gray-100">สูงกว่า THB 800k</div>
                      </div>
                  </div>
                </div>
                <div class="h-24 shadow-lg w-full flex justify-center items-center " style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);">
                  <div class="w-60 text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500">ดูข้อมูลที่กรองแล้ว</div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown inline-block relative">
            <button class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0">
              <p>แบรนด์</p>
              <svg
                      class="fill-current h-4 w-4 text-amber-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
            </button>
            <div class="dropdown-menu absolute hidden text-gray-700 pt-1 drop-shadow-md	">
             <div style="width: 500px; height: 500px" class="bg-white rounded-lg z-50 flex flex-col justify-between pt-3">
               <div class="px-3">
                <div class="text-gray-500 pl-5 py-2 border-b-2 ">
                  แบรนด์ทั้งหมด
                </div>
                <div class="px-6 py-5 grid grid-rows-6 gap-3">
                  <div class="flex items-center border-b-2 py-2">
                    <input type="checkbox">
                    <p class="ml-4">Totota</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input type="checkbox">
                    <p class="ml-4">Mercedes-Benz</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input type="checkbox">
                    <p class="ml-4">BMW</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input type="checkbox">
                    <p class="ml-4">Honda</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input type="checkbox">
                    <p class="ml-4">Nissan</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input type="checkbox">
                    <p class="ml-4">Others</p>
                  </div>
                </div>
               </div>
                <div class="h-24 shadow-lg w-full flex justify-center items-center " style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);">
                  <div class="w-60 text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500">ดูข้อมูลที่กรองแล้ว</div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown inline-block relative">
            <button class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0">
              <p>ปี</p>
              <svg
                      class="fill-current h-4 w-4 text-amber-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
            </button>
            <div class="dropdown-menu absolute hidden text-gray-700 pt-1 drop-shadow-md	">
              <div style="width: 500px; height: 400px" class="bg-white rounded-lg z-50 flex flex-col justify-between">
                <div class=" px-6 py-5">
                  <div class="flex justify-between items-end">
                    <div>
                      <p class="text-gray-600 mb-1">ปีต่ำสุด</p>
                        <input type="text" class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right">
                    </div>
                    <div class="w-6 rounded bg-gray-300 mb-4" style="height: 3px"></div>
                    <div>
                      <p class="text-gray-600 mb-1">ปีสูงสุด</p>
                        <input type="text" class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right">
                    </div>
                  </div>
                  <div class="mt-7">
                    <p>แนะนำ</p>
                      <div class="grid grid-cols-2 mt-3 gap-2">
                        <div class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100">2016 - 2018</div>
                        <div class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100">2018 -2020</div>
                        <div class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100">2020 -2021</div>
                      </div>
                  </div>
                </div>
                <div class="h-24 shadow-lg w-full flex justify-center items-center " style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);">
                  <div class="w-60 text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500">ดูข้อมูลที่กรองแล้ว</div>
                </div>
              </div>
            </div>
          </div>
           <div class="dropdown inline-block relative">
            <button class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0">
              <p>เลขไมล์</p>
              <svg
                      class="fill-current h-4 w-4 text-amber-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
            </button>
            <div class="dropdown-menu absolute hidden text-gray-700 pt-1 drop-shadow-md	">
              <div style="width: 500px; height: 400px" class="bg-white rounded-lg z-50 flex flex-col justify-between">
                <div class=" px-6 py-5">
                  <div class="flex justify-between items-end">
                    <div>
                      <p class="text-gray-600 mb-1">เลขไมล์ต่ำสุด</p>
                        <input type="text" class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right">
                    </div>
                    <div class="w-6 rounded bg-gray-300 mb-4" style="height: 3px"></div>
                    <div>
                      <p class="text-gray-600 mb-1">เลขไมล์สูงสุด</p>
                        <input type="text" class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right">
                    </div>
                  </div>
                  <div class="mt-7">
                    <p>แนะนำ</p>
                      <div class="grid grid-cols-2 mt-3 gap-2">
                        <div class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100">2016 - 2018</div>
                        <div class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100">2018 -2020</div>
                        <div class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100">2020 -2021</div>
                      </div>
                  </div>
                </div>
                <div class="h-24 shadow-lg w-full flex justify-center items-center " style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);">
                  <div class="w-60 text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500">ดูข้อมูลที่กรองแล้ว</div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown inline-block relative">
            <button class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0">
              <p>สี</p>
              <svg
                      class="fill-current h-4 w-4 text-amber-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
            </button>
            <div class="dropdown-menu absolute hidden text-gray-700 pt-1 drop-shadow-md	">
              <div style="width: 500px; height: 500px" class="bg-white rounded-lg z-50 flex flex-col justify-between pt-3">
               <div class="px-3">
                <div class="text-gray-600 font-medium pl-5 pt-5">
                  สี
                </div>
                <div class="px-6 py-5 grid grid-cols-3 gap-6">
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-white border-gray-400" style="border: 1px solid gray"></div>
                    <p>ขาว</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-black border-gray-400" style="border: 1px solid gray"></div>
                    <p>ดำ</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-gray-500 border-gray-400" style="border: 1px solid gray"></div>
                    <p>เทา</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-gray-300 border-gray-400" style="border: 1px solid gray"></div>
                    <p>บรอนซ์</p>
                  </div><div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-cyan-700 border-gray-400" style="border: 1px solid gray"></div>
                    <p>น้ำเงิน</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 border-gray-400" style="border: 1px solid gray; background-color: red;"></div>
                    <p>แดง</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-yellow-800 border-gray-400" style="border: 1px solid gray"></div>
                    <p>น้ำตาล</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 bg-orange-400 border-gray-400" style="border: 1px solid gray"></div>
                    <p>ส้ม</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input type="checkbox">
                    <div class=" w-8 py-2 border-gray-400" style="border: 1px solid gray ;background-image: url('https://www.cars24.co.th/th/static/js/9c28e4e1d6d13ff6948f8aec8986ead0.svg')"></div>
                    <p>อื่นๆ</p>
                  </div>
                </div>
               </div>
                <div class="h-24 shadow-lg w-full flex justify-center items-center " style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);">
                  <div class="w-60 text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500">ดูข้อมูลที่กรองแล้ว</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
    <div class="max-w-5xl mx-auto py-4">
      <div class="grid grid-cols-3 gap-8">
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
    Footer: footer,
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
      console.log('1')
      axios
        .post(`http://localhost:3000/getcar`)
        .then((response) => {
          this.cars = response.data;
        })
        .catch((error) => {
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
    },
  },
};
</script>
