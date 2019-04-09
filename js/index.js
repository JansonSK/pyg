$(function(){
     banner()
     goodList()

})
function banner(){
$(function () {
    

    $.ajax({
        type: 'get',
        url: 'home/swiperdata',
        dataType: 'json',
        success: function (result) {
            // console.log(result)


            if (result.meta.status == 200) {
                var html = template('lbt_banner', result)
                // console.log(html)
                $('.indexBanner').html(html)

                var indexHtml = template('lbt_selreot', result)
                $('.mui-slider-indicator').html(indexHtml)
                //  控制轮播图的自动切换的速度
                mui('.mui-slider').slider({
                    interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
                });
            }
        }

    })

   



})
 }

function goodList(){
      $.ajax({
          type:'get',
          url:'home/goodslist',
          dataType:'json',
          success:function(result){
                  console.log(result)
                  var good=template('prolistTemp',result)
                  console.log(good)
                  $('.good_list').html(good)
          }
      })
    
}