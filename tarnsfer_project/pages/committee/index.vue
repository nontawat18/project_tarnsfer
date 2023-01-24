<template>
  <div class="pt-4">
    <v-data-table
      :headers="headers"
      :items="committee"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>รายชื่อคณะกรรมการ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-spacer></v-spacer>
          <div v-if="userRole == 'admin'">
            <v-dialog v-model="dialog" max-width="90%">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color=""
                  elevation="0"
                  fab
                  small
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.title"
                            label="คำนำหน้า"
                            outlined
                            dense
                          ></v-text-field>
                        </v-col> -->
                     
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.name_committee1"
                          label=""
                          :items="teacher"
                          item-text="full_name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.name_committee2"
                          label=""
                          :items="teacher"
                          item-text="full_name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.name_committee3"
                          label=""
                          :items="teacher"
                          item-text="full_name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.name_committee4"
                          label=""
                          :items="teacher"
                          item-text="full_name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.name_committee5"
                          label=""
                          :items="teacher"
                          item-text="full_name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.name_committee6"
                          label=""
                          :items="teacher"
                          item-text="full_name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" text @click="close"> ยกเลิก </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    บันทึก
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >ยืนยันต้องการลบรายวิชานี้ออกจากรายวิชาของมหาวิทยาลัย?</v-card-title
              >
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
        </v-toolbar>
        <v-col class="pb-0">
          <v-text-field
            v-model="search"
            label="ค้นหา"
            outlined
            dense
            class=""
          ></v-text-field>
        </v-col>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div v-if="userRole == 'admin'">
          <v-icon small color="primary" class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <!-- <v-icon small color="red" @click="deleteItem(item)">
            mdi-delete
          </v-icon> -->
        </div>
        <div v-else>
          <v-icon
            small
            color="primary"
            disabled
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <!-- <v-icon small color="red" disabled @click="deleteItem(item)">
            mdi-delete
          </v-icon> -->
        </div>
      </template>
      <!-- <template v-slot:[`item.description_file`]="{ item }">
          <div>
            <v-btn
              class=""
              small
              elevation="0"
              @click="download(item)"
              dark
              color="grey"
            >
              <v-icon left> mdi-download</v-icon> Download
            </v-btn>
          </div>
        </template> -->
    </v-data-table>
  </div>
</template>
<script>
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
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,
    image: null,
    base64: "",
    show1: false,
    idSubject: "",
    rules: {
      required: (value) => !!value || "จำเป็นต้องระบุ",
      counter: (value) => value.length <= 20 || "Max 20 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    role: [
      {
        id: "admin",
        name: "admin",
      },
      {
        id: "judge",
        name: "judge",
      },
      {
        id: "teacher",
        name: "teacher",
      },
      {
        id: "student",
        name: "student",
      },
    ],
    headers: [
      // { text: "คำนำห้า", value: "title.title", sortable: false },

      {
        text: "คณะกรรมการที่ 1",
        align: "start",
        sortable: false,
        value: "name_committee1.first_name" ,
      },
      { text: "คณะกรรมการที่ 2", value: "name_committee2.first_name", sortable: false },
      { text: "คณะกรรมการที่ 3", value: "name_committee3.first_name", sortable: false },
      { text: "คณะกรรมการที่ 4", value: "name_committee4.first_name", sortable: false },
      { text: "คณะกรรมการที่ 5", value: "name_committee5.first_name", sortable: false },
      { text: "คณะกรรมการที่ 6", value: "name_committee6.first_name", sortable: false },

      // { text: "หลักสูตร", value: "course", sortable: false },
      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
        name_committee1: "",
        name_committee2: "",
        name_committee3: "",
        name_committee4: "",
        name_committee5: "",
        name_committee6: "",
    },
    defaultItem: {
        name_committee1: "",
        name_committee2: "",
        name_committee3: "",
        name_committee4: "",
        name_committee5: "",
        name_committee6: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    myCourse: {
      get() {
        if (this.$store.state.subject.myCourse) {
          return this.$store.state.subject.myCourse.results;
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
    profileAll: {
      get() {
        if (this.$store.state.users.profileAll) {
          return this.$store.state.users.profileAll.results;
        } else {
          return null;
        }
      },
      set() {},
    },
    committee: {
      get() {
        if (this.$store.state.users.committee) {
          return this.$store.state.users.committee.results;
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

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {},
  mounted() {
    this.getSchoolCourse();
    this.getMyCourse();
    this.getProfileAll();
    this.getCommittee();
    this.getTeacher();
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
      getMyCourse: "subject/getMyCourse",
      getProfileAll: "users/getProfileAll",
      getCommittee: "users/getCommittee",
      getTeacher: "users/getTeacher",

    }),
    download(item) {
      // const url = "/users/download";
      console.log("item", item);
      // const url = 'data:application/pdf;base64, ' + this.abilityById.file;
      // document.location.href = url;
      // window.open("data:application/pdf;base64, " + this.abilityById.file);

      const linkSource = item.description_file;
      const downloadLink = document.createElement("a");
      const fileName = "คำอธิบายรายวิชา.pdf";

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    },
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
        console.log("base64", this.base64);
      }
    },

    editItem(item) {
      this.editedIndex = this.profileAll.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.idSubject = item.id;
      console.log("item", this.idSubject, item);
    },

    deleteItem(item) {
      this.editedIndex = this.profileAll.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.idSubject = item.id;
      console.log("item", this.idSubject, item);
    },

    // deleteItemConfirm() {
    //   this.desserts.splice(this.editedIndex, 1);
    //   this.closeDelete();
    // },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

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

      this.$fixedKeyApi.delete(`/users/${id}`).then((response) => {
        console.log("delete", response);
        if (response.status == 204) {
          this.closeDelete();
          this.getProfileAll();
        }
      });
    },
    save() {
      if (this.editedIndex > -1) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem);
        let id = this.idSubject;
        let data = {
            name_committee1: this.editedItem.name_committee1,
            name_committee2: this.editedItem.name_committee2,
            name_committee3: this.editedItem.name_committee3,
            name_committee4: this.editedItem.name_committee4,
            name_committee5: this.editedItem.name_committee5,
            name_committee6: this.editedItem.name_committee6,
        };
        this.$fixedKeyApi.patch(`/committee/${id}/`, data).then((response) => {
          if (response.status == 200) {
            console.log("patch", response.data);
            this.close();
            this.getCommittee();
          }
        });
      } else {
        let data = {
            name_committee1: this.editedItem.name_committee1,
            name_committee2: this.editedItem.name_committee2,
            name_committee3: this.editedItem.name_committee3,
            name_committee4: this.editedItem.name_committee4,
            name_committee5: this.editedItem.name_committee5,
            name_committee6: this.editedItem.name_committee6,
        };
        this.$fixedKeyApi.post(`/committee/`, data).then((response) => {
          if (response.data) {
            console.log("post", response.data);
            this.close();
            this.getCommittee();
          }
        });
      }
    },
  },
};
</script>
