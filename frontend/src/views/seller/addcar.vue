<template>
  <div id="app">
    <Navbar />
    <div
      class="flex justify-center flex-col items-center py-16 space-y-5 bg-gray-200"
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
              v-model="$v.brand.$model"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
              :class="{ 'border-red-500': $v.brand.$error }"
            >
              <option value selected>Please Select</option>
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="BMW">BMW</option>
              <option value="Nissan">Nissan</option>
              <option value="Honda">Honda</option>
              <option value="Toyota">Toyota</option>
              <option value="Mazda">Mazda</option>
            </select>
            <p
              v-if="!$v.brand.required && $v.brand.$error"
              class="text-red-500 mt-1"
            >
              This field is required
            </p>
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
              :class="{ 'border-red-500': $v.model.$error }"
              id="model"
              name="model"
              type="text"
              placeholder=""
              v-model="$v.model.$model"
            />
            <div v-if="$v.model.$error" class="text-red-500 mt-1">
              <p v-if="!$v.model.required">This field is required</p>
              <p v-if="!$v.model.maxLength">
                Model must not more than 100 letters
              </p>
            </div>
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
              :class="{ 'border-red-500': $v.modelyear.$error }"
              id="modelyear"
              name="modelyear"
              type="number"
              placeholder=""
              v-model="$v.modelyear.$model"
            />
            <div v-if="$v.modelyear.$error" class="text-red-500 mt-1">
              <p v-if="!$v.modelyear.required">This field is required</p>
              <p v-if="!$v.modelyear.checkyear">
                Modelyear format is incorrect
              </p>
            </div>
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
              :class="{ 'border-red-500': $v.number_door.$error }"
              id="number_of_door"
              name="number_door"
              type="number"
              placeholder=""
              v-model="$v.number_door.$model"
            />
            <div v-if="$v.number_door.$error" class="text-red-500 mt-1">
              <p v-if="!$v.number_door.required">This field is required</p>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Driving Type
            </label>
            <select
              name="driving_type"
              id="driving_type"
              v-model="$v.driving_type.$model"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
              :class="{ 'border-red-500': $v.driving_type.$error }"
            >
              <option value selected>Please Select</option>
              <option value="4wd">4WD</option>
              <option value="awd">AWD</option>
              <option value="rwd">RWD</option>
              <option value="fwd">FWD</option>
            </select>
            <div v-if="$v.driving_type.$error" class="text-red-500 mt-1">
              <p v-if="!$v.driving_type.required">This field is required</p>
            </div>
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
                :class="{ 'border-red-500': $v.engine.$error }"
                id="car_engine"
                name="engine"
                type="text"
                placeholder=""
                v-model="$v.engine.$model"
              />
              <div v-if="$v.engine.$error" class="text-red-500 mt-1">
                <p v-if="!$v.engine.required">This field is required</p>
                <p v-if="!$v.engine.maxLength">
                  This field must not more than 25 letters
                </p>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Car Type
              </label>
              <select
                name="car_type"
                id="car_type"
                v-model="$v.car_type.$model"
                class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
                :class="{ 'border-red-500': $v.car_type.$error }"
              >
                <option value selected>Please Select</option>
                <option value="Sedan">Sedan</option>
                <option value="Pickup">Pickup</option>
                <option value="Hatchback">Hatchback</option>
                <option value="SUV">SUV</option>
                <option value="7 seater">7 seater</option>
                <option value="MPV">MPV</option>
              </select>
              <div v-if="$v.car_type.$error" class="text-red-500 mt-1">
                <p v-if="!$v.car_type.required">This field is required</p>
              </div>
            </div>
          </div>
          <div class="mb-4 grid grid-cols-3 gap-4">
            <div>
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Gear Transmission
              </label>
              <select
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
                :class="{ 'border-red-500': $v.gear.$error }"
                id="gear_transmission"
                name="gear"
                type="text"
                placeholder=""
                v-model="$v.gear.$model"
              >
                <option value selected>Please Select</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
              <div v-if="$v.gear.$error" class="text-red-500 mt-1">
                <p v-if="!$v.gear.required">This field is required</p>
              </div>
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
                :class="{ 'border-red-500': $v.num_gear.$error }"
                id="number_of_gear"
                name="num_gear"
                type="number"
                placeholder=""
                v-model="$v.num_gear.$model"
              />
              <div v-if="$v.num_gear.$error" class="text-red-500 mt-1">
                <p v-if="!$v.num_gear.required">This field is required</p>
              </div>
            </div>
            <div>
              <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
                Owner
              </label>
              <select
                name="owner"
                id="owner"
                v-model="$v.owner.$model"
                class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
                :class="{ 'border-red-500': $v.owner.$error }"
              >
                <option value selected>Please Select</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
              </select>
              <div v-if="$v.owner.$error" class="text-red-500 mt-1">
                <p v-if="!$v.owner.required">This field is required</p>
              </div>
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
              :class="{ 'border-red-500': $v.car_act.$error }"
              id="car_act"
              name="car_act"
              type="month"
              placeholder=""
              v-model="$v.car_act.$model"
            />
            <div v-if="$v.car_act.$error" class="text-red-500 mt-1">
              <p v-if="!$v.car_act.required">This field is required</p>
            </div>
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
              :class="{ 'border-red-500': $v.car_regis.$error }"
              id="car_register"
              name="car_regis"
              type="text"
              placeholder=""
              v-model="$v.car_regis.$model"
            />
            <div v-if="$v.car_regis.$error" class="text-red-500 mt-1">
              <p v-if="!$v.car_regis.required">This field is required</p>
            </div>
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
              :class="{ 'border-red-500': $v.mileage.$error }"
              id="mileage"
              name="mileage"
              type="number"
              placeholder=""
              v-model="$v.mileage.$model"
            />
            <div v-if="$v.mileage.$error" class="text-red-500 mt-1">
              <p v-if="!$v.mileage.required">This field is required</p>
            </div>
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
              :class="{ 'border-red-500': $v.registration_year.$error }"
              id="registration_year"
              name="registration_year"
              type="number"
              placeholder=""
              v-model="$v.registration_year.$model"
            />
            <div v-if="$v.registration_year.$error" class="text-red-500 mt-1">
              <p v-if="!$v.registration_year.required">
                This field is required
              </p>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-500 text-sm font-bold mb-2 text-lg">
              Color
            </label>
            <select
              name="color"
              id="color"
              v-model="$v.color.$model"
              class="text-xl bg-white bg-clip-padding font-normal text-gray-700 form-control block w-full border border-solid border-gray-300 rounded px-4 focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
                py-2"
              :class="{ 'border-red-500': $v.color.$error }"
            >
              <option value selected>Please Select</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Gray">Gray</option>
              <option value="Broze">Broze</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Brown">Brown</option>
              <option value="Orange">Orange</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Sliver</option>
              <option value="Others">Others</option>
            </select>
            <div v-if="$v.color.$error" class="text-red-500 mt-1">
              <p v-if="!$v.color.required">This field is required</p>
            </div>
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
              :class="{ 'border-red-500': $v.selling_price.$error }"
              id="selling_price"
              name="selling_price"
              type="number"
              placeholder=""
              :options="{ currency: 'EUR' }"
              v-model="$v.selling_price.$model"
            />
            <div v-if="$v.selling_price.$error" class="text-red-500 mt-1">
              <p v-if="!$v.selling_price.required">This field is required</p>
            </div>
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
              :class="{ 'border-red-500': $v.car_desc.$error }"
              id="car_desc"
              name="car_desc"
              rows="5"
              cols="50"
              placeholder=""
              v-model="$v.car_desc.$model"
            />
            <div v-if="$v.car_desc.$error" class="text-red-500 mt-1">
              <p v-if="!$v.car_desc.required">This field is required</p>
              <p v-if="!$v.car_desc.maxLength">
                Description must not more than 100 letters
              </p>
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
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
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
import { required, maxLength } from "vuelidate/lib/validators";
function checkyear(value) {
  if (!value) {
    return true;
  } else {
    return value <= 2022;
  }
}
// @ is an alias to /src
export default {
  name: "Addcar",
  data() {
    return {
      loginuser: [],
      brand: "",
      model: "",
      modelyear: "",
      number_door: "",
      driving_type: "",
      engine: "",
      gear: "",
      num_gear: "",
      car_act: "",
      car_regis: "",
      car_type: "",
      mileage: "",
      registration_year: "",
      color: "",
      owner: "",
      selling_price: "",
      car_desc: "",
      images: [],
      check: null
    };
  },
  validations: {
    brand: {
      required
    },
    model: {
      required,
      maxLength: maxLength(100)
    },
    modelyear: {
      required,
      checkyear
    },
    number_door: {
      required
    },
    driving_type: {
      required
    },
    engine: {
      required,
      maxLength: maxLength(25)
    },
    car_type: {
      required
    },
    gear: {
      required
    },
    num_gear: {
      required
    },
    owner: {
      required
    },
    car_act: {
      required
    },
    car_regis: {
      required
    },
    mileage: {
      required
    },
    registration_year: {
      required
    },
    color: {
      required
    },
    selling_price: {
      required
    },
    car_desc: {
      required,
      maxLength: maxLength(100)
    }
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
      if(this.loginuser.seller_type != 1){
        alert("You've not permission")
        this.$router.push('/')
      }
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
      if (this.$v.$invalid) {
        this.$v.$touch();
      } else {
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
        formData.append("car_act", this.car_act + "-01");
        formData.append("car_num_of_door", this.number_door);
        this.images.forEach(image => {
          // console.log(image[0]);
          formData.append("carImage", image[0]);
        });
        if (confirm("Confirm insert your car")) {
          if (this.images.length != 0) {
            axios
              .post(
                `http://localhost:3000/addcar/${this.loginuser.user_id}`,
                formData
              )
              .then(res => this.$router.push({ name: "home" }))
              .catch(error => console.log(error.response.data));
          } else {
            alert("Please add your image");
          }
        }
      }
    }
  }
};
</script>
