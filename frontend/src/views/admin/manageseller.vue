<template>
  <div id="app">
    <Navbar />
    <div class="max-w-4xl mx-auto py-4 bg-gray-300 px-4 rounded-2xl ">
      <div class="flex justify-between  my-auto bg-white  px-4 py-4 rounded-2xl">
        <div>
          <p>Name : XXXX  Lastname : XXXX </p>
          <p>Age : xx</p>
          <p>Tel : xx</p>
        </div>
        <div class="flex space-x-4 items-center">
          <button class="bg-green-500 hover:bg-green-600 duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            ยืนยัน
          </button>
          <button class="bg-red-500 hover:bg-red-600 duration-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            ปฏิเสธ
          </button>
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
  name: "Home",
  data() {
    return {
      loginuser: []
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getdata();
    this.getseller();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getseller() {}
  }
};
</script>
