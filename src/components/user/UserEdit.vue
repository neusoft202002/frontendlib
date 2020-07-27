<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
            <el-form-item label="用户编号">
                <el-select v-model="form.id" placeholder="请选择编号" @change="selectTrigger(form.id)">
                    <el-option v-for="(item, index) in usersId" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请选择性别" @change="selectTrigger(form.sex)">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker value-format="yyyy/MM/dd" type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from "qs";
    export default {
        name: "EditUser",
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    age: '',
                    sex: '',
                    birthday: ''
                },
                usersId: []
            }
        },
        created() {
            axios.get("http://localhost:8888/getAllId").then(res => {
                console.log(res);
                this.usersId = res.data;
            })
            if (typeof(this.$route.params.id) != "undefined") {
                this.form.id = this.$route.params.id
                this.selectTrigger(this.form.id)
            }
        },
        methods: {
            selectTrigger(selectData) {
                axios.get("http://localhost:8888/getById", {params: {id: selectData}}).then(res => {
                    this.form.name = res.data.name;
                    this.form.age = res.data.age;
                    this.form.sex = res.data.sex;
                    this.form.birthday = res.data.birthday;
                })
            },
            onSubmit() {
                console.log(this.form);
                // this.$router.push("/main/user/userInfo")
                axios.post("http://localhost:8888/updateUser", Qs.stringify(this.form)).then(res => {
                    this.$router.push("/main/user/userInfo")
                }).catch(err => {
                    console.log(err)
                })
            },
            cancel() {
                this.form.id = '';
                this.form.name = '';
                this.form.age = '';
                this.form.sex = '';
                this.form.birthday = '';
            }
        }
    }
</script>

<style scoped>

</style>
