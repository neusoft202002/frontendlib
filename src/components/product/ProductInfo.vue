<template>
  <div style="height: 95%">
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input placeholder="请输入商品名" v-model="DynamicProName" @change="change()">
            <template slot="prepend">商品姓名</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="最低价" v-model="minPrice"  @change="change()">
            <template slot="prepend">最低价</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="最高价" v-model="maxPrice" @change="change()">
            <template slot="prepend">最高价</template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="生产者" v-model="DynamicProducer" @change="change()">
            <template slot="prepend">生产者</template>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="生产地" v-model="DynamicProAddress" @change="change()">
            <template slot="prepend">生产地</template>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" height="100%">
      <el-table-column prop="proId" label="商品编号" width="140">
      </el-table-column>
      <el-table-column prop="proName" label="商品名" width="120">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120">
      </el-table-column>
      <el-table-column prop="producer" label="生产者" width="120">
      </el-table-column>
      <el-table-column prop="proAddress" label="生产地">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="editProduct(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import QS from 'qs'
export default {
  name: "ProductInfo",
  data() {
    return {
      tableData: [],
      DynamicProName: '',
      minPrice: null,
      maxPrice: null,
      DynamicProducer: '',
      DynamicProAddress: ''
    }
  },
  created() {
    axios.get("getAllProduct").then(res => {
      this.tableData = res.data
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    change() {
      axios.post("getByAllProductDynamic", QS.stringify({
        DynamicProName: this.DynamicProName,
        minPrice: this.minPrice,
        maxPrice: this.maxPrice,
        DynamicProducer: this.DynamicProducer,
        DynamicProAddress: this.DynamicProAddress
      })).then(res => {
        this.tableData = res.data
      })
    },
    editProduct(row) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          proId: row.proId
        }
      })
    },
    deleteClick(row) {
      console.log(row);
      axios.get("deleteProduct/"+row.proId).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
