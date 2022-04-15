<template>
  <div id="app">
    <Navbar />
    <div>
      <!-- <div class="flex justify-center my-8">
        <img width="100px" class="rounded-full" src="https://cdn.discordapp.com/attachments/958256273592307722/964456831676219473/verified-users.png" alt="">
      </div> -->
      <div class="max-w-6xl mx-auto  my-4 bg-gray-300 px-6 rounded-2xl space-y-8 ">
      <div class="flex flex-col ">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800 ">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Tel
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      E-mail
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4"
                    >
                      Vertified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b border-black">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      1
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Mark
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Otto
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @mdo
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @mdo
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <button
                        type="button"
                        class="inline-block px-6 py-2.5 bg-green-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
                      >
                        Confirm
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b border-black">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      2
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Jacob
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      Thornton
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @fat
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      @mdo
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <button
                        type="button"
                        class="inline-block px-6 py-2.5 bg-green-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
                      >
                        Confirm
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
      selleruser: []
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
      axios
        .post(`http://localhost:3000/getseller`)
        .then(response => {
          this.selleruser = response.data;
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
          console.log("success");
        })
        .catch(error => {
          console.log("err");
          this.error = error.response.data.message;
        });
    }
  }
};
</script>
