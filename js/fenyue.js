$(function () {



    // 请求数据
    

    $.get('categories', function (result) {

        console.log(result)

        if(result.meta.status==200){
               var cateData ={'list':result.data,time:Date.now()}
               console.log(cateData)
        }
    },'json')
  




})
