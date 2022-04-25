<template>
  <div id="app">
    <div class="flex justify-center items-center h-screen ">
      <div class="h-full text-gray-800">
        <div
          class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div
            class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
          >
            <img
              src="https://cdn.discordapp.com/attachments/958256273592307722/964466329652441158/unknown.png"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="mt-10 px-24 w-5/12">
            <h2
              class="text-center text-4xl    font-display font-semibold lg:text-left xl:text-5xl
                        xl:text-bold"
            >
              Sign in
            </h2>
            <div class="mt-12">
              <div>
                <div>
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Username
                  </div>
                  <input
                    v-model="username"
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="Enter your Username"
                  />
                </div>
                <div class="mt-8">
                  <div class="flex justify-between items-center">
                    <div class="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>
                  <input
                    v-model="password"
                    class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <p v-show="error" class="text-red-500 pt-1">Username or Password Incorrect</p>
                </div>
                <div class="float-right">
                  <router-link to="/forgetpassword" class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">Forgot Password?</router-link>
                </div>
                <div class="mt-10">
                  <button
                    @click="login()"
                    class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div
                class="mt-12 text-sm font-display font-semibold text-gray-700 text-center"
              >
                <router-link to="/register">
                  Don't have an account ?
                  <a
                    class="cursor-pointer text-indigo-600 hover:text-indigo-800"
                    >Sign up</a
                  >
                </router-link>
              </div>
            </div>
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
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      user: [],
      error: false
    };
  },
  methods: {
    login() {
      axios
        .post(`http://localhost:3000/connected/`, {
          username: this.username,
          password: this.password
        })
        .then(response => {
          this.user = response.data;
          if (this.user != "error") {
            localStorage.setItem("user", JSON.stringify(this.user));
            this.$router.push("/");
          } else {
            this.error = true;
          }
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    }
  }
};
</script>
