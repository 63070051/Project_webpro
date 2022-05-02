<template>
  <div id="app">
    <nav
      class="flex items-center px-12 py-4 justify-between shadow-lg"
      v-if="loginuser == null"
    >
      <div class="space-x-6 flex items-center font-bold">
        <router-link class="text-xl font-bold" to="/"><img width="110px" src="https://cdn.discordapp.com/attachments/958256273592307722/964954378614210680/logo3.png" alt=""></router-link>
        <router-link class="text-sky-700" to="/searchcar">ค้นหารถ</router-link>
        <router-link class="text-sky-700" to="/seller">ขายรถยนต์</router-link>
        <router-link class="text-sky-700" to="/about">เกี่ยวกับ</router-link>
        <router-link class="text-sky-700" to="/question">คำถามพบบ่อย</router-link>
      </div>
      <div class="lg:flex items-center space-x-6 hidden">
        <div class="flex items-center space-x-2 gap-2">
          <router-link class="card-footer-item text-sky-700 font-bold" to="/login"
            >เข้าสู่ระบบ/สมัครสมาชิก</router-link
          >
          <img width="25px" src="https://cdn.discordapp.com/attachments/958256273592307722/968926310451798036/user.png" alt="" />
        </div>
      </div>
    </nav>
    <nav
      class="flex items-center px-12 py-4 justify-between shadow-lg"
      v-else
    >
      <div class="space-x-6 flex items-center">
        <router-link class="text-xl font-bold" to="/"><img width="110px" src="https://cdn.discordapp.com/attachments/958256273592307722/964954378614210680/logo3.png" alt=""></router-link>
        <div class="inline-block relative">
          <button @click="navbrand = navbrand ? false : true" class="inline-flex items-center gap-1">
            <router-link class="text-sky-700 font-bold" to="/searchcar">ค้นหารถ</router-link>
            <svg
                    class="fill-current h-4 w-4 text-sky-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
          </button>
          <div class="absolute hidden text-gray-700 pt-1 drop-shadow-md	z-10" :class="[navbrand ? 'dropdown-active' : '']">
            <div style="width: 600px; height: 300px" class="bg-white rounded-lg z-50 grid grid-cols-3 p-5">
              <div class="space-y-4">
                <p class="font-bold">แบรนด์</p>
                <p>Toyota</p>
                <p>Mercedes-Benz</p>
                <p>BMW</p>
                <p>Honda</p>
                <p>Nissan</p>
                <p>others</p>
              </div>
              <div class="space-y-4">
                <p class="font-bold">ประเภทรถ</p>
                <p>รถเก๋ง 4 ประตู</p>
                <p>รถกระบะ</p>
                <p>รถเก๋ง 5 ประตู</p>
                <p>SUV</p>
                <p>7 Seater</p>
                <p>MPV</p>
              </div>
              <div class="space-y-4">
                <p class="font-bold">ช่วงราคา</p>
                <p>ภายใต้ THB 400,000</p>
                <p>THB 400k - 600k</p>
                <p>THB 600k - 800k</p>
                <p>สูงกว่า 800k</p>
              </div>
            </div>
          </div>
        </div>
        <router-link class="text-sky-700 font-bold" to="/seller" v-show="loginuser.employee_type != 'employee'">ขายรถยนต์</router-link>
        <router-link class="text-sky-700 font-bold" to="/about">เกี่ยวกับ</router-link>
        <router-link class="text-sky-700 font-bold" to="/question">คำถามพบบ่อย</router-link>
        <router-link class="text-sky-700 font-bold" to="/manageseller" v-show="loginuser.employee_type == 'employee'">Manage Seller</router-link>
      </div>
      <div class="lg:flex items-center space-x-6 hidden">
        <div class="flex items-center space-x-2">
          <div class="">
            <div class="dropdown inline-block relative">
              <button
                class="text-gray-700 font-semibold rounded inline-flex items-center gap-2"
              >
                <span class="mx-3 text-sky-700">{{ loginuser.user_firstname }} {{loginuser.user_lastname}}</span>
                <img width="25px" src="https://cdn.discordapp.com/attachments/958256273592307722/968926310451798036/user.png" alt="" />
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-full shadow-md rounded-lg">
                <li class="">
                    <router-link class="" to="/profile">
                    <p class="bg-white rounded-t hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap">
                    Profile
                    </p>
                  </router-link>
                  
                </li>
                <li class="">
                  <p
                    class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap rounded-b" @click="signout()"
                    >Sign out</p
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <a id="scrollup" class="hidden" onclick="backToTop()"><img width="50px" class="fixed right-12 bottom-16 z-10" src="http://seenual.com/wp-content/uploads/2016/03/1459083547_ChevronUpCircle.png" alt=""></a>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "Navbar",
  data() {
    return {
      loginuser: [],
      navbrand : false,
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
      console.log(this.loginuser);
    },
    signout(){
        localStorage.removeItem("user");
        location.reload();
    }
  }
};
</script>
