<template>
  <div>
    <!-- <v-col class="text-right pa-0">
      <v-btn color="red" elevation="0" small icon class="mb-2" outlined>
        <v-icon> mdi-pencil</v-icon>
      </v-btn>
    </v-col> -->
    <!-- <v-col class="text-center pa-0 pt-4">
      <v-avatar size="100">
        <img
          alt="user"
          src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
        />
      </v-avatar>
      <v-col>
        <h3 class="">{{userLogin.first_name}} {{userLogin.last_name}}</h3>
      </v-col>
    </v-col> -->
    <v-card elevation="0" outlined>
      <v-col class="text-right">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" dark v-bind="attrs" v-on="on">
              เปลี่ยนรหัสผ่าน
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5"> เปลี่ยนรหัสผ่าน </span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Old Password*"
                      type="password"
                      required
                      outlined
                      dense
                      v-model="oldpassword"
                    ></v-text-field>
                    <v-text-field
                      label="New Password*"
                      type="password"
                      required
                      outlined
                      dense
                      v-model="newpassword"
                    ></v-text-field>
                    <v-text-field
                      label="Confirm New Password*"
                      type="password"
                      required
                      outlined
                      dense
                      v-model="connewpassword"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="change()"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- <v-dialog v-model="dialog2" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" dark v-bind="attrs" v-on="on">
              แก้ไขข้อมูลส่วนตัว
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="คำนำหน้า"
                      required
                      outlined
                      dense
                      v-model="title"
                    ></v-text-field>
                    <v-text-field
                      label="รหัสนักศึกษา"
                      required
                      outlined
                      dense
                      v-model="student_id"
                    ></v-text-field>
                    <v-text-field
                      label="ชั้นปี"
                      required
                      outlined
                      dense
                      v-model="class_level"
                    ></v-text-field>
                    <v-text-field
                      label="คณะ"
                      required
                      outlined
                      dense
                      v-model="faculty"
                    ></v-text-field>
                    <v-text-field
                      label="สาขา"
                      required
                      outlined
                      dense
                      v-model="field_of_study"
                    ></v-text-field>
                    <v-text-field
                      label="ระดับการศึกษา"
                      required
                      outlined
                      dense
                      v-model="level_of_study"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="changeProfile()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-col>
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <strong>คำนำหน้า</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.title }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogTitle" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="คำนำหน้า"
                          required
                          outlined
                          dense
                          v-model="title"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogTitle = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changeTitle()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>ชื่อ - สกุล</strong>
          </v-col>
          <v-col cols="9">
            <span>{{ profile.full_name }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>รหัสนักศึกษา</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.student_id }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogStudentID" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="รหัสนักศึกษา"
                          required
                          outlined
                          dense
                          v-model="student_id"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogStudentID = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changeStudentID()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>ชั้นปี</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.class_level }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogClassLevel" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="ชั้นปี"
                          required
                          outlined
                          dense
                          v-model="class_level"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogClassLevel = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changeClassLevel()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>คณะ</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.faculty }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogFaculty" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="คณะ"
                          required
                          outlined
                          dense
                          v-model="faculty"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogFaculty = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changefaculty()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>สาขาวิชา</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.field_of_study }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogStudy" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="สาขา"
                          required
                          outlined
                          dense
                          v-model="field_of_study"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogStudy = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changeStudy()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>ระดับการศึกษา</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.level_of_study }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogLevelStudy" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="ระดับการศึกษา"
                          required
                          outlined
                          dense
                          v-model="level_of_study"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialogLevelStudy = false"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changeLevelStudy()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>เบอร์โทรศัพท์</strong>
          </v-col>
          <v-col cols="7">
            <span>{{ profile.tel }} </span>
          </v-col>
          <v-col cols="2">
            <v-dialog v-model="dialogTel" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  small
                  fab
                  darkdark
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"> แก้ไขข้อมูลส่วนตัว </span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="เบอร์โทรศัพท์"
                          required
                          outlined
                          dense
                          v-model="tel"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialogTel = false">
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="changeTel()">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="3">
            <strong>เบอร์โทรศัพท์</strong>
          </v-col>
          <v-col cols="9">
            <span>0924434736</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>รหัสนักศึกษา</strong>
          </v-col>
          <v-col cols="9">
            <span>60332110079-5</span>
          </v-col>
        </v-row> -->
        <v-row>
          <v-col cols="3">
            <strong>Role</strong>
          </v-col>
          <v-col cols="9">
            <span>{{ profile.role }}</span>
          </v-col>
        </v-row>
        <!-- {{ profile }} -->
        <!-- <v-row>
          <v-col cols="3">
            <strong>สาขา</strong>
          </v-col>
          <v-col cols="9">
            <span>วิศวกรรมคอมพิวเตอร์</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <strong>มหาวิทยาลัย</strong>
          </v-col>
          <v-col cols="9">
            <span>มหาวิทยาลัยเทคโลโนยีราชมงคลอีสาน วิทยาเขตขอนแก่น</span>
          </v-col>
        </v-row> -->
      </v-card-text>

      <!-- <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions> -->
      <!-- <v-col v-if="profile.file_transcrip == null">
        <v-file-input
          outlined
          dense
          label="Uplaod Transcript"
          v-model="image"
          @change="uploadImage(image)"
        ></v-file-input>
        <v-col class="text-center">
          <v-btn color="gray" @click="save"> บันทึก </v-btn>
        </v-col>
      </v-col>
      <v-col v-else class="text-center">
        <v-btn
          class=""
          small
          elevation="0"
          @click="download(profile.file_transcrip)"
          dark
          color="grey"
        >
          <v-icon left> mdi-download</v-icon> Download Transcript
        </v-btn>
      </v-col> -->
      <v-row class="pb-3">
        <v-col cols="12" sm="6" class="">
          <v-file-input
            outlined
            dense
            label="Uplaod Transcript"
            v-model="image"
            @change="uploadImage(image)"
          ></v-file-input>
        </v-col>
        <v-col cols="12" sm="2" class="text-center">
          <v-btn color="gray" @click="save"> บันทึก </v-btn>
        </v-col>
        <v-col cols="12" sm="4" class="text-center">
          <v-btn
            class=""
            elevation="0"
            @click="download(profile.file_transcrip)"
            dark
            color="grey"
          >
            <v-icon left> mdi-download</v-icon> Download Transcript
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

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
    // if (!file.type.match(/image.*/)) {
    //   no(new Error("Not an image"));
    //   return;
    // }

    reader.onload = (readerEvent) => {
      image.onload = () => ok(resize());
      image.src = readerEvent.target.result;
    };

    reader.readAsDataURL(file);
  });
};
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    dialogTitle: false,
    dialogStudentID: false,
    dialogClassLevel: false,
    dialogFaculty: false,
    dialogStudy: false,
    dialogLevelStudy: false,

    title: "",
    student_id: "",
    level_of_study: "",
    faculty: "",
    field_of_study: "",
    class_level: "",
    tel: "",
    search: "",
    dialogDelete: false,
    image: null,
    base64: "",
    idSubject: "",
    oldpassword: "",
    newpassword: "",
    connewpassword: "",
    type: [
      {
        id: "ท",
        name: "ทฤษฎี",
      },
      {
        id: "ป",
        name: "ปฏิบัติ",
      },
    ],
    headers: [
      {
        text: "รหัสวิชา",
        align: "start",
        sortable: false,
        value: "course_code",
      },
      { text: "ชื่อวิชา", value: "course_title", sortable: false },
      { text: "คำอธิบายรายวิชา", value: "description_file", sortable: false },
      { text: "หน่วยกิจ", value: "credit", sortable: false },
      { text: "เกรด", value: "grade", sortable: false },

      { text: "ประเภทรายวิชา", value: "credit_type", sortable: false },
      // { text: "หลักสูตร", value: "course", sortable: false },
      { text: "ตัวดำเนินการ", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      course_code: "",
      course_title: "",
      course: 0,
      credit_type: 0,
      credit: 0,
      description_file: "",
      grade: "",
      school: "",
    },
    defaultItem: {
      id: 0,
      course_code: "",
      course_title: "",
      course: 0,
      credit_type: 0,
      credit: 0,
      description_file: "",
      grade: "",
      school: "",
    },
  }),

  computed: {
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
    userToken: {
      get() {
        if (this.$store.state.users.userLogin) {
          return this.$store.state.users.userLogin.key;
        } else {
          return null;
        }
      },
      set() {},
    },
    userId: {
      get() {
        if (this.$store.state.users.userId) {
          return this.$store.state.users.userId;
        } else {
          return null;
        }
      },
      set() {},
    },
    profile: {
      get() {
        if (this.$store.state.users.profile) {
          return this.$store.state.users.profile;
        } else {
          return null;
        }
      },
      set() {},
    },
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    ...mapActions({
      getProfile: "users/getProfile",
    }),
    change() {
      let data = {
        old_password: this.oldpassword,
        new_password1: this.newpassword,
        new_password2: this.connewpassword,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      this.$changePassword.defaults.headers.common["Authorization"] =
        "Token " + this.userToken;
      this.$changePassword
        .post(`/rest-auth/password/change/`, data)
        .then((response) => {
          if (response.status == 200) {
            console.log("userToken", response.data);
            // this.getMyCourse();
            this.dialog = false;
            this.$toast.success("แก้ไขรหัสผ่านเรียบร้อย").goAway(2000);
          } else {
            this.$toast
              .success("แก้ไขรหัสผ่านไม่สำเร็จ กรุณาลองใหม่")
              .goAway(2000);
          }
        });
    },
    changeewew() {
      let data = {
        title: title,
        student_id: stdentID,
        level_of_study: level,
        faculty: faculty,
        field_of_study: field,
        class_level: classLe,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          // this.getMyCourse();
          this.dialog2 = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeTel() {
      let data = {
        tel: this.tel,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogTel = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeTitle() {
      let data = {
        title: this.title,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogTitle = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeStudentID() {
      let data = {
        student_id: this.student_id,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogStudentID = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeClassLevel() {
      let data = {
        class_level: this.class_level,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogClassLevel = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeClassLevel() {
      let data = {
        class_level: this.class_level,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogClassLevel = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeStudy() {
      let data = {
        field_of_study: this.field_of_study,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogStudy = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changeLevelStudy() {
      let data = {
        level_of_study: this.level_of_study,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogLevelStudy = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },
    changefaculty() {
      let data = {
        faculty: this.faculty,
      };
      // http://147.50.231.70:8050/api/rest-auth/password/change/
      let id = this.userId;

      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("changeProfile", response.data);
          this.dialogFaculty = false;
          this.$toast.success("แก้ไขข้อมูลเรียบร้อย").goAway(2000);
          this.getProfile();
        } else {
          this.$toast.success("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่").goAway(2000);
        }
      });
    },

    async download(item) {
      // const url = "/users/download";
      console.log("item", item);
      // const url = 'data:application/pdf;base64, ' + this.abilityById.file;
      // document.location.href = url;
      // window.open("data:application/pdf;base64, " + this.abilityById.file);

      const linkSource = item;
      const downloadLink = document.createElement("a");
      const fileName = "transcript.pdf";

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      await downloadLink.click();
    },
    save() {
      // Object.assign(this.desserts[this.editedIndex], this.editedItem);
      let id = this.userId;
      let data = {
        file_transcrip: this.base64.result,
      };
      this.$fixedKeyApi.patch(`/profile/${id}/`, data).then((response) => {
        if (response.status == 200) {
          console.log("patch", response.data);
          // this.getMyCourse();
        }
      });
    },
    async uploadImage(image) {
      console.log("image", image);
      if (image) {
        let file = await image;
        // if (!file.type.match(/image.*/)) {
        //   no(new Error("Not an image"));
        //   return;
        // }

        const reader = new FileReader();
        // reader.onload = (e) => (this.originalImg = e.target.result);
        reader.readAsDataURL(file);

        reader.onload = function () {
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
        this.base64 = reader;
        console.log("base64", this.base64);
      }
    },
  },
};
</script>
