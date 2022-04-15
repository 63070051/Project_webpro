<template>
  <div id="app">
    <div
      class="flex justify-center items-center py-16 bg-no-repeat bg-cover h-fullscreen"
      style="background-image:url(https://cdn.discordapp.com/attachments/958256273592307722/962404483189596220/bg-tai.jpeg);"
    >
      <div class="w-full max-w-xl ">
        <p class="text-3xl font-bold text-center">Registration Form</p>
        <div class="w-64 h-1 bg-blue-600 mt-2 mb-6 mx-auto rounded-lg"></div>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2">
          <div class="mb-4">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Username
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="username"
              name="name"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Password
            </label>
            <input
             class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              name="password1"
              type="password"
              placeholder="******************"
              v-model="password1"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Confirm Password
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password2"
              name="password2"
              type="password"
              placeholder="******************"
              v-model="password2"
            />
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div class="col-span-2">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Firstname
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Firstname"
              v-model="firstname"
            />
          </div>
          <div class="col-span-2">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Lastname
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Lastname"
              v-model="lastname"
            />
          </div>
          <div class="col-span-1">
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Age
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="age"
              name="age"
              type="number"
              placeholder="Address"
              v-model="age"
            />
          </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div >
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              ID Card
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="idcard"
              name="idcard"
              type="text"
              placeholder="Address"
              v-model="idcard"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Tel
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="tel"
              name="tel"
              type="tel"
              placeholder="Tel."
              v-model="tel"
            />
          </div>
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              Address
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              v-model="address"
            />
          </div>
          <div>
            <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
              E-mail
            </label>
            <input
              class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="flex grid grid-cols-3 gap-4">
            <div class="mb-6 col-span-2">
              <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
                Date of Birth
              </label>
              <input
                class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="date"
                name="date"
                type="date"
                v-model="birth"
              />
            </div>
            <div>
              <label class="block text-gray-700 text-lg font-bold mb-2 text-lg">
                Gender
              </label>
              <div class="flex justify-center">
                <div class="mb-3 lg:w-96">
                  <select
                    
                    name="gender"
                   class="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
           
            <router-link to='/login'>
              <button
                class="bg-zinc-400 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
              >
                Back
              </button>
              
            </router-link>
             <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
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
        else{
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
  }
};
</script>
