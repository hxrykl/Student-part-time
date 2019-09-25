$(function(){
	//鼠标移入菜单列表字体变化
	$('.menu .menu-i').mouseover(function(){
		//给li子元素a加类名
		$(this).children('a').addClass('tc');
	});
	//鼠标移出菜单列表字体变化
	$('.menu .menu-i').mouseleave(function(){
		//去类名
		$(this).parent().find('a').removeClass('tc');
	});
	//点击li事件
	$('.menu .menu-l').on('click','li',function(){
		//删除a的类名
		$(this).parent().find('a').removeClass('tcg');
		//添加a类名
		$(this).children('a').addClass('tcg');
		//删除i
		$(this).parent().find('a').next().remove();
		//追加i
		$(this).children('a').after('<i class="tc fa fa-chevron-right">');
		//获取菜单列表名
		var iName = $(this).find('span').text();
		//写入面包屑
		$('.right .top  span').text(iName);
		//获取子页面地址
		var url = $(this).attr("url");
		//跳转子页面
		$('#wrapper').load(url);
	});
	//阻止a点击默认事件
	$('.menu').on('click','a',function(){
		event.preventDefault();
	});
	//自动点击首页
	$('.menu .menu-l li:nth-child(2)').trigger('click');

});