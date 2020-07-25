<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px;">
            <el-menu
                    :router="true"
                    default-active="/main/product/productInfo"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="/main/product/productInfo">商品信息</el-menu-item>
                <el-menu-item index="/main/product/productEdit">编辑商品</el-menu-item>
                <el-menu-item index="/main/product/productStocks">库存管理</el-menu-item>
                <el-menu-item index="/main/product/productAdd">添加商品</el-menu-item>
            </el-menu>
        </el-header>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Product",
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
