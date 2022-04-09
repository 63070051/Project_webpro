<template>
  <div id="app">
    <nav
      class="flex items-center px-12 py-3 justify-between"
      style="background: rgb(238, 237, 237)"
      v-if="loginuser == null"
    >
      <div class="space-x-6 flex items-center">
        <a href="/" class="text-3xl text-black font-bold">CAR USED</a>
        <a href="" class="text-xl">ค้นหารถ</a>
        <a href="" class="text-xl">ขายรถยนต์</a>
        <a href="/about" class="text-xl">เกี่ยวกับ</a>
        <a href="/question" class="text-xl">คำถามพบบ่อย</a>
      </div>
      <div class="lg:flex items-center space-x-6 hidden">
        <div class="flex items-center space-x-2">
          <img width="40px" src="" alt="" />
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
        <a href="/" class="text-3xl text-black font-bold">CAR USED</a>
        <a href="" class="text-xl">ค้นหารถ</a>
        <a href="" class="text-xl">ขายรถยนต์</a>
        <a href="/about" class="text-xl">เกี่ยวกับ</a>
        <a href="/question" class="text-xl">คำถามพบบ่อย</a>
      </div>
      <div class="lg:flex items-center space-x-6 hidden">
        <div class="flex items-center space-x-2">
          <img width="40px" src="" alt="" />
          <span>099xxxxxxx</span>
        </div>
        <div class="flex items-center space-x-2">
          <img width="40px" src="/images/browser/user.png" alt="" />
          <a href="/login">{{ loginuser.user_name }}</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      loginuser: [],
    };
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
