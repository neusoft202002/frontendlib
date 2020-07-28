<template>
  <el-table :data="tableData" height="100%">
    <el-table-column prop="warningId" label="编号" width="140">
    </el-table-column>
    <el-table-column
        width="240"
        label="时间">
      <template slot-scope="scope">
        <el-date-picker value-format="yyyy/MM/dd" type="date" placeholder="选择日期" v-model="scope.row.warningDate"></el-date-picker>
      </template>
    </el-table-column>
    <el-table-column
        fixed="right"
        label="信息">
      <template slot-scope="scope">
        <el-input v-model="scope.row.warningInfo" label="信息"></el-input>
      </template>
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="100">
      <template slot-scope="scope">
        <el-button @click="editClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Qs from 'qs'
import QS from "qs";
export default {
  name: "StocksWarning",
  data() {
    return {
      tableData: []
    }
  },
  created() {
    axios.get("http://localhost:8888/getStocksWarning").then(res => {
      this.tableData = res.data
    })
  },
  methods: {
    editClick(row) {
      axios.post("http://localhost:8888/updateStocksWarning", QS.stringify({
        warningId: row.warningId,
        warningInfo: row.warningInfo,
        warningDate: row.warningDate
      })).then(res => {
        console.log(res);
      })
    },
    deleteClick(row) {
      axios.get("http://localhost:8888/deleteStocksWarning", {
        params: {
          stocksWarningId: row.warningId
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
