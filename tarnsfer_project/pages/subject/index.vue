<template>
  <div class="pt-4">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>คลังวิชา</v-toolbar-title>
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
        <v-icon small color="primary" class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small color="red"  @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
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
        value: "serail_subject",
      },
      { text: "ชื่อ", value: "subject_name", sortable: false },
      { text: "คำอธิบายรายวิชา", value: "description", sortable: false },
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
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          serail_subject: "Frozen Yogurt",
          subject_name: 159,
          description: 6.0,
          grade: 24,
          credit: 4.0,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Ice cream sandwich",
          subject_name: 237,
          description: 9.0,
          grade: 37,
          credit: 4.3,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Eclair",
          subject_name: 262,
          description: 16.0,
          grade: 23,
          credit: 6.0,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Cupcake",
          subject_name: 305,
          description: 3.7,
          grade: 67,
          credit: 4.3,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Gingerbread",
          subject_name: 356,
          description: 16.0,
          grade: 49,
          credit: 3.9,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Jelly bean",
          subject_name: 375,
          description: 0.0,
          grade: 94,
          credit: 0.0,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Lollipop",
          subject_name: 392,
          description: 0.2,
          grade: 98,
          credit: 0,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Honeycomb",
          subject_name: 408,
          description: 3.2,
          grade: 87,
          credit: 6.5,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "Donut",
          subject_name: 452,
          description: 25.0,
          grade: 51,
          credit: 4.9,
          univercity: "RMUTI KKC",
        },
        {
          serail_subject: "KitKat",
          subject_name: 518,
          description: 26.0,
          grade: 65,
          credit: 7,
          univercity: "RMUTI KKC",
        },
      ];
    },

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
