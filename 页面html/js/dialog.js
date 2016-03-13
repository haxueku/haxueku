function dia_log(){
	this.init();
	this.check();
};
dia_log.prototype.init = function(){
	$("#biaozhun").click(function(){
		$(this).addClass('yl-on');
		$("#zuoye").removeClass('yl-on');
		$(".b_z").show();
		$(".z_y").hide();
		$("#pui_main").css("margin-left","105px");
		$(".questypescore").show();
	});
	$("#zuoye").click(function(){
		$(this).addClass('yl-on');
		$("#biaozhun").removeClass('yl-on');
		$(".z_y").show();
		$(".b_z").hide();
		$(".questypescore").hide();
		$("#pui_main").css("margin-left","0px");
	});
	
};
dia_log.prototype.check = function(){
	$("#mbcreateQues").click(function(){
		$("#is_login").dialog({
			title:"登录",
			width:"400",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#is_login').dialog("destroy");
			}
		});
	});
	$("#mbanswerSheet").click(function(){
		$("#datika").dialog({
			title:"下载答题卡",
			width:"580",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#datika').dialog("destroy");
			}
		});
	});
	$("#mbdownQues").click(function(){
		$("#down_sj").dialog({
			title:"下载试卷",
			width:"430",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#down_sj').dialog("destroy");
			}
		});
	});
	$("#down_next").click(function(){
		$('#down_sj').dialog("destroy");
		$("#down_sj2").dialog({
			title:"下载",
			width:"640",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#down_sj2').dialog("destroy");
			}
		});
	});
	$("#mbsaveQues").click(function(){
		$("#save_sj").dialog({
			title:"保存试卷",
			width:"430",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#save_sj').dialog("destroy");
			}
		});
	});
	
	$("#save_butt").click(function(){
		$('#save_sj').dialog("destroy");
		$("#is_save").dialog({
			title:"提示",
			width:"400",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#is_save').dialog("destroy");
			}
		});
	});
	$("#mbcreateQues").click(function(){
		$("#hint").dialog({
			title:"提示",
			width:"400",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#hint').dialog("destroy");
			}
		});
	});
	$(".icon3").click(function(){
		$("#sc_sj").dialog({
			title:"收藏试卷",
			width:"540",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#sc_sj').dialog("destroy");
			}
		});
	});
	$("#bind_phone").click(function(){
		$("#phone_dialog").dialog({
			title:"提示",
			width:"450",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#phone_dialog').dialog("destroy");
			}
		});
	});
	$("#check_photo").click(function(){
		$("#head_photo").dialog({
			title:"选择头像",
			width:"630",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#head_photo').dialog("destroy");
			}
		});
	});
	$(".mbquesBtn1").click(function(){
		$("#modify1").dialog({
			title:"试卷设置",
			width:"400",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#modify1').dialog("destroy");
			}
		});
	});
	$(".mbquesBtn5").click(function(){
		$("#modify5").dialog({
			title:"试卷设置",
			width:"400",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#modify5').dialog("destroy");
			}
		});
	});
	$(".mbquesBtn4").click(function(){
		$("#modify4").dialog({
			title:"试卷设置",
			width:"400",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('#modify4').dialog("destroy");
			}
		});
	});
};
$(function(){
	new dia_log();
});