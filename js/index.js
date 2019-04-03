$(function () {

    $.ajax({
      type:'get',
      url:'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
      dataType:'jaon',
      success:function(result){
          console.log(result)
          if(result.meta.status==200){
            var html = template('lbt_banner',result)
            console.log(html)
            $('.banner').html(html)
          }
      }

    })


    mui('.mui-slider').slider({
        interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
})