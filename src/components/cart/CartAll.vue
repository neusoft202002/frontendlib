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
      <el-table-column prop="userId" label="用户编号" width="140">
      </el-table-column>
      <el-table-column prop="userName" label="用户姓名" width="120">
      </el-table-column>
      <el-table-column prop="account" label="总价">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import QS from "qs";

export default {
  name: "CartAll",
  data() {
    return {
      tableData: [],
      dynamicUsername: '',
      minAccount: null,
      maxAccount: null
    }
  },
  created() {
    axios.get("getAllCart").then(res => {
      this.tableData = res.data
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    change() {
      axios.post("getAllCartDynamic", QS.stringify({
        dynamicUsername: this.dynamicUsername,
        minAccount: this.minAccount,
        maxAccount: this.maxAccount
      })).then(res => {
        this.tableData = res.data
      })
    },
    editClick(row) {
      this.$router.push({
        name: 'CartAlone',
        params: {
          userId: row.userId
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
