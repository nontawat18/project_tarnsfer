<template>
  <div>
    <v-row class="mt-5 mb-10" justify="center" id="app">
      <div ref="content">
        <v-card width="1250" class="pa-16 pt-14">
          <v-row>
            <v-col cols="1" class="">
              <img
                height="100%"
                width="100%"
                src="~/assets/rmuti-removebg-preview2.png"
              />
            </v-col>
            <v-col cols="4" class="pt-16">
              <p>มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น</p>
            </v-col>
            <v-col cols="4"> </v-col>
            <v-col cols="3" class="pt-16 pr-8 text-right">
              <strong>คคว./ฝวว./01-1/2</strong>
            </v-col>
          </v-row>
          <div class="text-center">
            <h2>คำร้องขอเทียบโอนรายวิชา</h2>
          </div>
          <div class="mt-15">
            <v-row>
              <v-col></v-col>
              <v-col>
                <p>
                  วันที่ ................. เดือน ...............................
                  พ.ศ. ............................
                </p></v-col
              >
            </v-row>
          </div>
          <div class="mt-5">
            เรื่อง {{ equivalentCourseByID.equivalent_type }}
          </div>

          <!-- <div class="mt-10" v-if="equivalentCourseByID.dean != null">
            เรียน คณบดี {{ equivalentCourseByID.dean.first_name }}
            {{ equivalentCourseByID.dean.last_name }}
          </div> -->
          <div class="mt-10">เรียน คณบดีคณะวิศวกรรมศาสตร์</div>
          <div class="pl-16 ml-10 mt-10">
            ข้าพเจ้า .........................{{
              equivalentCourseByID.created_user.first_name
            }}
            {{
              equivalentCourseByID.created_user.last_name
            }}...........................
            <!-- {{ equivalentCourseByID }} -->

            รหัสนักศึกษา
            ....................................................................................
          </div>
          <div class="mt-4 pl-3">
            <v-row>
              สาขาวิชา ...................................................
              ชั้นปี ................... รอบ
              <p
                style="
                  padding: 8px;
                  border: 2px solid black;
                  width: 8px;
                  margin-left: 8px;
                  margin-right: 8px;
                "
              ></p>
              เช้า
              <p
                style="
                  padding: 8px;
                  border: 2px solid black;
                  width: 8px;
                  margin-left: 8px;
                  margin-right: 8px;
                "
              ></p>
              บ่าย
              <p
                style="
                  padding: 8px;
                  border: 2px solid black;
                  width: 8px;
                  margin-left: 8px;
                  margin-right: 8px;
                "
              ></p>
              สมทบ หมายเลขโทรศัพท์........................................
            </v-row>
          </div>
          <div class="mt-4">
            คณะ...................................................................................
            มีความประสงค์จะขอเทียบโอนผลการเรียนที่เคยศึกษามาแล้วจากสถานศึกษา
            <v-row class="pl-3 pt-7">
              <p>
                ..................................................................
                ในระดับ
              </p>
              <p
                style="
                  padding: 8px;
                  border: 2px solid black;
                  width: 8px;
                  margin-left: 8px;
                  margin-right: 8px;
                "
              ></p>
              อนุปริญญา/ปวส.
              <p
                style="
                  padding: 8px;
                  border: 2px solid black;
                  width: 8px;
                  margin-left: 8px;
                  margin-right: 8px;
                "
              ></p>
              ปริญญาตรี
              <p
                style="
                  padding: 8px;
                  border: 2px solid black;
                  width: 8px;
                  margin-left: 8px;
                  margin-right: 8px;
                "
              ></p>
              อื่นๆ................................โดยมีรายละเอียดดังนี้
            </v-row>
            <!-- <v-row class="mt-1">
              <v-col cols="2"></v-col
              ><v-col>
                <v-row>
                  <p
                    style="
                      padding: 8px;
                      border: 2px solid black;
                      width: 8px;
                      margin-left: 8px;
                      margin-right: 8px;
                    "
                  ></p>
                  พ้นสถานภาพการเป็นนักศึกษาแล้วสอบกลับเข้ามาใหม่ ภายใน 6
                  ภาคการศึกษา
                </v-row>

                <v-row>
                  <p
                    style="
                      padding: 8px;
                      border: 2px solid black;
                      width: 8px;
                      margin-left: 8px;
                      margin-right: 8px;
                    "
                  ></p>
                  โอนย้ายสาขาวิชา/ย้ายเวลาเรียน
                  <p
                    style="
                      padding: 8px;
                      border: 2px solid black;
                      width: 8px;
                      margin-left: 8px;
                      margin-right: 8px;
                    "
                  ></p>
                  โอนย้ายสถานศึกษา
                </v-row>
                <v-row>
                  <p
                    style="
                      padding: 8px;
                      border: 2px solid black;
                      width: 8px;
                      margin-left: 8px;
                      margin-right: 8px;
                    "
                  ></p>
                  เรียนแทนรายวิชาที่เคยเรียนมาแล้ว
                  (เฉพาะนักศึกษาที่เคยศึกษาจากมหาวิทยาลัย / สถาบันอื่น)
                </v-row>
                <v-row>
                  <p
                    style="
                      padding: 8px;
                      border: 2px solid black;
                      width: 8px;
                      margin-left: 8px;
                      margin-right: 8px;
                    "
                  ></p>
                  อื่นๆ
                  ..........................................................................................................................................
                </v-row>
              </v-col>
            </v-row> -->
          </div>
          <div class="mt-6 mb-12">
            <b>หมายเหตุ : แนบเอกสาร</b>
            <v-col class="pl-16">
              - ใบระเบียบแสดงผลทางการศึกษา (รบ.)
              และเนื้อหารายวิชา/ลักษณะรายวิชาที่ต้องการขอเทียบ/และรายวิชาที่ต้องการเทียบ<br />
              - เอกสารอื่นๆ ตามที่คณะกรรมการร้องขอ
              <br />
            </v-col>
          </div>
          <v-row class="pb-8">
            <v-col cols="3"> </v-col>
            <v-col cols="6" class="text-right">ขอแสดงความนับถือ</v-col>
            <v-col cols="3"> </v-col>
          </v-row>

          <v-row>
            <v-col cols="3"> </v-col>
            <v-col cols="7" class="text-right"
              >ลงชื่อ.........................................................</v-col
            >
            <v-col cols="2"> </v-col>
          </v-row>
          <v-row class="mb-8">
            <v-col cols="3"> </v-col>
            <v-col cols="7" class="text-right"
              >(...................{{
                equivalentCourseByID.created_user.first_name
              }}
              {{
                equivalentCourseByID.created_user.last_name
              }}....................)</v-col
            >
            <v-col cols="2"> </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pr-16">
              ➊.............................................................................................................................................................................................................................................................................อาจารย์ที่ปรึกษา
            </v-col>
            <v-col cols="6" class="pr-16">
              ➋.........................................................................................................................................................................................................................................................หัวหน้าสาขาวิชา/โปรแกรมวิชา
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pr-16">
              ➌ความเห็นคณะกรรมการเทียบโอนฯ อนุญาต
              เห็นควรให้สามารถเทียบโอนผลการเรียนได้
              จำนวน............................รายวิชา....................................หน่วยกิต
              และต้องการศึกษาเพิ่มเติม จำนวน............................หน่วยกิต
              ............................ประธานกรรมการเทียบโอน
            </v-col>
            <v-col cols="6" class="pr-16">
              ➍ความเห็น
              .......................................................................................................................................................................................................................................................................หัวหน้าสำนักงานคณบดี
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pr-16">
              ➎ความเห็น
              ............................................................................................................................................................................................................................................................รองคณบดีฝ่ายวิชาการและวิจัย
            </v-col>
            <v-col cols="6" class="pr-16">
              ➏ความเห็นคณบดี
              ...............................................................................................................................................................................................................................................................................................คณบดี
            </v-col>
          </v-row>
          <!-- <div class="mt-10">
          <v-row>
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16">1. ความเห็นของอาจารย์ที่ปรึกษา</b
                ><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10">
                  <v-row>
                    <v-col class="text-center">
                      (ลงชื่อ) {{ equivalentCourseByID.advisor.first_name }}
                      {{
                        equivalentCourseByID.advisor.last_name
                      }}
                      อาจารย์ที่ปรึกษา<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16">5. ผลการพิจารณาของคณบดี</b><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10 text-center">
                  <v-row>
                    <v-col>
                      (ลงชื่อ) {{ equivalentCourseByID.dean.first_name }}
                      {{ equivalentCourseByID.dean.last_name }} คณบดี<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16">2. ความเห็นของหัวหน้าสาขา</b><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10 text-center">
                  <v-row>
                    <v-col>
                      (ลงชื่อ)
                      {{ equivalentCourseByID.head_department.first_name }}
                      {{
                        equivalentCourseByID.head_department.last_name
                      }}
                      หัวหน้าสาขา<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16"
                  >6. ความเห็นของหัวหน้างานส่งเสริมวิชาการและงานทะเบียน</b
                ><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10 text-center">
                  <v-row>
                    <v-col>
                      (ลงชื่อ)
                      {{ equivalentCourseByID.head_academic_p_r.first_name }}
                      {{
                        equivalentCourseByID.head_academic_p_r.last_name
                      }}
                      หัวหน้างานส่งเสริมฯ<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16">3. ความเห็นของหัวหน้าสำนักงานคณบดี</b
                ><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10 text-center">
                  <v-row>
                    <v-col>
                      (ลงชื่อ)
                      {{ equivalentCourseByID.head_academic_p_r.first_name }}
                      {{
                        equivalentCourseByID.head_academic_p_r.last_name
                      }}
                      หัวหน้าสำนักงานคณบดี<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card>
              <v-card class="pa-3" outlined>
                <b class="pb-16">4. ความเห็นของรองคณบดีฝ่ายวิชาการและวิจัย</b
                ><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10 text-center">
                  <v-row>
                    <v-col>
                      (ลงชื่อ)
                      {{ equivalentCourseByID.deputy_dean_a_r.first_name }}
                      {{
                        equivalentCourseByID.deputy_dean_a_r.last_name
                      }}
                      รองคณบดีฝ่ายวิชาการฯ<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16">7. สำหรับเจ้าหน้าที่แผนกงานทะเบียนและวัดผล</b
                ><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10 text-center">
                  <v-row>
                    <v-col>
                      (ลงชื่อ)
                      {{ equivalentCourseByID.registrar_officer.first_name }}
                      {{
                        equivalentCourseByID.registrar_officer.last_name
                      }}
                      เจ้าหน้าที่งานทะเบียน<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
          </v-row>
        </div> -->
          <!-- <div class="mt-10">
            <table style="width: 100%">
              <tr>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>1. ความเห็นของที่ปรึกษา</p>
                  <p style="padding: 5px">
                    ........................................................................................................................
                  </p>
                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.advisor != null"
                  >
                    <p>
                      (ลงชื่อ) {{ equivalentCourseByID.advisor.first_name }}
                      {{ equivalentCourseByID.advisor.last_name }}
                      อาจารย์ที่ปรึกษา
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div v-else style="text-align: center">
                    <p>
                      (ลงชื่อ)
                      ............................................................
                      อาจารย์ที่ปรึกษา
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>5. ผลการพิจารณาของคณบดี</p>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">
                    ไม่อนุญาติ
                    เนื่องจาก........................................................................................</label
                  ><br />
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> อนุญาติ</label>

                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.dean != null"
                  >
                    <p>
                      (ลงชื่อ) {{ equivalentCourseByID.dean.first_name }}
                      {{ equivalentCourseByID.dean.last_name }} คณบดี
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div style="text-align: center" v-else>
                    <p>
                      (ลงชื่อ)
                      ............................................................
                      คณบดี
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>2. ความเห็นของที่หัวหน้าสาขาวิชา</p>
                  <p style="padding: 5px">
                    ........................................................................................................................
                  </p>
                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.head_department != null"
                  >
                    <p>
                      (ลงชื่อ)
                      {{ equivalentCourseByID.head_department.first_name }}
                      {{ equivalentCourseByID.head_department.last_name }}
                      หัวหน้าสาขาวิชา
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div style="text-align: center" v-else>
                    <p>
                      (ลงชื่อ)
                      ............................................................
                      หัวหน้าสาขาวิชา
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>6. ความเห็นของหัวหน้างานส่งเสริมวิชาการและงานทะเบียน</p>
                  <p style="padding: 5px">
                    ........................................................................................................................
                  </p>
                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.head_academic_p_r != null"
                  >
                    <p>
                      ลงชื่อ
                      {{ equivalentCourseByID.head_academic_p_r.first_name }}
                      {{ equivalentCourseByID.head_academic_p_r.last_name }}
                      หัวหน้างานส่งเสริม
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div style="text-align: center" v-else>
                    <p>
                      ลงชื่อ
                      ............................................................
                      หัวหน้างานส่งเสริม
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>3. ความเห็นของหัวหน้าสำนักงานคณบดี</p>
                  <p style="padding: 5px">
                    -เพื่อโปรดพิจารณา.............................................................................................
                  </p>
                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.head_academic_p_r != null"
                  >
                    <p>
                      ลงชื่อ
                      {{ equivalentCourseByID.head_academic_p_r.first_name }}
                      {{ equivalentCourseByID.head_academic_p_r.last_name }}
                      หัวหน้าสำนักงานคณบดี
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div style="text-align: center" v-else>
                    <p>
                      ลงชื่อ
                      ............................................................
                      หัวหน้าสำนักงานคณบดี
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>7. สำหรับเจ้าหน้าที่แผนงานทะเบียนและวัดผล</p>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> ดำเนินการเรียบร้อย</label><br />
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> รอตรวจสอบ</label><br />
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">
                    อื่นๆ...............................................................................................................</label
                  >
                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.registrar_officer != null"
                  >
                    <p>
                      ลงชื่อ
                      {{ equivalentCourseByID.registrar_officer.first_name }}
                      {{ equivalentCourseByID.registrar_officer.last_name }}
                      เจ้าหน้าที่งานทะเบียน
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div style="text-align: center" v-else>
                    <p>
                      ลงชื่อ
                      ............................................................
                      เจ้าหน้าที่งานทะเบียน
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    width: 50%;
                    padding-left: 10px;
                    border: 1px solid black;
                  "
                >
                  <p>4. ความเห็นของรองคณบดีฝ่ายวิชาการและวิจัย</p>
                  <p style="padding: 5px">
                    -เห็นควร............................................................................................................
                  </p>
                  <div
                    style="text-align: center"
                    v-if="equivalentCourseByID.deputy_dean_a_r != null"
                  >
                    <p>
                      ลงชื่อ
                      {{ equivalentCourseByID.deputy_dean_a_r.first_name }}
                      {{ equivalentCourseByID.deputy_dean_a_r.last_name }}
                      รองคณบดีฝ่ายวิชาการฯ
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                  <div style="text-align: center" v-else>
                    <p>
                      ลงชื่อ
                      ............................................................
                      รองคณบดีฝ่ายวิชาการฯ
                    </p>
                    <p>วันที่.........................................</p>
                  </div>
                </td>
              </tr>
            </table>
          </div> -->
        </v-card>
      </div>
      <div class="ma-4"></div>
      <div ref="contentTwo">
        <v-card width="1250" class="pa-16 pt-14">
          <v-row>
            <v-col cols="1" class="">
              <img
                height="100%"
                width="100%"
                src="~/assets/rmuti-removebg-preview2.png"
              />
            </v-col>
            <v-col cols="4" class="pt-16">
              <p>มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น</p>
            </v-col>
            <v-col cols="4"> </v-col>
            <v-col cols="3" class="pt-16 pr-8 text-right">
              <strong>คคว./ฝวว./01-2/2</strong>
            </v-col>
          </v-row>
          <div class="text-center mb-16 mt-6">
            <u><h2>ราชวิชาที่ขอเทียบโอน</h2></u>
          </div>
          <!-- <div class="pl-16 ml-10 mt-10">
            <b>ขอเทียบโอนรายวิชา</b> ทีเคยเรียนมาแล้วจากสถานศึกษา
            ......................................................................................................
          </div>
          <div class="mt-5">
            ดังเอกสารที่แนบมาพร้อมนี้ จำนวน ........................... ราชวิชา
            จำนวน ........................ หน่วนกิต ดังรายละเอียดด้านล่าง
          </div>
          <div class="pl-16 ml-10 mt-10"><b>ขอเทียบเพื่อเรียนแทน</b></div>
          <div class="pl-16 ml-16 mt-10">
            <b><u>รายวิชาเดิมที่ขอเทียบ</u></b>
            รหัสวิชา............................... ชื่อวิชา
            .......................................................................................
          </div>
          <div class="mt-5">
            หลักสูตร
            ............................................................................
            สาขาวิชา
            ............................................................ ปี
            พ.ศ............................
          </div>
          <div class="pl-16 ml-16 mt-10">
            <b><u>รายวิชาเดิมที่ขอเรียนแทน</u></b>
            รหัสวิชา.................................. ชื่อวิชา
            ..............................................................................
          </div>
          <div class="mt-5">
            หลักสูตร
            .................................................................................
            สาขาวิชา ........................................................ ปี
            พ.ศ............................
          </div>
          <div class="mt-5">ดังรายละเอียดด้านล่าง</div> -->
          <table width="100%">
            <thead class="pa-0">
              <tr>
                <th class="pa-0">ที่</th>

                <th class="pa-0">
                  <strong style="">รายวิชาที่ต้องการเทียบ</strong><br />
                  (ในหลักสูตร)
                  <tr class="pa-0">
                    <th width="30%">รหัสวิชา</th>
                    <th width="40%">ชื่อวิชา</th>
                    <th width="15%">หน่วยกิต</th>
                    <th width="15%">สภาพวิชา</th>
                  </tr>
                </th>
                <th class="pb-6 pl-0 pr-0">
                  <strong> รายวิชาที่ขอเทียบ</strong><br />
                  (สถานศึกษาเดิม)

                  <tr class="pa-0">
                    <th width="30%">รหัสวิชา</th>
                    <th width="40%">ชื่อวิชา</th>
                    <th width="15%">
                      หน่วยกิต
                      <!--  <tr>
                        <th>ท</th>
                        <th>ป</th>
                        <th>ร</th>
                      </tr> -->
                    </th>
                    <th width="15%">เกรด</th>
                  </tr>
                </th>
                <th class="pa-0">
                  ผลการพิจารณา
                  <tr>
                    <th class="pa-0" width="58%">เทียบได้</th>
                    <th width="55%">เทียบไม่ได้</th>
                  </tr>
                </th>
                <!-- <th>ภาคเรียน</th> -->
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(
                  equivalent_item, i
                ) in equivalentCourseByID.equivalent_item"
                :key="i"
              >
                <td>{{ i + 1 }}</td>
                <td class="pa-0">
                  <tr class="pa-0">
                    <td width="40%">
                      {{ equivalent_item.course_enroll.course_code }}
                    </td>
                    <td width="50%">
                      {{ equivalent_item.course_enroll.course_title }}
                    </td>
                    <td class="pa-0 text-center" width="10%">
                      {{ equivalent_item.course_enroll.credit }}
                      <!-- <tr>
                        <td>
                          <span
                            v-if="
                              equivalent_item.course_enroll.credit_type == 'ท'
                            "
                            >{{ equivalent_item.course_enroll.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.course_enroll.credit_type == 'ป'
                            "
                            >{{ equivalent_item.course_enroll.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.course_enroll.credit_type == 'ร'
                            "
                            >{{ equivalent_item.course_enroll.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                      </tr> -->
                    </td>
                    <td class="pa-0 text-center" width="15%">1.3</td>
                  </tr>
                </td>
                <td class="pa-0">
                  <tr class="pa-0" width="100%">
                    <td width="30%">
                      <div v-if="equivalent_item.credit1 < 2.5">
                        <p style="color: red; margin: 0px">
                          {{ equivalent_item.student_course1.course_code }}
                        </p>
                      </div>
                      <div v-else>
                        <p style="margin: 0px">
                          {{ equivalent_item.student_course1.course_code }}
                        </p>
                      </div>
                    </td>
                    <td width="45%">
                      <div v-if="equivalent_item.credit1 < 2.5">
                        <p style="color: red; margin: 0px">
                          {{ equivalent_item.student_course1.course_title }}
                        </p>
                      </div>
                      <div v-else>
                        <p style="margin: 0px">
                          {{ equivalent_item.student_course1.course_title }}
                        </p>
                      </div>
                    </td>
                    <td class="pa-0" width="25%">
                      <div
                        v-if="equivalent_item.credit1 < 2.5"
                        class="text-center"
                      >
                        <span style="color: red; margin: 0px">{{
                          equivalent_item.student_course1.credit
                        }}</span>
                        <!-- <span v-else style="color: red; margin: 0px"
                              >0</span
                            > -->
                      </div>
                      <div v-else>
                        <span style="margin: 0px">{{
                          equivalent_item.student_course1.credit
                        }}</span>
                        <!-- <span v-else style="margin: 0px">0</span> -->
                      </div>
                      <!-- <td>
                          <div v-if="equivalent_item.credit1 < 2.5">
                            <span
                              style="color: red; margin: 0px"
                              v-if="
                                equivalent_item.student_course1.credit_type ==
                                'ป'
                              "
                              >{{
                                equivalent_item.student_course1.credit
                              }}</span
                            >
                            <span v-else style="color: red; margin: 0px"
                              >0</span
                            >
                          </div>
                          <div v-else>
                            <span
                              v-if="
                                equivalent_item.student_course1.credit_type ==
                                'ป'
                              "
                              style="margin: 0px"
                              >{{
                                equivalent_item.student_course1.credit
                              }}</span
                            >
                            <span v-else style="margin: 0px">0</span>
                          </div>
                        </td>
                        <td>
                          <div v-if="equivalent_item.credit1 < 2.5">
                            <span
                              style="color: red; margin: 0px"
                              v-if="
                                equivalent_item.student_course1.credit_type ==
                                'ร'
                              "
                              >{{
                                equivalent_item.student_course1.credit
                              }}</span
                            >
                            <span v-else style="color: red; margin: 0px"
                              >0</span
                            >
                          </div>
                          <div v-else>
                            <span
                              v-if="
                                equivalent_item.student_course1.credit_type ==
                                'ร'
                              "
                              style="margin: 0px"
                              >{{
                                equivalent_item.student_course1.credit
                              }}</span
                            >
                            <span v-else style="margin: 0px">0</span>
                          </div>
                        </td> -->
                    </td>
                    <td width="15%">
                      <tr>
                        <div
                          v-if="equivalent_item.credit1 < 2.5"
                          class="text-center"
                        >
                          <p style="color: red; margin: 0px">
                            {{ equivalent_item.credit1 }}
                          </p>
                        </div>
                        <div v-else class="text-center">
                          <p style="margin: 0px">
                            {{ equivalent_item.credit1 }}
                          </p>
                        </div>
                      </tr>
                    </td>
                  </tr>
                  <tr
                    v-if="equivalent_item.student_course2"
                    class="pa-0"
                    width="100%"
                  >
                    <td width="30%">
                      <div v-if="equivalent_item.credit2 < 2.5">
                        <p style="color: red; margin: 0px">
                          {{ equivalent_item.student_course2.course_code }}
                        </p>
                      </div>
                      <div v-else>
                        <p style="margin: 0px">
                          {{ equivalent_item.student_course2.course_code }}
                        </p>
                      </div>
                    </td>
                    <td width="40%">
                      <div v-if="equivalent_item.credit2 < 2.5">
                        <p style="color: red; margin: 0px">
                          {{ equivalent_item.student_course2.course_title }}
                        </p>
                      </div>
                      <div v-else>
                        <p style="margin: 0px">
                          {{ equivalent_item.student_course2.course_title }}
                        </p>
                      </div>
                    </td>
                    <td class="pa-0" width="15%">
                      <div
                        v-if="equivalent_item.credit2 < 2.5"
                        class="text-center"
                      >
                        <span style="color: red; margin: 0px">{{
                          equivalent_item.student_course2.credit
                        }}</span>
                        <!-- <span v-else style="color: red; margin: 0px"
                              >0</span
                            > -->
                      </div>
                      <div v-else class="text-center">
                        <span style="margin: 0px">{{
                          equivalent_item.student_course2.credit
                        }}</span>
                        <!-- <span v-else style="margin: 0px">0</span> -->
                      </div>
                    </td>
                    <td width="15%">
                      <tr>
                        <div
                          v-if="equivalent_item.credit2 < 2.5"
                          class="text-center"
                        >
                          <p style="color: red; margin: 0px">
                            {{ equivalent_item.credit2 }}
                          </p>
                        </div>
                        <div v-else class="text-center">
                          <p style="margin: 0px">
                            {{ equivalent_item.credit2 }}
                          </p>
                        </div>
                      </tr>
                    </td>
                  </tr>
                  <tr
                    v-if="equivalent_item.student_course3"
                    class="pa-0"
                    width="100%"
                  >
                    <td width="30%">
                      <div v-if="equivalent_item.credit3 < 2.5">
                        <p style="color: red; margin: 0px">
                          {{ equivalent_item.student_course3.course_code }}
                        </p>
                      </div>
                      <div v-else style="margin: 0px">
                        <p>
                          {{ equivalent_item.student_course3.course_code }}
                        </p>
                      </div>
                    </td>
                    <td width="40%">
                      <div v-if="equivalent_item.credit3 < 2.5">
                        <p style="color: red; margin: 0px">
                          {{ equivalent_item.student_course3.course_title }}
                        </p>
                      </div>
                      <div v-else>
                        <p style="margin: 0px">
                          {{ equivalent_item.student_course3.course_title }}
                        </p>
                      </div>
                    </td>
                    <td class="pa-0" width="25%">
                      <div
                        v-if="equivalent_item.credit3 < 2.5"
                        class="text-center"
                      >
                        <span style="color: red; margin: 0px">{{
                          equivalent_item.student_course3.credit
                        }}</span>
                        <!-- <span v-else style="color: red; margin: 0px"
                              >0</span
                            > -->
                      </div>
                      <div v-else class="text-center">
                        <span style="margin: 0px">{{
                          equivalent_item.student_course3.credit
                        }}</span>
                        <!-- <span v-else style="margin: 0px">0</span> -->
                      </div>
                    </td>
                    <td width="15%">
                      <tr>
                        <div
                          v-if="equivalent_item.credit3 < 2.5"
                          class="text-center"
                        >
                          <p style="color: red; margin: 0px">
                            {{ equivalent_item.credit3 }}
                          </p>
                        </div>
                        <div v-else>
                          <p style="margin: 0px">
                            {{ equivalent_item.credit3 }}
                          </p>
                        </div>
                      </tr>
                    </td>
                  </tr>

                  <tr v-if="equivalent_item.student_course4">
                    <td width="35%">
                      {{ equivalent_item.student_course4.course_code }}
                    </td>
                    <td width="20%">
                      {{ equivalent_item.student_course4.course_title }}
                    </td>
                    <td class="pa-0">
                      <tr>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course4.credit_type == 'ท'
                            "
                            >{{ equivalent_item.student_course4.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course4.credit_type == 'ป'
                            "
                            >{{ equivalent_item.student_course4.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course4.credit_type == 'ร'
                            "
                            >{{ equivalent_item.student_course4.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                      </tr>
                    </td>
                    <td width="10%">
                      <tr>
                        {{
                          equivalent_item.credit4
                        }}
                      </tr>
                    </td>
                  </tr>
                  <tr v-if="equivalent_item.student_course5">
                    <td width="35%">
                      {{ equivalent_item.student_course5.course_code }}
                    </td>
                    <td width="35%">
                      {{ equivalent_item.student_course5.course_title }}
                    </td>
                    <td class="pa-0" width="20%">
                      <tr>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course5.credit_type == 'ท'
                            "
                            >{{ equivalent_item.student_course5.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course5.credit_type == 'ป'
                            "
                            >{{ equivalent_item.student_course5.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course5.credit_type == 'ร'
                            "
                            >{{ equivalent_item.student_course5.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                      </tr>
                    </td>
                    <td width="10%">
                      <tr>
                        {{
                          equivalent_item.credit5
                        }}
                      </tr>
                    </td>
                  </tr>
                  <tr v-if="equivalent_item.student_course6">
                    <td width="35%">
                      {{ equivalent_item.student_course6.course_code }}
                    </td>
                    <td width="35%">
                      {{ equivalent_item.student_course6.course_title }}
                    </td>
                    <td class="pa-0" width="20%">
                      <tr>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course6.credit_type == 'ท'
                            "
                            >{{ equivalent_item.student_course6.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course6.credit_type == 'ป'
                            "
                            >{{ equivalent_item.student_course6.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                        <td>
                          <span
                            v-if="
                              equivalent_item.student_course6.credit_type == 'ร'
                            "
                            >{{ equivalent_item.student_course6.credit }}</span
                          >
                          <span v-else>0</span>
                        </td>
                      </tr>
                    </td>
                    <td width="10%">
                      <tr>
                        {{
                          equivalent_item.credit6
                        }}
                      </tr>
                    </td>
                  </tr>
                </td>
                <td>
                  <tr></tr>
                </td>
                <!-- <td>
                  <tr></tr>
                </td> -->
              </tr>
              <tr>
                <td></td>
                <td class="pa-0">
                  <tr class="pa-0" width="100%">
                    <td width="91%" class="text-center">
                      <strong>รวม</strong>
                    </td>

                    <td width="15%" class="text-center">{{ plus }}</td>

                    <td width="15%">-</td>
                  </tr>
                </td>
                <td class="pa-0">
                  <tr class="pa-0" width="100%">
                    <td width="75%" class="text-center">
                      <strong>รวม</strong>
                    </td>

                    <td width="28%" class="text-center">-</td>

                    <td width="15%">-</td>
                  </tr>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div class="text-center mt-16">
            <u><h3>คณะกรรมการพิจารณา</h3></u>
          </div>
          <div class="mt-10">
            <v-row class="pr-16 pl-16">
              <v-col cols="6" sm="6" class="pr-0 pb-0">
                <v-sheet class="pa-6" outlined>
                  1.
                  ....................................................................................

                  <br /><br />
                  <v-col
                    class="pa-0 text-center"
                    v-if="equivalentCourseByID.name_committee1 != null"
                  >
                    (......{{ equivalentCourseByID.name_committee1.first_name }}
                    {{ equivalentCourseByID.name_committee1.last_name }}......)
                  </v-col>
                  <v-col class="pa-0 text-center" v-else>
                    (......................................................................................)
                  </v-col>
                </v-sheet>
              </v-col>
              <v-col cols="6" sm="6" class="pl-0 pb-0">
                <v-sheet class="pa-6" outlined>
                  2.
                  ....................................................................................

                  <br /><br />
                  <v-col
                    class="pa-0 text-center"
                    v-if="equivalentCourseByID.name_committee2 != null"
                  >
                    (......{{ equivalentCourseByID.name_committee2.first_name }}
                    {{ equivalentCourseByID.name_committee2.last_name }}......)
                  </v-col>
                  <v-col class="pa-0 text-center" v-else>
                    (......................................................................................)
                  </v-col>
                </v-sheet>
              </v-col>
              <v-col cols="6" sm="6" class="pr-0 pt-0 pb-0">
                <v-sheet class="pa-6" outlined>
                  3.
                  ....................................................................................
                  <br /><br />
                  <v-col
                    class="pa-0 text-center"
                    v-if="equivalentCourseByID.name_committee3 != null"
                  >
                    (......{{ equivalentCourseByID.name_committee3.first_name }}
                    {{ equivalentCourseByID.name_committee3.last_name }} ......)
                  </v-col>
                  <v-col class="pa-0 text-center" v-else>
                                        (......................................................................................)

                  </v-col>
                </v-sheet>
              </v-col>
              <v-col cols="6" sm="6" class="pl-0 pt-0 pb-0">
                <v-sheet class="pa-6" outlined>
                  4.
                  ....................................................................................
                  <br /><br />
                  <v-col
                    class="pa-0 text-center"
                    v-if="equivalentCourseByID.name_committee4 != null"
                  >
                    (......{{ equivalentCourseByID.name_committee4.first_name }}
                    {{ equivalentCourseByID.name_committee4.last_name }}......)
                  </v-col>
                  <v-col class="pa-0 text-center" v-else>
                    (......................................................................................)
                  </v-col>
                </v-sheet>
              </v-col>
              <v-col cols="6" sm="6" class="pr-0 pt-0">
                <v-sheet class="pa-6" outlined>
                  5.
                  ....................................................................................
                  <br /><br />
                  <v-col
                    class="pa-0 text-center"
                    v-if="equivalentCourseByID.name_committee5 != null"
                  >
                    (......{{ equivalentCourseByID.name_committee5.first_name }}
                    {{ equivalentCourseByID.name_committee5.last_name }}......)
                  </v-col>
                  <v-col class="pa-0 text-center" v-else>
                                        (......................................................................................)

                  </v-col>
                </v-sheet>
              </v-col>
              <v-col cols="6" sm="6" class="pl-0 pt-0 pb-0">
                <v-sheet class="pa-6" outlined>
                  6.
                  ....................................................................................
                  <br /><br />
                  <v-col
                    class="pa-0 text-center"
                    v-if="equivalentCourseByID.name_committee6 != null"
                  >
                    (......{{ equivalentCourseByID.name_committee6.first_name }}
                    {{ equivalentCourseByID.name_committee6.last_name }} ......)
                  </v-col>
                  <v-col class="pa-0 text-center" v-else>
                    (......................................................................................)
                  </v-col>
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
    </v-row>
    <v-col class="text-center">
      <v-btn @click="makePDF">Download Transfer</v-btn>
    </v-col>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import pdfFonts from "~/assets/custom-fonts.js";
import pdfMake from "pdfmake";
// import "~/assets/Roboto-Bold-normal.js";
// import "Sarabun-Bold-normal.js";
// import { jsPDF } from "jspdf";

export default {
  name: "app",
  data: () => ({
    dialog: false,
    search: "",
    selected: "ขอเทียบโอนรายวิชา",
    pdfOption: {
      orientation: "p",
      format: "a4",
      unit: "px",
      lineHeight: 2,
      putOnlyUsedFonts: true,
    },
    pdfConfig: {
      typo: {
        header: 25,
        large: 20,
        normal: 18,
        small: 14,
      },
      margin: {
        t: 20,
        b: 20,
        l: 20,
        r: 20,
      },
    },
    headers: [
      {
        text: "TF0001",
        align: "start",
        sortable: false,
        value: "serail_subject",
      },
      { text: "TF0002", value: "subject_name", sortable: false },
      { text: "TF0003", value: "description", sortable: false },
      { text: "TF0004", value: "grade", sortable: false },
      { text: "TF0005", value: "credit", sortable: false },
      { text: "TF0006", value: "univercity", sortable: false },
      { text: "TF0007", value: "actions", sortable: false },
    ],
    // teacher: [
    //   { name: "nontawat", id: 1 },
    //   { name: "thawat", id: 2 },
    //   { name: "worachet", id: 3 },
    //   { name: "piyawat", id: 4 },
    //   { name: "chalermchai", id: 5 },
    //   { name: "anantachai", id: 6 },
    //   { name: "weerawat", id: 7 },
    // ],
    approvOne: "",
    approvTwo: "",
    approvThree: "",
    approvFour: "",
    approvFive: "",
    approvSix: "",
    registrar_officer: "",
    head_academic_p_r: "",
    dean: "",
    deputy_dean_a_r: "",
    head_educational: "",
    head_department: "",
    advisor: "",
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    equivalentCourseByID: {
      get() {
        if (this.$store.state.transfer.equivalentCourse) {
          return this.$store.state.transfer.equivalentCourseByID;
        } else {
          return null;
        }
      },
      set() {},
    },
    plus() {
      let find = 0;
      this.equivalentCourseByID.equivalent_item.forEach((listAll) => {
        // find.push({
        //   status: "รอตรวจสอบ",
        //   semester: 1,
        //   student_course1: listAll.nameSubjectTransfer,
        //   student_course2: listAll.nameSubjectTransfer2,
        //   student_course3: listAll.nameSubjectTransfer3,
        //   course_enroll: listAll.nameSubject,
        //   credit1: listAll.gradeOne,
        //   credit2: listAll.gradeTwo,
        //   credit3: listAll.gradeThere,
        // });
        find += listAll.course_enroll.credit;
      });
      return find;
    },

    count: {
      get() {
        if (this.$store.state.transfer.equivalentCourse) {
          return this.$store.state.transfer.equivalentCourse.count;
        } else {
          return null;
        }
      },
      set() {},
    },
    teacher: {
      get() {
        if (this.$store.state.users.teacher) {
          return this.$store.state.users.teacher.results;
        } else {
          return null;
        }
      },
      set() {},
    },
    schoolCourse: {
      get() {
        if (this.$store.state.subject.schoolCourse) {
          return this.$store.state.subject.schoolCourse.results;
        } else {
          return null;
        }
      },
      set() {},
    },
    userLogin: {
      get() {
        if (this.$store.state.users.userLogin) {
          return this.$store.state.users.userLogin.user;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  mounted() {
    this.getEquivalentCourseByID();
    this.getTeacher();
    this.getSchoolCourse();
  },
  methods: {
    ...mapActions({
      getEquivalentCourseByID: "transfer/getEquivalentCourseByID",
      getTeacher: "users/getTeacher",
      getSchoolCourse: "subject/getSchoolCourse",
    }),

    makePDF() {
      window.html2canvas = html2canvas;
      const doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4",
        hotfixes: ["px_scaling"],
      });
      let margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522,
      };
      doc.setFont("Sarabun-Bold", "normal");

      // doc.html(document.querySelector("#app"), {
      //   callback: function (pdf) {
      //     pdf.save("ใบเทียบโอน.pdf");
      //   },
      // });
      // doc.fromHTML(this.$refs.testHtml, margins.left, margins.top, {
      //   width: margins.width,
      // });
      //doc.save(Date.now() + ".pdf");

      html2canvas(this.$refs.content, {
        width: 1270,
        height: 1500,
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");

        doc.addImage(
          img,
          "PNG",
          20,
          2,
          doc.internal.pageSize.getWidth(),
          doc.internal.pageSize.getHeight()
        );


        doc.save("ใบคำขอเทียบโอน_1_" + Date.now() + ".pdf");
      });

      html2canvas(this.$refs.contentTwo, {
        width: 1270,
        height: 1550,
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");

        doc.addImage(
          img,
          "PNG",
          20,
          2,
          doc.internal.pageSize.getWidth(),
          doc.internal.pageSize.getHeight()
        );

        doc.save("ใบคำขอเทียบโอน_2_ " + Date.now() + ".pdf");
      });
    },
    makePDF2() {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.fonts = {
        // download default Roboto font from cdnjs.com
        Roboto: {
          normal:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
          bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
          italics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
          bolditalics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
        },
        // Kanit Font
        Sarabun: {
          normal: "Sarabun-Medium.ttf",
          bold: "Sarabun-Boil.ttf",
          italics: "Sarabun-Italic.ttf",
          bolditalics: "Sarabun-BoilItalic.ttf",
        },
      };
      const docDefinition = {
        pageOrientation: "app",

        content: [pdfMake.html(document.querySelector("#app"))],
        defaultStyle: {
          font: "Sarabun",
        },
      };
      pdfMake.createPdf(docDefinition).open({}, window);
    },
    printPDF() {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.fonts = {
        // download default Roboto font from cdnjs.com
        Roboto: {
          normal:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
          bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
          italics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
          bolditalics:
            "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
        },
        // Kanit Font
        Sarabun: {
          normal: "Sarabun-Medium.ttf",
          bold: "Sarabun-Boil.ttf",
          italics: "Sarabun-Italic.ttf",
          bolditalics: "Sarabun-BoilItalic.ttf",
        },
      };
      const docDefinition = {
        content: [],
        defaultStyle: {
          font: "Sarabun",
        },
      };
      pdfMake.createPdf(docDefinition).open({}, window);
    },
    generatePdf() {
      try {
        let pdf = new jsPDF(this.pdfOption);
        const pdf_width = pdf.internal.pageSize.width;
        const pdf_height = pdf.internal.pageSize.height;
        const margin_l = this.pdfConfig.margin.l;
        let pdf_position_y = 0;
        pdf.setFont("Roboto-Bold", "normal"); //set font family
        pdf.setFontSize(this.pdfConfig.typo.header); //set font size
        pdf.setTextColor("#005D8E"); //set font color with hex color code
        pdf_position_y += 40;
        pdf.text(
          "ทดสอบการสร้าง pdf โดย jsPdf",
          pdf_width / 2,
          pdf_position_y,
          null,
          null,
          "center"
        ); //add text to pdf
        pdf_position_y += this.pdfConfig.typo.header;

        pdf.setFontSize(this.pdfConfig.typo.large);
        pdf.text(
          "ทดสอบการสร้าง pdf โดย jsPdf",
          pdf_width / 2,
          pdf_position_y,
          null,
          null,
          "center"
        );
        pdf_position_y += this.pdfConfig.typo.large;

        pdf.setFontSize(this.pdfConfig.typo.normal);
        pdf.text(
          "ทดสอบการสร้าง pdf โดย jsPdf",
          pdf_width / 2,
          pdf_position_y,
          null,
          null,
          "center"
        );
        pdf_position_y += this.pdfConfig.typo.normal;

        pdf.setFont("Sarabun-Bold", "normal");
        pdf.setTextColor("#025955");
        pdf.text(
          "ทดสอบการสร้าง pdf โดย jsPdf",
          pdf_width / 2,
          pdf_position_y,
          null,
          null,
          "center"
        );
        pdf_position_y += this.pdfConfig.typo.normal;

        pdf.setTextColor("red"); //set font color with name
        pdf.setFontSize(this.pdfConfig.typo.small);
        pdf.text(
          "ทดสอบการสร้าง pdf โดย jsPdf",
          pdf_width / 2,
          pdf_position_y,
          null,
          null,
          "center"
        );
        pdf_position_y += this.pdfConfig.typo.small;
        //new page
        pdf.addPage(); //new pdf page
        pdf_position_y = 0;
        pdf.setFont("Sarabun-Bold", "normal");
        pdf.setFontSize(this.pdfConfig.typo.header);
        pdf.setTextColor("#025955");
        pdf_position_y += 40;
        pdf.text(
          "ทดสอบการสร้าง pdf โดย jsPdf",
          pdf_width / 2,
          pdf_position_y,
          null,
          null,
          "center"
        );
        setTimeout(() => {
          pdf.setFont("Sarabun-Bold", "normal");
          pdf.setFontSize(this.pdfConfig.typo.small);
          pdf.setTextColor("#000");
          const textDate = new Date().toString();

          const pages = pdf.internal.getNumberOfPages();
          //add footer page
          for (let j = 1; j < pages + 1; j++) {
            pdf.setPage(j);
            pdf.text(
              `วันเวลา : ${textDate}`,
              margin_l,
              pdf_height - 15,
              null,
              null,
              "left"
            );
            pdf.text(
              `หน้า ${j} จาก ${pages}`,
              pdf_width - margin_l,
              pdf_height - 15,
              null,
              null,
              "right"
            );
          }
          //download pdf file
          pdf.save(Date.now() + ".pdf");
        }, 0);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
caption {
  padding: 10px;
  caption-side: bottom;
}
#app {
  font-family: "Sarabun", sans-serif;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  // letter-spacing: 1px;
  // font-family: sans-serif;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}

td {
  // text-align: center;
}
</style>
