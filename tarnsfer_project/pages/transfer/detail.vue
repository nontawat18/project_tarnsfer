<template>
  <div id="app">
    <v-row class="mt-5 mb-10" justify="center">
      <v-card width="1250" class="pa-16 pt-14">
        <div class="text-center">
          <u><h3>คำร้องขอเทียบโอนรายวิชา / ขอเทียบเพื่อเรียนแทน</h3></u>
        </div>
        <div class="mt-15">
          <v-row>
            <v-col></v-col>
            <v-col>
              <p>
                วันที่ ................. เดือน
                ............................................. พ.ศ.
                .....................................
              </p></v-col
            >
          </v-row>
        </div>
        <div class="mt-5">
          เรื่อง {{ equivalentCourseByID.equivalent_type }}
        </div>

        <div class="mt-10">
          เรียน คณบดี {{ equivalentCourseByID.dean.first_name }}
          {{ equivalentCourseByID.dean.last_name }}
        </div>
        <div class="pl-16 ml-10 mt-10">
          ข้าพเจ้า {{ userLogin.first_name }} {{ userLogin.last_name }}
          <!-- {{ equivalentCourseByID }} -->

          รหัสนักศึกษา
          ..........................................................
        </div>
        <div class="mt-4">
          นักศึกษาระดับ .................................... คณะ
          ............................................. สาขาวิชา
          ...............................................
        </div>
        <div class="mt-4">
          เบอร์โทรศัพท์..................................................
          มีความประสงค์จะขอเทียบโอนรายวิชาที่ได้ศึกษามาแล้ว
          <b>เนื่องจาก (ระบุเหตุผลประกอบ):</b>
          <v-row class="mt-1">
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
                ................................................................................................................................................................................
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="mt-2">
          <v-row>
            <v-col cols="2"
              ><b><u>หลักฐานที่ต้องแนบ</u></b></v-col
            >
            <v-col>
              1. ใบแสดงผลการเรียน แสดงรายวิชาที่ประสงค์จะขอเรียน <br />2.
              คำอธิบายรายวิชาที่ประสงค์จะขอเทียบโอน
              (เฉพาะนักศึกษาที่เคยศึกษาจากมหาวิทยาลัย / สถาบันอื่น) <br />3.
              คำอธิบายราชวิชาที่ประสงค์จะขอเทียบเพื่อเรียน
              (กรณีเป็นการขอเทียบรายวิชาต่างคณะ)</v-col
            >
          </v-row>
        </div>
        <div class="pl-16 ml-10 mt-10">จึงเรียนมาเพื่อโปรดพิจารณา</div>
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
        <div class="mt-10">
          <table style="width: 100%">
            <tr>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
              >
                <p>1. ความเห็นของที่ปรึกษา</p>
                <p style="padding: 5px">
                  ..................................................................................................................................................
                </p>
                <div style="text-align: center">
                  <p>
                    (ลงชื่อ) {{ equivalentCourseByID.advisor.first_name }}
                    {{ equivalentCourseByID.advisor.last_name }}
                    อาจารย์ที่ปรึกษา
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
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
                  เนื่องจาก.............................................................................................</label
                ><br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> อนุญาติ</label>

                <div style="text-align: center">
                  <p>
                    (ลงชื่อ) {{ equivalentCourseByID.dean.first_name }}
                    {{ equivalentCourseByID.dean.last_name }} คณบดี
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
              >
                <p>2. ความเห็นของที่หัวหน้าสาขาวิชา</p>
                <p style="padding: 5px">
                  ..................................................................................................................................................
                </p>
                <div style="text-align: center">
                  <p>
                    (ลงชื่อ)
                    {{ equivalentCourseByID.head_department.first_name }}
                    {{ equivalentCourseByID.head_department.last_name }}
                    หัวหน้าสาขาวิชา
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
              >
                <p>6. ความเห็นของหัวหน้างานส่งเสริมวิชาการและงานทะเบียน</p>
                <p style="padding: 5px">
                  ..................................................................................................................................................
                </p>
                <div style="text-align: center">
                  <p>
                    ลงชื่อ
                    {{ equivalentCourseByID.head_academic_p_r.first_name }}
                    {{ equivalentCourseByID.head_academic_p_r.last_name }}
                    หัวหน้างานส่งเสริม
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
              >
                <p>3. ความเห็นของหัวหน้าสำนักงานคณบดี</p>
                <p style="padding: 5px">
                  -เพื่อโปรดพิจารณา......................................................................................................
                </p>
                <div style="text-align: center">
                  <p>
                    ลงชื่อ
                    {{ equivalentCourseByID.head_academic_p_r.first_name }}
                    {{ equivalentCourseByID.head_academic_p_r.last_name }}
                    หัวหน้าสำนักงานคณบดี
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
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
                  อื่นๆ....................................................................................................................................</label
                >
                <div style="text-align: center">
                  <p>
                    ลงชื่อ
                    {{ equivalentCourseByID.registrar_officer.first_name }}
                    {{ equivalentCourseByID.registrar_officer.last_name }}
                    เจ้าหน้าที่งานทะเบียน
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style="width: 50%; padding-left: 10px; border: 1px solid black"
              >
                <p>4. ความเห็นของรองคณบดีฝ่ายวิชาการและวิจัย</p>
                <p style="padding: 5px">
                  -เห็นควร..............................................................................................................................
                </p>
                <div style="text-align: center">
                  <p>
                    ลงชื่อ
                    {{ equivalentCourseByID.deputy_dean_a_r.first_name }}
                    {{ equivalentCourseByID.deputy_dean_a_r.last_name }}
                    รองคณบดีฝ่ายวิชาการฯ
                  </p>
                  <p>วันที่.........................................</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </v-card>
      <div class="ma-4"></div>
      <v-card width="1250" class="pa-16 pt-14">
        <div class="text-center mt-16">
          <u><h3>ราชวิชาที่เทียบโอน/ขอเทียบเพื่อเรียนแทน</h3></u>
        </div>
        <div class="pl-16 ml-10 mt-10">
          <b>ขอเทียบโอนรายวิชา</b> ทีเคยเรียนมาแล้วจากสถานศึกษา
          .............................................................................................................................................
        </div>
        <div class="mt-5">
          ดังเอกสารที่แนบมาพร้อมนี้ จำนวน ........................... ราชวิชา
          จำนวน ........................ หน่วนกิต ดังรายละเอียดด้านล่าง
        </div>
        <div class="pl-16 ml-10 mt-10"><b>ขอเทียบเพื่อเรียนแทน</b></div>
        <div class="pl-16 ml-16 mt-10">
          <b><u>รายวิชาเดิมที่ขอเทียบ</u></b>
          รหัสวิชา............................... ชื่อวิชา
          .............................................................................................................................................
        </div>
        <div class="mt-5">
          หลักสูตร
          ..............................................................................................................
          สาขาวิชา
          ..............................................................................................
          ปี พ.ศ............................
        </div>
        <div class="pl-16 ml-16 mt-10">
          <b><u>รายวิชาเดิมที่ขอเรียนแทน</u></b>
          รหัสวิชา............................... ชื่อวิชา
          .............................................................................................................................................
        </div>
        <div class="mt-5">
          หลักสูตร
          ..............................................................................................................
          สาขาวิชา
          ..............................................................................................
          ปี พ.ศ............................
        </div>
        <div class="mt-5">ดังรายละเอียดด้านล่าง</div>
        <table width="100%">
          <thead class="pa-0">
            <tr>
              <th class="pa-0">ที่</th>

              <th class="pa-0">
                รายวิชาที่ขอเทียบ/โอน (วิชาเก่า)
                <tr class="pa-0">
                  <th class="pa-0" width="40%">รหัสวิชา</th>
                  <th class="pa-0" width="40%">ชื่อวิชา</th>
                  <th class="pa-0" width="20%">
                    หน่วนกิต
                    <tr class="pa-0">
                      <th>ท</th>
                      <th>ป</th>
                      <th>ร</th>
                    </tr>
                  </th>
                </tr>
              </th>
              <th class="pa-0">
                รายวิชาที่ต้องการเทียบ/โอน (ใหม่)
                <tr>
                  <th width="40%">รหัสวิชา</th>
                  <th width="40%">ชื่อวิชา</th>
                  <th class="pa-0" width="20%">
                    หน่วนกิต
                    <tr>
                      <th>ท</th>
                      <th>ป</th>
                      <th>ร</th>
                    </tr>
                  </th>
                  <th width="40%">เกรด</th>
                </tr>
              </th>
              <th class="pa-0">
                ผลการพิจารณา
                <tr>
                  <th class="pa-0" width="50%">เทียบได้</th>
                  <th width="50%">เทียบไม่ได้</th>
                </tr>
              </th>
              <th>ภาคเรียน</th>
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
                  <td width="50%">
                    {{ equivalent_item.course_enroll.course_code }}
                  </td>
                  <td width="50%">
                    {{ equivalent_item.course_enroll.course_title }}
                  </td>
                  <td class="pa-0">
                    <tr>
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
                    </tr>
                  </td>
                </tr>
              </td>
              <td class="pa-0">
                <tr>
                  <td width="40%">
                    {{ equivalent_item.student_course1.course_code }}
                  </td>
                  <td width="40%">
                    {{ equivalent_item.student_course1.course_title }}
                  </td>
                  <td class="pa-0">
                    <tr>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course1.credit_type == 'ท'
                          "
                          >{{ equivalent_item.student_course1.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course1.credit_type == 'ป'
                          "
                          >{{ equivalent_item.student_course1.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course1.credit_type == 'ร'
                          "
                          >{{ equivalent_item.student_course1.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      3
                    </tr>
                  </td>
                </tr>
                <tr v-if="equivalent_item.student_course2">
                  <td width="50%">
                    {{ equivalent_item.student_course2.course_code }}
                  </td>
                  <td width="50%">
                    {{ equivalent_item.student_course2.course_title }}
                  </td>
                  <td class="pa-0">
                    <tr>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course2.credit_type == 'ท'
                          "
                          >{{ equivalent_item.student_course2.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course2.credit_type == 'ป'
                          "
                          >{{ equivalent_item.student_course2.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course2.credit_type == 'ร'
                          "
                          >{{ equivalent_item.student_course2.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      3
                    </tr>
                  </td>
                </tr>
                <tr v-if="equivalent_item.student_course3">
                  <td width="50%">
                    {{ equivalent_item.student_course3.course_code }}
                  </td>
                  <td width="50%">
                    {{ equivalent_item.student_course3.course_title }}
                  </td>
                  <td class="pa-0">
                    <tr>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course3.credit_type == 'ท'
                          "
                          >{{ equivalent_item.student_course3.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course3.credit_type == 'ป'
                          "
                          >{{ equivalent_item.student_course3.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                      <td>
                        <span
                          v-if="
                            equivalent_item.student_course3.credit_type == 'ร'
                          "
                          >{{ equivalent_item.student_course3.credit }}</span
                        >
                        <span v-else>0</span>
                      </td>
                    </tr>
                  </td>
                  <td>
                    <tr>
                      3
                    </tr>
                  </td>
                </tr>
                <tr v-if="equivalent_item.student_course4">
                  <td width="50%">
                    {{ equivalent_item.student_course4.course_code }}
                  </td>
                  <td width="50%">
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
                  <td>
                    <tr>
                      3
                    </tr>
                  </td>
                </tr>
                <tr v-if="equivalent_item.student_course5">
                  <td width="50%">
                    {{ equivalent_item.student_course5.course_code }}
                  </td>
                  <td width="50%">
                    {{ equivalent_item.student_course5.course_title }}
                  </td>
                  <td class="pa-0">
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
                  <td>
                    <tr>
                      3
                    </tr>
                  </td>
                </tr>
                <tr v-if="equivalent_item.student_course6">
                  <td width="50%">
                    {{ equivalent_item.student_course6.course_code }}
                  </td>
                  <td width="50%">
                    {{ equivalent_item.student_course6.course_title }}
                  </td>
                  <td class="pa-0">
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
                  <td>
                    <tr>
                      3
                    </tr>
                  </td>
                </tr>
              </td>
              <td>
                <tr></tr>
              </td>
              <td>
                <tr></tr>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center mt-16">
          <u><h3>ผลการพิจารณาของกรรมการเทียบโอน</h3></u>
        </div>
        <div class="mt-10">
          <v-row>
            <v-col>
              (ลงชื่อ)...............................................................................คณะกรรมการฯ
              1 <br /><br />
              (............................................................................................................)
            </v-col>
            <v-col>
              (ลงชื่อ)...............................................................................คณะกรรมการฯ
              2 <br /><br />
              (............................................................................................................)
            </v-col>
            <v-col>
              (ลงชื่อ)...............................................................................คณะกรรมการฯ
              3 <br /><br />
              (............................................................................................................)
            </v-col>
            <v-col>
              (ลงชื่อ)...............................................................................คณะกรรมการฯ
              4 <br /><br />
              (............................................................................................................)
            </v-col>
            <v-col>
              (ลงชื่อ)...............................................................................คณะกรรมการฯ
              5 <br /><br />
              (............................................................................................................)
            </v-col>
            <v-col>
              (ลงชื่อ)...............................................................................คณะกรรมการฯ
              6 <br /><br />
              (............................................................................................................)
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-row>
    <v-btn @click="docDefinition">Download</v-btn>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import pdfFonts from "~/assets/custom-fonts.js";
import pdfMake from "pdfmake";

export default {
  data: () => ({
    dialog: false,
    search: "",
    selected: "ขอเทียบโอนรายวิชา",
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
      var doc = new jsPDF("p", "pt", "a4");
      doc.addFont("supermarket.ttf", "supermarket", "normal");
      doc.setFont("supermarket");
      doc.html(document.querySelector("#app"), {
        callback: function (pdf) {
          pdf.save("ใบเทียบโอน.pdf");
        },
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
  },
};
</script>
<style lang="scss" scoped>
caption {
  padding: 10px;
  caption-side: bottom;
}
#app {
  font-family: "Prompt", sans-serif;
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
  text-align: center;
}
</style>
