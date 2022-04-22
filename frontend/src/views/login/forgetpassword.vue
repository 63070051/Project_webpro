<template>
  <div id="app">
    <div class="h-screen flex justify-center items-center">
      <div class="w-full max-w-xs">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Email"
            >
              Email
            </label>
            <input
              v-model="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Passcode
            </label>
            <input
              v-model="passcode"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Passcode"
              type="text"
              placeholder="Passcode"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              New Password
            </label>
            <input
              v-model="newpassword"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="New Password"
              type="password"
              placeholder="*************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              @click="changepassword"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Confirm
            </button>
            <a
              @click="sendemail()"
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
            >
              sendcode
            </a>
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
  name: "forgot",
  data() {
    return {
      loginuser: [],
      email: "",
      passcode: "",
      emailpasscode: "",
      newpassword: ""
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    sendemail() {
      console.log(1);
      axios
        .post(`http://localhost:3000/forgot`, {
          email: this.email
        })
        .then(response => {
            console.log(response.data)
          alert("ดู Passcode ที่ Email");
          if (response.data == "error") {
            alert("email ไม่ได้ลงทะเบียนไว้");
          } else {
            this.emailpasscode = response.data;
          }
        })
        .catch(error => {
          console.log("error");
          this.error = error.response.data.message;
        });
    },
    changepassword() {
      if (this.passcode == this.emailpasscode) {
        axios
          .post(`http://localhost:3000/changepassword`, {
            password: this.newpassword,
            email : this.email
          })
          .then(response => {
            alert('success')
            this.$router.push('/login')
          })
          .catch(error => {
          console.log("error");
          this.error = error.response.data.message;
        });
      }
      else{
          alert('Incorrect Passcode')
      }
    }
  }
};
</script>
