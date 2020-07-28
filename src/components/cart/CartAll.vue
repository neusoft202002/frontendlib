<template>
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
</template>

<script>
    export default {
        name: "CartAll",
        data() {
            return {
                tableData: [],
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllCart").then(res => {
                this.tableData = res.data
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {
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
