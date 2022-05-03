<template>
  <div id="app">
    <Navbar />
    <div
      class="flex justify-center items-center py-16 bg-gray-100 min-h-screen"
    >
      <div class="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-lg">
        <div class="bg-sky-600 p-9 rounded-t-xl">
          <img
            class="mx-auto mb-2"
            width="100px"
            src="https://cdn.discordapp.com/attachments/958256273592307722/968926310451798036/user.png"
            alt=""
          />
          <p v-if="!editactive" class="text-center text-3xl font-bold text-white">{{firstname + ' ' + lastname}}</p>
          <p v-if="editactive" class="text-3xl font-bold text-center text-white">Edit Profile</p>
          <div v-if="editactive" class="w-28 h-1 bg-orange-500 mt-1 rounded-lg mx-auto"></div>
        </div>
        <div class="bg-white rounded px-8 mb-4 mt-8">
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
          <div v-if="!editactive">
            <div class="space-y-5 px-5">
              <div class="flex items-center gap-2">
                <div class="h-5 w-5 rounded-full bg-orange-500"></div>
                <p class="text-lg font-semibold">Phone :</p>
                <p class="text-lg">{{tel}}</p>
              </div>
              <div class="flex items-start gap-2">
                <div class="flex items-center gap-2">
                  <div class="h-5 w-5 rounded-full bg-orange-500"></div>
                  <p class="text-lg font-semibold ">Address :</p>
                </div>
                <p class="text-lg w-80">{{address}}</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="h-5 w-5 rounded-full bg-orange-500"></div>
                <p class="text-lg font-semibold">Email :</p>
                <p class="text-lg">{{email}}</p>
              </div>
            </div>
          </div>
          <div v-if="editactive">
            <div class="flex items-center mb-2 gap-2">
              <div class="h-5 w-5 rounded-full bg-orange-500"></div>
              <label class="block text-gray-700 text-lg font-bold">
                Firstname
              </label>
            </div>
            <input
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Address"
              v-model="firstname1"
            />
          </div>
          <div v-if="editactive">
            <div class="flex items-center mb-2 gap-2">
              <div class="h-5 w-5 rounded-full bg-orange-500"></div>
              <label class="block text-gray-700 text-lg font-bold">
                Lastname
              </label>
            </div>
            <input
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Address"
              v-model="lastname1"
              
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
          <div v-if="editactive">
            <div class="flex items-center mb-2 gap-2">
              <div class="h-5 w-5 rounded-full bg-orange-500"></div>
              <label class="block text-gray-700 text-lg font-bold">
                Tel.
              </label>
            </div>
            <input
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              id="tel"
              name="tel"
              type="tel"
              placeholder="Tel."
              v-model="tel1"
              
            />
          </div>
          <div v-if="editactive">
            <div class="flex items-center mb-2 gap-2">
              <div class="h-5 w-5 rounded-full bg-orange-500"></div>
              <label class="block text-gray-700 text-lg font-bold">
                Address
              </label>
            </div>
            <input
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              v-model="address1"
            />
          </div>
          <div v-if="editactive">
            <div class="flex items-center mb-2 gap-2">
              <div class="h-5 w-5 rounded-full bg-orange-500"></div>
              <label class="block text-gray-700 text-lg font-bold">
                Email
              </label>
            </div>
            <input
              class="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              v-model="email1"
            />
          </div>
          <div v-if="!editactive" class="flex justify-center py-5 cursor-pointer" @click="editactive = !editactive; edit()">
            <img width="60px" src="https://cdn.discordapp.com/attachments/958256273592307722/971016464389771294/edit.png" alt="">
          </div>
          <div class="flex items-center justify-between mt-10 pb-5" v-if="editactive">
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              @click="editactive = !editactive"
            >
              ย้อนกลับ
            </button>
            <button
              class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              @click="commit()"
            >
              ยืนยัน
            </button>
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
      editactive: false,
      firstname1: "",
      lastname1: "",
      tel1: "",
      email1: "",
      address1: "",
    };
  },
  components: {
    Navbar: navbar
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
      this.firstname = this.loginuser.user_firstname;
      this.lastname = this.loginuser.user_lastname;
      this.tel = this.loginuser.user_phone;
      this.email = this.loginuser.user_email;
      this.address = this.loginuser.user_address;
    },
    back() {
      this.$router.push("/");
    },
    commit() {
      if (confirm('Are you confirm?')){
        axios
        .post(
          `http://localhost:3000/update/account/${this.loginuser.user_id}`,
          {
            firstname: this.firstname1,
            lastname: this.lastname1,
            tel: this.tel1,
            email: this.email1,
            address: this.address1
          }
        )
        .then(response => {
          console.log(response.data)
          if (response.data != "error") {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$router.push("/");
          }
        })
        .catch(error => {
          console.log("error");
          this.error = error.response.data.message;
        });
      }
      
    },
    edit(){
      console.log(1);
      this.firstname1 = this.firstname;
      this.lastname1 = this.lastname;
      this.tel1 = this.tel;
      this.address1 = this.address;
      this.email1 = this.email;
    }
  }
};
</script>
