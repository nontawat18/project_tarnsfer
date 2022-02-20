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
          <v-btn color="grey" elevation="0" small class="" dark @click="addLength">
            เพิ่มวิชา
          </v-btn>
        </v-col>
      </div>
    </v-form>



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
    };
  },
  computed: {
    // users: {
    //   get() {
    //     if (this.$store.state.users.users) {
    //       return this.$store.state.users.users.result;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    // },
    // partnerId: {
    //   get() {
    //     if (this.$store.state.users.partnerId) {
    //       return this.$store.state.users.partnerId;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    // },
    // IdTransfer: {
    //   get() {
    //     if (this.$store.state.transfers.IdTransfer) {
    //       return this.$store.state.transfers.IdTransfer;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    // },
    // idSubject() {
    //   let ids = [];
    //   this.$store.state.transfers.IdTransfer.forEach((element) => {
    //     ids.push(element);
    //   });
    //   return ids;
    // },
  },
  async mounted() {
    // await this.getUsers();
    // await this.saveIdTransfer();
  },
  methods: {
    // ...mapActions({
    //   getUsers: "users/getUsers",
    //   saveIdTransfer: "transfers/saveIdTransfer",
    // }),
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
        nameCourse: null,
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
        nameCourse: null,
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
        this.lengths[data.index].nameCourse = data.nameCourse.id.toFixed(0);
        console.log(this.lengths);
      }
    },

    async updateLengthAbility(data) {
      if (this.lengthsAbility[data.index]) {
        this.lengthsAbility[data.index].nameSubjectTransfer =
          data.nameSubjectTransfer.id.toFixed(0);
        this.lengthsAbility[data.index].nameSubject =
          data.nameSubject.id.toFixed(0);
        console.log(this.lengthsAbility);
        this.lengthsAbility[data.index].nameCourse =
          data.nameCourse.id.toFixed(0);
        console.log(this.lengthsAbility);
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

    // async createTransfer() {
    //   console.log("createTransfer", this.id);
    //   let pictureNew = this.base64.result.split(",");

    //   let data = {
    //     params: {
    //       data: {
    //         // course_name: this.nameCourse,
    //         type_transfer: this.type,
    //         status_transfer: "ยังไม่ตรวจสอบ",
    //         partner_id: this.partnerId,
    //         credit_transfer_ids: this.id,
    //         ability_transfer_ids: this.idAbility,
    //         file_transcript: pictureNew[1],
    //         year: this.year,
    //       },
    //     },
    //   };

    //   this.$axios.post(`api/credit.transfer`, data).then((response) => {
    //     console.log("post", response);
    //     if (response.data.result) {
    //       this.$router.push("/transfer/transferComparison/");
    //     }
    //   });
    // },
  },
};
</script>
