<template>
  <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
    <el-form-item label="用户编号">
      <el-select v-model="form.orderId" placeholder="请选择编号">
        <el-option v-for="(item, index) in orderIds" :key="index" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">开始配送</el-button>
      <el-button @click="cancel()">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "DeliveryAdd",
  data() {
    return {
      form: {
        orderId: ''
      },
      orderIds: []
    }
  },
  created() {
    axios.get("http://localhost:8888/getIdWithoutDelivery").then(res => {
      this.orderIds = res.data
    })
  },
  methods: {
    onSubmit(){
      axios.get("http://localhost:8888/insertDelivery", {
        params: {
          orderId: this.form.orderId
        }
      }).then(res => {
        this.$router.push("/main/delivery/deliveryAll")
      })
    },
    cancel() {
      this.form.orderId = ''
    }
  }

}
</script>

<style scoped>

</style>
