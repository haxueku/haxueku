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
	$("#paperdownload").click(function(){
		$("#sj_div").dialog({
			title:"生成试卷",
			width:"560",
			height:"auto",
			modal:true,
			create: function(){
			},
			buttons:[{
				text:"生成word试卷",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					dialog = this;		
					$('#sj_div').dialog("destroy");
				}
			},{
				text:"取消",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					$("#sj_div").dialog("destroy");
				}
			}],
			beforeClose: function() {
				$('#sj_div').dialog("destroy");
			}
		});
	});
	$("#down_sj").click(function(){
		$("#sz_div").dialog({
			title:"下载",
			width:"560",
			height:"auto",
			modal:true,
			create: function(){
			},
			buttons:[{
				text:"下载",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					dialog = this;		
					$('#sz_div').dialog("destroy");
				}
			},{
				text:"取消",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					$("#sz_div").dialog("destroy");
				}
			}],
			beforeClose: function() {
				$('#sz_div').dialog("destroy");
			}
		});
	});
	$("#answercar").click(function(){
		$("#dtk_div").dialog({
			title:"生成答题卡",
			width:"600",
			height:"auto",
			modal:true,
			create: function(){
			},
			buttons:[{
				text:"生成word试卷",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					dialog = this;		
					$('#dtk_div').dialog("destroy");
				}
			},{
				text:"取消",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					$("#dtk_div").dialog("destroy");
				}
			}],
			beforeClose: function() {
				$('#dtk_div').dialog("destroy");
			}
		});
	});
	$(".bjxs").click(function(){
		$(".bjxs_div").dialog({
			title:"编辑学生",
			width:"450",
			height:"auto",
			modal:true,
			create: function(){
			},
			buttons:[{
				text:"确定",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					dialog = this;		
					$('.bjxs_div').dialog("destroy");
				}
			},{
				text:"取消",
				show:function(){
					$(":button").slice(2,3).css({"background":"#fff","color":"#000","border":"1px solid #e5e5e5"});
				},
				click:function(){
					$(".bjxs_div").dialog("destroy");
				}
			}],
			beforeClose: function() {
				$('.bjxs_div').dialog("destroy");
			}
		});
	});
	$(".jx_zzt").click(function(){
		$(".jx_xslist").dialog({
			title:"第1题--A选项学生名单(23人 占比35.3%)",
			width:"580",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('.jx_xslist').dialog("destroy");
			}
		});
	});
	$(".jx_fx").click(function(){
		$(".jx_xslist1").dialog({
			title:"第1题--0-3分 学生名单(23人 占比35.3%)",
			width:"580",
			height:"auto",
			modal:true,
			create: function(){
			},
			beforeClose: function() {
				$('.jx_xslist1').dialog("destroy");
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
			buttons:[{
				text:"确定",
				click:function(){
					dialog = this;		
					$('.bjxs_div').dialog("destroy");
				}
			}],
			beforeClose: function() {
				$('#head_photo').dialog("destroy");
			}
		});
	});
};
$(function(){
	new dia_log();
});