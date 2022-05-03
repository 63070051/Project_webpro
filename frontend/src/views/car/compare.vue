<template>
  <div id="app">
    <Navbar />
    <div class="mx-auto max-w-7xl text-center pt-10">
        <p class="text-5xl font-semibold">เปรียบเทียบรถรุ่นต่างๆ</p>
        <div class="flex justify-center mt-10">
                <div>
                    <div class="h-80" style="width: 550px">
                        <div class="carousel relative rounded relative overflow-hidden shadow-xl">
                            <div class="carousel-inner relative overflow-hidden w-full">
                                <!--Slide 1-->
                                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                                    checked="checked">
                                <div class="carousel-item absolute opacity-0 bg-center h-80" style=" background-image: url(https://mdbootstrap.com/img/new/slides/052.jpg)">

                                </div>
                                <label for="carousel-6"
                                    class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-2"
                                    class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                <!--Slide 2-->
                                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                                <div class="carousel-item absolute opacity-0 bg-center h-80" style=" background-image: url(https://mdbootstrap.com/img/new/slides/043.jpg)">
                                </div>
                                <label for="carousel-1"
                                    class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-3"
                                    class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                <!--Slide 3-->
                                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
                                <div class="carousel-item absolute opacity-0 h-80" style=" background-image: url(https://mdbootstrap.com/img/new/slides/054.jpg)">
                                </div>
                                <label for="carousel-2"
                                    class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-4"
                                    class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>
                                
                                <!--Slide 4-->
                                <input class="carousel-open" type="radio" id="carousel-4" name="carousel" aria-hidden="true" hidden="">
                                <div class="carousel-item absolute opacity-0 h-80" style=" background-image: url(https://cdn.discordapp.com/attachments/958256273592307722/965612274184245298/unknown.png)">
                                </div>
                                <label for="carousel-3"
                                    class="control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-5"
                                    class="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                    <!--Slide 5-->
                                <input class="carousel-open" type="radio" id="carousel-5" name="carousel" aria-hidden="true" hidden="">
                                <div class="carousel-item absolute opacity-0 h-80" style=" background-image: url(https://cdn.discordapp.com/attachments/958256273592307722/965612274184245298/unknown.png)">
                                </div>
                                <label for="carousel-4"
                                    class="control-5 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-6"
                                    class="next control-5 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                    <!--Slide 6-->
                                <input class="carousel-open" type="radio" id="carousel-6" name="carousel" aria-hidden="true" hidden="">
                                <div class="carousel-item absolute opacity-0 h-80" style=" background-image: url(https://cdn.discordapp.com/attachments/958256273592307722/965612274184245298/unknown.png)">
                                </div>
                                <label for="carousel-5"
                                    class="control-6 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-1"
                                    class="next control-6 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
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
                                    <li class="inline-block mr-3">
                                    <label for="carousel-4"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-5"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-6"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 space-y-6 text-lg font-semibold mb-10">
                        <p class="border-b-2 border-gray-200 p-2">{{convertprice(firstcar.car_price)}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_type}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_brand}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_model}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_yearbought}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_gear}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_num_of_gear}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_engine}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{firstcar.car_drive_type}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{convertdistance(firstcar.car_distance)}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{convertact(firstcar.car_act)}}</p>
                    </div>
                </div>
                <div class="w-32 mt-6 pt-80 space-y-6 text-lg font-semibold text-center">
                    <p class="border-b-2 border-gray-200 p-2">ราคา</p>
                    <p class="border-b-2 border-gray-200 p-2">ประเภทรถ</p>
                    <p class="border-b-2 border-gray-200 p-2">แบรนด์</p>
                    <p class="border-b-2 border-gray-200 p-2">รุ่น</p>
                    <p class="border-b-2 border-gray-200 p-2">ปีที่ออก</p>
                    <p class="border-b-2 border-gray-200 p-2">ระบบเกียร์</p>
                    <p class="border-b-2 border-gray-200 p-2">จำนวนเกียร์</p>
                    <p class="border-b-2 border-gray-200 p-2">เครื่องยนต์</p>
                    <p class="border-b-2 border-gray-200 p-2">ระบบขับเคลื่อน</p>
                    <p class="border-b-2 border-gray-200 p-2">ระยะทางที่ขับ</p>
                    <p class="border-b-2 border-gray-200 p-2">พ.ร.บ.</p>
                </div>
                <div>
                    <div class="h-80" style="width: 550px">
                        <div class="carousel relative rounded relative overflow-hidden shadow-xl">
                            <div class="carousel-inner relative overflow-hidden w-full">
                                <!--Slide 7-->
                                <input class="carousel-open-1" type="radio" id="carousel-7" name="carousel-1" aria-hidden="true" hidden=""
                                    checked="checked">
                                <div class="carousel-item-1 absolute opacity-0 bg-center h-80" style=" background-image: url(https://mdbootstrap.com/img/new/slides/052.jpg)">
                                    <p>7</p>
                                </div>
                                <label for="carousel-12"
                                    class="control-7 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-8"
                                    class="next control-7 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                <!--Slide 8-->
                                <input class="carousel-open-1" type="radio" id="carousel-8" name="carousel-1" aria-hidden="true" hidden="">
                                <div class="carousel-item-1 absolute opacity-0 bg-center h-80" style=" background-image: url(https://mdbootstrap.com/img/new/slides/043.jpg)">
                                </div>
                                <label for="carousel-7"
                                    class=" control-8 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-9"
                                    class="next control-8 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                <!--Slide 9-->
                                <input class="carousel-open-1" type="radio" id="carousel-9" name="carousel-1" aria-hidden="true" hidden="">
                                <div class="carousel-item-1 absolute opacity-0 h-80" style=" background-image: url(https://mdbootstrap.com/img/new/slides/054.jpg)">
                                </div>
                                <label for="carousel-8"
                                    class="control-9 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-10"
                                    class="next control-9 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>
                                
                                <!--Slide 10-->
                                <input class="carousel-open-1" type="radio" id="carousel-10" name="carousel-1" aria-hidden="true" hidden="">
                                <div class="carousel-item-1 absolute opacity-0 h-80" style=" background-image: url(https://cdn.discordapp.com/attachments/958256273592307722/965612274184245298/unknown.png)">
                                </div>
                                <label for="carousel-9"
                                    class="control-10 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-11"
                                    class="next control-10 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                    <!--Slide 11-->
                                <input class="carousel-open-1" type="radio" id="carousel-11" name="carousel-1" aria-hidden="true" hidden="">
                                <div class="carousel-item-1 absolute opacity-0 h-80" style=" background-image: url(https://cdn.discordapp.com/attachments/958256273592307722/965612274184245298/unknown.png)">
                                </div>
                                <label for="carousel-10"
                                    class="control-11 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-12"
                                    class="next control-11 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>

                                    <!--Slide 12-->
                                <input class="carousel-open-1" type="radio" id="carousel-12" name="carousel-1" aria-hidden="true" hidden="">
                                <div class="carousel-item-1 absolute opacity-0 h-80" style=" background-image: url(https://cdn.discordapp.com/attachments/958256273592307722/965612274184245298/unknown.png)">
                                </div>
                                <label for="carousel-11"
                                    class="control-12 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
                                    class="fas fa-angle-left mt-3"></i></label>
                                <label for="carousel-7"
                                    class="next control-12 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
                                    class="fas fa-angle-right mt-3"></i></label>


                                <!-- Add additional indicators for each slide-->
                                <ol class="carousel-indicators">
                                    <li class="inline-block mr-3">
                                    <label for="carousel-7"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-8"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-9"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-10"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-11"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                    <li class="inline-block mr-3">
                                    <label for="carousel-12"
                                        class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 space-y-6 text-lg font-semibold mb-10">
                        <p class="border-b-2 border-gray-200 p-2">{{convertprice(secondcar.car_price)}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_type}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_brand}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_model}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_yearbought}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_gear}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_num_of_gear}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_engine}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{secondcar.car_drive_type}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{convertdistance(secondcar.car_distance)}}</p>
                        <p class="border-b-2 border-gray-200 p-2">{{convertact(secondcar.car_act)}}</p>
                    </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>
<style>
    .carousel-open:checked+.carousel-item {
        position: static;
        opacity: 100;
    }

    .carousel-open-1:checked+.carousel-item-1 {
        position: static;
        opacity: 100;
    }

    .carousel-item {
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
    }

    .carousel-item-1 {
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
    }

    #carousel-1:checked~.control-1,
    #carousel-2:checked~.control-2,
    #carousel-3:checked~.control-3,
    #carousel-4:checked~.control-4,
    #carousel-5:checked~.control-5,
    #carousel-6:checked~.control-6{
        display: block;
    }

    #carousel-7:checked~.control-7,
    #carousel-8:checked~.control-8,
    #carousel-9:checked~.control-9,
    #carousel-10:checked~.control-10,
    #carousel-11:checked~.control-11,
    #carousel-12:checked~.control-12{
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
    #carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet,
    #carousel-4:checked~.control-4~.carousel-indicators li:nth-child(4) .carousel-bullet,
    #carousel-5:checked~.control-5~.carousel-indicators li:nth-child(5) .carousel-bullet,
    #carousel-6:checked~.control-6~.carousel-indicators li:nth-child(6) .carousel-bullet{
        color: #2b6cb0;
        /*Set to match the Tailwind colour you want the active one to be */
    }

    #carousel-7:checked~.control-7~.carousel-indicators li:nth-child(1) .carousel-bullet,
    #carousel-8:checked~.control-8~.carousel-indicators li:nth-child(2) .carousel-bullet,
    #carousel-9:checked~.control-9~.carousel-indicators li:nth-child(3) .carousel-bullet,
    #carousel-10:checked~.control-10~.carousel-indicators li:nth-child(4) .carousel-bullet,
    #carousel-11:checked~.control-11~.carousel-indicators li:nth-child(5) .carousel-bullet,
    #carousel-12:checked~.control-12~.carousel-indicators li:nth-child(6) .carousel-bullet{
        color: #2b6cb0;
        /*Set to match the Tailwind colour you want the active one to be */
    }
</style>
<script>
import axios from "axios";
import navbar from "../component/navbar.vue";
import footer from "../component/footer.vue";
// @ is an alias to /src
export default {
  name: "Compare",
  data() {
    return {
      loginuser: [],
      firstcar: [],
      secondcar: [],
      imgcar1: [],
      imgcar2: []
    };
  },
  components: {
    Navbar : navbar,
    Footer : footer
  },
  mounted() {
    this.getdata();
    this.getcar();
    this.selectimgcar();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getcar(){
        axios
            .get(`http://localhost:3000/compare/${this.$route.params.firstcar}/${this.$route.params.secondcar}`)
            .then(res => {
                this.firstcar = res.data.firstcar;
                this.secondcar = res.data.secondcar;
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
    convertact(act){
        return act.slice(0, 7);
    }
  },
};
</script>
