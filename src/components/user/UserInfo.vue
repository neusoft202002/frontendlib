<template>
  <div style="height: 95%">
    <div>
      <el-row :gutter="10">
        <el-col :span="4">
          <el-input placeholder="请输入姓名" v-model="username" @change="change()">
            <template slot="prepend">姓名</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="最小年龄" v-model="minAge"  @change="change()">
            <template slot="prepend">最小年龄</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="最大年龄" v-model="maxAge" @change="change()">
            <template slot="prepend">最大年龄</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-date-picker value-format="yyyy/MM/dd"  @change="change()" type="date" placeholder="选择起始日期" v-model="startDate"></el-date-picker>
        </el-col>
        <el-col :span="6">
          <el-date-picker value-format="yyyy/MM/dd" @change="change()" type="date" placeholder="选择终止日期" v-model="endDate"></el-date-picker>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" height="100%">
      <el-table-column prop="id" label="编号" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
      </el-table-column>
      <el-table-column prop="birthday" label="生日">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import QS from 'qs'
export default {
  name: "UserInfo",
  data() {
    return {
      tableData: [],
      username: '',
      minAge: null,
      maxAge: null,
      startDate: null,
      endDate: null
    }
  },
  created() {
    axios.get("getAllUser").then(res => {
      this.tableData = res.data
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    change() {
      axios.post("getUserDynamic", QS.stringify({
        username: this.username,
        minAge: this.minAge,
        maxAge: this.maxAge,
        startDate: this.startDate,
        endDate: this.endDate
      })).then(res => {
        this.tableData = res.data
      }).catch(err => {
        console.log(err);
      })
    },
    editClick(row) {
      this.$router.push({
        name: 'UserEdit',
        params: {
          id: row.id
        }
      })
    },
    deleteClick(row) {
      axios.get("deleteUser/" + row.id).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
