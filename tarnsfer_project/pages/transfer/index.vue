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
      <v-btn
        color=""
        elevation="0"
        fab
        small
        class="mb-2"

      >
        <v-icon> mdi-plus</v-icon>
      </v-btn>
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
