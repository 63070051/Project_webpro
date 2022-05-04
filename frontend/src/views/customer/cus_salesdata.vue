<template>
  <div id="app">
    <Navbar />
    <div class="max-w-6xl mx-auto py-4" style="min-height: 500px;">
      <div class='flex justify-between items-center'>
        <div>
          <p class="text-4xl mt-8">Customer Data</p>
         <div class="w-24 h-1 bg-blue-600 mt-2 rounded-lg"></div> 
        </div>
        <div class='space-x-4 flex items-center'>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-sky-300"></div>
            <p>pending</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-red-600"></div>
            <p>cancel</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-emerald-400"></div>
            <p>confirm</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="rounded-full h-7 w-7 bg-amber-500"></div>
            <p>waiting admin</p>
          </div>

        </div>

      </div>
     
      <div class="grid grid-cols-3 gap-8">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <div data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://cdn.discordapp.com/attachments/958256273592307722/964466396505473034/unknown.png"
              alt=""
            />
          </div>

          <div class="p-6 space-y-3">
            <h5 class="text-gray-900 text-xl font-bold">
              222
            </h5>
            <p class="text-gray-700 text-base">
              222
            </p>
            <p class="border-b border-gray-300">
             11111
            </p>
            
            
            
            <div class="flex justify-between">
              <p class="text-orange-500 font-bold text-xl float-right">
                22,222,222 บาท
              </p>
              <div class='flex gap-2 items-center'>
                <div class="rounded-full h-7 w-7 bg-amber-500"></div>
              <p class="text-amber-500">waiting admin</p>
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
  name: "salesdata_customer",
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
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    }
  }
};
</script>
