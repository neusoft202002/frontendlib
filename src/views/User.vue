<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px;">
            <el-menu
                    :router="true"
                    default-active="/main/user/userInfo"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="/main/user/userInfo">用户信息</el-menu-item>
                <el-menu-item index="/main/user/userEdit">编辑用户</el-menu-item>
                <el-menu-item index="/main/user/userAddress">用户地址</el-menu-item>
                <el-menu-item index="/main/user/userAdd">添加用户</el-menu-item>
                <el-menu-item index="/main/user/addressEdit">修改地址</el-menu-item>
                <el-menu-item index="/main/user/addressAdd">添加地址</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-header {
        color: #333;
        line-height: 60px;
        padding: 0;
    }

    .el-aside {
        color: #333;
    }
</style>
