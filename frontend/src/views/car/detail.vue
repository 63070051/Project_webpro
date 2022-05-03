<template>
  <div id="app">
    <Navbar />
    <div class="max-w-5xl mx-auto">
      <div class="flex justify-between py-4 h-28 items-center">
        <div>
          <p class="text-2xl font-black">{{detailcar.car_model}}</p>
          <div class="flex gap-2">
            <p>{{detailcar.car_engine}}</p>
            <p>|</p>
            <p>{{detailcar.car_gear}}</p>
            <p>|</p>
            <p>{{convertdistance(detailcar.car_distance)}}</p>
          </div>
        </div>
        <div class="flex">
          <div class="text-right mr-7 px-7 border-r-2 borer-gray-400">
            <p class="font-bold text-xl text-orange-500">{{convertprice(detailcar.car_price)}}</p>
            <p class="text-xs text-gray-400">{{convertvat(detailcar.car_price)}} (รวมภาษี 7% แล้ว)</p>
          </div>
          <div class="flex gap-4">
            <div class="border-2 border-orange-500 w-12 h-12 rounded-xl flex justify-center items-center">
              <img width="26" src="https://www.cars24.co.th/th/static/js/2be457deb3cc0c5e4eccf46297b7004a.svg" alt="">
            </div>
            <div class="w-28 bg-orange-500 flex justify-center items-center rounded-xl">
              <p class="text-white font-bold">จองรถ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto">
      <div>
        <img class="w-full" :src="firstimg" alt="" />
      </div>
    </div>
    <section class="max-w-7xl mx-auto">
      <div class="grid grid-cols-6 gap-4 pt-8">
        <div v-for="img in carimg" :key="img.image_no">
          <img
            @click="changefirstimg(img.car_img)"
            class="rounded-lg h-28 w-full"
            :src="selectimgcar(img.car_img)"
            alt=""
          />
          <!-- <p class="text-center">หน้า</p> -->
        </div>
      </div>
    </section>
    <section class="py-4 mt-4 bg-gray-100">
      <div class=" max-w-7xl mx-auto grid grid-cols-3 rounded-lg gap-8">
        <div class="grid grid-cols-2 col-span-2 gap-8 bg-white rounded-lg p-4">
          <div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/car.svg" alt="" />
                <p>ID</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_id }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/buyyear.svg" alt="" />
                <p>ออกรถเมื่อ</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_yearbought }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/gear.svg" alt="" />
                <p>ระบบเกียร์</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_gear }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/owner.svg" alt="" />
                <p>เจ้าของ</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_owner }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/inside.svg" alt="" />
                <p>จำนวนเกียร์</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_num_of_gear }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/inside.svg" alt="" />
                <p>จำนวนประตู</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_num_of_door }}</p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/regis.svg" alt="" />
                <p>ทะเบียน</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_regis }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/distance.svg" alt="" />
                <p>ระยะทางที่ขับ</p>
              </div>
              <div>
                <p class="text-sm">{{ convertdistance(detailcar.car_distance) }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/act.svg" alt="" />
                <p>พ.ร.บ</p>
              </div>
              <div>
                <p class="text-sm">{{ convertdate(detailcar.car_act) }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/inside.svg" alt="" />
                <p>เครื่องยนต์</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_engine }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/inside.svg" alt="" />
                <p>ระบบขับเคลื่อน</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_drive_type }}</p>
              </div>
            </div>
            <div class="flex justify-between border-b pb-1 items-centers">
              <div class="flex items-center space-x-2">
                <img src="./svg/inside.svg" alt="" />
                <p>ประเภทของรถ</p>
              </div>
              <div class="flex items-center">
                <p class="text-sm">{{ detailcar.car_type }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg flex items-center justify-center">
          <img
            src="https://www.cars24.co.th/th/static/js/35cfef50af690a20611b6fd583ae286d.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import navbar from "../component/navbar.vue";
import footer from "../component/footer.vue";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      loginuser: [],
      detailcar: [],
      carimg: [],
      firstimg: "",
      act: ""
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getdata();
    this.getdetailcar(this.$route.params.carid);
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getdetailcar(carid) {
      axios
        .post(`http://localhost:3000/detail/${carid}`)
        .then(response => {
          this.detailcar = response.data.detailcar;
          this.carimg = response.data.carimg;
          this.firstimg = this.selectimgcar(this.carimg[0].car_img);
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
    changefirstimg(path) {
      this.firstimg = this.selectimgcar(path);
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
    convertvat(price){
     let vat = price * 1.07
     vat = new Intl.NumberFormat("en-Us", {
       style: "currency",
       currency: "THB"
     }).format(vat);
     return vat.slice(4, vat.length - 3) + ' บาท'
    }
  }
};
</script>
