<template>
    <div id="app">
        <nav
        class="flex items-center px-12 py-3 justify-between"
        style="background: rgb(238, 237, 237)"
        v-if="loginuser == null"
        >
        <div class="space-x-6 flex items-center">
            <router-link class="" to="/">CAR USED</router-link>
            <router-link class="" to="/question">ค้นหารถ</router-link>
            <router-link class="" to="/question">ขายรถยนต์</router-link>
            <router-link class="" to="/about">เกี่ยวกับ</router-link>
            <router-link class="" to="/question">คำถามพบบ่อย</router-link>
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
            <router-link class="" to="/">CAR USED</router-link>
            <router-link class="" to="/question">ค้นหารถ</router-link>
            <router-link class="" to="/question">ขายรถยนต์</router-link>
            <router-link class="" to="/about">เกี่ยวกับ</router-link>
            <router-link class="" to="/question">คำถามพบบ่อย</router-link>
        </div>
        <div class="lg:flex items-center space-x-6 hidden">
            <div class="flex items-center space-x-2">
            <img width="40px" src="" alt="" />
            <span>099xxxxxxx</span>
            </div>
            <div class="flex items-center space-x-2">
            <img width="40px" src="/images/browser/user.png" alt="" />
            <p>{{ loginuser.user_name }}</p>
             <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
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
    },
};
</script>
