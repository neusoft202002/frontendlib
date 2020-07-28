<template>
    <div>
        <el-form ref="form" :model="form" label-width="140px" style="width: 400px">
            <el-form-item label="用户编号">
                <el-select v-model="form.userId" placeholder="请选择编号" @change="selectUser(form.userId)">
                    <el-option v-for="(item, index) in userIds" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.username" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="全部商品编号">
                <el-input type="textarea" v-model="proIds"  :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="商品编号：空格隔开">
                <el-input v-model="form.proIds"></el-input>
            </el-form-item>
            <el-form-item label="商品数量：空格隔开" :disabled="true">
                <el-input v-model="form.amounts"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from 'qs'

    export default {
        name: "OrderAdd",
        data() {
            return {
                form: {
                    userId: '',
                    username: '',
                    proIds: '',
                    amounts: ''
                },
                userIds: [],
                proIds: ''
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllId").then(res => {
                this.userIds = res.data;
            })
            axios.get("http://localhost:8888/getProIds").then(res => {
                this.proIds = res.data.toString();
            })
        },
        methods: {
            selectUser(userId) {
                axios.get("http://localhost:8888/getById", {params: {id: userId}}).then(res => {
                    this.form.username = res.data.name;
                })
            },
            onSubmit() {
                axios.post("http://localhost:8888/insertOrder", Qs.stringify({
                    userId: this.form.userId,
                    proIds: this.form.proIds,
                    amounts: this.form.amounts
                })).then(res => {
                    console.log(res);
                })
            },
            cancel() {
                this.form.userId = '';
                this.form.username = '';
                this.form.proIds = '';
                this.form.amounts = '';
            }
        }
    }
</script>

<style scoped>

</style>
