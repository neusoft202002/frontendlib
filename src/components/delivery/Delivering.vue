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
        <el-button @click="finishClick(scope.row)" type="text" size="small">配送完成</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Qs from 'qs'

export default {
  name: "Delivering",
  data() {
    return {
      tableData: []
    }
  },
  created() {
    axios.get("getDeliveryByStatus", {
      params: {
        deliveryStatusId: 1
      }
    }).then(res => {
      this.tableData = res.data
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    finishClick(row) {
      axios.post("updateDeliveryStatus", Qs.stringify({
        deliveryId: row.deliveryId,
        deliveryStatusId: 2,
        oldStatusId: 1
      })).then( res=> {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
