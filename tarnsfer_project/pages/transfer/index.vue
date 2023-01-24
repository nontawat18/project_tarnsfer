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
    <!-- {{ equivalentCourse }} -->
    <v-col class="text-right" v-if="userLogin.role.role != 'teacher'">
      <!-- <v-btn color="" elevation="0" fab small class="mb-2">
        <v-icon> mdi-plus</v-icon>
      </v-btn> -->
      <v-btn color="" elevation="0" fab small class="mb-2" to="/transfer/new/">
        <v-icon> mdi-plus</v-icon>
      </v-btn>
      <!-- <v-dialog v-model="dialog" width="90%">
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
          <v-card-title class="text-h5"> สร้างการเทียบโอน </v-card-title>
          <v-divider></v-divider>

          <v-col>
            <v-row>
              <v-col cols="6" class="pb-0 pl-7">
                <v-checkbox
                  v-model="selected"
                  label="ขอเทียบโอนรายวิชา"
                  value="ขอเทียบโอนรายวิชา"
                ></v-checkbox>
              </v-col>
              <v-col ols="6" class="pb-0">
                <v-checkbox
                  v-model="selected"
                  label="ขอเทียบเพื่อเรียนแทน"
                  value="ขอเทียบเพื่อเรียนแทน"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="this.selected == 'ขอเทียบโอนรายวิชา'">
            <TransferSubject />
          </v-col>
          <v-col v-else>
            <TransferStudyInstead />
          </v-col>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> บันทึก </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
    </v-col>
    <div>
      <v-row>
        <v-col v-for="menu in equivalentCourse" :key="menu.id" cols="12" sm="3">
          <v-card outlined width="100%" @click="toDetail(menu.id)">
            <v-col>
              <v-chip class="" small>
                {{ menu.status }}
              </v-chip>
            </v-col>
            <v-divider></v-divider>

            <v-col>
              {{ menu.equivalent_type }}

            </v-col>
              <v-col class="pt-0 ">
              {{ menu.created_user.first_name }}
              {{ menu.created_user.last_name }}
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-col v-if="count == 0">
        <strong>ไม่มีใบเทียบโอน</strong>
      </v-col>
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
    headers: [
      {
        text: "TF0001",
        align: "start",
        sortable: false,
        value: "serail_subject",
      },
      { text: "TF0002", value: "subject_name", sortable: false },
      { text: "TF0003", value: "description", sortable: false },
      { text: "TF0004", value: "grade", sortable: false },
      { text: "TF0005", value: "credit", sortable: false },
      { text: "TF0006", value: "univercity", sortable: false },
      { text: "TF0007", value: "actions", sortable: false },
    ],
    // teacher: [
    //   { name: "nontawat", id: 1 },
    //   { name: "thawat", id: 2 },
    //   { name: "worachet", id: 3 },
    //   { name: "piyawat", id: 4 },
    //   { name: "chalermchai", id: 5 },
    //   { name: "anantachai", id: 6 },
    //   { name: "weerawat", id: 7 },
    // ],
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
  },
  mounted() {
    this.getEquivalentCourse();
    this.getTeacher();
    this.getSchoolCourse();
  },
  methods: {
    ...mapActions({
      getEquivalentCourse: "transfer/getEquivalentCourse",
      getTeacher: "users/getTeacher",
      getSchoolCourse: "subject/getSchoolCourse",
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
