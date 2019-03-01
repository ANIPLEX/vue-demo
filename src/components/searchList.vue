<template>
    <div id="search">
        <el-table
                ref="singleTable"
                :data="inputData"
                highlight-current-row
                @current-change="handleCurrentChange"
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    property="name"
                    label="歌曲"
                    width="130">
            </el-table-column>
            <el-table-column
                    property="artists[0].name"
                    label="歌手"
                    width="120">
            </el-table-column>
            <el-table-column
                    property="album.name"
                    label="专辑"
            >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "searchList",
        data() {
            return {
                currentRow: null
            }
        }, props: {
            inputData:''
        },
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
        }
    }
</script>

<style scoped>

</style>
