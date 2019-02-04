// var box=new Array();
// alert(typeof(box));
// var box={
// 	name:'张三',
// 	age:40
// };
// alert(box.age);

// var box=['abc','def',33,'计算机'];
// alert(box);
// box.push('陕西');
// alert(box);
// var pattern=new RegExp('Box','ig');
// var str="this is a box!";
// alert(pattern.exec(str));
window.onload=function(){
  
 // alert(d.clientHeight);
 // var d=document.getElementById("d1");
 //  d1.style.left=100+'px';
  // alert(document.documentElement.offsetWidth);
  //alert(d1.offsetWidth);
  // alert(d1.offsetLeft);
 // d1.style.pixelLeft=100;
  var time=setInterval("move()",50);
  content.onmouseover=function(){
       clearInterval(time);
  }
  content.onmouseout=function(){
  	time=setInterval("move()",50);
  }
}
function move()
{
     var off=d1.offsetLeft;    //div id=d1的宽度
     var sw=document.getElementById('content').offsetWidth;   
     var w=d1.offsetWidth;
     // alert(d1.scrollLeft); 滚动的距离
     // alert(document.getElementById('content').offsetWidth); 
    // alert(content.offsetWidth);对于positon=relative来说，无妨获取offsetwidth属性。
     if(off>=sw)
     {
     	off=-2*w;
     }
     off+=2;
     d1.style.left=off+'px';//left属性的设置必须是字符串，并且是px结尾的。

    // d1.style.left=off+'px';
   // msg.innerHTML+='<br>left:'+d1.scrollLeft;
     // msg.innerHTML+='<br>left:'+d1.offsetLeft;
     // msg.innerHTML+='<br>width:'+sw;
     var off2=d2.offsetLeft;
      var w2=d2.offsetWidth;
     if(off2>=sw)
     {
     	off2=-2*w2;
     }
     off2+=2;
     d2.style.left=off2+'px';

      var off3=d3.offsetLeft;
      var w3=d3.offsetWidth;
     if(off3>=sw)
     {
     	off3=-2*w3;
     }
     off3+=2;
     d3.style.left=off3+'px';
    
    //setTimeout('move()',50);
}