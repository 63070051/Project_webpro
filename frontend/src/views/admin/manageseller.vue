<template>
  <div id="app">
    <Navbar />
    <div>
      <!-- <div class="flex justify-center my-8">
        <img width="100px" class="rounded-full" src="https://cdn.discordapp.com/attachments/958256273592307722/964456831676219473/verified-users.png" alt="">
      </div> -->
      <div class="max-w-7xl mx-auto  my-8 bg-white px-6 rounded-2xl space-y-8 ">
      <div class="flex flex-col rounded-2xl">
        <div class="overflow-x-auto lg:mx-6 lg:-mx-8 rounded-2xl">
          <div class="py-8 inline-block min-w-full lg:px-6 lg:px-8 ">
            <div class="overflow-hidden rounded-2xl shadow-xl">
              <table class="min-w-full text-center ">
                <thead class="border-b bg-sky-800 ">
                  <tr>
                    <th
                      scope="col"
                      class="text-2xl font-medium text-white px-6 py-4"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="text-2xl font-medium text-white px-6 py-4"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      class="text-2xl font-medium text-white px-6 py-4"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      class="text-2xl font-medium text-white px-6 py-4"
                    >
                      Tel
                    </th>
                    <th
                      scope="col"
                      class="text-2xl font-medium text-white px-6 py-4"
                    >
                      E-mail
                    </th>
                    <th
                      scope="col"
                      class="text-2xl font-medium text-white px-6 py-4"
                    >
                      Vertified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b border-gray-300" v-for="seller, index in selleruser" :key="seller.user_id">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900"
                    >
                      {{seller.user_id}}
                    </td>
                    <td
                      class="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap"
                    >
                      {{seller.user_firstname}}
                    </td>
                    <td
                      class="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap"
                    >
                      {{seller.user_lastname}}
                    </td>
                    <td
                      class="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap"
                    >
                      {{seller.user_phone}}
                    </td>
                    <td
                      class="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap"
                    >
                      {{seller.user_email}}
                    </td>
                    <td
                      class="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap"
                    >
                      <button
                        v-show="seller.s_vertified != 'Vertified'"
                        @click="vertified(seller.user_id, index)"
                        type="button"
                        class="inline-block px-6 py-2.5 bg-green-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
                      >
                        Confirm
                      </button>
                      <button
                        v-show="seller.s_vertified == 'Vertified'"
                        @click="cancelvertified(seller.user_id, index)"
                        type="button"
                        class="inline-block px-6 py-2.5 bg-red-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import navbar from "../component/navbar.vue";
// @ is an alias to /src
export default {
  name: "Manageseller",
  data() {
    return {
      selleruser: [],
      loginuser : []
    };
  },
  components: {
    Navbar: navbar
  },
  mounted() {
    this.getseller();
  },
  methods: {
    getseller() {
      this.loginuser = JSON.parse(localStorage.getItem('user'))
      if(this.loginuser.role != 'admin'){
        alert("You've not permission")
        this.$router.push('/')
      }
      axios
        .post(`http://localhost:3000/getseller`)
        .then(response => {
          this.selleruser = response.data;
          // console.log(this.selleruser)
        })
        .catch(error => {
          console.log("error");
          this.error = error.response.data.message;
        });
    },
    vertified(sellerid, index) {
      axios
        .post(`http://localhost:3000/vertifiedseller/${sellerid}`)
        .then(response => {
          this.selleruser[index].s_vertified = "Vertified";
          console.log("success");
        })
        .catch(error => {
          console.log("err");
          this.error = error.response.data.message;
        });
    },
    cancelvertified(sellerid, index) {
      axios
        .post(`http://localhost:3000/cancelseller/${sellerid}`)
        .then(response => {
          this.selleruser[index].s_vertified = "Not-Vertified";
          console.log("canceled");
        })
        .catch(error => {
          console.log("err");
          this.error = error.response.data.message;
        });
    }
  }
};
</script>