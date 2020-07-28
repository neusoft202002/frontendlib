<template>
  <el-table :data="tableData" height="100%">
    <el-table-column prop="deliveryId" label="配送编号" width="140">
    </el-table-column>
    <el-table-column prop="orderId" label="订单号" width="120">
    </el-table-column>
    <el-table-column prop="userId" label="用户编号" width="120">
    </el-table-column>
    <el-table-column prop="username" label="用户姓名" width="120">
    </el-table-column>
    <el-table-column prop="deliveryStatusId" label="状态号" width="120">
    </el-table-column>
    <el-table-column prop="deliveryStatusInfo" label="状态信息">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "DeliveryAll",
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.refresh()
  },
  methods: {
    refresh() {
      axios.get("http://localhost:8888/getAllDelivery").then(res => {
        this.tableData = res.data
      }).catch(err => {
        console.log(err);
      })
    },
    deleteClick(row) {
      axios.get("http://localhost:8888/deleteDeliveryById", {
        params: {
          deliveryId: row.deliveryId
        }
      }).then(res => {
        this.refresh()
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>
