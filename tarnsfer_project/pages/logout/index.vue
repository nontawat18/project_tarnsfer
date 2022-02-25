<template>
  <div>
    <AppBarDetail :back_path="backPath" />

    <v-card elevation="0">
      <v-card-title>
        <h3 class="text-center">ต้องการออกจากระบบ?</h3>
      </v-card-title>
      <v-card-text>
        <p class="text-left"></p>
        <AuthLogout />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "empty",
  computed: {
    backPath() {
      if (this.$nuxt.context.from) {
        let from_path = this.$nuxt.context.from.path;

        return from_path;
      }
    },
  },
};
</script>
