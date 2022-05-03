<template>
  <div id="app">
    <Navbar />
    <div class="fixed bottom-0 right-56">
      <button class="h-10 py-2 w-72 rounded-t-lg text-white bg-orange-500 cursor-pointer text-lg" @click="compareactive = !compareactive">
        <p>เปรียบเทียบรถยนต์</p>
      </button>
      <div class="hidden" :class="[compareactive ? 'dropdown-active' : '']">
        <div class="w-72 bg-gray-100" v-for="carcom, index in comparecar" :key="carcom.car_id">
          <div class="grid grid-cols-2 py-3 pl-3 pr-5">
            <img width="100px" :src=selectimgcar(carcom.car_img) alt="">
            <img @click="deletecompare(carcom, index)" width="12px" class="absolute right-1" src="https://cdn.discordapp.com/attachments/958256273592307722/963833361779015730/x_mark.png" alt="">
            <div>
              <p class="text-xs font-bold text-start">{{carcom.car_model}}</p>
              <p class="text-xs">{{carcom.car_engine + ' ' + carcom.car_type}}</p>
              <p class="text-sm text-orange-500">{{convertprice(carcom.car_price)}}</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 flex justify-center pb-2">
          <div @click="linkcompare()" class="w-60 text-center bg-sky-700 text-white py-1 rounded cursor-pointer">
            <p class="">Compare</p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-10">
      <div class="flex items-center space-x-3 mb-5">
        <div
          class="centered h-5 w-5 bg-center"
          style="
            background-image: url('https://www.cars24.co.th/th/static/js/908298b053135f9e4dc1dc8b8e2ad47f.svg');
          "
        ></div>
        <div class="w-full">
          <input
            v-model="instead"
            class="
            input-border
            w-full
            text-lg
            px-2
            py-1
          "
            type="text"
            id="searchbox"
            name="searchbox"
            placeholder=""
          />
        </div>
        <p
          class="w-20 border-b-2 text-center border-sky-700 text-sky-700 font-bold cursor-pointer"
          @click="resetall"
        >
          ตั้งค่าใหม่
        </p>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div class="inline-block relative">
          <button
            @click="
              (priceactive = priceactive ? false : true),
                (yearactive = false),
                (distanceactive = false),
                (brandactive = false),
                (coloractive = false),
                (typeactive = false)
            "
            class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0"
          >
            <p>ราคา</p>
            <svg
              class="fill-current h-4 w-4 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            class="absolute hidden text-gray-700 pt-1 drop-shadow-md"
            :class="[priceactive ? 'dropdown-active' : '']"
          >
            <div
              style="width: 500px; height: 350px"
              class="bg-white rounded-lg z-50 flex flex-col justify-between"
            >
              <div class=" px-6 py-5">
                <div class="flex justify-between items-end">
                  <div>
                    <p class="text-gray-600 mb-1">ราคาต่ำสุด</p>
                    <div class="flex items-center">
                      <input
                        v-model="minprice"
                        type="number"
                        class="border-2 rounded-l-md focus:outline-none py-1 px-2 w-40 font-semibold text-right"
                      />
                      <div
                        class="border-y-2 border-r-2 px-1 py-1 rounded-r-md bg-gray-100 font-semibold"
                      >
                        THB
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-6 rounded bg-gray-300 mb-4"
                    style="height: 3px"
                  ></div>
                  <div>
                    <p class="text-gray-600 mb-1">ราคาสูงสุด</p>
                    <div class="flex items-center">
                      <input
                        v-model="maxprice"
                        type="number"
                        class="border-2 rounded-l-md focus:outline-none py-1 px-2 w-40 font-semibold text-right"
                      />
                      <div
                        class="border-y-2 border-r-2 px-1 py-1 rounded-r-md font-semibold"
                      >
                        THB
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-7">
                  <p>แนะนำ</p>
                  <div class="grid grid-cols-2 mt-3 gap-2">
                    <div
                      @click="ChangePrice(0, 400000)"
                      class="border-2 w-44 text-center rounded-md hover:bg-gray-100"
                    >
                      ภายใต้ THB 400,000
                    </div>
                    <div
                      @click="ChangePrice(400000, 600000)"
                      class="border-2 w-44 text-center rounded-md hover:bg-gray-100"
                    >
                      THB 400k - 600k
                    </div>
                    <div
                      @click="ChangePrice(600000, 800000)"
                      class="border-2 w-44 text-center rounded-md hover:bg-gray-100"
                    >
                      THB 600k - 800k
                    </div>
                    <div
                      @click="ChangePrice(800000, 99999999)"
                      class="border-2 w-44 text-center rounded-md hover:bg-gray-100"
                    >
                      สูงกว่า THB 800k
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-24 shadow-lg w-full flex justify-center items-center "
                style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);"
              >
                <div
                  @click="resetprice"
                  class="w-60 cursor-pointer text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500"
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block relative">
          <button
            @click="
              (brandactive = brandactive ? false : true),
                (yearactive = false),
                (priceactive = false),
                (coloractive = false),
                (distanceactive = false),
                (typeactive = false)
            "
            class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0"
          >
            <p>แบรนด์</p>
            <svg
              class="fill-current h-4 w-4 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            class="absolute hidden text-gray-700 pt-1 drop-shadow-md"
            :class="[brandactive ? 'dropdown-active' : '']"
          >
            <div
              style="width: 500px; height: 550px"
              class="bg-white rounded-lg z-50 flex flex-col justify-between pt-3"
            >
              <div class="px-3">
                <div class="text-gray-500 pl-5 py-2 border-b-2 ">
                  แบรนด์ทั้งหมด
                </div>
                <div class="px-6 py-5 grid grid-rows-6 gap-3">
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'Toyota')"
                    />
                    <p class="ml-4">Toyota</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'Mercedes Benz')"
                    />
                    <p class="ml-4">Mercedes Benz</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'BMW')"
                    />
                    <p class="ml-4">BMW</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'Honda')"
                    />
                    <p class="ml-4">Honda</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'Nissan')"
                    />
                    <p class="ml-4">Nissan</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'Mazda')"
                    />
                    <p class="ml-4">Mazda</p>
                  </div>
                  <div class="flex items-center border-b-2 py-2">
                    <input
                      class="brand"
                      type="checkbox"
                      @change="FillterBrand($event, 'Others')"
                    />
                    <p class="ml-4">Others</p>
                  </div>
                </div>
              </div>
              <div
                class="h-24 shadow-lg w-full flex justify-center items-center "
                style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);"
              >
                <div
                  @click="resetbrand"
                  class="w-60 cursor-pointer text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500"
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block relative">
          <button
            @click="
              (yearactive = yearactive ? false : true),
                (priceactive = false),
                (distanceactive = false),
                (coloractive = false),
                (brandactive = false),
                (typeactive = false)
            "
            class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0"
          >
            <p>ปี</p>
            <svg
              class="fill-current h-4 w-4 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            class="absolute hidden text-gray-700 pt-1 drop-shadow-md"
            :class="[yearactive ? 'dropdown-active' : '']"
          >
            <div
              style="width: 500px; height: 400px"
              class="bg-white rounded-lg z-50 flex flex-col justify-between"
            >
              <div class=" px-6 py-5">
                <div class="flex justify-between items-end">
                  <div>
                    <p class="text-gray-600 mb-1">ปีต่ำสุด</p>
                    <input
                      v-model="minyear"
                      type="text"
                      class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right"
                    />
                  </div>
                  <div
                    class="w-6 rounded bg-gray-300 mb-4"
                    style="height: 3px"
                  ></div>
                  <div>
                    <p class="text-gray-600 mb-1">ปีสูงสุด</p>
                    <input
                      v-model="maxyear"
                      type="text"
                      class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right"
                    />
                  </div>
                </div>
                <div class="mt-7">
                  <p>แนะนำ</p>
                  <div class="grid grid-cols-2 mt-3 gap-2">
                    <div
                      class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100"
                      @click="(minyear = 2016), (maxyear = 2018)"
                    >
                      2016 - 2018
                    </div>
                    <div
                      class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100"
                      @click="(minyear = 2018), (maxyear = 2020)"
                    >
                      2018 - 2020
                    </div>
                    <div
                      class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100"
                      @click="(minyear = 2020), (maxyear = 2022)"
                    >
                      2020 - 2022
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-24 shadow-lg w-full flex justify-center items-center "
                style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);"
              >
                <div
                  @click="resetyear"
                  class="w-60 cursor-pointer text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500"
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block relative">
          <button
            @click="
              (distanceactive = distanceactive ? false : true),
                (brandactive = false),
                (yearactive = false),
                (priceactive = false),
                (coloractive = false),
                (typeactive = false)
            "
            class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0"
          >
            <p>เลขไมล์</p>
            <svg
              class="fill-current h-4 w-4 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            class="absolute hidden text-gray-700 pt-1 drop-shadow-md"
            :class="[distanceactive ? 'dropdown-active' : '']"
          >
            <div
              style="width: 500px; height: 400px"
              class="bg-white rounded-lg z-50 flex flex-col justify-between"
            >
              <div class=" px-6 py-5">
                <div class="flex justify-between items-end">
                  <div>
                    <p class="text-gray-600 mb-1">เลขไมล์ต่ำสุด</p>
                    <input
                      v-model="minmile"
                      type="text"
                      class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right"
                    />
                  </div>
                  <div
                    class="w-6 rounded bg-gray-300 mb-4"
                    style="height: 3px"
                  ></div>
                  <div>
                    <p class="text-gray-600 mb-1">เลขไมล์สูงสุด</p>
                    <input
                      v-model="maxmile"
                      type="text"
                      class="border-2 rounded-md focus:outline-none py-1 px-2 w-40 font-semibold text-right"
                    />
                  </div>
                </div>
                <div class="mt-7">
                  <p>แนะนำ</p>
                  <div class="grid grid-cols-2 mt-3 gap-2">
                    <div
                      class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100"
                      @click="(minmile = 0), (maxmile = 20000)"
                    >
                      ภายใต้ 20,000 ก.ม.
                    </div>
                    <div
                      class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100"
                      @click="(minmile = 0), (maxmile = 40000)"
                    >
                      ภายใต้ 40,000 ก.ม.
                    </div>
                    <div
                      class="border-2 w-44 py-3 text-center rounded-md hover:bg-gray-100"
                      @click="(minmile = 0), (maxmile = 60000)"
                    >
                      ภายใต้ 60,000 ก.ม.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="h-24 shadow-lg w-full flex justify-center items-center "
                style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);"
              >
                <div
                  @click="resetmiles"
                  class="w-60 cursor-pointer text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500"
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block relative">
          <button
            @click="
              (coloractive = coloractive ? false : true),
                (priceactive = false),
                (distanceactive = false),
                (brandactive = false),
                (yearactive = false),
                (typeactive = false)
            "
            class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0"
          >
            <p>สี</p>
            <svg
              class="fill-current h-4 w-4 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            class="absolute hidden text-gray-700 pt-1 drop-shadow-md"
            :class="[coloractive ? 'dropdown-active' : '']"
          >
            <div
              style="width: 500px; height: 400px"
              class="bg-white rounded-lg z-50 flex flex-col justify-between pt-3"
            >
              <div class="px-3">
                <div class="text-gray-600 font-medium pl-5 pt-5">
                  สี
                </div>
                <div class="px-6 py-5 grid grid-cols-3 gap-6">
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'White')"
                    />
                    <div
                      class=" w-8 py-2 bg-white border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>ขาว</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Black')"
                    />
                    <div
                      class=" w-8 py-2 bg-black border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>ดำ</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Gray')"
                    />
                    <div
                      class=" w-8 py-2 bg-gray-500 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>เทา</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Bronze')"
                    />
                    <div
                      class=" w-8 py-2 bg-yellow-700 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>บรอนซ์</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Blue')"
                    />
                    <div
                      class=" w-8 py-2 bg-cyan-700 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>น้ำเงิน</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Red')"
                    />
                    <div
                      class=" w-8 py-2 border-gray-400"
                      style="border: 1px solid gray; background-color: red;"
                    ></div>
                    <p>แดง</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Brown')"
                    />
                    <div
                      class=" w-8 py-2 bg-yellow-800 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>น้ำตาล</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Orange')"
                    />
                    <div
                      class=" w-8 py-2 bg-orange-400 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>ส้ม</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Green')"
                    />
                    <div
                      class=" w-8 py-2 bg-green-800 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>เขียว</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Gold')"
                    />
                    <div
                      class=" w-8 py-2 bg-yellow-300 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>ทอง</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Silver')"
                    />
                    <div
                      class=" w-8 py-2 bg-slate-400 border-gray-400"
                      style="border: 1px solid gray"
                    ></div>
                    <p>เงิน</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <input
                      class="color"
                      type="checkbox"
                      @change="FillterColor($event, 'Others')"
                    />
                    <div
                      class=" w-8 py-2 border-gray-400"
                      style="border: 1px solid gray ;background-image: url('https://www.cars24.co.th/th/static/js/9c28e4e1d6d13ff6948f8aec8986ead0.svg')"
                    ></div>
                    <p>อื่นๆ</p>
                  </div>
                </div>
              </div>
              <div
                class="h-24 shadow-lg w-full flex justify-center items-center "
                style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);"
              >
                <div
                  @click="resetcolor"
                  class="w-60 cursor-pointer text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500"
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block relative">
          <button
            @click="
              (typeactive = typeactive ? false : true),
                (brandactive = false),
                (yearactive = false),
                (priceactive = false),
                (coloractive = false),
                (distanceactive = false)
            "
            class="inline-flex items-center gap-3 text-gray-600 w-full py-2 px-4 rounded font-semibold shadow-sm border-2 border-gray-200 justify-between z-0"
          >
            <p>ประเภทรถ</p>
            <svg
              class="fill-current h-4 w-4 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            class="absolute hidden text-gray-700 pt-1 drop-shadow-md"
            :class="[typeactive ? 'dropdown-active' : '']"
          >
            <div
              style="width: 470px; height: 400px"
              class="bg-white rounded-lg z-50 flex flex-col justify-between"
            >
              <div class=" px-6 py-5">
                <p class="">ประเภทรถ</p>
                <div class="grid grid-cols-3 gap-4 mt-5">
                  <div
                    class="py-2 px-2 border-2 w-32 h-24 flex flex-col justify-center items-center rounded-xl cursor-pointer"
                    :class="[fourdoor ? 'border-black' : 'border-gray-200']"
                    @click="
                      (fourdoor = !fourdoor), FillterType('Sedan', fourdoor)
                    "
                  >
                    <img
                      src="https://www.cars24.co.th/th/static/js/5ea1c908dc78004f8b5938319d75b10b.svg"
                      alt=""
                    />
                    <p class="text-xs mt-2">รถเก๋ง 4 ประตู</p>
                  </div>
                  <div
                    class="py-2 px-2 border-2 w-32 h-24 flex flex-col justify-center items-center rounded-xl cursor-pointer"
                    :class="[pickup ? 'border-black' : 'border-gray-200']"
                    @click="(pickup = !pickup), FillterType('Pickup', pickup)"
                  >
                    <img
                      src="https://www.cars24.co.th/th/static/js/011fae70a431e3b54337c4ecda2edb95.svg"
                      alt=""
                    />
                    <p class="text-xs mt-2">รถกระบะ</p>
                  </div>
                  <div
                    class="py-2 px-2 border-2 w-32 h-24 flex flex-col justify-center items-center rounded-xl cursor-pointer"
                    :class="[fivedoor ? 'border-black' : 'border-gray-200']"
                    @click="
                      (fivedoor = !fivedoor), FillterType('Hatchback', fivedoor)
                    "
                  >
                    <img
                      src="https://www.cars24.co.th/th/static/js/6e99b56a701c6b33513c3ed5fd6fecdd.png"
                      alt=""
                    />
                    <p class="text-xs mt-2">รถเก๋ง 5 ประตู</p>
                  </div>
                  <div
                    class="py-2 px-2 border-2 w-32 h-24 flex flex-col justify-center items-center rounded-xl cursor-pointer"
                    :class="[suv ? 'border-black' : 'border-gray-200']"
                    @click="(suv = !suv), FillterType('SUV', suv)"
                  >
                    <img
                      src="https://www.cars24.co.th/th/static/js/85b73be73930f19663cdab1fd1080920.svg"
                      alt=""
                    />
                    <p class="text-xs mt-2">SUV</p>
                  </div>
                  <div
                    class="py-2 px-2 border-2 w-32 h-24 flex flex-col justify-center items-center rounded-xl cursor-pointer"
                    :class="[sevenseat ? 'border-black' : 'border-gray-200']"
                    @click="
                      (sevenseat = !sevenseat),
                        FillterType('7 seater', sevenseat)
                    "
                  >
                    <img
                      src="https://www.cars24.co.th/th/static/js/84550e971e82448925e5058f0d2db357.svg"
                      alt=""
                    />
                    <p class="text-xs mt-2">7 Seater</p>
                  </div>
                  <div
                    class="py-2 px-2 border-2 w-32 h-24 flex flex-col justify-center items-center rounded-xl cursor-pointer"
                    :class="[mpv ? 'border-black' : 'border-gray-200']"
                    @click="(mpv = !mpv), FillterType('MPV', mpv)"
                  >
                    <img
                      src="https://www.cars24.co.th/th/static/js/3a2b8068cdf30e98a72ff84f98f655ad.svg"
                      alt=""
                    />
                    <p class="text-xs mt-2">MPV</p>
                  </div>
                </div>
              </div>
              <div
                class="h-24 shadow-lg w-full flex justify-center items-center "
                style="box-shadow: 1px -7px 22px -3px rgba(0,0,0,0.16);"
              >
                <div
                  @click="resettype"
                  class="w-60 cursor-pointer text-center font-extrabold text-lg rounded-md bg-orange-500 text-white py-3 hover:bg-white hover:text-orange-500  border-2 border-orange-500"
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="closemodal()">
      <div class="max-w-6xl mx-auto py-4" style="min-height: 500px;">
        <div class="grid grid-cols-3 gap-8">
          <div
            class="flex justify-center cursor-pointer"
            v-for="car in showcars"
            :key="car.car_id"
          >
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
              <div data-mdb-ripple="true" data-mdb-ripple-color="light" @click="detailcar(car.car_id)">
                <img
                  class="rounded-t-lg"
                  :src="selectimgcar(car.car_img)"
                  alt=""
                />
              </div>

              <div class="px-6 pt-6 space-y-3"  @click="detailcar(car.car_id)">
                <h5 class="text-gray-900 text-xl font-bold">
                  {{ car.car_model }}
                </h5>
                <p class="text-gray-700 text-base">
                  {{ car.car_engine + " / " + car.car_gear }}
                </p>
                <p class="pb-2 border-b border-gray-300">
                  {{convertdistance(car.car_distance)}}
                </p>
                
              </div>
              <div class="flex justify-between py-4 px-6">
                  <p class="text-orange-500 font-bold text-xl float-right">
                    {{convertprice(car.car_price)}}
                  </p>
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="compareclass" @click="compare($event, car)">
                    <p>เปรียบเทียบ</p>
                  </div>
                </div>
            </div>
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
  name: "Searchcar",
  data() {
    return {
      loginuser: [],
      brand: [],
      cars: [],
      minprice: 0,
      maxprice: 0,
      instead: "",
      color: [],
      cartype: [],
      priceactive: false,
      distanceactive: false,
      coloractive: false,
      brandactive: false,
      yearactive: false,
      typeactive: false,
      compareactive: false,
      minyear: 0,
      maxyear: 0,
      minmile: 0,
      maxmile: 0,
      fourdoor: false,
      pickup: false,
      fivedoor: false,
      suv: false,
      sevenseat: false,
      mpv: false,
      comparecar : [],
      indexcarcompare : []
    };
  },
  components: {
    Navbar: navbar,
    Footer: footer
  },
  mounted() {
    this.getdata();
    this.getcar();
  },
  computed: {
    showcars() {
      let car_copy = this.cars;
      let indexcompare = [];
      if (this.brand.length != 0) {
        car_copy = car_copy.filter(car =>
          this.brand.some(val => car.car_brand.match(val))
        );
      }
      if (this.color.length != 0) {
        car_copy = car_copy.filter(car =>
          this.color.some(val => car.car_color.match(val))
        );
      }
      if (this.cartype.length != 0) {
        car_copy = car_copy.filter(car =>
          this.cartype.some(val => car.car_type.match(val))
        );
      }
      if (this.minprice > 0 || this.maxprice > 0) {
        car_copy = car_copy.filter(car => {
          if (
            car.car_price >= this.minprice &&
            car.car_price <= this.maxprice
          ) {
            return car;
          }
        });
      }
      if (this.minyear > 0 || this.maxyear > 0) {
        car_copy = car_copy.filter(car => {
          if (
            car.car_modelyear >= this.minyear &&
            car.car_modelyear <= this.maxyear
          ) {
            return car;
          }
        });
      }
      if (this.minmile > 0 || this.maxmile > 0) {
        car_copy = car_copy.filter(car => {
          if (
            car.car_distance >= this.minmile &&
            car.car_distance <= this.maxmile
          ) {
            return car;
          }
        });
      }
      if (this.instead != "") {
        car_copy = car_copy.filter(
          car =>
            car.car_model.toUpperCase().indexOf(this.instead.toUpperCase()) > -1
        );
      }
      if(this.comparecar.length != 0){
        this.comparecar.forEach((e) => {
          indexcompare.push(car_copy.indexOf(e))
        });
      }
      this.checkedcompare(indexcompare)
      return car_copy;
    }
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
    getcar() {
      axios
        .post(`http://localhost:3000/getcar`)
        .then(response => {
          this.cars = response.data;
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    },
    selectimgcar(car_img) {
      if (car_img) {
        // console.log("http://localhost:3000/" + car_img);
        return "http://localhost:3000/" + car_img;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    detailcar(carid) {
      this.$router.push(`/detail/${carid}`);
    },
    FillterBrand($event, brand) {
      if ($event.target.checked) {
        this.brand.push(brand);
      } else {
        let index = this.brand.indexOf(brand);
        this.brand.splice(index, 1);
      }
    },
    FillterColor($event, color) {
      if ($event.target.checked) {
        this.color.push(color);
      } else {
        let index = this.color.indexOf(color);
        this.color.splice(index, 1);
      }
    },
    FillterType(type, check) {
      if (check) {
        this.cartype.push(type);
      } else {
        let index = this.cartype.indexOf(type);
        this.cartype.splice(index, 1);
      }
    },
    ChangePrice(minprice, maxprice) {
      this.minprice = minprice;
      this.maxprice = maxprice;
    },
    convertprice(price) {
      let price2 = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(price);
      return price2.slice(4, price2.length - 3) + " บาท";
    },
    convertdistance(km) {
      let dis = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB"
      }).format(km);
      return dis.slice(4, dis.length - 3) + " กม.";
    },
    resetbrand() {
      document.querySelectorAll(".brand").forEach(e => {
        e.checked = false;
      });
      this.brand = [];
      this.closemodal();
    },
    resetcolor() {
      document.querySelectorAll(".color").forEach(e => {
        e.checked = false;
      });
      this.color = [];
      this.closemodal();
    },
    resetprice() {
      this.maxprice = 0;
      this.minprice = 0;
      this.closemodal();
    },
    resetyear() {
      this.maxyear = 0;
      this.minyear = 0;
      this.closemodal();
    },
    resetmiles() {
      this.maxmile = 0;
      this.minmile = 0;
      this.closemodal();
    },
    resettype() {
      this.cartype = [];
      this.fourdoor = false;
      this.pickup = false;
      this.fivedoor = false;
      this.suv = false;
      this.sevenseat = false;
      this.mpv = false;
    },
    resetall() {
      this.resetbrand();
      this.resetcolor();
      this.resetprice();
      this.resetmiles();
      this.resetyear();
      this.resettype();
    },
    closemodal() {
      this.priceactive = false;
      this.distanceactive = false;
      this.coloractive = false;
      this.brandactive = false;
      this.yearactive = false;
      this.typeactive = false;
    },
    compare($event, car){
      if($event.target.checked){
        this.comparecar.push(car)
      }
      else{
        let index = this.comparecar.indexOf(car);
        this.comparecar.splice(index, 1);
      }
      // console.log(this.comparecar)
    },
    deletecompare(car, index){
      let indexcar = this.cars.indexOf(car);
      document.querySelectorAll(".compareclass").forEach((e, indexchecked) => {
        if(indexchecked == indexcar){
          e.checked = false
          this.comparecar.splice(index, 1)
        }
      });
    },
    checkedcompare(indexcompare){
      this.indexcarcompare = indexcompare
      if(this.comparecar.length != 0){
        setTimeout(() => {
        document.querySelectorAll(".compareclass").forEach((e, indexchecked) => {
          indexcompare.forEach(compare => {
            if(indexchecked == compare){
              e.checked = true
            }
          });
        });
        }, 1);
        // console.log(indexcompare)
      }
    },
    linkcompare(){
      if(this.comparecar.length == 2){
        this.$router.push(`/compare/${this.indexcarcompare[0]}/${this.indexcarcompare[1]}`)
      }
      else{
        alert('Please Select Car')
      }
    }
  }
};
</script>
