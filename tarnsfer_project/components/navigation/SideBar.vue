<template>
  <div>
    <v-list
      expand
      nav
      dense
      elevation="0"
      v-if="userLogin.role.role == 'admin'"
    >
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
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`คลังวิชา`" />
        </v-list-item>
      </div>
      <div>
        <v-list-item :to="`/basesubject/`" class="v-list-item">
          <v-list-item-icon>
            <v-icon>mdi-book-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`เพิ่มรายวิชามหาวิทยาลัย`" />
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
        <v-list-item :to="`/user/`" class="v-list-item">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`สร้างบัญชีผู้ใช้`" />
        </v-list-item>
      </div>
      <div>
        <v-list-item @click="userLogout()" class="v-list-item">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`ออกจากระบบ`" />
        </v-list-item>
      </div>
    </v-list>

    <v-list
      expand
      nav
      dense
      elevation="0"
      v-if="userLogin.role.role == 'student'"
    >
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
            <v-icon>mdi-book</v-icon>
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
        <v-list-item @click="userLogout()" class="v-list-item">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`ออกจากระบบ`" />
        </v-list-item>
      </div>
    </v-list>
    <v-list
      expand
      nav
      dense
      elevation="0"
      v-if="userLogin.role.role == 'teacher'"
    >
      <div>
        <v-list-item :to="`/`" class="v-list-item">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`หน้าแรก`" />
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
        <v-list-item @click="userLogout()" class="v-list-item">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="`ออกจากระบบ`" />
        </v-list-item>
      </div>
    </v-list>
  </div>
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
    userLogin: {
      get() {
        if (this.$store.state.users.userLogin) {
          return this.$store.state.users.userLogin.user;
        } else {
          return null;
        }
      },
      set() {},
    },
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

<style scoped>
.v-application--is-ltr
  .v-list--dense.v-list--nav
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding: 0 24px;
}
</style>
