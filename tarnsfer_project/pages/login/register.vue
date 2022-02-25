<template>
  <v-container>
    <v-col class="pl-10">
      <v-btn elevation="0" drak icon to="/login" color="primary">
        <v-icon large> mdi-chevron-left </v-icon> ย้อนกลับหน้า login
      </v-btn>
    </v-col>
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
                <v-combobox
                  v-model="title"
                  :rules="[rules.required]"
                  label="คำนำหน้า"
                  :items="titleUsers"
                  item-text="name"
                  item-value="id"
                  required
                  outlined
                  dense
                ></v-combobox>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="name"
                  :rules="[rules.required]"
                  label="ชื่อ-สกุล"
                  required
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="tel"
                  :rules="[rules.required]"
                  label="เบอร์โทรศัพท์"
                  required
                  outlined
                  dense
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
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-file-input
                  :rules="[rules.required]"
                  outlined
                  dense
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="mdi-camera"
                  label="อัปโหลดรูปภาพ"
                  @change="uploadImage(image)"
                  v-model="image"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-col>
              <strong>ข้อมูลการศึกษา</strong>
            </v-col>
            <v-row>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="serailNumber"
                  :rules="[rules.required]"
                  label="รหัสนักศึกษา"
                  required
                  placeholder="60332110079-5"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-combobox
                  v-model="userStudy"
                  :rules="[rules.required]"
                  :items="typeUserStudy"
                  item-text="name"
                  item-value="id"
                  label="ประเภทนักศึกษา"
                  required
                  outlined
                  dense
                ></v-combobox>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-combobox
                  v-model="education"
                  :rules="[rules.required]"
                  :items="typeEducation"
                  item-text="name"
                  item-value="id"
                  label="ระดับการศึกษา"
                  required
                  outlined
                  dense
                ></v-combobox>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="yearOfStudy"
                  :rules="[rules.required]"
                  label="ปีที่เข้าศึกษา"
                  required
                  placeholder="เช่น 2565"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="univercity"
                  :rules="[rules.required]"
                  label="กำลังศึกษาที่"
                  required
                  placeholder="เช่น มหาวิทยาลัยราชภัฏมหาสารคาม"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="faculty"
                  :rules="[rules.required]"
                  label="คณะ"
                  required
                  placeholder="เช่น วิศวกรรมศาสตร์ "
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="branch"
                  :rules="[rules.required]"
                  label="สาขา"
                  required
                  placeholder="เช่น วิศวกรรมคอมพิวเตอร์"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col sm="6" cols="12" class="pt-0 pb-0">
                <v-text-field
                  v-model="year"
                  :rules="[rules.required]"
                  label="ชั้นปี"
                  required
                  placeholder="เช่น ชั้นปี 3"
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
    this.getTitleUsers();
  },
  methods: {
    ...mapActions({
      getTitleUsers: "users/getTitleUsers",
    }),
    create() {
      this.$refs.form1.validate();
      try {
        if (this.valid2) {
          let pictureNew = "";
          if (this.base64.result) {
            pictureNew = this.base64.result.split(",");
          }

          let data = {
            params: {
              data: {
                name: this.name,
                title: this.title.id,
                mobile: this.tel,
                email: this.email,
                image_1920: pictureNew[1],
                year_of_study: this.yearOfStudy,
                univercity: this.univercity,
                faculty: this.faculty,
                branch: this.branch,
                year: this.year,
                type_users_study: this.userStudy.id,
                type_education: this.education.id,
                serail_number: this.serailNumber,
              },
            },
          };
          this.$axios.post(`api/res.partner`, data).then((response) => {
            console.log("ability.transfer", response.data);

            if (response.data.result) {
              this.$router.push("/login");
            } else {
              this.$toast.error("ลงทะเบียนไม่สำเร็จ").goAway(2000);
            }
          });
        }
      } catch (err) {
        console.log(err);
        this.error = true;
        // this.$refs.loading.finish();
      }
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
