<template>
  <div>
    <v-form v-model="valid" v-on:submit.prevent="userLogout">
      <v-container>
        <v-btn block elevation="0" rounded color="grey" type="submit">ออกจากระบบ</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
    };
  },

  methods: {
    userLogout() {
      this.$store.dispatch("users/setPartnerId", 0);
      this.$store.dispatch("users/setUserId", 0);

      this.$store.dispatch("users/saveUser", null);
      this.$router.push("/");
    },
  },
};
</script>
