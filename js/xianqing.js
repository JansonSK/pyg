$(function () {



    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
    });


    var info = {
        cat_id: '',
        goods_id: '',
        goods_name: '',
        goods_number: '',
        goods_price: '',
        goods_small_logo: '',
        goods_weight: ''
    }


    $.extend($, {
        getParameter: function (url) {
            var obj = {}
            // location.search:url中?及?后面的内容
            url = url.substring(1) //cid=5&name=jack
            // 先按&拆分
            var arr = url.split('&') //['cid=5','name=jack']
            // 遍历进行第二次拆分
            for (var i = 0; i < arr.length; i++) {
                var temp = arr[i].split('=') //['cid',5]
                obj[temp[0]] = temp[1] // obj['cid'] = 5
            }
            return obj
        }
    });
    // 获取数据

    $.ajax({
        typr: 'get',
        url: 'http://157.122.54.189:9094/api/public/v1/goods/detail',
        data: $.getParameter(location.search),
        dataType: 'json',
        success: function (result) {
            // info.cat_id = result.data.cat_id
            info.goods_id = result.data.goods_id
            info.goods_name = result.data.goods_name
            info.goods_number = result.data.goods_number
            info.goods_price = result.data.goods_price
            info.goods_small_logo = result.data.goods_small_logo
            info.goods_weight = result.data.goods_weight

            console.log(result)
        }


    })

})