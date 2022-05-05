<template>
  <div id="app">
    <div
      class="flex justify-center items-center py-16 bg-no-repeat bg-cover h-fullscreen"
    >
      <div class="w-full max-w-xl ">
         <h2
              class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                        xl:text-bold mb-4"
            >
              Registration Form
            </h2>
       
        <div class=" rounded px-8 pt-6 pb-8 mb-4 space-y-8">
          <div class="mb-4">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Username
            </label>
            <input 
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.username.$error}"
              id="username"
              name="name"
              type="text"
              placeholder="Username"
              v-model="$v.username.$model"
            />
            <div v-if="$v.username.$error" class="text-red-500 mt-1">
              <p v-if="!$v.username.required">This field is required</p>
              <p v-if="!$v.username.minLength">Username must be at least 4 letters</p>
              <p v-if="!$v.username.maxLength">Username must not more than 20 letters</p>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Password
            </label>
            <input
             class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
             :class="{'border-red-500': $v.password1.$error}"
              id="password"
              name="password1"
              type="password"
              placeholder="******************"
              v-model="$v.password1.$model"
            />
            <p v-show="checkpassword" class="text-red-500">password min length 8!</p>
            <div v-if="$v.password1.$error" class="text-red-500 mt-1">
              <p v-if="!$v.password1.required">This field is required</p>
              <p v-if="!$v.password1.minLength">Password must be at least 8 letters</p>
              <p v-if="!$v.password1.complex">Password must have Uppercase, Lowercase, Number</p>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Confirm Password
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.password2.$error}"
              id="password2"
              name="password2"
              type="password"
              placeholder="******************"
              v-model="$v.password2.$model"
            />
            <div v-if="$v.password2.$error" class="text-red-500 mt-1">
              <p v-if="!$v.password2.sameAs">Password is not match</p>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-2">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Firstname
            </label>
            <input
              
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.firstname.$error}"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Firstname"
              v-model="$v.firstname.$model"
            />
            <div v-if="$v.firstname.$error" class="text-red-500 mt-1">
              <p v-if="!$v.firstname.required">This field is required</p>
              <p v-if="!$v.firstname.maxLength">Firstname must not more than 150 letters</p>
            </div>
          </div>
          <div class="col-span-2">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Lastname
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.lastname.$error}"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Lastname"
              v-model="$v.lastname.$model"
            />
            <div v-if="$v.lastname.$error" class="text-red-500 mt-1">
              <p v-if="!$v.lastname.required">This field is required</p>
              <p v-if="!$v.lastname.maxLength">Lastname must not more than 150 letters</p>
            </div>
          </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div >
              <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
                ID Card
              </label>
              <input
                class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                :class="{'border-red-500': $v.idcard.$error}"
                id="idcard"
                name="idcard"
                type="text"
                placeholder="Address"
                v-model="$v.idcard.$model"
              />
              <div v-if="$v.idcard.$error" class="text-red-500 mt-1">
              <p v-if="!$v.idcard.required">This field is required</p>
              <p v-if="!$v.idcard.checkid">Idcard must be 13 letters</p>
            </div>
            </div>
            <div>
              <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
                Tel
              </label>
              <input
                class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                :class="{'border-red-500': $v.tel.$error}"
                id="tel"
                name="tel"
                type="text"
                placeholder="Tel."
                v-model="$v.tel.$model"
              />
            <div v-if="$v.tel.$error" class="text-red-500 mt-1">
              <p v-if="!$v.tel.required">This field is required</p>
              <p v-if="!$v.tel.mobile">The mobile number format is incorrect</p>
            </div>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Address
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.address.$error}"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              v-model="$v.address.$model"
            />
            <div v-if="$v.address.$error" class="text-red-500 mt-1">
              <p v-if="!$v.address.required">This field is required</p>
              <p v-if="!$v.address.maxLength">Address must not more than 150 letters</p>
            </div>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              E-mail
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              :class="{'border-red-500': $v.email.$error}"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              v-model="$v.email.$model"
            />
            <div v-if="$v.email.$error" class="text-red-500 mt-1">
              <p v-if="!$v.email.required">This field is required</p>
              <p v-if="!$v.email.email">This email format is incorrect</p>
            </div>
          </div>
          <div class="flex grid grid-cols-3 gap-4">
            <div class="mb-6 col-span-2">
              <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
                Date of Birth
              </label>
              <input
                class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                :class="{'border-red-500': $v.birth.$error}"
                id="date"
                name="date"
                type="date"
                v-model="$v.birth.$model"
              />
              <div v-if="$v.birth.$error" class="text-red-500 mt-1">
                <p v-if="!$v.birth.required">This field is required</p>
              </div>
            </div>
            <div>
              <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
                Gender
              </label>
              <div class="flex justify-center">
                <div class="mb-3 lg:w-96">
                  <select
                    
                    name="gender"
                   class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                   :class="{'border-red-500' : $v.gender.$error}"
                    v-model="$v.gender.$model"
                  >
                    <option selected value>Selected</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div v-if="$v.gender.$error" class="text-red-500 mt-1">
                    <p v-if="!$v.gender.required">This field is required</p>
                  </div>
                </div>
              </div>
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
              class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              @click="register()"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs, maxLength} from 'vuelidate/lib/validators'
import axios from "axios";
function mobile (value) {
  if(!value){
    return true
  }else{
    return !!value.match(/0[0-9]{9}/)
  }
}
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
function checkid (value){
  if(!value){
    return true
  }else{
    return value.length == 13
  }
}
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
      idcard: "",
      tel: "",
      email: '',
      address: "",
      birth: "",
      gender: "",
      checkpassword: false,
      checkpassword2: false
    };
  },
  validations: {
    email: {
      required: required,
      email: email
    },
    tel:{
      required: required ,
      mobile: mobile
    },
    password1:{
      required: required,
      minLength: minLength(8),
      complex: complexPassword
    },
    password2:{
      sameAs: sameAs('password1')
    },
    username:{
      minLength: minLength(4),
      maxLength: maxLength(20),
      required
    },
    firstname:{
      maxLength: maxLength(150),
      required
    },
    lastname:{
      maxLength: maxLength(150),
      required
    },
    idcard:{
      required,
      checkid
    },
    address:{
      required,
      maxLength: maxLength(150)
    },
    birth:{
      required
    },
    gender:{
      required
    }
  },
  methods: {
    register() {
      if(this.$v.$invalid){
        this.$v.$touch()
      }else{
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
        })
        .then(response => {
          console.log(response.data)
          if(response.data != 'success'){
            alert(response.data)
          }else{
            this.$router.push("/login");
          }
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
      }
    },
  },
};
</script>
