<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
            <el-form-item label="用户编号">
                <el-select v-model="form.userId" placeholder="请选择编号" @change="selectUser(form.userId)">
                    <el-option v-for="(item, index) in userIds" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="地址编号">
                <el-select v-model="form.addressId" placeholder="请选择编号" @change="selectAddress(form.addressId)">
                    <el-option v-for="(item, index) in addressIds" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="收货人">
                <el-input v-model="form.receiverName"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit()">修改</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from "qs";

    export default {
        name: "AddressEdit",
        data() {
            return {
                form: {
                    userId: '',
                    addressId: '',
                    receiverName: '',
                    phone: '',
                    address: ''
                },
                userIds: [],
                addressIds: []
            }
        },
        created() {
            axios.get("getAllId").then(res => {
                this.userIds = res.data;
            })
            if (typeof(this.$route.params.userId) != "undefined") {
                this.form.userId = this.$route.params.userId
                this.selectUser(this.form.userId)
                this.form.addressId = this.$route.params.addressId
                this.selectAddress(this.form.addressId)
            }
        },
        methods: {
            selectUser(id) {
                axios.get("getUserAddressId", {
                    params: {
                        id: id
                    }
                }).then(res => {
                    this.form.addressId = '';
                    this.form.receiverName = '';
                    this.form.phone = '';
                    this.form.address = '';
                    this.addressIds = res.data;
                })
            },
            selectAddress(id) {
                axios.get("getAddressById", {
                    params: {
                        userId: this.form.userId,
                        addressId: id
                    }
                }).then(res => {
                    this.form.receiverName = res.data.receiverName;
                    this.form.phone = res.data.phone;
                    this.form.address = res.data.address;
                })
            },
            onSubmit() {
                axios.post("updateAddress", Qs.stringify(this.form)).then(res => {
                    this.$router.push("/main/user/userAddress")
                }).catch(err => {
                    console.log(err)
                })
            },
            cancel() {
                this.form.userId = '';
                this.form.addressId = '';
                this.form.receiverName = '';
                this.form.phone = '';
                this.form.address = '';
            }
        }
    }
</script>

<style scoped>

</style>
