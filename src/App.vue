<template>
    <div id="app">

        <el-input v-model="idata" id="idata" name="idata" placeholder="海宁之王" style="width: 70%;" @keydown.native.enter="btn"></el-input>
        &nbsp;&nbsp;
        <el-button type="primary" @click="btn">搜索
        </el-button>

        <br> <br>
        <searchList :inputData="inputData"/>
    </div>
</template>

<script>

    import searchList from './components/searchList.vue'

    export default {
        name: 'app',
        components: {
            searchList
        }, data() {
            return {
                inputData: '',
                idata:''
            }
        }, methods: {
            btn(idata) {
                if(this.idata==''){
                alert('搜索值不能为空')
            }
                axios
                    .get('http://122.152.196.141:3000/search?keywords='+this.idata)
                    .then(response=>(this.inputData = response.data.result.songs))
                //
                    .catch(error=>console.log(error))
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
