<template>
  <v-list expand nav dense elevation="0" >
    <!-- <div v-for="(menu, i) in menus" :key="i">
      <v-list-item v-if="!menu.sub_menus" :to="menu.route" avatar class="v-list-item">
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="menu.name" />
      </v-list-item>

      <v-list-group v-else eager :key="menu.name" no-action :value="false">
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="sub_menus in menu.sub_menus"
          :to="sub_menus.route"
          :key="sub_menus.name"
        >
          <v-list-item-title>{{ sub_menus.name }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </div> -->
    <div>
      <v-list-item :to="`/`" class="v-list-item">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="`หน้าแรก`" />
      </v-list-item>
    </div>
    <div>
      <v-list-item :to="`/subject/`" class="v-list-item">
        <v-list-item-icon>
          <v-icon>mdi-database</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="`คลังวิชา`" />
      </v-list-item>
    </div>
    <div>
      <v-list-item :to="`/transfer/`" class="v-list-item">
        <v-list-item-icon>
          <v-icon>mdi-file-export</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="`การเทียบโอน`" />
      </v-list-item>
    </div>
    <div>
      <v-list-item :to="`/profile/`" class="v-list-item">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="`โปรไฟล์`" />
      </v-list-item>
    </div>
    <div>
      <v-list-item :to="`/logout/`" class="v-list-item">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="`ออกจากระบบ`" />
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    // menus: {
    //   get() {
    //     if (this.$store.state.users.dashboardMenus) {
    //       return this.$store.state.users.dashboardMenus.results;
    //     } else {
    //       return null;
    //     }
    //   },
    //   set() {},
    // },
  },
};
</script>

<style scoped>
.v-application--is-ltr
  .v-list--dense.v-list--nav
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding: 0 24px;
}
</style>
