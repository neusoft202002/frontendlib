<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px;">
            <el-menu
                    :router="true"
                    default-active="/main/mine/myCart"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="/main/mine/myCart">我的购物车</el-menu-item>
                <el-menu-item index="/main/mine/myOrder">我的订单</el-menu-item>
                <el-menu-item index="/main/mine/myDelivery">我的配送</el-menu-item>
              <el-menu-item index="/main/mine/myCartAdd">加购</el-menu-item>
              <el-menu-item index="/main/mine/myOrderInfo">订单详情</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Mine",
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
