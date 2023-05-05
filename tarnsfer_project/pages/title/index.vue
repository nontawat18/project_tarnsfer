<template>
  <div class="pt-4">
    <v-data-table
      :headers="headers"
      :items="title"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>คำนำหน้า</v-toolbar-title>
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
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="คำนำหน้า"
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
      { text: "ชื่อ", value: "name", sortable: false },
      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      name: "",
    },
    defaultItem: {
      id: 0,
      name: "",
    },
    idTitle: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "เพิ่มคำนำหน้า" : "แก้ไขคำนำหน้า";
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
    title: {
      get() {
        if (this.$store.state.users.title) {
          return this.$store.state.users.title.results;
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
    this.getTitle();
  },
  methods: {
    ...mapActions({
      getTitle: "users/getTitle",
    }),

    editItem(item) {
      this.editedIndex = this.title.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.idTitle = item.id;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.title.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.idTitle = item.id;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      let id = this.idTitle;

      this.$fixedKeyApi.delete(`/title/${id}`).then((response) => {
        console.log("delete", response);
        if (response.status == 204) {
          this.closeDelete();
          this.getTitle();
        }
      });
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
        let id = this.idTitle;

        let data = {
          name: this.editedItem.name,
        };
        this.$fixedKeyApi.patch(`/title/${id}/`, data).then((response) => {
          if (response.status == 200) {
            console.log("patch", data);
            this.close();
            this.getTitle();
          } else {
            console.log("patch", data);
          }
        });
      } else {
        let data = {
          name: this.editedItem.name,
        };
        this.$fixedKeyApi.post(`/title/`, data).then((response) => {
          if (response.data) {
            console.log("post", response.data);
            this.close();
            this.getTitle();
          }
        });
      }
    },
  },
};
</script>
