<template>
  <v-card>
    <v-card-title>
      <h3 class="text-center">คุณออกจากระบบแล้ว</h3>
    </v-card-title>
    <v-card-text>
      <p class="text-left">
        <v-btn class="#3AEE96" round block to="/login/">เข้าระบบอีกครั้ง</v-btn>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  auth: false,
  layout: "empty",
};
</script>

