<template>
  <div class="pt-4">
    <v-data-table
      :headers="headers"
      :items="profileAll"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>รายชื่อผู้ใช้</v-toolbar-title>
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
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.course_code"
                          label="รหัสวิชา"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.course_title"
                          label="ชื่อวิชา"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          v-model="editedItem.credit_type"
                          label="ประเภทรายวิชา"
                          :items="type"
                          item-text="name"
                          item-value="id"
                          outlined
                          dense
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.credit"
                          label="หน่วยกิจ"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.grade"
                          label="เกรด"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.school"
                          label="วิทยาลัย/มหาวิทยาลัย"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <!-- <v-text-field
                        v-model="editedItem.description_file"
                        label="คำอธิบายรายวิชา"
                        outlined
                        dense
                      ></v-text-field> -->
                        <!-- <v-file-input
                        outlined
                        dense
                        label="คำอธิบายรายวิชา"
                        v-model="image"
                        @change="uploadImage(image)"
                      ></v-file-input> -->
                        <v-textarea
                          outlined
                          dense
                          label="คำอธิบายรายวิชา"
                          v-model="editedItem.description_file"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.course_year"
                          label="ปี พ.ศ"
                          outlined
                          dense
                        ></v-text-field>
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
          <v-icon small color="red" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
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
          <v-icon small color="red" disabled @click="deleteItem(item)">
            mdi-delete
          </v-icon>
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
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
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
    idSubject: "",

    type: [
      {
        id: "ท",
        name: "ทฤษฎี",
      },
      {
        id: "ป",
        name: "ปฏิบัติ",
      },
    ],
    headers: [
      {
        text: "ชื่อ",
        align: "start",
        sortable: false,
        value: "first_name",
      },
      { text: "นามสกุล", value: "last_name", sortable: false },
      { text: "username", value: "username", sortable: false },
      { text: "role", value: "role.role", sortable: false },
      { text: "email", value: "email", sortable: false },

      // { text: "หลักสูตร", value: "course", sortable: false },
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
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },
  mounted() {
    this.getSchoolCourse();
    this.getMyCourse();
    this.getProfileAll();
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
      getMyCourse: "subject/getMyCourse",
      getProfileAll: "users/getProfileAll",
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
    initialize() {
      this.desserts = [
        {
          course_code: "Frozen Yogurt",
          course_title: 159,
          course: 6.0,
          credit_type: 24,
          credit: 4.0,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Ice cream sandwich",
          course_title: 237,
          course: 9.0,
          credit_type: 37,
          credit: 4.3,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Eclair",
          course_title: 262,
          course: 16.0,
          credit_type: 23,
          credit: 6.0,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Cupcake",
          course_title: 305,
          course: 3.7,
          credit_type: 67,
          credit: 4.3,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Gingerbread",
          course_title: 356,
          course: 16.0,
          credit_type: 49,
          credit: 3.9,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Jelly bean",
          course_title: 375,
          course: 0.0,
          credit_type: 94,
          credit: 0.0,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Lollipop",
          course_title: 392,
          course: 0.2,
          credit_type: 98,
          credit: 0,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Honeycomb",
          course_title: 408,
          course: 3.2,
          credit_type: 87,
          credit: 6.5,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "Donut",
          course_title: 452,
          course: 25.0,
          credit_type: 51,
          credit: 4.9,
          description_file: "RMUTI KKC",
        },
        {
          course_code: "KitKat",
          course_title: 518,
          course: 26.0,
          credit_type: 65,
          credit: 7,
          description_file: "RMUTI KKC",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.myCourse.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.idSubject = item.id;
      console.log("item", this.idSubject, item);
    },

    deleteItem(item) {
      this.editedIndex = this.myCourse.indexOf(item);
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

      this.$fixedKeyApi.delete(`/my-course/${id}`).then((response) => {
        console.log("delete", response);
        if (response.status == 204) {
          this.closeDelete();
          this.getMyCourse();
        }
      });
    },
    save() {
      if (this.editedIndex > -1) {
        // Object.assign(this.desserts[this.editedIndex], this.editedItem);
        let id = this.idSubject;
        let data = {
          course_code: this.editedItem.course_code,
          course_title: this.editedItem.course_title,
          credit_type: this.editedItem.credit_type,
          credit: this.editedItem.credit,
          grade: this.editedItem.grade,
          school: this.editedItem.school,
          course: null,
          subject: null,
          course_year: this.editedItem.course_year,
          description_file: this.editedItem.description_file,
          created_user: this.userId,
        };
        this.$fixedKeyApi.patch(`/my-course/${id}/`, data).then((response) => {
          if (response.status == 200) {
            console.log("patch", response.data);
            this.close();
            this.getMyCourse();
          }
        });
      } else {
        let data = {
          course_code: this.editedItem.course_code,
          course_title: this.editedItem.course_title,
          credit_type: this.editedItem.credit_type,
          credit: this.editedItem.credit,
          grade: this.editedItem.grade,
          school: this.editedItem.school,
          course: null,
          subject: null,
          course_year: this.editedItem.course_year,
          description_file: this.editedItem.description_file,
          created_user: this.userId,
        };
        this.$fixedKeyApi.post(`/my-course/`, data).then((response) => {
          if (response.data) {
            console.log("post", response.data);
            this.close();
            this.getMyCourse();
          }
        });
      }
    },
  },
};
</script>
