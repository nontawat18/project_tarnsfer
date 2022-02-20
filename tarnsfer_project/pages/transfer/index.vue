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
    <v-col class="text-right">
      <!-- <v-btn color="" elevation="0" fab small class="mb-2">
        <v-icon> mdi-plus</v-icon>
      </v-btn> -->

      <v-dialog v-model="dialog" width="90%">
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
              <v-col ols="6" class="pb-0 ">
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
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>

    <div>
      <v-row>
        <v-col v-for="(menu, i) in headers" :key="i" cols="12" sm="3">
          <v-card elevation="1" height="75" width="100%">
            <v-col>
              {{ menu.text }}
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    selected: "",
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
  }),
};
</script>
