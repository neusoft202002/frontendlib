<template>
  <div style="height: 95%">
    <div>
      <el-row :gutter="10">
        <el-col :span="8">
          <el-input placeholder="信息" v-model="info" @change="change()">
            <template slot="prepend">搜索信息</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-date-picker value-format="yyyy/MM/dd"  @change="change()" type="date" placeholder="选择起始日期" v-model="startDate"></el-date-picker>
        </el-col>
        <el-col :span="8">
          <el-date-picker value-format="yyyy/MM/dd" @change="change()" type="date" placeholder="选择终止日期" v-model="endDate"></el-date-picker>
        </el-col>
      </el-row>
    </div>
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
  </div>
</template>

<script>
  import QS from 'qs'
  export default {
    name: "UserWarning",
    data() {
      return {
        tableData: [],
        info: '',
        startDate: null,
        endDate: null
      }
    },
    created() {
      axios.get("getUserWarning").then(res => {
        this.tableData = res.data
      })
    },
    methods: {
      change() {
        axios.post("getUserWarningDynamic", QS.stringify({
          info: this.info,
          startDate: this.startDate,
          endDate: this.endDate
        })).then(res => {
          this.tableData = res.data
        })
      },
      editClick(row) {
        axios.post("updateUserWarning", QS.stringify({
          warningId: row.warningId,
          warningInfo: row.warningInfo,
          warningDate: row.warningDate
        })).then(res => {
          console.log(res);
        })
      },
      deleteClick(row) {
        axios.get("http://localhost:8888/deleteUserWarning", {
          params: {
            userWarningId: row.warningId
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
