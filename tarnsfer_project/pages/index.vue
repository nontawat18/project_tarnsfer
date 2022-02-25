<template>
  <div>
    <v-row>
      <v-col cols="6" class="text-center">
        <v-card class="" width="260" outlined height="120" to="/transfer/">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1 ">
                5
              </v-list-item-title>
              <v-list-item-subtitle>จำนวนใบเทียบโอนของฉัน</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions> -->
        </v-card>
      </v-col>
      <v-col cols="6"  class="text-center">
        <v-card class="" width="260" outlined height="120">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1 text-center">
                5
              </v-list-item-title>
              <v-list-item-subtitle>จำนวนใบเทียบโอนที่รอการอนุมัติ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
   computed: {
    userId: {
      get() {
        if (this.$store.state.users.userId) {
          return this.$store.state.users.userId;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  mounted(){
        if (
      this.userId == 0 ||
      this.userId == null ||
      this.userId == undefined
    ) {
      this.$router.push("/login/");
    } else {
      this.$router.push("/");
    }
  }
}
</script>
