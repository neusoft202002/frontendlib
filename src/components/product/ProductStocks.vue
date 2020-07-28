<template>
    <el-table :data="tableData" height="100%">
        <el-table-column prop="proId" label="商品编号" width="140">
        </el-table-column>
        <el-table-column prop="proName" label="商品名" width="120">
        </el-table-column>
        <el-table-column prop="warehouse" label="仓库" width="120">
        </el-table-column>
        <el-table-column prop="quantity" label="库存">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="修改库存">
            <template slot-scope="scope">
                <el-input-number v-model="scope.row.quantity" @change="handleChange(scope.row)" :min="0" label="描述文字"></el-input-number>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "ProductStocks",
        data() {
            return {
                tableData: [],
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllProductWithStocks").then(res => {
                for (let item of res.data) {
                    this.tableData.push({
                        proId: item.proId,
                        proName: item.proName,
                        quantity: item.stocks.quantity,
                        warehouse: item.stocks.warehouse
                    })
                }
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {
            handleChange(row) {
                axios.get("http://localhost:8888/updateQuantity", {
                    params: {
                        proId: row.proId,
                        quantity: row.quantity
                    }
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>
