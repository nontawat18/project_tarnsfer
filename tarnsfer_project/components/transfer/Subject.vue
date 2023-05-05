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

        <v-stepper-step :complete="e1 > 3" step="3">
          เลือกผู้เห็นชอบ
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step step="4"> สรุปรายวิชาเทียบโอน </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form ref="form2" v-model="valid2" lazy-validation>
            <div>
              <component
                v-for="(length, i) in lengths"
                :key="length.id"
                :is="length.component"
                :index="i"
                :lengths="lengths"
                @update="updateLength"
                @onChange="onChange"
                ref="callAddServiceInsulationTocart"
                :_uuid="_uuid"
              />
              <v-col cols="12" class="text-center">
                <v-btn
                  color="grey"
                  elevation="0"
                  small
                  class=""
                  dark
                  @click="addLength"
                >
                  เพิ่มวิชา
                </v-btn>
              </v-col>
            </div>
          </v-form>
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
                    label="เจ้าหน้าที่ทะเบียน"
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
          <v-btn color="grey" dark @click="toStep3"> Next </v-btn>

          <v-btn text @click="e1 = 1"> Back </v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-col>
            <v-col>
              <v-row>
                <v-col
                  v-if="committee.name_committee1"
                  cols="12"
                  sm="6"
                  class="pt-0 pb-0"
                >
                  <v-text-field
                    v-model="committee.name_committee1.first_name"
                    label="คณะกรรมการที่ 1"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="committee.name_committee2"
                  cols="12"
                  sm="6"
                  class="pt-0 pb-0"
                >
                  <v-text-field
                    v-model="committee.name_committee2.first_name"
                    label="คณะกรรมการที่ 2"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="committee.name_committee3"
                  cols="12"
                  sm="6"
                  class="pt-0 pb-0"
                >
                  <v-text-field
                    v-model="committee.name_committee3.first_name"
                    label="คณะกรรมการที่ 3"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="committee.name_committee4"
                  cols="12"
                  sm="6"
                  class="pt-0 pb-0"
                >
                  <v-text-field
                    v-model="committee.name_committee4.first_name"
                    label="คณะกรรมการที่ 4"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="committee.name_committee5"
                  cols="12"
                  sm="6"
                  class="pt-0 pb-0"
                >
                  <v-text-field
                    v-model="committee.name_committee5.first_name"
                    label="คณะกรรมการที่ 5"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </v-col>
                <v-col
                  v-if="committee.name_committee6"
                  cols="12"
                  sm="6"
                  class="pt-0 pb-0"
                >
                  <v-text-field
                    v-model="committee.name_committee6.first_name"
                    label="คณะกรรมการที่ 6"
                    outlined
                    disabled
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-col>

          <v-btn color="grey" dark @click="e1 = 4"> Next </v-btn>
          <v-btn text @click="e1 = 2"> Back </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4" class="pt-2">
          <v-col class="pt-0">
            <div class="pt-0">
              <v-data-table
                :headers="headers"
                :items="lengths"
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
              </v-data-table>
            </div>
          </v-col>
          <v-btn @click="save()" elevation="0" color="grey" dark>
            บันทึกการเทียบโอน
          </v-btn>
          <v-btn text @click="e1 = 3"> Back </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-col class="text-center"> </v-col>
  </div>
</template>
<script>
import Transfer from "./Transfer";

import { v4 as uuid } from "uuid";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      lengths: [],

      lengthsAbility: [],

      _uuid: "",
      type: "",
      index: 0,
      checkbox: false,
      valid2: false,
      valid3: false,
      idAbility: [],
      e1: 1,
      subjectList: null,
      image: null,
      base64: "",
      id: [],
      year: "",
      nameCourse: "",
      userTransfer: "",
      items: [
        "การศึกษาในระบบ",
        "การศึกษานอกระบบ",
        "การศึกษาตามอัธยาศัย",
        "ประสบการณ์บุคคล",
      ],
      headers: [
        {
          text: "รายวิชาที่ขอเทียบ",
          align: "start",
          sortable: false,
          value: "nameSubjecttext",
        },
        { text: "หน่วยกิจ", value: "nameSubjectcredit", sortable: false },

        {
          text: "รายวิชาที่เทียบที่ 1",
          value: "nameSubjectTransfertext",
          sortable: false,
        },
        { text: "เกรด", value: "gradeOne", sortable: false },

        {
          text: "รายวิชาที่เทียบที่ 2",
          value: "nameSubjectTransfertext2",
          sortable: false,
        },
        { text: "เกรด", value: "gradeTwo", sortable: false },
        {
          text: "รายวิชาที่เทียบที่ 3",
          value: "nameSubjectTransfertext3",
          sortable: false,
        },
        { text: "เกรด", value: "gradeThere", sortable: false },
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
    subjectAllList() {
      let find = [];
      this.lengths.forEach((listAll) => {
        find.push({
          status: "รอที่ปรึกษาตรวจสอบ",
          semester: 1,
          student_course1: listAll.nameSubjectTransfer,
          student_course2: listAll.nameSubjectTransfer2,
          student_course3: listAll.nameSubjectTransfer3,
          course_enroll: listAll.nameSubject,
          credit1: listAll.gradeOne,
          credit2: listAll.gradeTwo,
          credit3: listAll.gradeThere,
        });
      });
      return find;
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
    committee: {
      get() {
        if (this.$store.state.users.committee) {
          return this.$store.state.users.committee.results[0];
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  async mounted() {
    this.getSchoolCourse();
    this.getEquivalentCourse();
    this.getTeacher();
    this.getCommittee();
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
      getEquivalentCourse: "transfer/getEquivalentCourse",
      getTeacher: "users/getTeacher",
      getCommittee: "users/getCommittee",
    }),
    toStep3() {
      // if (
      //   !this.advisor ||
      //   !this.head_department ||
      //   !this.head_educational ||
      //   !this.deputy_dean_a_r ||
      //   !this.dean ||
      //   !this.head_academic_p_r ||
      //   !this.registrar_officer
      // ) {
      //   alert("กรุณาใส่ข้อมูลเลือกผู้เห็นชอบให้ครบ");
      // } else {
      this.e1 = 3;
      // }
    },

    addLength() {
      this.index += 1;
      let index = this.index;
      this.lengths.push({
        id: index,
        component: Transfer,
        nameSubjectTransfer: null,
        nameSubjectTransfer2: null,
        nameSubjectTransfer3: null,
        nameSubject: null,
        gradeOne: 0,
        gradeTwo: 0,
        gradeThere: 0,
      });
    },

    setUUID() {
      this._uuid = uuid();
    },
    async updateLength(data) {
      if (this.lengths[data.index]) {
        if (
          data.nameSubjectTransfer == "" ||
          data.nameSubjectTransfer == undefined
        ) {
          this.lengths[data.index].nameSubjectTransfer = "";
          this.lengths[data.index].nameSubjectTransfertext = "";
        } else {
          this.lengths[data.index].nameSubjectTransfer =
            data.nameSubjectTransfer.id;
          this.lengths[data.index].nameSubjectTransfertext =
            data.nameSubjectTransfer.course_title;
        }
        if (
          data.nameSubjectTransfer2 == "" ||
          data.nameSubjectTransfer2 == undefined
        ) {
          this.lengths[data.index].nameSubjectTransfer2 = "";
          this.lengths[data.index].nameSubjectTransfertext2 = "";
        } else {
          this.lengths[data.index].nameSubjectTransfer2 =
            data.nameSubjectTransfer2.id;
          this.lengths[data.index].nameSubjectTransfertext2 =
            data.nameSubjectTransfer2.course_title;
        }
        if (
          data.nameSubjectTransfer3 == "" ||
          data.nameSubjectTransfer3 == undefined
        ) {
          this.lengths[data.index].nameSubjectTransfer3 = "";
          this.lengths[data.index].nameSubjectTransfertext3 = "";
        } else {
          this.lengths[data.index].nameSubjectTransfer3 =
            data.nameSubjectTransfer3.id;
          this.lengths[data.index].nameSubjectTransfertext3 =
            data.nameSubjectTransfer3.course_title;
        }

        this.lengths[data.index].nameSubject = data.nameSubject.id;
        this.lengths[data.index].nameSubjecttext =
          data.nameSubject.course_title;
        this.lengths[data.index].nameSubjectcredit = data.nameSubject.credit;

        this.lengths[data.index].gradeOne = data.gradeOne;
        this.lengths[data.index].gradeTwo = data.gradeTwo;
        this.lengths[data.index].gradeThere = data.gradeThere;
        console.log(this.lengths);
      }
    },

    async updateLengthAbility(data) {
      if (this.lengthsAbility[data.index]) {
        this.lengthsAbility[data.index].nameSubjectTransfer =
          data.nameSubjectTransfer.id.toFixed(0);
        this.lengths[data.index].nameSubjectTransfer2 =
          data.nameSubjectTransfer2.id.toFixed(0);
        this.lengths[data.index].nameSubjectTransfer3 =
          data.nameSubjectTransfer3.id.toFixed(0);
        this.lengths[data.index].nameSubject = data.nameSubject.id.toFixed(0);
        console.log(this.lengths);
      }
    },

    next() {
      console.log(this.subjectAllList);
    },
    save() {
      let appOne = null;
      let appTwo = null;
      let appThree = null;
      let appFour = null;
      let appFive = null;
      let appSix = null;
      let advisorNew = null;
      let head_department_new = null;
      let head_educational_new = null;
      let deputy_dean_a_r_new = null;
      let dean_new = null;
      let head_academic_p_r_new = null;
      let registrar_officer_new = null;
      // if (
      //   !this.advisor ||
      //   !this.head_department ||
      //   !this.head_educational ||
      //   !this.deputy_dean_a_r ||
      //   !this.dean ||
      //   !this.head_academic_p_r ||
      //   !this.registrar_officer
      // ) {
      //   alert("กรุณาใส่ข้อมูลเลือกผู้เห็นชอบให้ครบ");
      // } else {
      if (this.advisor == null) {
        advisorNew = null;
      } else {
        advisorNew = this.advisor.id;
      }
      if (this.head_department == null) {
        head_department_new = null;
      } else {
        head_department_new = this.head_department.id;
      }
      if (this.head_educational == null) {
        head_educational_new = null;
      } else {
        head_educational_new = this.head_educational.id;
      }
      if (this.deputy_dean_a_r == null) {
        deputy_dean_a_r_new = null;
      } else {
        deputy_dean_a_r_new = this.deputy_dean_a_r.id;
      }
      if (this.dean == null) {
        dean_new = null;
      } else {
        dean_new = this.dean.id;
      }
      if (this.head_academic_p_r == null) {
        head_academic_p_r_new = null;
      } else {
        head_academic_p_r_new = this.head_academic_p_r.id;
      }
      if (this.registrar_officer == null) {
        registrar_officer_new = null;
      } else {
        registrar_officer_new = this.registrar_officer.id;
      }

      if (this.approvOne == null) {
        appOne = null;
      } else {
        appOne = this.approvOne.id;
      }

      if (this.approvTwo == null) {
        appTwo = null;
      } else {
        appTwo = this.approvTwo.id;
      }

      if (this.approvThree == null) {
        appThree = null;
      } else {
        appThree = this.approvThree.id;
      }

      if (this.approvFour == null) {
        appFour = null;
      } else {
        appFour = this.approvFour.id;
      }

      if (this.approvFive == null) {
        appFive = null;
      } else {
        appFive = this.approvFive.id;
      }

      if (this.approvSix == null) {
        appSix = null;
      } else {
        appSix = this.approvSix.id;
      }

      let data = {
        equivalent_type: "ขอเทียบโอนรายวิชา",
        equivalent_item: this.subjectAllList,
        studied_from: null,
        number_of_equivalent: null,
        number_of_credit: 3,
        advisor: advisorNew,
        head_department: head_department_new,
        head_educational: head_educational_new,
        deputy_dean_a_r: deputy_dean_a_r_new,
        dean: dean_new,
        head_academic_p_r: head_academic_p_r_new,
        registrar_officer: registrar_officer_new,
        created_user: this.userId,
        status: "รอที่ปรึกษาตรวจสอบ",
      };
      if (this.committee.name_committee1) {
        data["name_committee1"] = this.committee.name_committee1.id;
      } else {
        data["name_committee1"] = null;
      }
      if (this.committee.name_committee2) {
        data["name_committee2"] = this.committee.name_committee2.id;
      } else {
        data["name_committee2"] = null;
      }
      if (this.committee.name_committee3) {
        data["name_committee3"] = this.committee.name_committee3.id;
      } else {
        data["name_committee3"] = null;
      }
      if (this.committee.name_committee4) {
        data["name_committee4"] = this.committee.name_committee4.id;
      } else {
        data["name_committee4"] = null;
      }
      if (this.committee.name_committee5) {
        data["name_committee5"] = this.committee.name_committee5.id;
      } else {
        data["name_committee5"] = null;
      }
      if (this.committee.name_committee6) {
        data["name_committee6"] = this.committee.name_committee6.id;
      } else {
        data["name_committee6"] = null;
      }

      this.$fixedKeyApi.post(`/equivalent-course/`, data).then((response) => {
        if (response.data) {
          console.log("post", response.data);
          this.$router.push("/transfer/");
        }
      });
    },
    // },
  },
};
</script>
