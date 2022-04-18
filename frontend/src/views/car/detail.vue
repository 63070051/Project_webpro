<template>
  <div id="app">
    <Navbar />
    <div class="max-w-4xl mx-auto">
        <div class="flex justify-center items-center pt-12 w-full">
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p>2013 Mazda 2</p>
                <p>1.3 Skyactiv High Connect | เกียร์อัตโนมัติ | 40,021 กม. | เบนซิน</p>
              </div>
              <div>
                <p>999999999999</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img class="w-full" src="https://cdn.discordapp.com/attachments/958256273592307722/963849254084943892/28.webp" alt="">            
          </div>
    </div>
        <section>
          
          <div class="grid grid-cols-6 gap-4 pt-8">
            <div ><img class="rounded-lg" src="https://cdn.discordapp.com/attachments/958256273592307722/963849253355143208/7.webp" alt="">
            <p class="text-center">หน้า</p>
            </div>
            <div ><img class="rounded-lg" src="https://cdn.discordapp.com/attachments/958256273592307722/963849253355143208/7.webp" alt="">
            <p class="text-center">หน้า</p>
            </div>
            <div ><img class="rounded-lg" src="https://cdn.discordapp.com/attachments/958256273592307722/963849253355143208/7.webp" alt="">
            <p class="text-center">หน้า</p>
            </div>
            <div ><img class="rounded-lg" src="https://cdn.discordapp.com/attachments/958256273592307722/963849253355143208/7.webp" alt="">
            <p class="text-center">หน้า</p>
            </div>
            <div ><img class="rounded-lg" src="https://cdn.discordapp.com/attachments/958256273592307722/963849253355143208/7.webp" alt="">
            <p class="text-center">หน้า</p>
            </div>
            <div ><img class="rounded-lg" src="https://cdn.discordapp.com/attachments/958256273592307722/963849253355143208/7.webp" alt="">
            <p class="text-center">หน้า</p>
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
    };
  },
  components :{
    Navbar : navbar,
    Footer : footer
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>
