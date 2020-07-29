<template>
    <div>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
            <h3 class="login-title">欢迎登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
            </el-form-item>
            <el-form-item>
                <el-button style="width: 100%" icon="el-icon-user" type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>

        <el-dialog
                title="温馨提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>{{title}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Qs from "qs"
    export default {
        name: "Login",
        data() {
          return {
              form: {
                  username: '',
                  password: ''
              },
              rules: {
                  username: [
                      {required: true, message: '账号不可为空', trigger: 'blur'}
                  ],
                  password: [
                      {required: true, message: '密码不可为空', trigger: 'blur'}
                  ]
              },
              dialogVisible: false,
              title: ''
          }
        },
        methods: {
            onSubmit(formName) {
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let data = {name: this.form.username, password: this.form.password}
                        axios.post("login", Qs.stringify(data)).then(res => {
                                sessionStorage.setItem("username", this.form.username)
                                this.$router.push("/main");
                            }
                        ).catch(err => {
                            this.title="账号或密码错误";
                            this.dialogVisible = true;
                            this.form.password='';
                            return false;
                        })
                    } else {
                        this.title="请输入密码";
                        this.dialogVisible = true;
                        return false;
                    }
                });
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px #909399;
    }

    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #303133;
    }
</style>
