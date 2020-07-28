<template>
    <el-table :data="tableData" height="100%">
        <el-table-column prop="userId" label="用户编号" width="140">
        </el-table-column>
        <el-table-column prop="addressId" label="地址编号" width="120">
        </el-table-column>
        <el-table-column prop="name" label="用户姓名" width="120">
        </el-table-column>
        <el-table-column prop="receiverName" label="收货人" width="120">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" >
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
</template>

<script>
    export default {
        name: "UserAddress",
        data() {
            return {
                tableData: [],
            }
        },
        created() {
            this.getAllAddress();
        },
        methods: {
            getAllAddress() {
                this.tableData = []
                axios.get("http://localhost:8888/getAddress").then(res => {
                    for (let item of res.data) {
                        for (let addressElement of item.address) {
                            if (addressElement.address != null) {
                                this.tableData.push({
                                    userId: addressElement.userId,
                                    addressId: addressElement.addressId,
                                    name: item.name,
                                    receiverName: addressElement.receiverName,
                                    phone: addressElement.phone,
                                    address: addressElement.address
                                })
                            }
                        }
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            editClick(row) {
                this.$router.push({
                    name: 'AddressEdit',
                    params: {
                        userId: row.userId,
                        addressId: row.addressId
                    }
                })
            },
            deleteClick(row) {
                axios.get("http://localhost:8888/deleteAddress",
                    {params: {userId: row.userId, addressId: row.addressId}}).then(res => {
                    this.getAllAddress();
                })
            }
        }
    }
</script>

<style scoped>

</style>
