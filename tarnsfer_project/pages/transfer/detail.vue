<template>
  <div>
    <!-- <v-col>
      <v-row>
        <v-card outlined width="100%">
          <v-col>
            <h3>
              ประเภทการเทียบโอน : {{ equivalentCourseByID.equivalent_type }}
            </h3>
            <h3>
              รายวิชาที่ขอเทียบ :
              {{
                equivalentCourseByID.equivalent_item[0].student_course
                  .course_title
              }}
            </h3>
            <h3>
              รายวิชาต้องการเทียบ :
              {{
                equivalentCourseByID.equivalent_item[0].course_enroll
                  .course_title
              }}
            </h3>
            <br />
            <h3>
              ที่ปรึกษา :
              {{ equivalentCourseByID.advisor.first_name }}
              {{ equivalentCourseByID.advisor.last_name }}
            </h3>
               <h3>
              หัวหน้าสาขาวิชา :
              {{ equivalentCourseByID.head_department.first_name }}
              {{ equivalentCourseByID.head_department.last_name }}
            </h3>
               <h3>
              หัวหน้าสำนักงานคณบดี :
              {{ equivalentCourseByID.head_educational.first_name }}
              {{ equivalentCourseByID.head_educational.last_name }}
            </h3>
               <h3>
              รองคณบดีฝ่ายวิชาการและวิจัย :
              {{ equivalentCourseByID.deputy_dean_a_r.first_name }}
              {{ equivalentCourseByID.deputy_dean_a_r.last_name }}
            </h3>
               <h3>
              คณบดี :
              {{ equivalentCourseByID.dean.first_name }}
              {{ equivalentCourseByID.dean.last_name }}
            </h3>
               <h3>
              หัวหน้าแผนกงานส่งเสริมวิาการและงานทะเบียน :
              {{ equivalentCourseByID.head_academic_p_r.first_name }}
              {{ equivalentCourseByID.head_academic_p_r.last_name }}
            </h3>
               <h3>
              เจ้าหน้าที่ทะเบียน :
              {{ equivalentCourseByID.registrar_officer.first_name }}
              {{ equivalentCourseByID.registrar_officer.last_name }}
            </h3>

            <br />
            <h3>
              คณะกรรมการที่ 1 :
              {{ equivalentCourseByID.name_committee1.first_name }}
              {{ equivalentCourseByID.name_committee1.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 2 :
              {{ equivalentCourseByID.name_committee2.first_name }}
              {{ equivalentCourseByID.name_committee2.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 3 :
              {{ equivalentCourseByID.name_committee3.first_name }}
              {{ equivalentCourseByID.name_committee3.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 4 :
              {{ equivalentCourseByID.name_committee4.first_name }}
              {{ equivalentCourseByID.name_committee4.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 5 :
              {{ equivalentCourseByID.name_committee5.first_name }}
              {{ equivalentCourseByID.name_committee5.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 6 :
              {{ equivalentCourseByID.name_committee6.first_name }}
              {{ equivalentCourseByID.name_committee6.last_name }}
            </h3>

          </v-col>
        </v-card>
      </v-row>
    </v-col> -->

    <v-row class="mt-5" justify="center">
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
        <div class="mt-10">
          <v-row>
            <v-col cols="6" sm="6" class="pa-0"
              ><v-card class="pa-3" outlined>
                <b class="pb-16">1. ความเห็นของอาจารย์ที่ปรึกษา</b
                ><br /><br /><br />
                ........................................................................................................................................................
                <div class="mt-10">
                  <v-row>
                    <!-- <v-col cols="2"></v-col> -->
                    <v-col class="text-center">
                      (ลงชื่อ) {{ equivalentCourseByID.advisor.first_name }} {{ equivalentCourseByID.advisor.last_name }} อาจารย์ที่ปรึกษา<br />
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
                      (ลงชื่อ) {{ equivalentCourseByID.dean.first_name }} {{ equivalentCourseByID.dean.last_name }} คณบดี<br />
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
                    <!-- <v-col cols="2"></v-col> -->
                    <v-col >
                      (ลงชื่อ) {{ equivalentCourseByID.head_department.first_name }} {{ equivalentCourseByID.head_department.last_name }} หัวหน้าสาขา<br />
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
                    <!-- <v-col cols="2"></v-col> -->
                    <v-col>
                      (ลงชื่อ) {{ equivalentCourseByID.head_academic_p_r.first_name }} {{ equivalentCourseByID.head_academic_p_r.last_name }} หัวหน้างานส่งเสริมฯ<br />
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
                    <!-- <v-col cols="2"></v-col> -->
                    <v-col>
                      (ลงชื่อ) {{ equivalentCourseByID.head_academic_p_r.first_name }} {{ equivalentCourseByID.head_academic_p_r.last_name }} หัวหน้าสำนักงานคณบดี<br />
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
                    <!-- <v-col cols="2"></v-col> -->
                    <v-col>
                      (ลงชื่อ) {{ equivalentCourseByID.deputy_dean_a_r.first_name }} {{ equivalentCourseByID.deputy_dean_a_r.last_name }} รองคณบดีฝ่ายวิชาการฯ<br />
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
                    <!-- <v-col cols="2"></v-col> -->
                    <v-col>
                      (ลงชื่อ) {{ equivalentCourseByID.registrar_officer.first_name }} {{ equivalentCourseByID.registrar_officer.last_name }} เจ้าหน้าที่งานทะเบียน<br />
                      วันที่............................................................................................
                    </v-col>
                  </v-row>
                </div>
              </v-card></v-col
            >
          </v-row>
        </div>
      </v-card>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

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
  },
};
</script>
