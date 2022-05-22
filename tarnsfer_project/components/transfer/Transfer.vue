<template>
  <div>
    <v-card class="ma-2 pa-3" elevation="0">
      <v-row>
        <!-- <v-col cols="12" class="pl-2 pr-2 pt-2 pb-0">
          <v-combobox
            label="หลักสูตร"
            :items="course"
            item-text="name"
            item-value="id"
            outlined
            dense
            @v-on:change="onChange()"
            @change="send(nameCourse)"
            v-model="nameCourse"
          ></v-combobox>
        </v-col> -->
        <v-col cols="6" class="pl-2 pr-2 pt-2 pb-0">
          <v-combobox
            label="วิชาที่จะเทียบ"
            :items="myCourse"
            item-text="course_title"
            item-value="id"
            outlined
            dense
            @v-on:change="onChange()"
            v-model="nameSubjectTransfer"
          ></v-combobox>
        </v-col>
        <v-col cols="6" class="pl-2 pr-2 pt-2 pb-0">
          <v-combobox
            label="วิชาตามหลักสูตร"
            outlined
            :items="schoolCourse"
            item-text="course_title"
            item-value="id"
            dense
            v-on:change="onChange()"
            v-model="nameSubject"
          ></v-combobox>
        </v-col>

        <v-col cols="12" class="pl-1 pt-0">
          <v-btn
            color="red"
            dark
            class="float-right"
            rounded
            elevation="0"
            small
            @click="removeFormElement"
            ><v-icon small left>mdi-delete</v-icon>ลบ</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  props: ["index", "lengths", "_uuid"],
  data() {
    return {
      creditTransfer: null,
      subjectDetailTransfer: null,
      nameSubjectTransfer: null,
      subjectSerailTransfer: null,
      credit: null,
      subjectDetail: null,
      nameSubject: null,
      nameCourse: null,
      subjectSerail: null,
    };
  },
  computed: {
    // subjectStorage: {
    //   get() {
    //     if (this.$store.state.subjects.subjectStorage) {
    //       return this.$store.state.subjects.subjectStorage.result;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    // },
    // subject: {
    //   get() {
    //     if (this.$store.state.subjects.subject) {
    //       return this.$store.state.subjects.subject.result;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    // },
    // course: {
    //   get() {
    //     if (this.$store.state.subjects.course) {
    //       return this.$store.state.subjects.course.result;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    //},
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
  },
  mounted() {
    this.getSchoolCourse();
    this.getMyCourse();
    this.getEquivalentCourse();

    // this.getSubject(
    //    this.$store.dispatch(`subjects/getSubject`, {
    //     id: '',
    //   })
    // );
    // this.getCourse();
  },
  methods: {
    // ...mapActions({
    //   getSubjectInStorage: "subjects/getSubjectInStorage",
    //   getSubject: "subjects/getSubject",
    //   getCourse: "subjects/getCourse",
    // }),
    // send(id){
    // this.$store.dispatch(`subjects/getSubject`, {
    //     id: id.id,
    //   });
    // },
    ...mapActions({
      getSchoolCourse: "subject/getSchoolCourse",
      getMyCourse: "subject/getMyCourse",
      getEquivalentCourse: "transfer/getEquivalentCourse",
    }),
    removeFormElement() {
      console.log("delete", this.lengths, this.index);
      let lengths = this.lengths;
      lengths.splice(this.index, 1);
      this.lengths = lengths;
      this.$emit("onChange");
    },
    async onChange() {
      await this.$emit("onChange");
      await this.$emit("update", {
        index: this.index,
        nameSubjectTransfer: this.nameSubjectTransfer,
        nameSubject: this.nameSubject,
        nameCourse: this.nameCourse,
      });
    },
  },
};
</script>
