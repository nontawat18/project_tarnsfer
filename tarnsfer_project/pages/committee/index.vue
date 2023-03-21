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
          <v-dialog v-model="dialog" max-width="90%">
            
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.name_committee1"
                        label="คณะกรรมการที่ 1"
                        :items="teacher"
                        item-text="full_name"
                        item-value="id"
                        outlined
                        dense
                        @change="updateCom1(editedItem.name_committee1)"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.name_committee2"
                        label="คณะกรรมการที่ 2"
                        :items="teacher"
                        item-text="full_name"
                        item-value="id"
                        outlined
                        dense
                        @change="updateCom2(editedItem.name_committee2)"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.name_committee3"
                        label="คณะกรรมการที่ 3"
                        :items="teacher"
                        item-text="full_name"
                        item-value="id"
                        outlined
                        dense
                        @change="updateCom3(editedItem.name_committee3)"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.name_committee4"
                        label="คณะกรรมการที่ 4"
                        :items="teacher"
                        item-text="full_name"
                        item-value="id"
                        outlined
                        dense
                        @change="updateCom4(editedItem.name_committee4)"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.name_committee5"
                        label="คณะกรรมการที่ 5"
                        :items="teacher"
                        item-text="full_name"
                        item-value="id"
                        outlined
                        dense
                        @change="updateCom5(editedItem.name_committee5)"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.name_committee6"
                        label="คณะกรรมการที่ 6"
                        :items="teacher"
                        item-text="full_name"
                        item-value="id"
                        outlined
                        dense
                        @change="updateCom6(editedItem.name_committee6)"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="close"> ยกเลิก </v-btn>
                <v-btn color="blue darken-1" text @click="save"> บันทึก </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
        <div>
          <v-icon small color="primary" class="mr-2" @click="editItem(item)">
            mdi-pencil
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

      {
        text: "คณะกรรมการที่ 1",
        align: "start",
        sortable: false,
        value: "name_committee1.first_name",
      },
      {
        text: "คณะกรรมการที่ 2",
        value: "name_committee2.first_name",
        sortable: false,
      },
      {
        text: "คณะกรรมการที่ 3",
        value: "name_committee3.first_name",
        sortable: false,
      },
      {
        text: "คณะกรรมการที่ 4",
        value: "name_committee4.first_name",
        sortable: false,
      },
      {
        text: "คณะกรรมการที่ 5",
        value: "name_committee5.first_name",
        sortable: false,
      },
      {
        text: "คณะกรรมการที่ 6",
        value: "name_committee6.first_name",
        sortable: false,
      },

      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    com1: 0,
    com2: 0,
    com3: 0,
    com4: 0,
    com5: 0,
    com6: 0,

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

    this.com1 = this.committee[0].name_committee1.id;
    this.com2 = this.committee[0].name_committee2.id;
    this.com3 = this.committee[0].name_committee3.id;
    this.com4 = this.committee[0].name_committee4.id;
    this.com5 = this.committee[0].name_committee5.id;
    this.com6 = this.committee[0].name_committee6.id;
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
      getMyCourse: "subject/getMyCourse",
      getProfileAll: "users/getProfileAll",
      getCommittee: "users/getCommittee",
      getTeacher: "users/getTeacher",
    }),
    updateCom1(id) {
      this.com1 = id;
    },
    updateCom2(id) {
      this.com2 = id;
    },
    updateCom3(id) {
      this.com3 = id;
    },
    updateCom4(id) {
      this.com4 = id;
    },
    updateCom5(id) {
      this.com5 = id;
    },
    updateCom6(id) {
      this.com6 = id;
    },
    download(item) {
      console.log("item", item);


      const linkSource = item.description_file;
      const downloadLink = document.createElement("a");
      const fileName = "คำอธิบายรายวิชา.pdf";

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    },
    editItem(item) {
      this.editedIndex = this.committee.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.idSubject = item.id;
      console.log("item  fvgb grwgw", this.idSubject, item);
    },

    deleteItem(item) {
      this.editedIndex = this.committee.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.idSubject = item.id;
      console.log("item", this.idSubject, item);
    },



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
      let id = this.idSubject;

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
        let id = this.idSubject;
    
        let data = {
          name_committee1: this.com1,
          name_committee2: this.com2,
          name_committee3: this.com3,
          name_committee4: this.com4,
          name_committee5: this.com5,
          name_committee6: this.com6,
        };
        this.$fixedKeyApi.patch(`/committee/${id}/`, data).then((response) => {
          if (response.status == 200) {
            console.log("patch", data);
            this.close();
            this.getCommittee();
          } else {
            console.log("patch", data);
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
