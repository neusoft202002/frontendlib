<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px;">
            <el-menu
                    :router="true"
                    default-active="/main/order/orderAll"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="/main/order/orderAll">全部订单</el-menu-item>
                <el-menu-item index="/main/order/orderInvalid">失效订单</el-menu-item>
                <el-menu-item index="/main/order/orderPay">待支付订单</el-menu-item>
                <el-menu-item index="/main/order/orderPayed">已支付订单</el-menu-item>
                <el-menu-item index="/main/order/orderDetail">订单详情</el-menu-item>
                <el-menu-item index="/main/order/orderAdd">添加订单</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Order",
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
