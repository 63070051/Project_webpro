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
               class=" absolute right-0 bottom-2 text-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300 cursor-pointer hover:text-gray-500"
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
              @keyup="checklength()"
             class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              id="New Password"
              type="password"
              placeholder="*************"
            />
            <p v-show="redtext" class="text-red-500">password min length 8!</p>
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
            v-show="!redtext"
              @click="changepassword"
             class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              type="button"
            >
              Confirm
            </button>
            <button
            v-show="redtext"
             class="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
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
      newpassword: "",
      redtext : false
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
      axios
        .post(`http://localhost:3000/forgot`, {
          email: this.email
        })
        .then(response => {
            if (response.data == "error") {
                alert("email ไม่ได้ลงทะเบียนไว้");
          } else {
            alert("ดู Passcode ที่ Email");
            this.emailpasscode = response.data;
          }
        })
        .catch(error => {
          console.log("error");
          this.error = error.response.data.message;
        });
    },
    changepassword() {
      
      if (this.passcode == this.emailpasscode && (this.passcode != "" || this.emailpasscode != "")) {
        if (confirm('Confirm new password?')){
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
      }
      else{
          alert('Incorrect Passcode')
      }
      
    },
    checklength(){
        if(this.newpassword.length < 8){
            this.redtext = true
        }
        else{
            this.redtext = false
        }
    }
  }
};
</script>
