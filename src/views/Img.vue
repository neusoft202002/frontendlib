<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px;">
      <el-menu
          default-active="/main/img"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="/main/img">照片墙</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div style="margin-bottom: 10px">
        <el-upload
            action="http://localhost:8888/uploadImg"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="demo-image">
        <div class="block">
          <el-image
              style="width: 200px; height: 200px"
              v-for="url in urls" :key="url"
              :src="url"></el-image>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'Img',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      urls: []
    };
  },
  created() {
    axios.get("getImgUrl").then(res => {
      this.urls = res.data
      console.log(res);
    })
  },
  methods: {
    test() {
      console.log(this.dialogImageUrl)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>
.el-header {
  color: #333;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  color: #333;
}
</style>
