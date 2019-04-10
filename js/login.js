$(function () {
    //    获取验证码
    $('#getNum').on('tap', function () {

        console.log('你好呀')


    })
//    获取用户注册的信息
    $('.mui-btn-warning').on('tap',function(){
        var obj={
            mobile:"",
            code:"",
            email:"",
            username:"",
            pwd:"",
            gender:""


        }

        if( $('.password').val()===$('.password2').val() ){
              
                
              obj.mobile=$('.moble').val()
              obj.code=$('.num').val()
              obj.email=$('.e-mail').val()
              obj.username=$('.username').val()
              obj.pwd=$('.password').val()
              obj.password2=$('.password2').val()
              obj.gender=$('input[name="radio1"]:checked').val()

        }else{
            mui.toast('你的两次密码输入不正确')
            

        }
         console.log(obj)
        // 发送数据请求
        $.ajax({

            type:"post",
            url:"users/reg",
            data:obj,
            dataType:'json',
            success:function(result){
             console.log(result)
             mui.toast(result.msg)
            }
             
      
    })
  
      })
        //  重置
    $('.mui-btn-danger').on('tap',function(){
            
        $('input').val("")
        
  
     })


})