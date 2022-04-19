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
            <select
              name="driving_type"
              id="driving_type"
              v-model="brand"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
            >
              <option value="Please Select" selected>Please Select</option>
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="BMW">BMW</option>
              <option value="Nissan">Nissan</option>
              <option value="Honda">Honda</option>
              <option value="Toyota">Toyota</option>
              <option value="Mazda">Mazda</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Model Year
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
              type="text"
              placeholder=""
              v-model="model"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Model Year
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
              id="modelyear"
              name="modelyear"
              type="number"
              placeholder=""
              v-model="modelyear"
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
          <div class="grid grid-cols-2 gap-4">
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
            <div class="mb-4">
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Car Engine
              </label>
              <select
              name="car_type"
              id="car_type"
              v-model="car_type"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
            >
              <option value="Please Select" selected>Please Select</option>
              <option value="Sedan">Sedan</option>
              <option value="Pickup">Pickup</option>
              <option value="Hatchback">Hatchback</option>
              <option value="SUV">SUV</option>
              <option value="7 seater">7 seater</option>
              <option value="MPV">MPV</option>
            </select>
            </div>
          </div>
          <div class="mb-4 grid grid-cols-3 gap-4">
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
            <div>
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Owner
              </label>
              <select
                name="owner"
                id="owner"
                v-model="owner"
                class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
              >
                <option value="Please Select" selected>Please Select</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
              </select>
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
              Registration
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
              Registration Year
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
            <select
              name="color"
              id="color"
              v-model="color"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
            >
              <option value="Please Select" selected>Please Select</option>
              <option value="white">White</option>
              <option value="Black">Black</option>
              <option value="Gray">Gray</option>
              <option value="Broze">Broze</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Brown">Brown</option>
              <option value="Orange">Orange</option>
              <option value="Gold">Gold</option>
              <option value="Sliver">Sliver</option>
              <option value="Others">Others</option>
            </select>
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
          <div v-if="images" class="grid grid-cols-3 gap-4">
            <div
              class="relative"
              v-for="(image, index) in images"
              :key="image.id"
            >
              <div class="rounded overflow-hidden shadow-lg">
                <img
                  class="w-full object-cover h-36"
                  :src="showSelectImage(image)"
                  alt="Placeholder image"
                />
              </div>
              <div class="grid grid-cols-1 text-center my-1">
                <img
                  width="20px"
                  @click="deleteSelectImage(index)"
                  class="absolute top-1 right-1"
                  src="https://cdn.discordapp.com/attachments/958256273592307722/963833361779015730/x_mark.png"
                  alt=""
                />
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
              @click="submitcar()"
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
      loginuser: [],
      brand: "Please Select",
      model: "",
      modelyear: 0,
      number_door: 0,
      driving_type: "Please Select",
      engine: "",
      gear: "",
      num_gear: "",
      car_act: "",
      car_regis: "",
      car_type : "Please Select",
      mileage: 0,
      registration_year: "",
      color: "Please Select",
      owner: "Please Select",
      selling_price: "",
      car_desc: "",
      images: [],
      check: null
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
    },
    selectImages(event) {
      // console.log(event.target.files)
      if (this.images.length > 5) {
        alert("Max-Limit images is 6");
      } else {
        this.images.push(event.target.files);
      }
    },
    showSelectImage(image) {
      return URL.createObjectURL(image[0]);
    },
    deleteSelectImage(index) {
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
    },
    submitcar() {
      let formData = new FormData();
      formData.append("car_brand", this.brand);
      formData.append("car_model", this.model);
      formData.append("car_year", this.modelyear);
      formData.append("car_color", this.color);
      formData.append("car_desc", this.car_desc);
      formData.append("car_price", this.selling_price);
      formData.append("car_regis", this.car_regis);
      formData.append("car_distance", this.mileage);
      formData.append("car_engine", this.engine);
      formData.append("car_gear", this.gear);
      formData.append("car_type", this.car_type);
      formData.append("car_yearbought", this.registration_year);
      formData.append("car_owner", this.owner);
      formData.append("car_num_of_gear", this.num_gear);
      formData.append("car_drive_type", this.driving_type);
      formData.append("car_act", this.car_act);
      formData.append("car_num_of_door", this.number_door);
      this.images.forEach(image => {
        console.log(image[0]);
        formData.append("carImage", image[0]);
      });
      axios
        .post(
          `http://localhost:3000/addcar/${this.loginuser.user_id}`,
          formData
        )
        .then(res => this.$router.push({ name: "home" }))
        .catch(error => console.log(error.response.data));
    }
  }
};
</script>
