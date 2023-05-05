<template>
  <div>
    <v-col class="">
      <v-text-field
        v-model="search"
        label="ค้นหา"
        outlined
        dense
        class=""
      ></v-text-field>
    </v-col>
    <v-col class="text-right" v-if="userLogin.role.role != 'teacher'">
      <v-btn color="" elevation="0" fab small class="mb-2" to="/transfer/new/">
        <v-icon> mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <div>
      <v-data-table
        :headers="headers"
        :items="equivalentCourse"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>รายชื่อผู้ขอเทียบโอน</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>

            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <div>
            <v-btn
              small
              color="primary"
              class="mr-2"
              @click="toDetail(item.id)"
            >
              ดูข้อมูล
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    dialog: false,
    search: "",
    selected: "ขอเทียบโอนรายวิชา",
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
    headers: [
      {
        text: "ผู้ขอเทียบโอน",
        align: "start",
        sortable: false,
        value: "created_user.full_name",
      },
      {
        text: "วันที่ขอ",
        value: "created_at",
      },
      {
        text: "สถานะ",
        value: "status",
      },

      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    userLogincheck: {
      get() {
        if (this.$store.state.users.userLogin) {
          return this.$store.state.users.userLogin;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  mounted() {
    this.getEquivalentCourse();
    this.getTeacher();
    this.getSchoolCourse();
    this.getProfile();
  },
  methods: {
    ...mapActions({
      getEquivalentCourse: "transfer/getEquivalentCourse",
      getTeacher: "users/getTeacher",
      getSchoolCourse: "subject/getSchoolCourse",
      getProfile: "users/getProfile",
    }),
    toDetail(id) {
      console.log("getEquivalentCourse show id", id);

      this.$store.dispatch(`transfer/getEquivalentCourseByID`, {
        id: id,
      });
      this.$router.push("/transfer/detail/");
    },
  },
};
</script>
