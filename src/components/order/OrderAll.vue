<template>
  <div style="height: 95%">
    <div>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input placeholder="用户" v-model="dynamicUsername" @change="change()">
            <template slot="prepend">姓名</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="最低价" v-model="minAccount" @change="change()">
            <template slot="prepend">最低价</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="最高价" v-model="maxAccount" @change="change()">
            <template slot="prepend">最高价</template>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" height="100%">
      <el-table-column prop="orderId" label="订单号" width="140">
      </el-table-column>
      <el-table-column prop="userId" label="用户编号" width="120">
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="statusId" label="状态号" width="120">
      </el-table-column>
      <el-table-column prop="statusInfo" label="状态信息" width="120">
      </el-table-column>
      <el-table-column prop="allAccount" label="总价">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import QS from 'qs'
export default {
  name: "OrderAll",
  data() {
    return {
      tableData: [],
      dynamicUsername: '',
      minAccount: null,
      maxAccount: null
    }
  },
  created() {
    axios.get("getAllOrder").then(res => {
      this.tableData = res.data
    })
  },
  methods: {
    change() {
      axios.post("getAllOrderDynamic", QS.stringify({
        dynamicUsername: this.dynamicUsername,
        minAccount: this.minAccount,
        maxAccount: this.maxAccount
      })).then(res => {
        this.tableData = res.data
      })
    },
    editClick(row) {
      this.$router.push({
        name: 'OrderDetail',
        params: {
          orderId: row.orderId
        }
      })
    },
    deleteClick(row) {
      axios.get("deleteOrderById", {
        params: {
          orderId: row.orderId
        }
      }).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
