<template>
  <div class="pt-4">
    <v-data-table
      :headers="headers"
      :items="schoolCourse"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>รายวิชาในมหาวิทยาลัย</v-toolbar-title>
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
                  <span class="text-h5">รายวิชาในมหาวิทยาลัย</span>
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
                          v-model="editedItem.course_year"
                          label="ปี พ.ศ"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        

                        <v-textarea
                          outlined
                          dense
                          label="คำอธิบายรายวิชา"
                          v-model="editedItem.description_file"
                        ></v-textarea>
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
          <v-icon small color="primary" disabled class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small color="red" disabled @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

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
        text: "รหัสวิชา",
        align: "start",
        sortable: false,
        value: "course_code",
      },
      { text: "ชื่อวิชา", value: "course_title", sortable: false },
      { text: "หน่วยกิจ", value: "credit", sortable: false },
      { text: "ประเภทรายวิชา", value: "credit_type", sortable: false },
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
    },
    defaultItem: {
      id: 0,
      course_code: "",
      course_title: "",
      course: 0,
      credit_type: 0,
      credit: 0,
      description_file: "",
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
    this.getSchoolCourse();
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
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


    editItem(item) {
      this.editedIndex = this.schoolCourse.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.idSubject = item.id;
      console.log("item", this.idSubject, item);
    },

    deleteItem(item) {
      this.editedIndex = this.schoolCourse.indexOf(item);
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

      this.$fixedKeyApi.delete(`/school-course/${id}`).then((response) => {
        console.log("delete", response);
        if (response.status == 204) {
          this.closeDelete();
          this.getSchoolCourse();
        }
      });
    },
    save() {
      if (this.editedIndex > -1) {
        let id = this.idSubject;

        // Object.assign(this.desserts[this.editedIndex], this.editedItem);
        let data = {
          course_code: this.editedItem.course_code,
          course_title: this.editedItem.course_title,
          credit_type: this.editedItem.credit_type,
          credit: this.editedItem.credit,
          course: null,
          subject: null,
          course_year: this.editedItem.course_year,
          description_file: this.editedItem.description_file,
          created_user: 1,
        };
        this.$fixedKeyApi
          .patch(`/school-course/${id}/`, data)
          .then((response) => {
            if (response.data) {
              console.log("patch", response.data);
              this.close();
              this.getSchoolCourse();
            }
          });
      } else {
        let data = {
          course_code: this.editedItem.course_code,
          course_title: this.editedItem.course_title,
          credit_type: this.editedItem.credit_type,
          credit: this.editedItem.credit,
          course: null,
          subject: null,
          course_year: this.editedItem.course_year,
          description_file: this.editedItem.description_file,
          created_user: 1,
        };
        this.$fixedKeyApi.post(`/school-course/`, data).then((response) => {
          if (response.data) {
            console.log("post", response.data);
            this.close();
            this.getSchoolCourse();
          }
        });
      }
    },
  },
};
</script>
