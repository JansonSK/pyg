$(function(){
// 初始化区域滚动
mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: false //是否显示滚动条，默认为True
});

$('.finsh').on('tap',function(){
    // 切换body的样式，实现元素的统一的显示和隐藏
    $('body').toggleClass('eleToggle')
    // 判断当前按钮的显示文本是‘编辑’还是'完成'
    if($(this).text() == '编辑'){
        // 设置文本内容
        $(this).text('完成')
    }else{
        $(this).text('编辑') 
        // 将用户编辑更新到数据库 -- 同步购物车
        syncCart($('.order-singer'))
    }
})





// 获取数据

$.ajax({


    
})



})