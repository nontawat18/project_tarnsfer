<template>
  <div class="text-center">
    <v-row>
      <v-col cols="6" class="text-center">
        <v-card class="" width="260" outlined height="120" to="/transfer/">
          <v-col>
            <strong>5</strong>
          </v-col>
          <span>จำนวนใบเทียบโอนของฉัน</span>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card class="" width="260" outlined height="120">
          <v-col>
            <strong>5</strong>
          </v-col>
          <span>จำนวนใบเทียบโอนที่รอการอนุมัติ</span>
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
  mounted() {
    if (this.userId == 0 || this.userId == null || this.userId == undefined) {
      this.$router.push("/login/");
    } else {
      this.$router.push("/");
    }
  },
};
</script>
