<template>
  <div id="app">
    <div
      class="flex justify-center items-center py-16 bg-no-repeat bg-cover h-fullscreen"
      style="background-image:url(https://cdn.discordapp.com/attachments/958256273592307722/962404483189596220/bg-tai.jpeg);"
    >
      <div class="w-full max-w-xl space-y-6">
        <p class="text-3xl font-bold">ลงทะเบียน</p>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              ชื่อผู้ใช้
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="name"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              รหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password1"
              type="password"
              placeholder="******************"
              v-model="password1"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              ยืนยันรหัสผ่าน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password2"
              name="password2"
              type="password"
              placeholder="******************"
              v-model="password2"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              ชื่อจริง
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Firstname"
              v-model="firstname"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              นามสกุล
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Lastname"
              v-model="lastname"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              อายุ
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              name="age"
              type="number"
              placeholder="Address"
              v-model="age"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              รหัสบัตรประชาชน
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="idcard"
              name="idcard"
              type="text"
              placeholder="Address"
              v-model="idcard"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              เบอร์โทรศัพท์
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="tel"
              name="tel"
              type="tel"
              placeholder="Tel."
              v-model="tel"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              ที่อยู่
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              v-model="address"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">
              อีเมล
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="flex grid grid-cols-3 gap-4">
            <div class="mb-6 col-span-2">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                วันเกิด
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                name="date"
                type="date"
                v-model="birth"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">
                เพศ
              </label>
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <select
                    name="gender"
                    class="form-select shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
                    v-model="gender"
                  >
                    <option selected>Selected</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              @click="register()"
            >
              สมัครสมาชิก
            </button>
            <router-link to='/login'>
              <button
                class="bg-zinc-400 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              >
                ย้อนกลับ
              </button>
            </router-link>
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
  name: "Register",
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      firstname: "",
      lastname: "",
      age: 0,
      idcard: "",
      tel: "",
      email: "",
      address: "",
      birth: Date,
      gender: "Selected"
    };
  },
  methods: {
    register() {
        if (this.password1 != this.password2){
            alert('password does not match')
        }
      axios
        .post(`http://localhost:3000/register/account`, {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
          tel: this.tel,
          email: this.email,
          birth: this.birth,
          address: this.address,
          gender: this.gender,
          firstname: this.firstname,
          lastname: this.lastname,
          idcard: this.idcard,
          age: this.age
        })
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    }
  }
};
</script>
