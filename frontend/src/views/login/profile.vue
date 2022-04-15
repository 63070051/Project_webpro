<template>
  <div id="app">
    <Navbar />
    <div
      class="flex justify-center items-center py-16"
      style="background-image:url(https://cdn.discordapp.com/attachments/958256273592307722/962404483189596220/bg-tai.jpeg); background-position: 80% 80%; background-size: 100% auto"
    >
      <div class="w-full max-w-xl space-y-6 bg-gray-300  px-4 py-4 rounded-2xl">
        <div >
            <img class="mx-auto mb-2" width="100px" src="https://cdn.discordapp.com/attachments/958256273592307722/962336592092069908/user_1.png" alt="" />
            <p class="text-3xl font-bold text-center">Edit Profile</p>
            <div class="w-28 h-1 bg-blue-600 mt-1 rounded-lg mx-auto"></div>
        </div>
        <div class="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4 space-y-2">
          
          <!-- <div>
            <label class="block text-gray-700 text-lg font-bold mb-2">
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
          </div> -->
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2">
              ชื่อจริง
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Address"
              v-model="firstname"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2">
              นามสกุล
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Address"
              v-model="lastname"
            />
          </div>
          <!-- <div>
            <label class="block text-gray-700 text-lg font-bold mb-2">
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
          </div> -->
            <!-- <div>
                <label class="block text-gray-700 text-lg font-bold mb-2">
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
            </div> -->
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2">
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
            <label class="block text-gray-700 text-lg font-bold mb-2">
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
            <label class="block text-gray-700 text-lg font-bold mb-2">
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
          <div class="flex items-center justify-between">
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              @click="back()"
            >
              ย้อนกลับ
            </button>
            <router-link to='/login'>
              <button
                class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
                @click="commit()"
              >
                ยืนยัน
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
import navbar from "../component/navbar.vue";

// @ is an alias to /src
export default {
  name: "Profile",
  data() {
    return {
      loginuser: [],
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      address: "",
    };
  },
  components :{
    Navbar : navbar
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
      this.firstname = this.loginuser.user_firstname
      this.lastname = this.loginuser.user_lastname
      this.tel = this.loginuser.user_phone
      this.email = this.loginuser.user_email
      this.address = this.loginuser.user_address
    },
    back(){
      this.$router.push('/')
    },
    commit(){
      axios
        .post(`http://localhost:3000/update/account/${this.loginuser.user_id}`, {
          firstname: this.firstname,
          lastname: this.lastname,
          tel: this.tel,
          email: this.email,
          address: this.address,
        })
        .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$router.push('/');
        })
        .catch(error => {
          console.log('error')
          this.error = error.response.data.message;
        });
    }
  },
};
</script>
