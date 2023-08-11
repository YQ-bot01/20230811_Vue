<template>
  <div>
    <el-table
        :data="tableData"
        border
        style="width: 100%">

      <el-table-column
          prop="goodId"
          label="编号"
          width="100">
      </el-table-column>
      <el-table-column
          prop="goodName"
          label="名称"
          >
      </el-table-column>
      <el-table-column
          prop="price"
          label="价格"
          width="100">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="page">
    </el-pagination>
  </div>


</template>


<script>
export default {
  methods: {
    edit(row) {
      this.$router.push({
        path:'/goodUpdate',
        query:{
          _row:row
        }
      })
    },
    del(row) {
      const _this=this
      this.$axios.delete('http://localhost:8181/goodInfo/deleteById/'+row.goodId).then(function(resp){
        alert("删除成功")
        //动态刷新
        window.location.reload()
      })
    },
    page(currentPage){
      const _this=this
      this.$axios.get('http://localhost:8181/goodInfo/findAll/'+currentPage+'/10').then(function(resp){
        //console.log(resp)
        _this.tableData=resp.data.content
        _this.total=resp.data.totalElements
      })
    }
  },
  created() {
    const _this=this
    this.$axios.get('http://localhost:8181/goodInfo/findAll/1/10').then(function(resp){
      console.log(resp)
      _this.tableData=resp.data.content
      _this.total=resp.data.totalElements
    })

  },
  data() {
    return {
      total:null,
      tableData: []
    }
  }
}
</script>
