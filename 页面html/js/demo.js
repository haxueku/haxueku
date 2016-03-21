
$(document).ready(function(){
    var $category = $('#nian li:gt(10)');
	$category.hide();
	var $toggleBtn = $('#showMore');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('span').removeClass('hide').addClass('show').text('收起');	
	},function(){
		$category.hide();
		$(this).find('span').removeClass('show').addClass('hide').text('更多');
	});
	
	 var $category1 = $('#area li:gt(9)');
	$category1.hide();
	var $toggleBtn1 = $('#Morearea');
	$toggleBtn1.toggle(function(){
		$category1.show();
		$(this).find('span').removeClass('hide').addClass('show').text('收起');	
	},function(){
		$category1.hide();
		$(this).find('span').removeClass('show').addClass('hide').text('更多');
	});
});


