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
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <strong>ชื่อ - สกุล</strong>
          </v-col>
          <v-col cols="9">
            <span>{{ profile.full_name }} </span>
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
      <v-col v-if="profile.file_transcrip == null">
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
      </v-col>
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
    search: "",
    dialogDelete: false,
    image: null,
    base64: "",
    idSubject: "",

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
    download(item) {
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
      downloadLink.click();
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
