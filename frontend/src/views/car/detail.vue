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
        <img
          class="w-full"
          :src=firstimg
          alt=""
        />
      </div>
    </div>
    <section>
      <div class="grid grid-cols-6 gap-4 pt-8">
        <div v-for="img in carimg" :key="img.image_no">
          <img
            @click="changefirstimg(img.car_img)"
            class="rounded-lg"
            :src=selectimgcar(img.car_img)
            alt=""
          />
          <!-- <p class="text-center">หน้า</p> -->
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
      firstimg: ""
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
          console.log(this.detailcar, this.carimg)
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
    }
  }
};
</script>
