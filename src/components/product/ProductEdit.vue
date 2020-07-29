<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" style="width: 300px">
            <el-form-item label="商品编号">
                <el-select v-model="form.proId" placeholder="请选择编号" @change="selectProduct(form.proId)">
                    <el-option v-for="(item, index) in proIds" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
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
                <el-button type="primary" @click="onSubmit">更新</el-button>
                <el-button @click="cancel()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Qs from 'qs'
    export default {
        name: "ProductEdit",
        data() {
            return {
                form: {
                    proId: '',
                    proName: '',
                    price: '',
                    producer: '',
                    proAddress: '',
                    quantity: 0,
                    warehouse: ''
                },
                proIds: []
            }
        },
        created() {
            axios.get("getProIds").then(res => {
                this.proIds = res.data
            })
            if (typeof(this.$route.params.proId) != "undefined") {
                this.form.proId = this.$route.params.proId
                this.selectProduct(this.form.proId)
            }
        },
        methods: {
            selectProduct(proId) {
                axios.get("getProById", {params: {proId: proId}}).then(res => {
                    this.form.proName = res.data.proName;
                    this.form.price = res.data.price;
                    this.form.producer = res.data.producer;
                    this.form.proAddress = res.data.proAddress;
                    this.form.quantity = res.data.stocks.quantity;
                    this.form.warehouse = res.data.stocks.warehouse
                })
            },
            onSubmit() {
                axios.post("updateProduct", Qs.stringify({
                    proId: this.form.proId,
                    proName: this.form.proName,
                    price: this.form.price,
                    producer: this.form.producer,
                    proAddress: this.form.proAddress
                })).then(res => {
                    axios.post("updateStocks", Qs.stringify({
                        proId: this.form.proId,
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
                this.form.proId = ''
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
