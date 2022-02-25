<template>
  <div>
    <v-form v-model="valid" @submit.prevent="userLogin">
      <!-- <Loading ref="loading" /> -->
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="login.username"
              :rules="[rules.required]"
              label="ชื่อผู้ใช้งาน"
              required
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="login.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="รหัสผ่าน"
              counter
              outlined
              dense
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn block rounded color="grey" elevation="0" type="submit">
          เข้าสู่ระบบ
        </v-btn>
        <v-col>
          <v-btn block text rounded color="primary" to="/login/register">
            <span style="">ลงทะเบียนเข้าใช้ </span>
          </v-btn>
        </v-col>
        <v-row v-if="error" class="mt-5">
          <v-col
            ><p class="text-center" style="color: red">
              ไม่สามารถเข้าระบบได้ กรุณาลองอีกครั้งในภายหลัง (500)
            </p></v-col
          >
        </v-row>
        <v-row v-if="loginFailed" class="mt-5">
          <v-col
            ><p class="text-center" style="color: red">
              ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (404)
            </p></v-col
          >
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import config from "@/config";
import { mapState, mapActions } from "vuex";

export default {
  auth: false,
  data() {
    return {
      valid: false,
      login: {
        username: "admin",
        password: "vrpadmin1234",
      },
      loginFailed: false,
      accountId: 0,
      employeeId: null,
      userId: null,
      error: false,
      show1: false,
      rules: {
        required: (value) => !!value || "จำเป็นต้องระบุ",
      },
    };
  },
  computed: {
    ...mapState({
      users: "users",
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 300);
    });
  },

  methods: {
    async userLogin() {
      // this.$refs.loading.start();
      this.loginFailed = false;
      this.error = false;
      try {
        // let response = await this.$auth
        //   .loginWith("local1", {
        //     data: this.login,
        //   })
        //   .then((response) => {
        //     if (response) {
        //       this.$auth.setUserToken(response.data.key);
        //       this.$store.dispatch("users/setUserId", response.data.user.id);
        //       this.$store.dispatch(
        //         "users/setLoggedInApiToken",
        //         response.data.key
        //       );
        //       this.$store.dispatch("users/setEmployee", response.data.user);
        //       this.$store.dispatch("users/setDashboardMenus");

        //       this.$toast.success("เข้าสู่ระบบแล้ว").goAway(1500);
        //       this.$router.push("/");
        //       this.loginFailed = false;
        //     } else {
        //       this.loginFailed = true;
        //       // this.$refs.loading.finish();
        //     }
        //   });

        let data = {
            username: this.login.username,
            password: this.login.password,
            // db: "admin",
        };

        this.$fixedKeyApi.post(`/rest-auth/login/`, data).then((response) => {
          console.log("auth", response);
          if (response.status == 200) {
            this.$store.dispatch("users/saveUser", response.data);
            this.$store.dispatch(
              "users/setUserKey",
              response.data.key
            );
            this.$store.dispatch("users/setUserId", response.data.user.id);
            this.$toast.success("เข้าสู่ระบบแล้ว").goAway(2000);

            this.$router.push("/");
          } else {
            this.loginFailed = true;
          }
        });
      } catch (err) {
        console.log(err);
        this.error = true;
        // this.$refs.loading.finish();
      }
    },
  },
};
</script>
