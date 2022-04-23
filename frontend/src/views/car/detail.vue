<template>
  <div id="app">
    <Navbar />
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-center items-center pt-12 w-full">
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p>2013 Mazda 2</p>
              <p>
                1.3 Skyactiv High Connect | เกียร์อัตโนมัติ | 40,021 กม. |
                เบนซิน
              </p>
            </div>
            <div>
              <p>999999999999</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img class="w-full" :src="firstimg" alt="" />
      </div>
    </div>
    <section class="max-w-7xl mx-auto">
      <div class="grid grid-cols-6 gap-4 pt-8">
        <div v-for="img in carimg" :key="img.image_no">
          <img
            @click="changefirstimg(img.car_img)"
            class="rounded-lg h-32 w-full"
            :src="selectimgcar(img.car_img)"
            alt=""
          />
          <!-- <p class="text-center">หน้า</p> -->
        </div>
      </div>
    </section>
    <section class="py-4 my-4 bg-gray-100">
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
                <p class="text-sm">{{ detailcar.car_distance }}</p>
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
            <div class="flex justify-between border-b pb-1 items-center">
              <div class="flex items-center space-x-2">
                <img src="./svg/inside.svg" alt="" />
                <p>ประเภทของรถ</p>
              </div>
              <div>
                <p class="text-sm">{{ detailcar.car_type }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/958256273592307722/965612398209806336/unknown.png"
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
    }
  }
};
</script>
