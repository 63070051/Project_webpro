<template>
    <div id="app">
        <div class="flex justify-center items-center h-screen " style="background-image:url(https://cdn.discordapp.com/attachments/958256273592307722/962404483189596220/bg-tai.jpeg); background-position: 80% 80%">
            <div class="w-full  space-y-6  max-w-xl bg-gray-300 round rounded-lg p-6">
                <p class="text-3xl font-bold">เข้าสู่ระบบ</p>
                <div method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" >
                            ชื่อผู้ใช้
                        </label>
                        <input
                            class="shadow
                             appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" name="username" type="text" placeholder="Username" v-model="username">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            รหัสผ่าน
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" name="password" type="password" placeholder="******************" v-model="password">
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            @click="login()">
                            เข้าสู่ระบบ
                        </button>
                        <router-link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">สมัครสมาชิก</router-link>
                    </div>
                    <div class="flex">
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="">ลืมรหัสผ่าน</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
    name: "Home",
        data() {
            return {
                username : '',
                password : '',
                user : []
            };
        },
        methods :{
            login(){
                axios
                    .post(`http://localhost:3000/connected/`, {
                        username : this.username, password : this.password
                    })
                    .then((response) => {
                        this.user = response.data
                        localStorage.setItem('user', JSON.stringify(this.user))
                        this.$router.push('/')
                    })
                    .catch((error) => {
                        this.error = error.response.data.message;
                    });
            }
        }
    };
</script>
