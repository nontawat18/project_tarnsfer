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

        <v-stepper-step step="3"> คณะกรรมการเทียบโอน </v-stepper-step>
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
            <!-- <v-col class="pb-8">
        <strong>ผลการพิจารณาของคณะกรรมการเทียบโอน</strong>
      </v-col> -->
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
        nameSubject: null,
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
        nameSubject: null,
        // nameCourse: null,
      });
    },
    setUUID() {
      this._uuid = uuid();
    },
    async updateLength(data) {
      if (this.lengths[data.index]) {
        this.lengths[data.index].nameSubjectTransfer =
          data.nameSubjectTransfer.id.toFixed(0);
        this.lengths[data.index].nameSubject = data.nameSubject.id.toFixed(0);
        console.log(this.lengths);
        // this.lengths[data.index].nameCourse = data.nameCourse.id.toFixed(0);
        // console.log(this.lengths);
      }
    },

    async updateLengthAbility(data) {
      if (this.lengthsAbility[data.index]) {
        this.lengthsAbility[data.index].nameSubjectTransfer =
          data.nameSubjectTransfer.id.toFixed(0);
        this.lengthsAbility[data.index].nameSubject =
          data.nameSubject.id.toFixed(0);
        console.log(this.lengthsAbility);
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

    save() {
      this.lengths.forEach((element) => {
        let data = {
          equivalent_type: "ขอเทียบโอนรายวิชา",
          equivalent_item: [
            {
              status: "รอตรวจสอบ",
              semester: 1,
              student_course: element.nameSubjectTransfer,
              course_enroll: element.nameSubject,
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
      });
    },
  },
};
</script>
