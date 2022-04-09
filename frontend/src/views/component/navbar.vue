<template>
  <div id="app">
    <nav
      class="flex items-center px-12 py-3 justify-between shadow-md"
      style="background: rgb(238, 237, 237)"
      v-if="loginuser == null"
    >
      <div class="space-x-6 flex items-center">
        <router-link class="text-xl font-bold" to="/">CAR USED</router-link>
        <router-link class="" to="/question">ค้นหารถ</router-link>
        <router-link class="" to="/question">ขายรถยนต์</router-link>
        <router-link class="" to="/about">เกี่ยวกับ</router-link>
        <router-link class="" to="/question">คำถามพบบ่อย</router-link>
      </div>
      <div class="lg:flex items-center space-x-6 hidden">
        <div class="flex items-center space-x-2">
          <img width="40px" src="https://cdn.discordapp.com/attachments/958256273592307722/962336904144097280/telephone.png" alt="" />
          <span>099-xxx-xxxx</span>
        </div>
        <div class="flex items-center space-x-2">
          <img width="40px" src="" alt="" />
          <router-link class="card-footer-item" to="/login"
            >เข้าสู่ระบบ/สมัครสมาชิก</router-link
          >
        </div>
      </div>
    </nav>
    <nav
      class="flex items-center px-12 py-3 justify-between"
      style="background: rgb(238, 237, 237)"
      v-else
    >
      <div class="space-x-6 flex items-center">
        <router-link class="text-xl font-bold" to="/">CAR USED</router-link>
        <router-link class="" to="/question">ค้นหารถ</router-link>
        <router-link class="" to="/question">ขายรถยนต์</router-link>
        <router-link class="" to="/about">เกี่ยวกับ</router-link>
        <router-link class="" to="/question">คำถามพบบ่อย</router-link>
      </div>
      <div class="lg:flex items-center space-x-6 hidden">
        <div class="flex items-center space-x-2">
          <img width="40px" src="https://cdn.discordapp.com/attachments/958256273592307722/962336904144097280/telephone.png" alt="" />
          <span>099-xxx-xxxx</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="">
            <div class="dropdown inline-block relative">
              <button
                class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
              >
                <img width="40px" src="https://cdn.discordapp.com/attachments/958256273592307722/962336592092069908/user_1.png" alt="" />
                <span class="mx-3">{{ loginuser.user_name }}</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-full">
                <li class="">
                  <p
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    >Profile</p
                  >
                </li>
                <li class="">
                  <p
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" @click="signout()"
                    >Sign out</p
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "navbar",
  data() {
    return {
      loginuser: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    signout(){
        localStorage.removeItem("user");
        location.reload();
    }
  }
};
</script>
