<template>
  <div>
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
