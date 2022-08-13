<template>
  <div>
    <v-col>
      <v-row>
        <v-card outlined width="100%">
          <v-col>
            <h3>
              ประเภทการเทียบโอน : {{ equivalentCourseByID.equivalent_type }}
            </h3>
            <h3>
              รายวิชาที่ขอเทียบ :
              {{
                equivalentCourseByID.equivalent_item[0].student_course
                  .course_title
              }}
            </h3>
            <h3>
              รายวิชาต้องการเทียบ :
              {{
                equivalentCourseByID.equivalent_item[0].course_enroll
                  .course_title
              }}
            </h3>
            <br />
            <h3>
              ที่ปรึกษา :
              {{ equivalentCourseByID.advisor.first_name }}
              {{ equivalentCourseByID.advisor.last_name }}
            </h3>
               <h3>
              หัวหน้าสาขาวิชา :
              {{ equivalentCourseByID.head_department.first_name }}
              {{ equivalentCourseByID.head_department.last_name }}
            </h3>
               <h3>
              หัวหน้าสำนักงานคณบดี :
              {{ equivalentCourseByID.head_educational.first_name }}
              {{ equivalentCourseByID.head_educational.last_name }}
            </h3>
               <h3>
              รองคณบดีฝ่ายวิชาการและวิจัย :
              {{ equivalentCourseByID.deputy_dean_a_r.first_name }}
              {{ equivalentCourseByID.deputy_dean_a_r.last_name }}
            </h3>
               <h3>
              คณบดี :
              {{ equivalentCourseByID.dean.first_name }}
              {{ equivalentCourseByID.dean.last_name }}
            </h3>
               <h3>
              หัวหน้าแผนกงานส่งเสริมวิาการและงานทะเบียน :
              {{ equivalentCourseByID.head_academic_p_r.first_name }}
              {{ equivalentCourseByID.head_academic_p_r.last_name }}
            </h3>
               <h3>
              เจ้าหน้าที่ทะเบียน :
              {{ equivalentCourseByID.registrar_officer.first_name }}
              {{ equivalentCourseByID.registrar_officer.last_name }}
            </h3>

            <br />
            <h3>
              คณะกรรมการที่ 1 :
              {{ equivalentCourseByID.name_committee1.first_name }}
              {{ equivalentCourseByID.name_committee1.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 2 :
              {{ equivalentCourseByID.name_committee2.first_name }}
              {{ equivalentCourseByID.name_committee2.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 3 :
              {{ equivalentCourseByID.name_committee3.first_name }}
              {{ equivalentCourseByID.name_committee3.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 4 :
              {{ equivalentCourseByID.name_committee4.first_name }}
              {{ equivalentCourseByID.name_committee4.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 5 :
              {{ equivalentCourseByID.name_committee5.first_name }}
              {{ equivalentCourseByID.name_committee5.last_name }}
            </h3>
            <h3>
              คณะกรรมการที่ 6 :
              {{ equivalentCourseByID.name_committee6.first_name }}
              {{ equivalentCourseByID.name_committee6.last_name }}
            </h3>

            <!-- {{ equivalentCourseByID }} -->
          </v-col>
        </v-card>
      </v-row>
    </v-col>
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
    equivalentCourseByID: {
      get() {
        if (this.$store.state.transfer.equivalentCourse) {
          return this.$store.state.transfer.equivalentCourseByID;
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
    this.getEquivalentCourseByID();
    this.getTeacher();
    this.getSchoolCourse();
  },
  methods: {
    ...mapActions({
      getEquivalentCourseByID: "transfer/getEquivalentCourseByID",
      getTeacher: "users/getTeacher",
      getSchoolCourse: "subject/getSchoolCourse",
    }),
  },
};
</script>
