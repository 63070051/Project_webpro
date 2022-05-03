<template>
  <div id="app">
    <Navbar />

      <div class="carousel relative rounded relative overflow-hidden shadow-xl">
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
            checked="checked">
          <div class="carousel-item absolute opacity-0 h-96  "  style="background: radial-gradient(circle, rgba(0,112,186,1) 0%, rgba(0,0,53,1) 100%);">
              <div class="flex justify-center h-full ">
                <div class='flex w-10/12 h-full '>
                  <div class="w-1/2 flex flex-col justify-center">
                      <p class="text-5xl py-4 text-white">
                          มั่นใจรถมือสองสภาพดี
                      </p>
                      <p class="text-white">
                        การันตีคุณภาพดี และ มีมาตรฐาน 
                      </p>
                  </div>
                  <div class="w-1/2 flex flex-col justify-center">
                    <img src="https://www.cars24.co.th/th/static/js/0fabb80f8cb2698a8aa7ff732e2369ab.svg" alt="">
                  </div>
                </div>
              </div>
          </div>
          <label for="carousel-3"
            class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>

          <!--Slide 2-->
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0 h-96  "  style="background: radial-gradient(circle, rgba(0,112,186,1) 0%, rgba(0,0,53,1) 100%);">
              <div class="flex justify-center h-full ">
                <div class='flex w-10/12 h-full '>
                  <div class="w-1/2 flex flex-col  justify-center">
                      <p class="text-5xl py-4 text-white">
                          มั่นใจรถมือสองสภาพดี
                      </p>
                      <p class="text-white">
                        การันตีคุณภาพดี และ มีมาตรฐาน 
                      </p>
                  </div>
                  <div class="w-1/2 ">
                    <img src="https://www.cars24.co.th/th/static/js/353270319117b058f2429715d142accf.svg" alt="">
                  </div>
                </div>
              </div>
          </div>
          <label for="carousel-1"
            class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>

          <!--Slide 3-->
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
         <div class="carousel-item absolute opacity-0 h-96  "  style="background: radial-gradient(circle, rgba(0,112,186,1) 0%, rgba(0,0,53,1) 100%);">
              <div class="flex justify-center h-full ">
                <div class='flex w-10/12 h-full '>
                  <div class="w-1/2  flex flex-col justify-center">
                      <p class="text-5xl py-4 text-white">
                          มั่นใจรถมือสองสภาพดี
                      </p>
                      <p class="text-white">
                        การันตีคุณภาพดี และ มีมาตรฐาน 
                      </p>
                  </div>
                  <div class="w-1/2 flex flex-col justify-center">
                    <img src="https://www.cars24.co.th/th/static/js/a6562487d7465cfb6bac3777fd306485.svg" alt="">
                  </div>
                </div>
              </div>
          </div>
          <label for="carousel-2"
            class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
              class="fas fa-angle-left mt-3"></i></label>
          <label for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
              class="fas fa-angle-right mt-3"></i></label>

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
            </li>
          </ol>

        </div>
      </div>
    <div class="max-w-6xl mx-auto my-8" style="min-height: 500px;">
      <p class="text-4xl mt-8">Recommended</p>
      <div class="w-48 h-1 bg-blue-600 mt-2 rounded-lg"></div>
      <div class="grid grid-cols-3 gap-8 mt-8">
        <div class="rounded-lg shadow-lg bg-white max-w-sm" v-for="car in cars" :key="car.model" @click="linktodetail(car.car_id)">
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
                <p class="pb-2 border-b border-gray-300">
                  {{convertdistance(car.car_distance)}}
                </p>
                <div class="flex justify-between">
                  <p class="text-orange-500 font-bold text-xl float-right">
                    {{convertprice(car.car_price)}}
                  </p>
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
import navbar from "./component/navbar.vue";
import footer from "./component/footer.vue";
// @ is an alias to /src
export default {
  name: "Home",
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
    this.getcar();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getcar() {
      axios
        .get(`http://localhost:3000/randomcar`)
        .then(response => {
          this.cars = response.data;
        })
        .catch(error => {
          this.error = error.response.data.message;
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
    linktodetail(carid){
      this.$router.push(`/detail/${carid}`)
    }
  }
};
</script>

<style>
        .carousel-open:checked+.carousel-item {
          position: static;
          opacity: 100;
        }

        .carousel-item {
          -webkit-transition: opacity 0.6s ease-out;
          transition: opacity 0.6s ease-out;
        }

        #carousel-1:checked~.control-1,
        #carousel-2:checked~.control-2,
        #carousel-3:checked~.control-3 {
          display: block;
        }

        .carousel-indicators {
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          bottom: 2%;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 10;
        }

        #carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
        #carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
        #carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
          color: #2b6cb0;
          /*Set to match the Tailwind colour you want the active one to be */
        }
      </style>
