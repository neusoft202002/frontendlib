<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
      <el-form-item label="异常信息">
        <el-input v-model="form.warningInfo"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker value-format="yyyy/MM/dd" type="date" placeholder="选择日期" v-model="form.warningDate" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="form.warningStatus" placeholder="请选择性别">
          <el-option label="用户异常" value="1"></el-option>
          <el-option label="订单异常" value="2"></el-option>
          <el-option label="库存异常" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">立即创建</el-button>
        <el-button @click="cancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import QS from 'qs'
export default {
  name: "AddWarning",
  data() {
    return {
      form: {
        warningInfo: '',
        warningDate: '',
        warningStatus: '',
      }
    }
  },
  methods: {
    onSubmit() {
      let url = ""
      let routerUrl = ""
      switch (this.form.warningStatus) {
        case "1":
          url = "http://localhost:8888/insertUserWarning";
          routerUrl = "/main/warning/userWarning";
          break;
        case "2":
          url = "http://localhost:8888/insertOrderWarning";
          routerUrl = "/main/warning/orderWarning";
          break;
        case "3":
          url = "http://localhost:8888/insertStocksWarning";
          routerUrl = "/main/warning/stocksWarning";
      }
      axios.post(url, QS.stringify({
        warningInfo: this.form.warningInfo,
        warningDate: this.form.warningDate
      })).then(res => {
        console.log(res);
        this.$router.push(routerUrl)
      })
    },
    cancel() {
      this.form.warningInfo = '';
      this.form.warningDate = '';
      this.form.warningStatus = '';
    }
  }
}
</script>

<style scoped>

</style>
