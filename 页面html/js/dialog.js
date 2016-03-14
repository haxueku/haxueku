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
			width:"760",
			height:"auto",
			modal:true,
			create: function(){
			},
			buttons:[{
				text:"生成word试卷",
				click:function(){
					dialog = this;		
					$('#sj_div').dialog("destroy");
				}
			},{
				text:"取消",
				click:function(){
					$("#sj_div").dialog("destroy");
				}
			}],
			show:function(){
				$(":button").slice(0,1).css("background","#fff");
			},
			beforeClose: function() {
				$('#sj_div').dialog("destroy");
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
			beforeClose: function() {
				$('#dtk_div').dialog("destroy");
			}
		});
	});
	
};
$(function(){
	new dia_log();
});