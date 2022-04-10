<template>
    <footer>
      <div class="pt-10 mt-10" style="background-color: #EDEDED">
        <div class="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div>
            <div class="flex space-x-8">
              <img
                width="35px"
                src="https://cdn.discordapp.com/attachments/958256273592307722/962297861175930900/facebook_black.png"
                alt=""
              />
              <img
                width="35px"
                src="https://cdn.discordapp.com/attachments/958256273592307722/962297861557587999/twitter_black.png"
                alt=""
              />
              <img
                width="35px"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111491.png"
                alt=""
              />
              <img
                width="35px"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png"
                alt=""
              />
            </div>
            <div class="flex flex-col space-y-6 mt-8 text-gray-600">
                <div class="flex space-x-4">
                    <img width="25px" src="https://cdn.discordapp.com/attachments/958256273592307722/962345035599339582/phone.png" alt="">
                    <p>+66 2508 8646</p>
                </div>
                <div class="flex space-x-4">
                    <img width="25px" src="https://cdn-icons-png.flaticon.com/512/893/893257.png" alt="">
                    <p>TH.support@cars24.com</p>
                </div>
                <div class="flex space-x-4">
                    <div class="w-6 h-6 ">
                        <img width="100px" src="https://cdn.discordapp.com/attachments/958256273592307722/962345035850985542/location.png" alt="">
                    </div>
                    <p>188 WeWork อาคารสปริงทาวเวอร์ ชั้นที่ 12 ถนน พญาไท แขวง ทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</p>
                </div>
            </div>
          </div>
          <div class="mx-auto">
              <p class="text-xl">ข้อมูลอื่นๆ ของเรา</p>
              <div class="mt-9 space-y-6">
                  <div class="flex space-x-5">
                    <div class="w-16 h-16 bg-white rounded-xl flex justify-center items-center">
                        <img width="50px" src="https://cdn.discordapp.com/attachments/958256273592307722/962345035267997726/line.png" alt="">
                    </div>
                    <div>
                        <p class="text-gray-600">แชทกับเราผ่าน LINE!</p>
                        <p class="text-xs mt-3 text-gray-400">เรามีคำตอบพื้นฐานมากมายเพื่อคลายข้อสงสัย</p>
                    </div>
                  </div>
                  <div class="flex space-x-5">
                    <div class="w-16 h-16 bg-white rounded-xl flex justify-center items-center">
                        <img width="30px" src="https://cdn.discordapp.com/attachments/958256273592307722/962345035599339582/phone.png" alt="">
                    </div>
                    <div>
                        <p class="text-gray-600">ให้เราโทรกลับ</p>
                        <p class="text-xs mt-3 text-gray-400">เจ้าหน้าที่จะติดต่อกลับเพื่อช่วยเหลือคุณทันที</p>
                    </div>
                  </div>
                  <div class="flex space-x-5">
                    <div class="w-16 h-16 bg-white rounded-xl flex justify-center items-center">
                        <img width="30px" src="https://cdn.discordapp.com/attachments/958256273592307722/962345034945003580/headphone.png" alt="">
                    </div>
                    <div>
                        <p class="text-gray-600">โทรหาเราตอนนี้</p>
                        <p class="text-xs mt-3 text-gray-400">ได้ตลอดช่วง 8 โมงเช้าถึงสามทุ่มทุกวัน</p>
                    </div>
                  </div>
              </div>
          </div>
          <div class="mx-auto">
              <p class="text-xl">ข้อมูลที่เป็นประโยชน์</p>
              <div class="space-y-6 mt-9 text-gray-500">
                  <p>ค้นหารถ</p>
                  <p>เกี่ยวกับเรา</p>
                  <p>ติดต่อเรา</p>
                  <p>แผนผังเว็บไซต์</p>
              </div>
          </div>
        </div>
        <div class="h-24 border-t-4 border-gray-300 max-w-6xl mx-auto mt-10 flex justify-between items-center">
            <div>
                <p>© CARS24 2021</p>
            </div>
            <div class="flex space-x-2 text-gray-500">
                <p>คำถามที่พบบ่อย</p>
                <p>|</p>
                <p>นโยบายความเป็นส่วนตัว</p>
                <p>|</p>
                <p>เงื่อนไขการใช้งาน</p>
            </div>
        </div>
      </div>
    </footer>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Footer",
    data() {
        return {
        loginuser: []
        };
    }
};
</script>