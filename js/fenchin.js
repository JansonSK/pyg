	$(function () {

		

	    $('.mui-icon-search').on('tap', function () {
	        mui('.mui-off-canvas-wrap').offCanvas('show');

	    })



$.ajax({
    type:"get",
    url:'http://157.122.54.189:9094/api/public/v1/goods/search',
    dataType:"json",
    success:function(result){
          console.log(result)
          var nima=result.data
          console.log(nima)
		  var html = template('goodlistTemp',nima)
            $('.show').html(html)
			console.log(html)
    }
})

mui.init({
	        pullRefresh: {
	            container: ".show", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
	            down: {
	               
	                height: '50px', //可选,默认50px.下拉刷新控件的高度,
	                range: '100px', //可选 默认100px,控件可下拉拖拽的范围
	                offset: '0px', //可选 默认0px,下拉刷新控件的起始位置
	                auto: false,//可选,默认false.首次加载自动上拉刷新一次
	                callback:function(){
                       
                    } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；

	            }
	        }
	    })
	    

	})