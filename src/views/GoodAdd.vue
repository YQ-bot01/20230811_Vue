<template>
  <div>
    <!--ref="ruleForm" form表单的name属性,click中使用-->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="名称" prop="goodName">
        <el-input v-model="ruleForm.goodName"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model.number="ruleForm.price"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        goodName: '',
        price: '',

      },
      rules: {
        goodName: [
            //blur 触发事件：光标移开
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' },
          { type: 'number', message: '请输入正确数据', trigger: 'blur' }

        ],
      }
    };
  },

  methods: {

    submitForm(formName) {
      const _this=this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('http://localhost:8181/goodInfo/save',this.ruleForm).then(function (resp){
            if(resp.data=='success'){
              _this.$message('添加成功');
              _this.$router.push('/GoodList')

            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
