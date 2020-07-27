<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker value-format="yyyy/MM/dd" type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from "qs";

    export default {
        name: "UserAdd",
        data() {
            return {
                form: {
                    name: '',
                    age: '',
                    sex: '',
                    birthday: ''
                }
            }
        },
        methods: {
            onSubmit() {
                axios.post("http://localhost:8888/insertUser", Qs.stringify(this.form)).then(res => {
                    this.$router.push("/main/user/userInfo")
                }).catch(err => {
                    console.log(err)
                })
            },
            cancel() {
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
