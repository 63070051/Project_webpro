<template>
  <div id="app">
    <div
      class="flex justify-center items-center h-screen bg-sky-100"
      
    >
      <div
        class="w-full  space-y-6  max-w-xl bg-gray-100 round rounded-xl p-6 shadow-xl"
      >
        <p class="text-3xl font-bold">เงื่อนไขการขายสินค้า</p>
        <div
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-2 overflow-y-auto h-96"
        >
          <p>ทุกครั้งในการซื้อ-ขาย รถมือสอง ไม่ว่าจะเป็นทั้งผู้ซื้อหรือผู้ขาย เรื่องเอกสารก็เป็นสิ่งสำคัญที่ทั้งสองฝ่ายต้องเตรียมมาให้ครบถ้วนเพื่อการซื้อขายที่ถูกต้อง  ในกรณีที่รถจดทะเบียนเป็นชื่อบุคคลเเละไม่ติดไฟแนนซ์ การซื้อขายอันชอบธรรมย่อมเกิดขึ้นได้ เเละนี่คือของเอกสารที่ผู้ซื้อ-ขายจำเป็นต้องใช้</p>
          <p>1.สมุดคู่มือจดทะเบียนเล่มจริงที่ต้องเป็นสมุดเล่มทะเบียนที่มีชื่อเจ้าของรถ เลขตัวถัง เลขเครื่องยนต์ สีรถ ต้องตรงกับรถคันที่จะซื้อขายทุกอย่างรวมถึงควรครวจสอบเรื่องการเสียภาษีด้วยว่ามีการขาดต่อภาษีหรือไม่ เพราะหากภาษีขาดการซื้อรถก็จะไม่มีทางเกิดขึ้นได้ เจ้าของรถต้องรับผิดชอบด้วยการชำระจ่ายภาษีให้ถูกต้อง</p>
          <p>2.หนังสือเอกสารสัญญาซื้อ-ขายรถยนต์ ในส่วนของเอกสารสัญญาซื้อ-ขาย รถมือสอง จะต้องกรอกรายละเอียดข้อมูลของ ผู้ซื้อ-ผู้ขาย รายละเอียดของรถ ยี่ห้อ, รุ่น, ปี, เกียร์, สี, หมายเลขทะเบียน เเละราคา เงื่อนไขต่างๆ ที่ทั้งสงฝ่ายต้องเข้าใจตรงกันเเละสัญญาฉบับนี้ต้องจัดทำขึ้นมา 2ฉบับ กรอกข้อมูลให้ครบเเละเหมือนกันทั้งสองฉบับพร้อมลายเซ็น ผู้ซื้อ-ผู้ขาย พยานทั้งสองฝ่าย</p>
          <p>3.แบบคำขอโอนเเละรับโอน เอกสารชุดนี้ผู้โอน(ผู้ขาย) ต้องกรอกข้อมูลส่วนให้ครบ เช่นเดียวกับผู้รับโอน(ผู้ซื้อ) เเละรายละเอียดต่างๆ ของรถเเละเอกสารประกอบเพื่อแจ้งแก่นายทะเบียน</p>
          <p>4.ใบมอบอำนาจ ในกรณีที่ผู้ขายไม่สามารถมาดำเนินการซื้อ-ขาย โอน รถมือสอง ด้วยตัวเองที่ขนส่ง ผู้ขายสามารถให้บุคคลอื่นทำหน้าที่แทนได้ แต่ผู้ขายต้องกรอกประวัติเเละที่อยู่ลงในเอกสารให้ครบถ้วนรวมถึงข้อมูลของผู้มอบอำนาจ</p>
          <p>5.สำเนาบัตรประชาชนทั้งผู้ซื้อ-ขาย ที่ยังไม่หมดอายุพร้อมขีดคร่อม “ใช้เพื่อดำเนินการเกี่ยวกับรถยนต์หมายเลขทะเบียนนี้……….เท่านั้น” เพื่อความปลอดภัย พร้อมเซ็นสำเนาถูกต้องเเละชื่อกำกับ</p>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" v-model="check" />
          <p>ยอมรับเงื่อนไข</p>
        </div>
        <div class="flex justify-between">
        <router-link class="" to="/">
            <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-300"
          >
            ย้อนกลับ
          </button>
        </router-link>
          <button
            @click="requestseller()"
            v-show="check"
            class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline duration-300"
          >
            ยืนยัน
          </button>
        <button
            v-show="!check"
            class="bg-gray-400 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline duration-300"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "Vertified_seller",
  data() {
    return {
      loginuser: [],
      check: false
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let token = JSON.parse(localStorage.getItem('user'))
      axios
          .post(`http://localhost:3000/getuser`, {token : token})
          .then(response => {
            this.loginuser = response.data;
            console.log(this.loginuser)
          })
          .catch(error => {
            this.error = error.response.data.message;
          });
    },
    requestseller() {
      if(confirm('Confirm to verified')){
        if(this.check && this.loginuser.user_age >= 20){
        axios
        .post(`http://localhost:3000/requestseller/${this.loginuser.user_id}`)
        .then(response => {
          alert("รอ admin ยืนยันสักครู่");
          this.$router.push("/");
        });
      }
      else{
          alert('อายุไม่ถึงเกณฑ์')
      }
      }
    }
  },
};
</script>
