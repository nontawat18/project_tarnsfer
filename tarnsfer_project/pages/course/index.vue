<template>
  <div class="pt-4">
    <v-data-table
      :headers="headers"
      :items="myCourse"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>หลักสูตร</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-spacer></v-spacer>
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
                        v-model="editedItem.serail_subject"
                        label="Dessert serail_subject"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.subject_name"
                        label="subject_name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.description"
                        label="description (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.grade"
                        label="grade (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.credit"
                        label="credit (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
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
        <v-icon small color="primary" class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small color="red" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
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
    headers: [
      {
        text: "รหัสวิชา",
        align: "start",
        sortable: false,
        value: "course_code",
      },
      { text: "ชื่อ", value: "subject", sortable: false },
      { text: "คำอธิบายรายวิชา", value: "description_file", sortable: false },
      { text: "เกรด", value: "grade", sortable: false },
      { text: "หน่วยกิจ", value: "credit", sortable: false },
      { text: "มหาวิทยาลัย/วิทยาลัย", value: "univercity", sortable: false },
      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      serail_subject: "",
      subject_name: 0,
      description: 0,
      grade: 0,
      credit: 0,
      univercity: "",
    },
    defaultItem: {
      serail_subject: "",
      subject_name: 0,
      description: 0,
      grade: 0,
      credit: 0,
      univercity: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "เพิ่มหลักสูตร" : "แก้ไขหลักสูตร";
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
    this.getMyCourse();
  },
  methods: {
    ...mapActions({
      getMyCourse: "subject/getMyCourse",
    }),

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
