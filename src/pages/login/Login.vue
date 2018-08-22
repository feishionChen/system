<template>
  <div class='login'>
    <transition 
      name='fade'
      appear-active-class='animated bounce'
      enter-active-class='animated bounce' 
    >
    	<div class="login-info">
    		<h2>XXX金融后台管理系统</h2>
    		<div class="content">
    			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="g-form">
  				  <el-form-item prop="name">
  				    <el-input class='ipt' placeholder='请输入用户名' v-model="ruleForm.name">
  				    	<!-- 导入iconfont -->
  				    	<span class="iconfont el-input__icon" slot="prefix">&#xe604;</span>
                <span class="iconfont el-input__icon" slot="suffix" @click='deleate'>&#xe635;</span>
  				    	<!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
  				    </el-input>
  				  </el-form-item>
  				  <el-form-item prop="pass">
  				    <el-input class='ipt' placeholder='请输入密码' :type="changeType" v-model="ruleForm.pass" auto-complete="off">
  				    	<span class="iconfont el-input__icon" slot="prefix">&#xe63e;</span>
                <span v-show='!eyeShow' class="iconfont el-input__icon" slot="suffix" @click='openEye'>&#xe61d;</span>
                <span v-show='eyeShow' class="iconfont el-input__icon" slot="suffix" @click='openEye'>&#xe62b;</span>
  				    </el-input>
  				  </el-form-item>
            <el-form-item prop="code">
              <el-input class='ipt' placeholder='请输入验证码' type="text" v-model="ruleForm.code" >
                <span class="iconfont el-input__icon" slot="prefix">&#xe636;</span>
                <template slot="append">
                  <img :src="imgSrc" @click='changeImg'>
                </template>
              </el-input>
            </el-form-item>
  				  <el-form-item>
  				    <el-button class='l-login' type="primary" @click="submitForm('ruleForm')">登录</el-button>
  				  </el-form-item>
          </el-form>
          <p>温馨提示：</p>
          <p>请输入正确的用户名和密码</p>
    		</div>
    	</div>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
import md5 from 'js-md5'
export default {
  name: 'Login',
  data () {
  	var validatePass = (rule, value, callback) => {
  		var reg = /^[0-9]{3,16}$/
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
      	if(!reg.test(value)){
	        callback(new Error('全数字，长度在4-16之间'));
	      } else {
	      	callback()
	      }
      }
    };
  	return {
      eyeShow: false,
      changeType: 'password',
  		ruleForm: {
  			name:'',
  			pass:'',
        code:''
  		},
  		rules: {
		    name: [
			    { required: true, message: '请输入账号', trigger: 'blur' },
			    { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
		    ],
		    pass: [
		    	// { required: true, message: '请输入密码', trigger: 'blur' },
		    	{ validator: validatePass, trigger: 'blur' }
		    ],
        code: [
          {required:true,  message: '请输入正确验证码', trigger: 'blur' },
          {max:4}
        ]
  		},
      imgSrc:'http://frame-service.sunmath.cn/iot-frame/createValicode?rnd='+Math.random()
  	}
  },
  methods: {
    openEye () {
      let self=this;
      self.eyeShow = !self.eyeShow;
      // self.changeType = self.eyeShow ? 'text' : "password"
      self.eyeShow?self.changeType='text':self.changeType='password'
    },
    changeImg() {
      let self=this;
      self.imgSrc='http://frame-service.sunmath.cn/iot-frame/createValicode?rnd='+Math.random()
    },
    deleate() {
      let self=this;
      self.ruleForm.name='';
    },
    submitForm(formY) {
    	let self = this;
      self.$refs[formY].validate((valid) => {
        if (valid) {
        	console.log("验证规则成功了",self.ruleForm)
          // alert('submit!');
          //ajax请求
          let data={
            userName:self.ruleForm.name,
            password:md5(self.ruleForm.pass),
            code:self.ruleForm.code,
            platform:0
          }
          console.log(data)
          self.axios.post('/iot-frame/login',data)
          .then(function(response){//1,请求发送成功
            console.log(response)
            if(response.status==200){//2,验证服务器是否成功
              if(response.data.status==200 && response.data.data){//3,验证后台接口是否成功
                 self.$router.push('/home')
              }else{
                self.$message.error(response.data.message);
                self.imgSrc='http://frame-service.sunmath.cn/iot-frame/createValicode?rnd='+Math.random()
              }
            }else{
              console.log("服务器错误");
              self.imgSrc='http://frame-service.sunmath.cn/iot-frame/createValicode?rnd='+Math.random()
            }
          })
          .catch(function(error){//请求发送失败
            console.log(error);
            self.imgSrc='http://frame-service.sunmath.cn/iot-frame/createValicode?rnd='+Math.random()
          });
        }else {
          console.log("验证规则失败了了",self.ruleForm);
          self.imgSrc='http://frame-service.sunmath.cn/iot-frame/createValicode?rnd='+Math.random()
          return false;
        }
      });
    }
  }  
}
</script>

<style lang="scss" scoped>
  $background:linear-gradient(top,#658CB3,#B0C783);
  .login{
  	background:$background;
  	margin:0;
  	padding:0;
  	width:100%;
  	height:100%;
  	display: flex;
    justify-content: center;
    align-items: center;
    	.ipt{
    	  img{
          display:block;
          height:40px;
        }
    	}
  }
  h2{
    padding-bottom: 5px;
    color: #fff;
    font-size: 30px;
  	text-align: center
  }
  p{
    font-size: 12px;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition:opacity 500s;
  }

</style>
