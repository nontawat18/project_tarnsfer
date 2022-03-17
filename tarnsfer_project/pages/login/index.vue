<template>
  <v-container>
    <v-row class="mt-16" align="center" justify="center">
      <v-card height="90%" width="40%" outlined>
        <v-col class="text-center">

        <img height="50%" width="45%" src="~/assets/logo.png" />
        </v-col>

        <!-- <v-card-title> -->
          <v-col align="center" class="py-2">
            <h3 class="text-center">เข้าสู่ระบบ</h3>
          </v-col>
        <!-- </v-card-title> -->
        <v-card-text>
          <AuthLogin />
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "empty",
};
</script>
