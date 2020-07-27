<template>
  <el-container style="height: 100%; border: 1px solid #eee;">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="title" style="font-size: 12px; height: 60px;">
        <span style="font-size: 20px; font-weight: bold">{{username}}</span>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-left: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="getInfo()">个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="logout()">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-menu default-active="/main/user" :router="true">
        <el-menu-item index="/main/user">
          <i class="el-icon-user-solid"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/main/product">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/main/cart">
          <i class="el-icon-star-on"></i>
          <span slot="title">购物车</span>
        </el-menu-item>
        <el-menu-item index="/main/order">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="/main/delivery">
          <i class="el-icon-s-claim"></i>
          <span slot="title">送货管理</span>
        </el-menu-item>
        <el-menu-item index="/main/warning">
          <i class="el-icon-warning"></i>
          <span slot="title">预警信息</span>
        </el-menu-item>
        <el-menu-item index="/main/mine">
          <i class="el-icon-s-finance"></i>
          <span slot="title">我的</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <router-view></router-view>
  </el-container>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        username: '',
        activeIndex: '1'
      }
    },
    methods: {
      getInfo() {
        this.$router.push("/main/mine")
      },
      logout() {
        console.log("hello")
        axios.get("http://localhost:8888/logout").then(res=> {
          console.log(res);
          this.$router.push("/login");
        }).catch(err=> {
          console.log(err);
        })
      }
    },
    created() {
      this.username = sessionStorage.getItem("username");
    }
  }
</script>

<style scoped>

  .el-aside {
    color: #333;
  }

  .title{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    height: 90px;
  }
</style>
