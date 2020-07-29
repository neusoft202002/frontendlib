<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
      <el-form-item label="商品编号">
        <el-select v-model="form.proId" placeholder="请选择编号" @change="selectProduct(form.proId)">
          <el-option v-for="(item, index) in proIds" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名" :disabled="true">
        <el-input v-model="form.proName"></el-input>
      </el-form-item>
      <el-form-item label="添加数量">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button @click="cancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Qs from "qs";
export default {
  name: "MyCartAdd",
  data() {
    return {
      form: {
        proId: '',
        proName: '',
        amount: ''
      },
      proIds: [],
      userId: ''
    }
  },
  created() {
    axios.get("/getAdmin2UserId", {
      params: {
        adminName: sessionStorage.getItem("username")
      }
    }).then(res => {
      this.userId = res.data;
    })
    axios.get("/getProIds").then(res => {
      this.proIds = res.data;
    })
  },
  methods: {
    selectProduct(proId) {
      axios.get("getProById", {params: {proId: proId}}).then(res => {
        console.log(res);
        this.form.proName = res.data.proName;
      })
    },
    onSubmit() {
      axios.post("insertCart", Qs.stringify({
        userId: this.userId,
        proId: this.form.proId,
        amount: this.form.amount
      })).then(res => {
        this.$router.push("/main/mine/MyCart")
      }).catch(err => {
        console.log(err)
      })
    },
    cancel() {
      this.form. proId =  '';
      this.form.proName =  '';
      this.form.amount =  '';
    }
  }
}
</script>

<style scoped>

</style>
