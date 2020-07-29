<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
            <el-form-item label="商品名">
                <el-input v-model="form.proName"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="生产者">
                <el-input v-model="form.producer"></el-input>
            </el-form-item>
            <el-form-item label="生产地">
                <el-input v-model="form.proAddress"></el-input>
            </el-form-item>
            <el-form-item label="库存">
                <el-input v-model="form.quantity"></el-input>
            </el-form-item>
            <el-form-item label="仓库">
                <el-input v-model="form.warehouse"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from 'qs'

    export default {
        name: "ProductAdd",
        data() {
            return {
                form: {
                    proName: '',
                    price: '',
                    producer: '',
                    proAddress: '',
                    quantity: 0,
                    warehouse: ''
                }
            }
        },
        methods: {
            onSubmit() {
                axios.post("insertProduct", Qs.stringify({
                    proName: this.form.proName,
                    price: this.form.price,
                    producer: this.form.producer,
                    proAddress: this.form.proAddress
                })).then(res => {
                    axios.post("insertStocks", Qs.stringify({
                        proId: res.data.proId,
                        quantity: this.form.quantity,
                        warehouse: this.form.warehouse
                    })).then(res2 => {
                        this.$router.push("/main/product/productInfo");
                    })
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
