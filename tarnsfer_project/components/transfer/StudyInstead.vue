<template>
  <div>
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
              :items="head_educational"
              item-text="full_name"
              item-value="id"
              v-model="approvThree"
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
    <v-col class="pb-0 pt-0">
      <v-col class="pb-8">
        <strong>รายวิชาที่ขอเทียบ</strong>
      </v-col>
      <v-row>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-combobox
            label="วิชาเดิมที่ขอเทียบ"
            outlined
            :items="schoolCourse"
            item-text="course_title"
            dense
            item-value="id"
            v-model="subjectOld"
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-combobox
            label="หลักสูตร"
            outlined
            dense
            :items="subject"
            item-text="name"
            item-value="id"
            v-model="couseOld"
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-combobox
            label="สาขาวิชา"
            outlined
            dense
            :items="subject"
            item-text="name"
            item-value="id"
            v-model="branceOld"
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-text-field
            label="ปี พ.ศ"
            dense
            outlined
            v-model="yearOld"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="pt-0">
      <v-col class="pb-8">
        <strong>รายวิชาที่ขอเรียนแทน</strong>
      </v-col>
      <v-row>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-combobox
            label="รายวิชาที่ขอเรียนแทน"
            outlined
            dense
            :items="schoolCourse"
            item-text="course_title"
            item-value="id"
            v-model="subjectNew"
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-combobox
            label="หลักสูตร"
            outlined
            dense
            :items="subject"
            item-text="name"
            item-value="id"
            v-model="couseNew"
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-combobox
            label="สาขาวิชา"
            outlined
            dense
            :items="subject"
            item-text="name"
            item-value="id"
            v-model="branceNew"
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" class="pt-0 pb-0">
          <v-text-field
            label="ปี พ.ศ"
            dense
            outlined
            v-model="yearNew"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-col class="pb-8">
        <strong>ผลการพิจารณาของคณะกรรมการเทียบโอน</strong>
      </v-col>
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
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      subjectOld: "",
      subjectNew: "",
      couseOld: "",
      couseNew: "",
      branceOld: "",
      branceNew: "",
      yearOld: "",
      yearNew: "",
      subject: [
        { name: "calculus 1 ", id: 1 },
        { name: "python", id: 2 },
        { name: "oop", id: 3 },
        { name: "network", id: 4 },
        { name: "microcoltroler", id: 5 },
        { name: "math", id: 6 },
        { name: "digiton", id: 7 },
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
  },
  mounted() {
    this.getSchoolCourse();
  },
  methods: {
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
    }),
  },
};
</script>
