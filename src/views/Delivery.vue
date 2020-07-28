<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px;">
            <el-menu
                    :router="true"
                    default-active="/main/delivery/deliveryAll"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
              <el-menu-item index="/main/delivery/deliveryAll">全部配送</el-menu-item>
                <el-menu-item index="/main/delivery/delivering">正在配送</el-menu-item>
                <el-menu-item index="/main/delivery/deliveryConfirm">待确认配送</el-menu-item>
                <el-menu-item index="/main/delivery/deliveryFinish">已完成配送</el-menu-item>
              <el-menu-item index="/main/delivery/deliveryAdd">添加配送</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Delivery",
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
