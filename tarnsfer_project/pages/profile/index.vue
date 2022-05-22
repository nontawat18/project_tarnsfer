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
            <span>{{userLogin.first_name}} {{userLogin.last_name}}</span>
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
            <span>{{userLogin.role.role}}</span>
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
    </v-card>
  </div>
</template>
<script>
export default {
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
  },
}
</script>
