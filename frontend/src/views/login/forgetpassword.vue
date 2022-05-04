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
              v-model="$v.email.$model"
             class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
             :class="{'border-red-500': $v.email.$error}"
              id="Email"
              type="text"
              placeholder="Email"
            />
            <div v-if="$v.email.$error" class="text-red-500 mt-1">
              <p v-if="!$v.email.required">This field is required</p>
              <p v-if="!$v.email.email">This email format is incorrect</p>
            </div>
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
              v-model="$v.passcode.$model"
              class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.passcode.$error}"
              id="Passcode"
              type="password"
              placeholder="*************"
            />
            <div v-if="$v.passcode.$error" class="text-red-500 mt-1">
              <p v-if="!$v.passcode.required">This field is required</p>
            </div>
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
              v-model="$v.newpassword.$model"
             class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              id="New Password"
              type="password"
              placeholder="*************"
            />
            <div v-if="$v.newpassword.$error" class="text-red-500 mt-1">
              <p v-if="!$v.newpassword.required">This field is required</p>
              <p v-if="!$v.newpassword.minLength">Password must be at least 8 letters</p>
              <p v-if="!$v.newpassword.complexPassword">Password is too easy</p>
            </div>
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
import { required, email, minLength, sameAs, maxLength} from 'vuelidate/lib/validators'
function complexPassword (value) {
  if(!value){
    return true
  }else{
    if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
      return false
    }
  }
  return true
}
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
  validations:{
    email:{
      required,
      email
    },
    passcode:{
      required
    },
    newpassword:{
      required,
      complexPassword,
      minLength: minLength(8)
    }
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
  }
};
</script>
