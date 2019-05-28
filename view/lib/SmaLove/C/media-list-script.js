mui.init({
	swipeBack:true //启用右滑关闭功能
});
var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});

(function () {
/*组件初始化js begin*/
$('#fix-both').navigator({     //左右都有fix元素
    isScrollToNext: false,      //出现半个tab时，不跳动到下一个tab
    isShowShadow: false       //不显示左右阴影
    });
})();