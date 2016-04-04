$(function(){
    $(".ce > li > a").click(function(){
		if($(this).is('.xz')){
            $(this).removeClass("xz").children('i').addClass('ce_jia').removeClass('ce_jian');
        }else{
			$(this).children('i').addClass('ce_jian').removeClass('ce_jia').parents().siblings().find(".ce_jian").addClass('ce_jia').removeClass('ce_jian');
			$(this).addClass("xz").parents().siblings().find("a").removeClass("xz");
		}
		$(this).parents().siblings().find(".er").hide();
		$(this).siblings(".er").toggle();
		$(this).parents().siblings().find(".er > li > .thr").hide().parents().siblings().find(".thr_nr").hide();
	})
    $(".er > li > a").click(function(){
		if($(this).is('.sen_x')){
            $(this).removeClass("sen_x").children('i').addClass('ce_jia').removeClass('ce_jian');
        }else{
			$(this).children('i').addClass('ce_jian').removeClass('ce_jia').parents(".e_li").siblings().find(".ce_jian").addClass('ce_jia').removeClass('ce_jian');
			$(this).addClass("sen_x").parents().siblings().find("a").removeClass("sen_x");
		}
        
        $(this).parents().siblings().find(".thr").hide();	
	    $(this).siblings(".thr").toggle();	
	})

    $(".thr > li > a").click(function(){
	     $(this).addClass("xuan").parents().siblings().find("a").removeClass("xuan");
		 $(this).parents().siblings().find(".thr_nr").hide();	
	     $(this).siblings(".thr_nr").toggle();
	})
	$(".j_c").click(function(){
		$('.j_c').addClass("na_n_check").removeClass("na_n");
		$('.zsd').addClass("na_n").removeClass("na_n_check");
		$('.j_c_list').show();
		$('.zsd_list').hide();
  });
  $(".zsd").click(function(){
		$('.zsd').addClass("na_n_check").removeClass("na_n");
		$('.j_c').addClass("na_n").removeClass("na_n_check");
		$('.j_c_list').hide();
		$('.zsd_list').show();
  });
    $("div[id^='kd_']").click(function(){
		var id = (this.id.toString().match(/\d+/ig)||[])[0];
		$("#kd").val(id);
		$(".kedu_"+id).show().parents().siblings("div[id^='kd_']").children().hide();
		
	});
	$("#tab_id").val(1);
	$(".left_ty").click(function(){
		//$("div[class^='content_']").hide();
		var tab_id = $("#tab_id").val();
		var tab = $(this).attr("value");
		if(tab_id == tab){
			return;
		}
		if(tab == 1){	
			$(this).removeClass("my_sc").addClass("my_sc_c");
		}else if(tab==2){
			$(this).removeClass("my_cp").addClass("my_cp_c");
		}else if(tab==3){
			$(this).removeClass("my_zy").addClass("my_zy_c");
		}else if(tab==4){
			$(this).removeClass("my_user").addClass("my_user_c");
		}else if(tab==5){
			$(this).removeClass("my_log").addClass("my_log_c");
		}
		if(tab_id == 1){	
			$(".my_sc_c").removeClass("my_sc_c").addClass("my_sc");
		}else if(tab_id==2){
			$(".my_cp_c").removeClass("my_cp_c").addClass("my_cp");
		}else if(tab_id==3){
			$(".my_zy_c").removeClass("my_zy_c").addClass("my_zy");
		}else if(tab_id==4){
			$(".my_user_c").removeClass("my_user_c").addClass("my_user");
		}else if(tab_id==5){
			$(".my_log_c").removeClass("my_log_c").addClass("my_log");
		}
		$("#tab_id").val(tab);
		$(".show_tab_1,.show_tab_2,.show_tab_3,.show_tab_4,.show_tab_5").hide();
		$(".show_tab_"+tab).show();
	});		
});

  