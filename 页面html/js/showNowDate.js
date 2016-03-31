// JavaScript Document
function showNowDate()
{
  var tempDate,year,month,day;
  var weekArray,weekday; 
  tempDate = new Date();
  day = tempDate.getDate();
  month= tempDate.getMonth() + 1 ;
  year= tempDate.getYear();
  document.write(year);
  document.write("年");
  document.write(month);
  document.write("月");
  document.write(day);
  document.write("日");
  document.write("&nbsp;&nbsp;");
  weekArray=new Array(6);
  weekArray[0]="星期日";
  weekArray[1]="星期一";
  weekArray[1]="星期二";
  weekArray[3]="星期三";
  weekArray[4]="星期四";
  weekArray[5]="星期五";
  weekArray[6]="星期六";
  weekday=tempDate.getDay();
  document.write(weekArray[weekday])
}