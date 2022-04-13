<template>
  <div id="app">
    <Navbar />
    <div
      class="flex justify-center flex-col items-center py-16 space-y-5 bg-gray-200 bg-gra-01"
    >
      <div class="w-full max-w-3xl space-y-6">
        <div
          class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 space-y-2"
        >
          <div class="mb-4">
            <p class="text-2xl font-bold mb-5">
              <span class="text-blue-600">Step 1/3 :</span> Car Details
            </p>
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Car Brand
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="car_brand"
              name="brand"
              type="text"
              placeholder=""
              v-model="brand"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Model
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="model"
              name="model"
              type="number"
              placeholder=""
              v-model="model"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Number Of Doors
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="number_of_door"
              name="number_door"
              type="number"
              placeholder=""
              v-model="number_door"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Driving Type
            </label>
            <select
              name="driving_type"
              id="driving_type"
              v-model="driving_type"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
            >
              <option value="Please Select" selected>Please Select</option>
              <option value="4WD">4WD</option>
              <option value="AWD">AWD</option>
              <option value="RWD">RWD</option>
              <option value="FWD">FWD</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Car Engine
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="car_engine"
              name="engine"
              type="text"
              placeholder=""
              v-model="engine"
            />
          </div>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Gear Transmission
              </label>
              <input
                class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
                id="gear_transmission"
                name="gear"
                type="text"
                placeholder=""
                v-model="gear"
              />
            </div>
            <div>
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Number Of Gears
              </label>
              <input
                class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
                id="number_of_gear"
                name="num_gear"
                type="number"
                placeholder=""
                v-model="num_gear"
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Compulsory Insurance
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="car_act"
              name="car_act"
              type="date"
              placeholder=""
              v-model="car_act"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Car Register
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="car_register"
              name="car_regis"
              type="text"
              placeholder=""
              v-model="car_regis"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Mileage
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="mileage"
              name="mileage"
              type="text"
              placeholder=""
              v-model="mileage"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Registration year
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="registration_year"
              name="registration_year"
              type="text"
              placeholder=""
              v-model="registration_year"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Color
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="color"
              name="color"
              type="text"
              placeholder=""
              v-model="color"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Selling Price
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="selling_price"
              name="selling_price"
              type="text"
              placeholder=""
              v-model="selling_price"
            />
          </div>
          <!-- <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Advertisement Title
            </label>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="username"
              name="name"
              type="text"
              placeholder=""
              v-model="username"
            />
          </div> -->
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Description
            </label>
            <textarea
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="car_desc"
              name="car_desc"
              rows="5"
              cols="50"
              placeholder=""
              v-model="car_desc"
            />
          </div>
        </div>
      </div>
      <div class="w-full max-w-3xl space-y-6">
        <div
          class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 space-y-2"
        >
          <div class="mb-4">
            <p class="text-2xl font-bold mb-5">
              <span class="text-blue-600">Step 2/3:</span> Picture
            </p>
            <input
              class="
                form-control
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              id="username"
              name="name"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              @change="selectImages"
              placeholder=""
            />
          </div>
          <div v-if="images" class="columns is-multiline">
            <div
              v-for="(image, index) in images"
              :key="image.id"
              class="column is-one-quarter"
            >
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      :src="showSelectImage(image)"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <footer class="card-footer">
                  <a
                    @click="deleteSelectImage(index)"
                    class="card-footer-item has-text-danger"
                    >Delete</a
                  >
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-3xl space-y-6">
        <div
          class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 space-y-2"
        >
          <div class="mb-4">
            <p class="text-2xl font-bold mb-5">
              <span class="text-blue-600">Step 3/3:</span> Click To Confirm
            </p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
            >
              Comfirm to post your ad!
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import navbar from "../component/navbar.vue";
import footer from "../component/footer.vue";
// @ is an alias to /src
export default {
  name: "Addcar",
  data() {
    return {
      brand: "",
      model: "",
      number_door: 0,
      driving_type: "Please Select",
      engine: "",
      gear: "",
      num_gear: "",
      car_act: "",
      car_regis: "",
      mileage: 0,
      registration_year: "",
      color: "",
      selling_price: "",
      car_desc: ""
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    }
  },
  showSelectImage(image) {
      return URL.createObjectURL(image[0]);
    },
    deleteSelectImage(index) {
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
    },
};
</script>
