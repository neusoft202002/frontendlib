<template>
    <div style="height: 100%">
        <el-row :gutter="20">
            <el-col :span="12">
                <el-select v-model="userId" placeholder="请选择编号" @change="selectUser(userId)">
                    <el-option v-for="(item, index) in userIds" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-input placeholder="姓名" v-model="username" :disabled="true"></el-input>
            </el-col>
        </el-row>
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
    </div>
</template>

<script>
    import Qs from 'qs'
    export default {
        name: "CartAlone",
        data() {
            return {
                userId: '',
                userIds: [],
                username: '',
                tableData: []
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllId").then(res => {
                this.userIds = res.data;
            })
            if (typeof(this.$route.params.userId) != "undefined") {
                this.userId = this.$route.params.userId
                this.selectUser(this.userId)
            }
        },
        methods: {
            selectUser(userId) {
                axios.get("http://localhost:8888/getUserCartById", {
                    params: {
                        userId: userId
                    }
                }).then(res => {
                    this.tableData = res.data;
                    axios.get("http://localhost:8888/getById", {params: {id: userId}}).then(res => {
                        this.username = res.data.name;
                    })
                })
            },
            deleteClick(row) {
                axios.get("http://localhost:8888/deleteCart", {
                    params: {
                        userId: this.userId,
                        proId: row.proId
                    }
                }).then(res => {
                    this.tableData = res.data;
                })
            },
            handleChange(row) {
                axios.post("http://localhost:8888/updateAmount", Qs.stringify({
                    userId: this.userId,
                    proId: row.proId,
                    amount: row.amount
                })).then(res => {
                    axios.get("http://localhost:8888/getUserCartById", {
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
