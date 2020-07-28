<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px;">
            <el-menu
                    :router="true"
                    default-active="/main/warning/userWarning"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="/main/warning/userWarning">用户警告</el-menu-item>
                <el-menu-item index="/main/warning/orderWarning">订单警告</el-menu-item>
                <el-menu-item index="/main/warning/stocksWarning">库存警告</el-menu-item>
                <el-menu-item index="/main/warning/addWarning">添加警告</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Warning",
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
