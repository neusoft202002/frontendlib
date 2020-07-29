<template>
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
                <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "OrderPayed",
        data() {
            return {
                tableData: []
            }
        },
        created() {
            this.refresh();
        },
        methods: {
          refresh() {
            axios.get("getOrderByStatus", {
              params: {
                statusId: 2
              }
            }).then(res => {
              this.tableData = res.data
            })
          },
          deleteClick(row) {
              axios.get("deleteOrderById", {
                  params: {
                      orderId: row.orderId
                  }
              }).then(res => {
                this.refresh();
              })
          }
        }
    }
</script>

<style scoped>

</style>
