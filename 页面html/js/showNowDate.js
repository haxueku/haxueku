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
  document.write("��");
  document.write(month);
  document.write("��");
  document.write(day);
  document.write("��");
  document.write("&nbsp;&nbsp;");
  weekArray=new Array(6);
  weekArray[0]="������";
  weekArray[1]="����һ";
  weekArray[1]="���ڶ�";
  weekArray[3]="������";
  weekArray[4]="������";
  weekArray[5]="������";
  weekArray[6]="������";
  weekday=tempDate.getDay();
  document.write(weekArray[weekday])
}