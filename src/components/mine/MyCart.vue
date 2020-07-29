<template>
  <div style="height: 100%">
    <el-table :data="tableData" height="100%">
      <el-table-column prop="proId" label="商品编号" width="140">
      </el-table-column>
      <el-table-column prop="proName" label="商品名" width="120">
      </el-table-column>
      <el-table-column prop="price" label="单价" width="120">
      </el-table-column>
      <el-table-column prop="amount" label="数量" width="120">
      </el-table-column>
      <el-table-column prop="account" label="总价">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="修改库存">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.amount" @change="handleChange(scope.row)" :min="0" label="库存"></el-input-number>
        </template>
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
    <el-button @click="$router.push('/main/mine/myCartAdd')" style="z-index: 1000; position: fixed; right: 100px; bottom: 100px" type="success" icon="el-icon-plus" circle></el-button>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  name: "MyCart",
  data() {
    return {
      userId: '',
      tableData: []
    }
  },
  created() {
    axios.get("/getAdmin2UserId", {
      params: {
        adminName: sessionStorage.getItem("username")
      }
    }).then(res => {
      this.userId = res.data;
      axios.get("getUserCartById", {
        params: {
          userId: this.userId
        }
      }).then(res => {
        this.tableData = res.data;
      })
    })
  },
  methods: {
    deleteClick(row) {
      axios.get("deleteCart", {
        params: {
          userId: this.userId,
          proId: row.proId
        }
      }).then(res => {
        this.tableData = res.data;
      })
    },
    handleChange(row) {
      axios.post("updateAmount", Qs.stringify({
        userId: this.userId,
        proId: row.proId,
        amount: row.amount
      })).then(res => {
        axios.get("getUserCartById", {
          params: {
            userId: this.userId
          }
        }).then(res1 => {
          this.tableData = res1.data;
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
