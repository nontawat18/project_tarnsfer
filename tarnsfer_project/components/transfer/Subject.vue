<template>
  <div>
    <!-- <v-col>
      <h3>เพิ่มรายการเทียบโอน</h3>
    </v-col>
    <v-col cols="12" class="pb-0">
      <v-combobox
        v-model="type"
        :items="items"
        dense
        label="ประเภท"
        outlined
      ></v-combobox>
      <v-text-field
        label="ปีการศึกษา"
        dense
        outlined
        v-model="year"
      ></v-text-field>
      <v-file-input
        label="ใบรับรองผลการศึกษา"
        outlined
        dense
        @change="uploadImage(image)"
        v-model="image"
      ></v-file-input>

    </v-col> -->

    <v-stepper v-model="e1">
      <v-stepper-header elevation="0">
        <v-stepper-step :complete="e1 > 1" step="1">
          เพิ่มรายวิชาที่จะเทียบ
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          เลือกผู้เห็นชอบ
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">
          เลือกผู้เห็นชอบ
        </v-stepper-step>
        <!-- <v-divider></v-divider> -->

        <!-- <v-stepper-step step="4"> สรุปรายวิชาเทียบโอน </v-stepper-step> -->
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
              <!-- {{ lengths }} -->
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

          <!-- <v-btn text> Cancel </v-btn> -->
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
          <!-- <v-btn color="grey" dark @click="e1 = 4"> Next </v-btn> -->
          <v-btn text @click="e1 = 2"> Back </v-btn>
        </v-stepper-content>
        <!-- <v-stepper-content step="4">

          <v-col>
            <div class="">
              <v-data-table
                :headers="headers"
                :items="lengths"
                :search="search"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>สรุปการเทียบโอน</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>

                    <v-spacer></v-spacer>

                  </v-toolbar>

                </template>

              </v-data-table>
            </div>
          </v-col>
          <v-btn @click="save()" elevation="0" color="grey" dark>
            บันทึกการเทียบโอน
          </v-btn>
          <v-btn text @click="e1 = 3"> Back </v-btn>
        </v-stepper-content> -->
      </v-stepper-items>
    </v-stepper>

    <v-col class="text-center"> </v-col>
    <!-- <v-col cols="12" class="mt-6 pb-0">
      <v-checkbox
        v-if="lengths != '' || lengthsAbility != ''"
        v-model="checkbox"
        @click="save"
        label="ยืนยันการเทียบโอน "
      >
      </v-checkbox>
    </v-col> -->
    <!-- <v-col cols="12" class="text-center pt-0" v-if="checkbox == true">
      <v-btn
        color="#b8e9fa"
        @click="createTransfer"
        v-if="lengths != '' || lengthsAbility != ''"
      >
        บันทึกใบเทียบโอน
      </v-btn>
    </v-col>-->
  </div>
</template>
<script>
import Transfer from "./Transfer";

import { v4 as uuid } from "uuid";
import { mapActions, mapState } from "vuex";
const dataURItoBlob = (dataURI) => {
  const bytes =
    dataURI.split(",")[0].indexOf("base64") >= 0
      ? atob(dataURI.split(",")[1])
      : unescape(dataURI.split(",")[1]);
  const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const max = bytes.length;
  const ia = new Uint8Array(max);
  for (let i = 0; i < max; i += 1) ia[i] = bytes.charCodeAt(i);
  return new Blob([ia], { type: mime });
};

const resizeImage = ({ file, maxSize }) => {
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement("canvas");

  const resize = () => {
    let { width, height } = image;

    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else if (height > maxSize) {
      width *= maxSize / height;
      height = maxSize;
    }

    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/jpeg");

    return dataURItoBlob(dataUrl);
  };

  return new Promise((ok, no) => {
    // if (!file.type.match(/image.*/)) {
    //   no(new Error("Not an image"));
    //   return;
    // }

    reader.onload = (readerEvent) => {
      image.onload = () => ok(resize());
      image.src = readerEvent.target.result;
    };

    reader.readAsDataURL(file);
  });
};
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
        text: "รายวิชาที่จะเทียบ",
        align: "start",
        sortable: false,
        value: "nameSubject",
      },
      { text: "รายวิชาที่เทียบที่ 1", value: "nameSubjectTransfer", sortable: false },
      // { text: "คำอธิบายรายวิชา", value: "description_file", sortable: false },
      { text: "เกรด", value: "gradeOne", sortable: false },
      // { text: "เกรด", value: "grade", sortable: false },

      { text: "รายวิชาที่เทียบที่ 2", value: "nameSubjectTransfer2", sortable: false },
      // { text: "หลักสูตร", value: "course", sortable: false },
      { text: "เกรด", value: "gradeTwo", sortable: false },
      { text: "รายวิชาที่เทียบที่ 3", value: "nameSubjectTransfer3", sortable: false },
      // { text: "หลักสูตร", value: "course", sortable: false },
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
          status: "รอตรวจสอบ",
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
  },
  async mounted() {
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
    async uploadImage(image) {
      console.log("image", image);
      if (image) {
        let file = await image;
        // if (!file.type.match(/image.*/)) {
        //   no(new Error("Not an image"));
        //   return;
        // }

        const reader = new FileReader();
        // reader.onload = (e) => (this.originalImg = e.target.result);
        reader.readAsDataURL(file);

        reader.onload = function () {
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
        this.base64 = reader;
        console.log("", this.base64);
      }
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
        // nameCourse: null,
      });
    },

    addLengthAbility() {
      this.index += 1;
      let index = this.index;
      this.lengthsAbility.push({
        id: index,
        component: Ability,
        nameSubjectTransfer: null,
        nameSubjectTransfer2: null,
        nameSubjectTransfer3: null,
        gradeOne: 0,
        gradeTwo: 0,
        gradeThere: 0,
        nameSubject: null,
        // nameCourse: null,
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
        } else {
          this.lengths[data.index].nameSubjectTransfer =
            data.nameSubjectTransfer.id;
        }
        if (
          data.nameSubjectTransfer2 == "" ||
          data.nameSubjectTransfer2 == undefined
        ) {
          this.lengths[data.index].nameSubjectTransfer2 = "";
        } else {
          this.lengths[data.index].nameSubjectTransfer2 =
            data.nameSubjectTransfer2.id;
        }
        if (
          data.nameSubjectTransfer3 == "" ||
          data.nameSubjectTransfer3 == undefined
        ) {
          this.lengths[data.index].nameSubjectTransfer3 = "";
        } else {
          this.lengths[data.index].nameSubjectTransfer3 =
            data.nameSubjectTransfer3.id;
        }

        this.lengths[data.index].nameSubject = data.nameSubject.id;

        this.lengths[data.index].gradeOne = data.gradeOne;
        this.lengths[data.index].gradeTwo = data.gradeTwo;
        this.lengths[data.index].gradeThere = data.gradeThere;
        console.log(this.lengths);
        // this.lengths[data.index].nameCourse = data.nameCourse.id.toFixed(0);
        // console.log(this.lengths);
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
        // this.lengthsAbility[data.index].nameCourse =
        //   data.nameCourse.id.toFixed(0);
        // console.log(this.lengthsAbility);
      }
    },
    // async save() {
    //   // this.desserts.push(this.editedItem);
    //   let id = [];
    //   console.log("this.lengths", this.lengths.length);
    //   await this.lengths.forEach((element) => {
    //     let data = {
    //       params: {
    //         data: {
    //           subject_in_storage_id: element.nameSubjectTransfer,
    //           subject_id: element.nameSubject,
    //           course_id: element.nameCourse,
    //           status: "3",
    //         },
    //       },
    //     };

    //     this.$axios.post(`api/credit.bank.transfer`, data).then((response) => {
    //       console.log("subject post", response.data);

    //       if (response.data.result) {
    //         id.push(response.data.result);
    //       } else {
    //         this.$toast.error("ไม่สามารถเพิ่มใบเทียบโอนได้").goAway(2000);
    //       }
    //     });
    //   });
    //   this.id = await id;

    //   let idAbility = [];
    //   console.log("this.lengths", this.lengthsAbility.length);

    //   await this.lengthsAbility.forEach((element) => {
    //     let data = {
    //       params: {
    //         data: {
    //           ability_id: element.nameSubjectTransfer,
    //           ability_subject_id: element.nameSubject,
    //           ability_course_id: element.nameCourse,
    //         },
    //       },
    //     };

    //     this.$axios.post(`api/ability.transfer`, data).then((response) => {
    //       console.log("ability.transfer", response);

    //       if (response.data.result) {
    //         idAbility.push(response.data.result);
    //       }
    //     });
    //   });
    //   this.idAbility = await idAbility;

    //   console.log("this.id", this.id, this.idAbility);
    // },
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
        name_committee1: appOne,
        name_committee2: appTwo,
        name_committee3: appThree,
        name_committee4: appFour,
        name_committee5: appFive,
        name_committee6: appSix,
        advisor: advisorNew,
        head_department: head_department_new,
        head_educational: head_educational_new,
        deputy_dean_a_r: deputy_dean_a_r_new,
        dean: dean_new,
        head_academic_p_r: head_academic_p_r_new,
        registrar_officer: registrar_officer_new,
        created_user: this.userId,
      };
      console.log(data);

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
