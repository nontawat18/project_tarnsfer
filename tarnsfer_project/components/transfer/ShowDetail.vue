<template>
  <div>
    <div v-if="equivalentCourseByID.status != 'ตรวจสอบสำเร็จ'">
      <v-col class="pt-0">
        <div class="pt-0">
          <v-data-table
            :headers="headers"
            :items="equivalentCourseByID.equivalent_item"
            class="elevation-2"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>สรุปการเทียบโอน</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>

                <v-spacer></v-spacer>
              </v-toolbar>
            </template>
            <template v-slot:[`item.nameSubject`]="{ item }">
              <p>{{ item }}</p>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <div v-if="userRole == 'teacher'">
                <v-icon small color="primary" @click="deleteItem(item)">
                  mdi-pencil
                </v-icon>
              </div>
              <div v-else>
                <v-icon small color="grey" disabled @click="deleteItem(item)">
                  mdi-pencil
                </v-icon>
              </div>
            </template>
          </v-data-table>
        </div>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-col cols="12" sm="12" md="12">
              <v-select
                v-model="statusApprove"
                label="สถานะ"
                :items="type"
                item-text="name"
                item-value="name"
                outlined
                dense
              ></v-select>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" text @click="closeDelete">ยกเลิก</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >ตกลง</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-row class="pa-4">
          <v-col
            class="text-center"
            cols="12"
            sm="6"
            v-if="userRole == 'teacher'"
          >
            <v-btn @click="ApproveTransfer" color="green"
              >Approve Transfer</v-btn
            >
          </v-col>
          <v-col
            class="text-center"
            cols="12"
            sm="6"
            v-if="userRole == 'teacher'"
          >
            <v-btn @click="CancelTransfer" color="red">Cancel Transfer</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </div>
    <div v-if="equivalentCourseByID.status == 'ตรวจสอบสำเร็จ'">
      <v-row class="mt-5 mb-10" justify="center" id="app">
        <div ref="content" style="background-color: white">
          <v-card width="1270" class="pa-16 pt-14">
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
                    วันที่ ................. เดือน
                    ............................... พ.ศ.
                    ............................
                  </p></v-col
                >
              </v-row>
            </div>
            <div class="mt-5">
              เรื่อง {{ equivalentCourseByID.equivalent_type }}
            </div>

            <div class="mt-10">เรียน คณบดีคณะวิศวกรรมศาสตร์</div>
            <div class="pl-16 ml-10 mt-10">
              ข้าพเจ้า .........................
              {{ equivalentCourseByID.created_user.title }}
              {{ equivalentCourseByID.created_user.first_name }}
              {{
                equivalentCourseByID.created_user.last_name
              }}........................... รหัสนักศึกษา
              ........................{{
                this.profile.student_id
              }}............................
            </div>
            <div class="mt-4 pl-3">
              <v-row>
                สาขาวิชา ...........{{
                  this.profile.field_of_study
                }}............ ชั้นปี .........{{
                  this.profile.class_level
                }}........... รอบ
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
                สมทบ หมายเลขโทรศัพท์.........{{ this.profile.tel }}............
              </v-row>
            </div>
            <div class="mt-4">
              คณะ....................{{
                this.profile.faculty
              }}.......................................
              มีความประสงค์จะขอเทียบโอนผลการเรียนที่เคยศึกษามาแล้วจากสถานศึกษา
              <v-row class="pl-3 pt-7">
                <p>
                  ...................{{
                    this.profile.studied_from
                  }}.................... ในระดับ
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
                <!-- จำนวน...{{ equivalentCourseByID.equivalent_item.length }}...วิชา
                ทั้งหมด...{{ plus }}...หน่วยกิจ -->
                อื่นๆ................................โดยมีรายละเอียดดังนี้
              </v-row>
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
                >(...................
                {{ equivalentCourseByID.created_user.title }}
                {{ equivalentCourseByID.created_user.first_name }}
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
                เห็นควรให้สามารถเทียบโอนผลการเรียนได้ จำนวน..............{{
                  equivalentCourseByID.equivalent_item.length
                }}............รายวิชา...................{{
                  plus
                }}...............หน่วยกิต และต้องการศึกษาเพิ่มเติม
                จำนวน............................หน่วยกิต
                ....................................ประธานกรรมการเทียบโอน
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
          </v-card>
        </div>
        <div ref="contentTwo" style="background-color: white">
          <v-card width="1270" height="2200" class="pa-16 pt-14">
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
              <u><h2>รายวิชาที่ขอเทียบโอน</h2></u>
            </div>

            <table width="100%">
              <thead class="pa-0">
                <tr>
                  <th class="pa-0">ที่</th>

                  <th class="pb-6 pl-0 pr-0">
                    <strong style="">รายวิชาที่ต้องการเทียบ</strong><br />
                    (ในหลักสูตร)
                    <tr class="pa-0">
                      <th width="30%">รหัสวิชา</th>
                      <th width="55%">ชื่อวิชา</th>
                      <th width="15%">หน่วยกิต</th>
                    </tr>
                  </th>
                  <th class="pb-6 pl-0 pr-0">
                    <strong> รายวิชาที่ขอเทียบ</strong><br />
                    (สถานศึกษาเดิม)

                    <tr class="pa-0">
                      <th width="30%">รหัสวิชา</th>
                      <th width="45%">ชื่อวิชา</th>
                      <th width="20%">หน่วยกิต</th>
                      <th width="15%">เกรด</th>
                    </tr>
                  </th>
                  <th width="14%" class="pa-0">
                    ผลการพิจารณา
                    <tr>
                      <th class="pa-0" width="50%">เทียบได้</th>
                      <th width="50%">เทียบไม่ได้</th>
                    </tr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(
                    equivalent_item, i
                  ) in equivalentCourseByID.equivalent_item"
                  :key="i"
                >
                  <td>
                    <div v-if="equivalent_item.status != 'ไม่อนุมัติ'">
                      {{ i + 1 }}
                    </div>
                  </td>

                  <td class="pa-0">
                    <div v-if="equivalent_item.status != 'ไม่อนุมัติ'">
                      <tr v-if="equivalent_item.course_enroll" class="pa-0">
                        <td width="20%">
                          {{ equivalent_item.course_enroll.course_code }}
                        </td>
                        <td width="40%">
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
                      </tr>
                    </div>
                  </td>
                  <td class="pa-0">
                    <div v-if="equivalent_item.status != 'ไม่อนุมัติ'">
                      <tr
                        v-if="equivalent_item.student_course1"
                        class="pa-0"
                        width="100%"
                      >
                        <td width="30%">
                          <div v-if="equivalent_item.credit1 < 2.0">
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
                          <div v-if="equivalent_item.credit1 < 2.0">
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
                            v-if="equivalent_item.credit1 < 2.0"
                            class="text-center"
                          >
                            <span style="color: red; margin: 0px">{{
                              equivalent_item.student_course1.credit
                            }}</span>
                          </div>
                          <div v-else class="text-center">
                            <span style="margin: 0px">{{
                              equivalent_item.student_course1.credit
                            }}</span>
                          </div>
                        </td>
                        <td width="15%">
                          <tr>
                            <div
                              v-if="equivalent_item.credit1 < 2.0"
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
                          <div v-if="equivalent_item.credit2 < 2.0">
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
                          <div v-if="equivalent_item.credit2 < 2.0">
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
                            v-if="equivalent_item.credit2 < 2.0"
                            class="text-center"
                          >
                            <span style="color: red; margin: 0px">{{
                              equivalent_item.student_course2.credit
                            }}</span>
                          </div>
                          <div v-else class="text-center">
                            <span style="margin: 0px">{{
                              equivalent_item.student_course2.credit
                            }}</span>
                          </div>
                        </td>
                        <td width="15%">
                          <tr>
                            <div
                              v-if="equivalent_item.credit2 < 2.0"
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
                          <div v-if="equivalent_item.credit3 < 2.0">
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
                          <div v-if="equivalent_item.credit3 < 2.0">
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
                            v-if="equivalent_item.credit3 < 2.0"
                            class="text-center"
                          >
                            <span style="color: red; margin: 0px">{{
                              equivalent_item.student_course3.credit
                            }}</span>
                          </div>
                          <div v-else class="text-center">
                            <span style="margin: 0px">{{
                              equivalent_item.student_course3.credit
                            }}</span>
                          </div>
                        </td>
                        <td width="15%">
                          <tr>
                            <div
                              v-if="equivalent_item.credit3 < 2.0"
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
                                  equivalent_item.student_course4.credit_type ==
                                  'ท'
                                "
                                >{{
                                  equivalent_item.student_course4.credit
                                }}</span
                              >
                              <span v-else>0</span>
                            </td>
                            <td>
                              <span
                                v-if="
                                  equivalent_item.student_course4.credit_type ==
                                  'ป'
                                "
                                >{{
                                  equivalent_item.student_course4.credit
                                }}</span
                              >
                              <span v-else>0</span>
                            </td>
                            <td>
                              <span
                                v-if="
                                  equivalent_item.student_course4.credit_type ==
                                  'ร'
                                "
                                >{{
                                  equivalent_item.student_course4.credit
                                }}</span
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
                                  equivalent_item.student_course5.credit_type ==
                                  'ท'
                                "
                                >{{
                                  equivalent_item.student_course5.credit
                                }}</span
                              >
                              <span v-else>0</span>
                            </td>
                            <td>
                              <span
                                v-if="
                                  equivalent_item.student_course5.credit_type ==
                                  'ป'
                                "
                                >{{
                                  equivalent_item.student_course5.credit
                                }}</span
                              >
                              <span v-else>0</span>
                            </td>
                            <td>
                              <span
                                v-if="
                                  equivalent_item.student_course5.credit_type ==
                                  'ร'
                                "
                                >{{
                                  equivalent_item.student_course5.credit
                                }}</span
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
                                  equivalent_item.student_course6.credit_type ==
                                  'ท'
                                "
                                >{{
                                  equivalent_item.student_course6.credit
                                }}</span
                              >
                              <span v-else>0</span>
                            </td>
                            <td>
                              <span
                                v-if="
                                  equivalent_item.student_course6.credit_type ==
                                  'ป'
                                "
                                >{{
                                  equivalent_item.student_course6.credit
                                }}</span
                              >
                              <span v-else>0</span>
                            </td>
                            <td>
                              <span
                                v-if="
                                  equivalent_item.student_course6.credit_type ==
                                  'ร'
                                "
                                >{{
                                  equivalent_item.student_course6.credit
                                }}</span
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
                    </div>
                  </td>
                  <td class="pa-0">
                    <tr>
                      <td class="pa-0" width="50%">
                        <p
                          style="
                            padding: 10px;
                            border: 1px solid white;
                            width: 80px;
                            margin: 0px;
                          "
                        ></p>
                      </td>
                      <td class="pa-0" width="50%">
                        <p style="color: white"></p>
                      </td>
                    </tr>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td class="pa-0">
                    <tr class="pa-0" width="100%">
                      <td width="37%" class="text-center">
                        <strong>รวม</strong>
                      </td>

                      <td width="5%" class="text-center">{{ plus }}</td>
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
                      (......{{ equivalentCourseByID.name_committee1.title }}
                      {{ equivalentCourseByID.name_committee1.first_name }}
                      {{
                        equivalentCourseByID.name_committee1.last_name
                      }}......)
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
                      (......{{ equivalentCourseByID.name_committee2.title }}
                      {{ equivalentCourseByID.name_committee2.first_name }}
                      {{
                        equivalentCourseByID.name_committee2.last_name
                      }}......)
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
                      (......{{ equivalentCourseByID.name_committee3.title }}
                      {{ equivalentCourseByID.name_committee3.first_name }}
                      {{ equivalentCourseByID.name_committee3.last_name }}
                      ......)
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
                      (......{{ equivalentCourseByID.name_committee4.title }}
                      {{ equivalentCourseByID.name_committee4.first_name }}
                      {{
                        equivalentCourseByID.name_committee4.last_name
                      }}......)
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
                      (......{{ equivalentCourseByID.name_committee5.title }}
                      {{ equivalentCourseByID.name_committee5.first_name }}
                      {{
                        equivalentCourseByID.name_committee5.last_name
                      }}......)
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
                      (......{{ equivalentCourseByID.name_committee6.title }}
                      {{ equivalentCourseByID.name_committee6.first_name }}
                      {{ equivalentCourseByID.name_committee6.last_name }}
                      ......)
                    </v-col>
                    <v-col class="pa-0 text-center" v-else>
                      (......................................................................................)
                    </v-col>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
            <div class="pa-16 ma-16"></div>
            <div class="pa-16 ma-16"></div>
          </v-card>
        </div>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="12" sm="6">
          <v-btn @click="makePDF"
            >Download Transfer (ดาวน์โหลดใบเทียบโอน)</v-btn
          >
        </v-col>
        <v-col class="text-center" cols="12" sm="3">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#BDBDBD" dark v-bind="attrs" v-on="on">
                ใบแสดงผลการศึกษา
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="#BDBDBD">
                <v-toolbar-title>ใบแสดงผลการศึกษา</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="dialog = false">
                  <v-icon color="red"> mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-col class="text-center" v-if="profile.file_transcrip == null">
                <h3>ไม่มีใบแสดงผลการเรียน</h3>
              </v-col>
              <v-col class="text-center" v-else>
                <img height="50%" width="100%" :src="profile.file_transcrip" />
              </v-col>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col class="text-center" cols="12" sm="3" v-if="userRole == 'admin'">
          <v-dialog v-model="dialogDelete" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red" dark v-bind="attrs" v-on="on">
                ลบใบเทียบโอน
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5"
                >ยืนยันต้องการลบใบเทียบโอนนี้?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeDelete">ยกเลิก</v-btn>
                <v-btn color="blue darken-1" text @click="CancelTransfer"
                  >ตกลง</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import Transfer from "./Transfer";

import { v4 as uuid } from "uuid";
import { mapActions, mapState } from "vuex";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import pdfFonts from "~/assets/custom-fonts.js";
import pdfMake from "pdfmake";

export default {
  name: "app",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: "",
    statusApprove: "",
    selected: "ขอเทียบโอนรายวิชา",
    pdfOption: {
      orientation: "p",
      format: "a4",
      unit: "px",
      lineHeight: 2,
      putOnlyUsedFonts: true,
    },
    lengths: [],
    type: [
      {
        id: 1,
        name: "ไม่อนุมัติ",
      },
      {
        id: 2,
        name: "อนุมัติ",
      },
    ],

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
    profile: [],
    _uuid: "",
    headers: [
      {
        text: "รายวิชาที่จะเทียบ",
        align: "start",
        sortable: false,
        value: "course_enroll.course_title",
      },
      { text: "หน่วยกิจ", value: "course_enroll.credit", sortable: false },

      {
        text: "รายวิชาที่เทียบที่ 1",
        value: "student_course1.course_title",
        sortable: false,
      },
      // { text: "หน่วยกิจ", value: "nameSubjectcredit", sortable: false },
      { text: "เกรดวิชาที่1", value: "credit1", sortable: false },
      // { text: "เกรด", value: "grade", sortable: false },

      {
        text: "รายวิชาที่เทียบที่ 2",
        value: "student_course2.course_title",
        sortable: false,
      },
      // { text: "หลักสูตร", value: "course", sortable: false },
      {
        text: "เกรดวิชาที่2",
        value: "credit2",
        sortable: false,
      },
      {
        text: "รายวิชาที่เทียบที่ 3",
        value: "student_course3.course_title",
        sortable: false,
      },
      // { text: "หลักสูตร", value: "course", sortable: false },
      {
        text: "เกรดวิชาที่3",
        value: "credit3",
        sortable: false,
      },
      {
        text: "สถานะ",
        value: "status",
        sortable: false,
      },
      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      course_code: "",
      course_title: "",
      course: 0,
      credit_type: 0,
      credit: 0,
      description_file: "",
      grade: "",
      school: "",
    },
    defaultItem: {
      id: 0,
      course_code: "",
      course_title: "",
      course: 0,
      credit_type: 0,
      credit: 0,
      description_file: "",
      grade: "",
      school: "",
    },
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
    userId: {
      get() {
        if (this.$store.state.users.userId) {
          return this.$store.state.users.userId;
        } else {
          return null;
        }
      },
      set() {},
    },

    plus() {
      let find = 0;
      this.equivalentCourseByID.equivalent_item.forEach((listAll) => {
        if (listAll.course_enroll) {
          find += parseFloat(listAll.course_enroll.credit);
        }
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
    userRole: {
      get() {
        if (this.$store.state.users.userLogin.user) {
          return this.$store.state.users.userLogin.user.role.role;
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
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    this.getEquivalentCourseByID();
    this.getTeacher();
    this.getSchoolCourse();
    console.log(this.equivalentCourseByID);
    this.$fixedKeyApi
      .get(`/profile/${this.equivalentCourseByID.created_user.id}/`)
      .then((response) => {
        self.search = response.data;
        console.log("getProfile mounted", response.data);

        this.profile = response.data;
      });
  },
  methods: {
    ...mapActions({
      getEquivalentCourseByID: "transfer/getEquivalentCourseByID",
      getTeacher: "users/getTeacher",
      getSchoolCourse: "subject/getSchoolCourse",
    }),
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    deleteItemConfirm() {
      // this.desserts.splice(this.editedIndex, 1);
      let id = this.idSubject;
      // Object.assign(this.desserts[this.editedIndex], this.editedItem);
      let data = {
        status: this.statusApprove,
      };
      this.$fixedKeyApi
        .patch(`/equivalent-item/${id}/`, data)
        .then((response) => {
          console.log("delete", response);
          if (response.status == 200) {
            this.$store.dispatch(`transfer/getEquivalentCourseByID`, {
              id: this.equivalentCourseByID.id,
            });
            this.closeDelete();
            this.getEquivalentCourseByID();
          }
        });
    },
    ApproveTransfer() {
      let data = {
        status: "ตรวจสอบสำเร็จ",
        advisor_approve: true,
      };
      console.log(data);

      this.$fixedKeyApi
        .patch(`/equivalent-course/${this.equivalentCourseByID.id}/`, data)
        .then((response) => {
          if (response.data) {
            console.log("patch", response.data);
            this.$router.push("/transfer/");
            this.getEquivalentCourseByID();
          }
        });
    },
    deleteItem(item) {
      this.editedIndex =
        this.equivalentCourseByID.equivalent_item.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.idSubject = item.id;
      console.log("item", this.idSubject, item);
    },
    CancelTransfer() {
      this.$fixedKeyApi
        .delete(`/equivalent-course/${this.equivalentCourseByID.id}/`)
        .then((response) => {
          if (response.status == 204) {
            console.log("delete", response);
            this.$router.push("/transfer/");
            this.getEquivalentCourseByID();
          }
        });
    },
    async makePDF() {
      window.html2canvas = html2canvas;
      const doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4",
        hotfixes: ["px_scaling"],
      });
      doc.setFont("Sarabun-Bold", "normal");

      await html2canvas(this.$refs.content, {
        width: 2480,
        height: 3508,
        allowTaint: false,
        useCORS: true,
        backgroundColor: "transparent",
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");

        doc.addImage(img, "png", -2, -2, 0, 2202);

        doc.save("ใบคำขอเทียบโอน_1_" + Date.now() + ".pdf");
      });
      await html2canvas(this.$refs.contentTwo, {
        width: 2480,
        height: 3508,
        allowTaint: false,
        useCORS: true,
        backgroundColor: "white",
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");

        doc.addImage(img, "png", -2, -2, 0, 2202);

        doc.save("ใบคำขอเทียบโอน_2_ " + Date.now() + ".pdf");
      });
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
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}
</style>
