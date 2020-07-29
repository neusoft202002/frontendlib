<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
            <el-form-item label="用户编号">
                <el-select v-model="form.userId" placeholder="请选择编号">
                    <el-option v-for="(item, index) in userIds" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="收货人">
                <el-input v-model="form.receiverName"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit()">添加</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from "qs";

    export default {
        name: "AddressAdd",
        data() {
            return {
                form: {
                    userId: '',
                    receiverName: '',
                    phone: '',
                    address: ''
                },
                userIds: []
            }
        },
        created() {
            axios.get("getAllId").then(res => {
                this.userIds = res.data;
            })
        },
        methods: {
        onSubmit() {
            axios.post("insertAddress", Qs.stringify(this.form)).then(res => {
                this.$router.push("/main/user/userAddress")
            }).catch(err => {
                console.log(err)
            })
        },
        cancel() {
            this.form.userId = '';
            this.form.receiverName = '';
            this.form.phone = '';
            this.form.address = '';
        }
        }
    }
</script>

<style scoped>

</style>
