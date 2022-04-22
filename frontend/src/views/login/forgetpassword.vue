<template>
  <div id="app">
    <div class="h-screen flex justify-center items-center">
      
      <div class="w-full max-w-sm ">
        <h2
              class=" text-4xl text-indigo-900 font-display font-semibold 
                         mb-4"
            >
              Reset Password
            </h2>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-lg font-bold mb-2"
              for="Email"
            >
              Email
            </label>
            <input
              v-model="email"
             class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-6 relative">
            <div>
              <label
              class="block text-gray-700 text-lg font-bold mb-2"
              for="password"
            >
              Passcode
            </label>
            <input
              v-model="passcode"
              class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              id="Passcode"
              type="password"
              placeholder="*************"
            />
            </div>
            <a
              @click="sendemail()"
               class=" absolute right-0 bottom-2 text-gray-400  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
            >
              sendcode
            </a>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-lg font-bold mb-2"
              for="password"
            >
              New Password
            </label>
            <input
              v-model="newpassword"
             class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              id="New Password"
              type="password"
              placeholder="*************"
            />
          </div>
          <div class="flex items-center justify-between">
            <router-link to='/login'>
              <button
                class="bg-zinc-400 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              >
                Back
              </button>
              
            </router-link>
            <button
              @click="changepassword"
             class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              type="button"
            >
              Confirm
            </button>
            
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
