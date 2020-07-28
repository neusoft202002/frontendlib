<template>
    <el-table :data="tableData" height="100%">
        <el-table-column prop="proId" label="商品编号" width="140">
        </el-table-column>
        <el-table-column prop="proName" label="商品名" width="120">
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
</template>

<script>
    export default {
        name: "ProductInfo",
        data() {
            return {
                tableData: [],
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllProduct").then(res => {
                this.tableData = res.data
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {
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
                axios.get("http://localhost:8888/deleteProduct/"+row.proId).then(res => {
                    this.tableData = res.data
                })
            }
        }
    }
</script>

<style scoped>

</style>
