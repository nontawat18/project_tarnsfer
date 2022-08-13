<template>
  <v-container>
    <v-row class="mt-16" align="center" justify="center">
      <v-card width="90%" elevation="0">
        <v-card-title>
          <v-col align="center" class="py-2">
            <h3 class="text-center">ลงทะเบียนเข้าใช้งาน</h3>
          </v-col>
        </v-card-title>
        <v-card-text>
          <p class="text-left">สามารถลงทะเบียนเพื่อเข้าใช้งานระบบ</p>
          <!-- <AuthLogin /> -->
        </v-card-text>
        <v-form ref="form1" v-model="valid2" lazy-validation>
          <v-col>
            <v-row>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="firstName"
                  :rules="[rules.required]"
                  label="ชื่อ"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="lastName"
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
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
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
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="login.confPassword"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-1"
                  label="ยืนยันรหัสผ่าน"
                  counter
                  outlined
                  dense
                  @click:append="show2 = !show2"
                ></v-text-field>
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
          </v-col>
        </v-form>
        <v-col class="pt-2">
          <v-btn block rounded elevation="0" color="primary" @click="create">
            ลงทะเบียนเข้าใช้
          </v-btn>
        </v-col>
        <v-col class="pt-2">
          <v-btn block rounded elevation="0" color="gray" to="/login">
            ย้อนกลับหน้า login
          </v-btn>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
const dataURItoBlob = (dataURI) => {
  const bytes =
    dataURI.split(",")[0].indexOf("base64") >= 0
      ? atob(dataURI.split(",")[1])
      : unescape(dataURI.split(",")[1]);
  const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const max = bytes.length;
  const ia = new Uint8Array(max);
  for (let i = 0; i < max; i += 1) ia[i] = bytes.charCodeAt(i);
  return new Blob([ia], { type: mime });
};

const resizeImage = ({ file, maxSize }) => {
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement("canvas");

  const resize = () => {
    let { width, height } = image;

    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else if (height > maxSize) {
      width *= maxSize / height;
      height = maxSize;
    }

    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/jpeg");

    return dataURItoBlob(dataUrl);
  };

  return new Promise((ok, no) => {
    if (!file.type.match(/image.*/)) {
      no(new Error("Not an image"));
      return;
    }

    reader.onload = (readerEvent) => {
      image.onload = () => ok(resize());
      image.src = readerEvent.target.result;
    };

    reader.readAsDataURL(file);
  });
};
import { mapActions, mapState } from "vuex";

export default {
  layout: "empty",

  data() {
    return {
      login: {
        password: "",
        confPassword: "",
      },
      valid2: false,
      title: "",
      name: "",
      tel: "",
      firstName:"",
      lastName:"",
      userName:'',
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
      year: "",
      typeUserStudy: [
        {
          id: "1",
          name: "ภาคปกติ",
        },
        {
          id: "2",
          name: "ภาค กศ.บป.",
        },
      ],
      typeEducation: [
        {
          id: "1",
          name: "ปริญญาตรี",
        },
        {
          id: "2",
          name: "บัณฑิตศึกษา",
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
  },
  methods: {

    create() {
     let data = {

        first_name: this.firstName,
        last_name: this.lastName,
        username: this.username,
        password: this.login.password,
        confirm_password: this.login.confPassword,
        email: this.email,
        role: "student",
      };

      this.$fixedKeyApi.post(`/users/`, data).then((response) => {
        if (response.data) {
          console.log("post", response.data);
          this.$router.push("/login");
        }
      });
    },
    async uploadImage(image) {
      console.log(image);
      if (image) {
        let file = await image;
        if (!file.type.match(/image.*/)) {
          no(new Error("Not an image"));
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => (this.originalImg = e.target.result);
        reader.readAsDataURL(file);

        resizeImage({ file: file, maxSize: 600 })
          .then((resizedImage) => {
            reader.readAsDataURL(resizedImage);
            this.base64 = reader;
            console.log(this.base64);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
};
</script>
