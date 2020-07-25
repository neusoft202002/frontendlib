<template>
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
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: [],
                activeIndex: '1'
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllUser").then(res => {
                this.tableData = res.data
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {
            editClick(row) {
                console.log(row);
            },
            deleteClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style scoped>

</style>
