// JavaScript Document
$(function(){
  var hides=document.getElementsByName("jHide");
  for(var i=0;i<hides.length;i++)
	{
	  hides[i].onclick=function()
	  {
		var box=this.parentNode.parentNode;
		if(box.className.indexOf("dlA-hide")<0){
		  box.className+=" dlA-hide";
		 }
		 else {
		  box.className=box.className.replace(/dlA-hide/," ");
		  	}
	  };
   };
})();