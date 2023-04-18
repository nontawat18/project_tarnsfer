<template>
  <div>
    <v-card elevation="1">
      <v-col>
        <v-row class="pa-4">
          <v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="first_name"
              :rules="[rules.required]"
              label="ชื่อ"
              required
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="last_name"
              :rules="[rules.required]"
              label="สกุล"
              required
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="username"
              :rules="[rules.required]"
              label="Username"
              required
              outlined
              dense
            ></v-text-field> </v-col
          ><v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              required
              outlined
              dense
              @click:append="show1 = !show1"
            ></v-text-field> </v-col
          ><v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="confirm_password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              label="Confirm Password"
              required
              outlined
              dense
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-combobox
              v-model="role"
              :items="roles"
              item-text="name"
              item-value="name"
              :rules="[rules.required]"
              label="Role"
              required
              outlined
              dense
            ></v-combobox>
          </v-col>
          <v-col sm="6" cols="12" class="pt-0 pb-0">
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
              required
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col class="text-center">
          <v-btn @click="create()" elevation="0" color="grey" dark>
            เพิ่มสมาชิก
          </v-btn>
        </v-col>
      </v-col>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {

  data() {
    return {
      valid2: false,
      title: "",
      name: "",
      tel: "",
      userStudy: "",
      serailNumber: "",
      education: "",
      image: null,
      base64: "",
      email: "",
      loginFailed: false,
      accountId: 0,
      employeeId: null,
      userId: null,
      error: false,
      show1: false,
      rules: {
        required: (value) => !!value || "จำเป็นต้องระบุ",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
      yearOfStudy: "",
      univercity: "",
      faculty: "",
      branch: "",

      first_name: "",
      last_name: "",
      username: "",
      password: "",
      confirm_password: "",
      email: "",
      role: "",

      year: "",

      roles: [
        {
          id: 1,
          name: "admin",
        },
        {
          id: 2,
          name: "judge",
        },

        {
          id: 3,
          name: "student",
        },

        {
          id: 4,
          name: "teacher",
        },
      ],
    };
  },
  computed: {
    titleUsers: {
      get() {
        if (this.$store.state.users.titleUsers) {
          return this.$store.state.users.titleUsers.result;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  mounted() {
    this.getTitleUsers();
  },
  methods: {
    ...mapActions({
      getTitleUsers: "users/getTitleUsers",
    }),
    create() {
      let data = {
        first_name: this.first_name,
        last_name: this.last_name,
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        role: this.role.name,
      };

      this.$fixedKeyApi.post(`/users/`, data).then((response) => {
        if (response.data) {
          console.log("post", response.data);
          this.$router.push("/");
          this.$toast.success("เพิ่มสมาชิกในระบบแล้ว").goAway(1500);
        }
      });
    },
  },
};
</script>
