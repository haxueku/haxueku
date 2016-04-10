$(function(){
	// 首页
	$(".xf_teshuli").hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
		$(".xf_mysjleft").click(function(){
			if($(this).parent().hasClass('active')){
				$(this).parent().removeClass('active');
				$(this).find("i").text("《");
			}else{
				$(this).parent().addClass('active');
				$(this).find("i").text("》");
			}
		});
		$(".xf_showsj p i").click(function(){
			$(".xf_qksjpop").show();
		});
		$(".tag2,.xf_paixulb .tags,.tags_line .tags").click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$(".xf_xuanzekm").click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(".xf_xuanzekmbox").hide();
			}else{
				$(this).addClass('active');
				$(".xf_xuanzekmbox").show();
			}
		});
		$(".zan").click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		});
		$(".xf_xuanzekmbox div a").click(function(){
			$(".xf_xuanzekm").removeClass('active');
			$(".xf_xuanzekmbox").hide();
		});
		$(".xf_shaixuansctm a,.down_btn").click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		});
		$(".jr_btn").click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active').text("+加入试卷")
			}else{
				$(this).addClass('active').text("－移出试卷")
			}
		});
		$(".sc_btn").click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active').text("收藏")
			}else{
				$(this).addClass('active').text("已收藏")
			}
		});

	// 选择搜索类型
	$(".sea_left em").click(function(){
		if($(this).hasClass('cur')){
			$(this).removeClass('cur').siblings().hide();
		}else{
			$(this).addClass('cur').siblings().show();
		}
	});
	$(".sea_left ul li").click(function(){
		$(this).parent().hide().siblings().removeClass('cur').find("a").text($(this).text());
	});
	$(".xf_righexzfl ul li").click(function(){
		$(this).addClass('cur').siblings().removeClass('cur')
	});
	$(".er_li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	// 答题卡
	$(".xf_datika em span").html("<i>0</i>/"+$(".xf_xuanzetibox ul li").length)
	// 选择题目
	$(".xf_xuanzetibox ul li p").click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active').siblings("em").find("span").text($(this).parent().find(".active").find("span").text());
		}else{
			if($(this).parent().hasClass('xf_morex')){
				$(this).addClass('active').siblings("em").find("span").text($(this).parent().find(".active").find("span").text());
			}else{
				$(this).addClass('active').siblings().removeClass('active').siblings("em").find("span").text($(this).find("span").text());
			}
		}
		$(".xf_datika em span i").text($(".xf_xuanzetibox ul li p.active").parent().length)
	});
	// 切换科目
	$(".xf_dqkm a").click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(".xf_xuanzekmbox").hide();
		}else{
			$(this).addClass('active');
			$(".xf_xuanzekmbox").show();
		}
	});
	$(".xf_xuanzekmbox div a").click(function(){
		$(".xf_dqkm a").removeClass('active').siblings(".xf_dqkmlx").text($(this).text());
		$(".xf_xuanzekmbox").hide();
		return false;
	});
	$(".xf_shaixuanbox .more_tags").click(function(){
		if($(this).hasClass('cur')){
			$(this).removeClass('cur').siblings(".tags_line").css("height",44)
		}else{
			$(this).addClass('cur').siblings(".tags_line").css("height","auto")
		}
	});
	$(".xf_datika em u").click(function(){
		if($(this).hasClass('cur')){
			$(this).removeClass('cur').parent().siblings("ul").slideDown(300);
		}else{
			$(this).addClass('cur').parent().siblings("ul").slideUp(300);;
		}
	});
	$(".xf_bentijx").click(function(){
		if($(this).hasClass('cur')){
			$(this).removeClass('cur').parents(".xf_teshuli").find(".xf_jiexida").slideUp(300);
		}else{
			$(this).addClass('cur').parents(".xf_teshuli").find(".xf_jiexida").slideDown(300);
		}
	});

	$(".xf_jiaojuana a").click(function(){
		$(".xf_jiaojuanpop").show();
	});
	$(".xf_tishijjpop div a").click(function(){
		$(".xf_tishijjpop").hide();
	});
	$(".xf_jiucuo,.ico_zjgn7,.error_check").click(function(){
		$(".xf_jiecuobox").show();
	});
	$(".xf_jiecuobox div a").click(function(){
		$(".xf_jiecuobox").hide();
	});
	$(".param_tr td span").click(function(){
		$(this).parents(".param_tr").remove();
	});
})