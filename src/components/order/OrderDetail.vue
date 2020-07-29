<template>
    <div style="height: 100%">
        <el-select v-model="orderId" placeholder="请选择编号" @change="selectOrder(orderId)">
            <el-option v-for="(item, index) in orderIds" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <el-table :data="tableData" height="100%">
            <el-table-column prop="userId" label="用户编号" width="140">
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="120">
            </el-table-column>
            <el-table-column prop="proId" label="商品编号" width="120">
            </el-table-column>
            <el-table-column prop="proName" label="商品名" width="120">
            </el-table-column>
            <el-table-column prop="price" label="单价" width="120">
            </el-table-column>
            <el-table-column prop="amount" label="数量" width="120">
            </el-table-column>
            <el-table-column prop="account" label="总价">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "OrderDetail",
        data() {
            return {
                tableData: [],
                orderIds: [],
                orderId: ''
            }
        },
        created() {
            axios.get("getAllOrderId").then(res => {
                this.orderIds = res.data;
            })
            if (typeof(this.$route.params.orderId) != "undefined") {
                this.orderId = this.$route.params.orderId
                this.selectOrder(this.orderId)
            }
        },
        methods: {
            selectOrder(orderId) {
                axios.get("getOrderById", {
                    params: {
                        orderId: orderId
                    }
                }).then(res => {
                    this.tableData = res.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
