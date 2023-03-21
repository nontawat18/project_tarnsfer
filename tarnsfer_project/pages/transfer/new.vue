<template>
  <div>
    <v-col class="">
 
        <v-card-title class="text-h5"> สร้างการเทียบโอน </v-card-title>

      <TransferSubject />

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
  },
};
</script>
