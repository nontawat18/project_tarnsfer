<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header elevation="0">
        <v-stepper-step :complete="e1 > 1" step="1">
          เพิ่มรายวิชาที่ขอเทียบ
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          เลือกผู้เห็นชอบ
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step step="3"> คณะกรรมการเทียบโอน </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-col class="pb-0 pt-0">
            <v-col class="pb-8">
              <strong>รายวิชาที่ขอเทียบ</strong>
            </v-col>
            <v-row>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-combobox
                  label="รายวิชาที่ขอเทียบ"
                  outlined
                  :items="schoolCourse"
                  item-text="course_title"
                  dense
                  item-value="id"
                  v-model="subjectOld"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-combobox
                  label="หลักสูตร"
                  outlined
                  dense
                  :items="subject"
                  item-text="name"
                  item-value="id"
                  v-model="couseOld"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-combobox
                  label="สาขาวิชา"
                  outlined
                  dense
                  :items="subject"
                  item-text="name"
                  item-value="id"
                  v-model="branceOld"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-text-field
                  label="ปี พ.ศ"
                  dense
                  outlined
                  v-model="yearOld"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="pt-0">
            <v-col class="pb-8">
              <strong>รายวิชาที่ขอเรียนแทน</strong>
            </v-col>
            <v-row>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-combobox
                  label="รายวิชาที่ขอเรียนแทน"
                  outlined
                  dense
                  :items="schoolCourse"
                  item-text="course_title"
                  item-value="id"
                  v-model="subjectNew"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-combobox
                  label="หลักสูตร"
                  outlined
                  dense
                  :items="subject"
                  item-text="name"
                  item-value="id"
                  v-model="couseNew"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-combobox
                  label="สาขาวิชา"
                  outlined
                  dense
                  :items="subject"
                  item-text="name"
                  item-value="id"
                  v-model="branceNew"
                ></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" class="pt-0 pb-0">
                <v-text-field
                  label="ปี พ.ศ"
                  dense
                  outlined
                  v-model="yearNew"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-btn color="grey" dark @click="e1 = 2"> Next </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-col>
            <v-col>
              <v-row>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="อาจารย์ที่ปรึกษา"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="advisor"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="หัวหน้าสาขาวิชา"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="head_department"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="หัวหน้าสำนักงานคณบดี"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="head_educational"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="รองคณบดีฝ่ายวิชาการและวิจัย"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="deputy_dean_a_r"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณบดี"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="dean"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="หัวหน้าแผนกงานส่งเสริมวิาการและงานทะเบียน"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="head_academic_p_r"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label=" เจ้าหน้าที่ทะเบียน"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="registrar_officer"
                  ></v-combobox>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
          <v-btn color="grey" dark @click="e1 = 3"> Next </v-btn>

          <v-btn text @click="e1 = 1"> Back </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-col>
            <v-col>
              <v-row>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณะกรรมการที่ 1"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="approvOne"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณะกรรมการที่ 2"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="approvTwo"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณะกรรมการที่ 3"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="approvThree"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณะกรรมการที่ 4"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="approvFour"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณะกรรมการที่ 5"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="approvFive"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" class="pt-0 pb-0">
                  <v-combobox
                    label="คณะกรรมการที่ 6"
                    outlined
                    dense
                    :items="teacher"
                    item-text="full_name"
                    item-value="id"
                    v-model="approvSix"
                  ></v-combobox>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
          <v-btn @click="save()" elevation="0" color="grey" dark>
            บันทึกการเทียบโอน
          </v-btn>
          <v-btn text @click="e1 = 2"> Back </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      e1: 1,
      subjectOld: null,
      subjectNew: null,
      couseOld: null,
      couseNew: null,
      branceOld: null,
      branceNew: null,
      yearOld: null,
      yearNew: null,
      subject: [
        { name: "calculus 1 ", id: 1 },
        { name: "python", id: 2 },
        { name: "oop", id: 3 },
        { name: "network", id: 4 },
        { name: "microcoltroler", id: 5 },
        { name: "math", id: 6 },
        { name: "digiton", id: 7 },
      ],
      approvOne: null,
      approvTwo: null,
      approvThree: null,
      approvFour: null,
      approvFive: null,
      approvSix: null,
      registrar_officer: null,
      head_academic_p_r: null,
      dean: null,
      deputy_dean_a_r: null,
      head_educational: null,
      head_department: null,
      advisor: null,
    };
  },
  computed: {
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
    equivalentCourse: {
      get() {
        if (this.$store.state.transfer.equivalentCourse) {
          return this.$store.state.transfer.equivalentCourse.results;
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
    userId: {
      get() {
        if (this.$store.state.users) {
          return this.$store.state.users.userId;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  mounted() {
    this.getSchoolCourse();
    this.getEquivalentCourse();
    this.getTeacher();
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
      getEquivalentCourse: "transfer/getEquivalentCourse",
      getTeacher: "users/getTeacher",
    }),
    save() {
      let data = {
        equivalent_type: "ขอเทียบเพื่อนเรียนแทน",
        equivalent_item: [
          {
            status: "รอตรวจสอบ",
            semester: 1,
            student_course: this.subjectOld.id,
            course_enroll: this.subjectNew.id,
          },
        ],
        studied_from: null,
        number_of_equivalent: null,
        number_of_credit: 3,
        name_committee1: this.approvOne.id,
        name_committee2: this.approvTwo.id,
        name_committee3: this.approvThree.id,
        name_committee4: this.approvFour.id,
        name_committee5: this.approvFive.id,
        name_committee6: this.approvSix.id,
        advisor: this.advisor.id,
        head_department: this.head_department.id,
        head_educational: this.head_educational.id,
        deputy_dean_a_r: this.deputy_dean_a_r.id,
        dean: this.dean.id,
        head_academic_p_r: this.head_academic_p_r.id,
        registrar_officer: this.registrar_officer.id,
        created_user: this.userId,
      };

      this.$fixedKeyApi.post(`/equivalent-course/`, data).then((response) => {
        if (response.data) {
          console.log("post", response.data);
          this.$router.push("/transfer/");
        }
      });
    },
  },
};
</script>
