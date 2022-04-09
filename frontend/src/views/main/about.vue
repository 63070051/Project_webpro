<template>
  <div id="app">
    <Navbar />
    <div class="container mx-auto max-w-4xl">
      <section>
        <div class="flex justify-center">
          <div class="space-y-4 max-w-4xl pt-12">
            <img
              class="rounded-xl"
              width="1000px"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div class="py-4">
              <p class="text-center text-xl font-bold">
                <span class="py-1 border-b-4 border-gray-600">About</span>
              </p>
            </div>
            <div class="flex justify-center pb-12">
              <p class="text-center text-gray-400 ">
                CARS24 ได้ก่อตั้งขึ้นในปี พ.ศ. 2558
                ซึ่งเป็นแพลตฟอร์มชั้นนำด้านรถยนต์มือสอง โดยคำขวัญของ CARS24
                ก็คือ การให้บริการลูกค้าด้วยสินค้าที่มีคุณภาพสูงสุด
                ตลอดจนสร้างประสบการณ์ในการใช้บริการแก่ลูกค้าอย่างน่าประทับใจ
                ด้วยความสามารถด้านเทคโนโลยีที่แข็งแกร่งในตลาดปัจจุบัน
                ทำให้เราสามารถเปลี่ยนแปลงการซื้อรถยนต์มือสองด้วยประสบการณ์การซื้อผ่านทางออนไลน์ได้
                100% ทั้งยังมอบสิทธิประโยชน์มากมายแก่ลูกค้าเช่น การจัดทำไฟแนนซ์
                การรับประกัน การทดลองใช้งานเป็นระยะเวลา 7 วัน
                และการจัดส่งสินค้าถึงบ้าน
                เราจะยังคงสร้างสรรค์และพัฒนาสินค้าของเราอย่างไม่หยุดยั้งเพื่อมอบประสบการณ์ที่ดีที่สุดแก่ลูกค้าทุกคนของเรา
                ด้วยการให้พวกเขาสามารถเลือกซื้อรถยนต์ได้อย่างหลากหลายประเภท
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      class="flex justify-center items-center py-12 text-white "
      style="background: radial-gradient(circle, rgba(0,112,186,1) 0%, rgba(0,0,53,1) 100%);"
    >
      <div class="space-y-4">
        <p class="text-center text-xl font-bold">
          <span class="py-1 border-b-4 border-gray-600">พันธกิจของเรา</span>
        </p>
        <p class="text-center max-w-4xl">
          พันธกิจของ CARS24 คือ การปฏิวัติวิธีการซื้อขายรถยนต์มือสองในประเทศไทย
          ซึ่งเราพยายามเป็นอย่างยิ่ง
          ที่จะมอบประสบการณ์ให้แก่คุณในการรับบริการจากเราซึ่งจะไม่ยุ่งยาก
          มีประสิทธิภาพ และเชื่อถือได้สำหรับรถยนต์มือสอง
        </p>
      </div>
    </div>
    <section>
      <div class="grid grid-cols-2 space-y-4 px-24 py-12">
        <div class="space-y-8">
          <p class="text-center text-xl font-bold ">
            <span class="py-1 border-b-4 border-gray-600 ">ค่านิยม</span>
          </p>
          <div class="text-gray-400 max-w-lg mx-auto">
            ค่านิยมและจริยธรรมของ CARS24 เป็นสิ่งที่ช่วยกำหนดแนวทางการจัดระเบียบ
            และวางโครงสร้างขององค์กรให้สมบูรณ์ยั่งยืนมากขึ้น ในฐานะขององค์กร
            องค์กรหนึ่งเรามีค่านิยมของเราเองที่เราเชื่อมั่นและปฏิบัติตาม
          </div>
        </div>
        <div class="flex justify-center">
          <img
            class="rounded-xl"
            width="400px"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-12 px-24">
        <div class=" text-center space-y-12">
          <p class="font-bold text-xl">ความรู้สึกถึงการเป็นเจ้าของ</p>
          <p class="text-gray-400">
            เราไม่ต้องการที่จะให้พนักงานของเรานั้นรู้สึกว่าถูก
            ควบคุมในการทำงานหากแต่เราอยากให้พวกเขาเหล่า
            นั้นเป็นผู้ที่ดำเนินการจัดการสิ่งต่างๆเอง
            สำหรับที่CARS24เราเชื่อว่าสถานที่ทำงานที่ดีเยี่ยม
            นั้นไม่ได้มาจากการที่ผู้ก่อตั้งหรือผู้บริหารระดับสูง
            เป็นผู้กำหนดหากแต่เป็นพนักงานทุกคนในองค์กร ร่วมกันเป็นผู้กำหนด
          </p>
        </div>
        <div class=" text-center space-y-12">
          <p class="font-bold text-xl">
            การลงทุนใส่ใจเกี่ยวกับพนักงาน และพันธมิตรธุรกิจ
          </p>
          <p class="text-gray-400">
            เราไม่ได้อยากที่จะเพิ่มต้นทุนค่าใช้จ่ายหากแต่ต้อง
            การเพิ่มบุคคลากรและพันธมิตรธุรกิจให้มากขึ้น สำหรับที่ CARS24
            เราไม่ได้เล็งเห็นว่าความ สำเร็จของเราจะมาจากเพียงแค่การทำผลกำไรและ
            การเสนอขายหุ้นแก่นักลงทุนในตอนที่จะกำลังเข้า
            ตลาดหลักทรัพย์หากแต่ต้องการที่จะทำให้บุคคลากร
            และพันธมิตรธุรกิจของเรานั้นประสบความสำเร็จใน
            ชีวิตของพวกเขาเหล่านั้นด้วยเราเชื่อเป็นอย่างยิ่งใน คติพจน์ที่ว่า
            “ถ้าคุณให้ปลาแก่เขา เขาจะมีปลากิน เพียงแค่วันเดียว
            แต่ถ้าคุณสอนวิธีจับปลาให้เขา เขาจะมีปลากินตลอดไป”
          </p>
        </div>
        <div class=" text-center space-y-12">
          <p class="font-bold text-xl">
            การมีมาตรฐานสูง และการได้รับผลลัพธ์สูง
          </p>
          <p class="text-gray-400">
            เราไม่ได้จำยอมในสิ่งใดก็ตามอย่างลดน้อยลง
            หากแต่เรามุ่งเน้นสิ่งต่างๆเหล่านั้นให้มากขึ้น
            สำหรับที่CARS24เราไม่ได้ชื่นชมกับสิ่งใดก็ตามที่มี
            การทำให้ประสบผลสำเร็จ หากแต่เรามุ่งเน้นที่จำทำ
            ให้สิ่งเหล่านั้นดียิ่งขึ้นกว่าเดิม
          </p>
        </div>
        <div class="text-center space-y-12">
          <p class="font-bold text-xl">คุณธรรมาธิปไตย</p>
          <p class="text-gray-400">
            เราจะไม่ยอมให้ผลงานใดก็ตามที่ดีเยี่ยมนั้นปราศจาก การได้รับสิ่งตอบแทน
            สำหรับที่ CARS24 แล้ว ความมุ่งมาดปรารถนาของเรานั้นมีมากกว่าที่ปรากฎ
            อยู่เราไม่ได้มองว่าคุณธรรมาธิปไตยนั้นว่าเป็นเรื่อง
            คอขาดบาดตายที่จะมาจำกัดจำนวนของผู้ที่ได้รับ
            โอกาสในการได้รับสิ่งตอบแทน หากแต่เราเชื่อมั่นว่า
            ยิ่งมีคนที่มีความสามารถมากขึ้นเท่าไหร่ก็ย่อมที่จะ
            สามารถช่วยให้ก้าวฝันและบรรลุผลสำเร็จในทุกด้าน ได้มากขึ้น
          </p>
        </div>
        <div class="text-center space-y-12">
          <p class="font-bold text-xl">ความเชื่อมั่น</p>
          <p class="text-gray-400">
            เราจะไม่ประสบความสำเร็จจนกว่าจะได้รับความไว้วาง
            ใจอย่างแรงกล้าและลึกซึ้งจากผู้มีส่วนได้ส่วนเสียทุก ราย สำหรับที่
            CARS24 แล้วนั้นเราไม่ได้มองว่าเรา
            ทำทุกอย่างในทุกวันนี้เพื่อที่จะบอกว่าเราน่าเชื่อถือ
            อย่างยิ่งหากแต่เราทราบดีว่านี่เป็นหลักการสำคัญ
            ของสิ่งต่างๆที่เรากระทำและเราดำเนินกิจการงาน
            ต่างๆอย่างมุ่งมั่นตามเป้าหมายและกำหนดการต่างๆที่ได้วางไว้เพื่อให้มั่นใจได้ว่าเราได้กำลังสร้างสรรค์
            และพัฒนาการให้บริการอยู่เสมอ
          </p>
        </div>
        <div class="text-center space-y-12">
          <p class="font-bold text-xl">ความมัธยัสถ์</p>
          <p class="text-gray-400">
            เราไม่พยายามที่จะเป็นผู้ที่ใช้เงินอย่างตระหนี่หรือใช้จ่
            ายฟุ่มเฟือยอย่างคนเขลา ดังสำนวนที่ว่า “เสียน้อยเสียยาก
            เสียมากเสียง่าย”
            หากแต่เราจะไม่ใช้จ่ายในสิ่งใดก็ตามที่ไม่ได้ก่อให้เกิด
            มูลค่าเพิ่มในสิ่งนั้นสำหรับที่CARS24แล้วเราเชื่อมั่น
            ว่าสถานที่ทำงานที่ดีเยี่ยมนั้นไม่ใช่สถานที่ซึ่งจะ
            ประกอบไปด้วยสำนักงานที่หรูหราที่สุดหรือมีการ
            จัดเลี้ยงที่ใหญ่โตที่สุด ตลอดจนมีอาหารฟรีให้บริการ
            หากแต่ควรเป็นสถานที่ที่ช่วยสร้างผลกำไรที่แท้จริง
            และยอดเยี่ยมโดยมาเป็นอันดับแรกเหนือสิ่งอื่นใด
          </p>
        </div>
      </div>
    </section>

    <Footer />
    
  </div>
</template>

<script>
import axios from "axios";
import navbar from "../component/navbar.vue";
import footer from "../component/footer.vue";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      loginuser: []
    };
  },
  components: {
    Navbar : navbar,
    Footer : footer
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.loginuser = JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>
