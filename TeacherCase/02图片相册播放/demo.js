// 页面加载后执行的js代码
window.onload=function(){
   // alert(document.getElementById("content").offsetWidth);
   var index=document.getElementById("ex");
   index.innerHTML=i+"/6";
};
var i = 1;
var d1 = -665;
var d2 = 1330;

function next() {
    var d = document.getElementById("content");
    var ds = d.childNodes;
    // for (var i = 0; i < d.childNodes.length; i++) {
    //     console.log("nodetype:" + ds[i].nodeType);
    //     console.log("nodeName:" + ds[i].nodeName);
    //     console.log("nodeValue:'" + ds[i].nodeValue + "'");
    // }
    //alert(d.childNodes(0).nodeType);
    // console.log(d.children.length);//(0).src="images/02.jpg";
    // console.log(d.children[0].src);
     i=(i+1)%6==0?1:(i+1)%6;
    // d.children[0].src="images/0"+i+".jpg";
    var tp = document.createElement("img");
    tp.src = "images/0"+i+".jpg";
    tp.style.position = "absolute";
    tp.style.width = "665px";
    tp.style.height = "414px";
    d.appendChild(tp);
    document.getElementById("control").style.zIndex=tp.style.zIndex+1;
    // while (tp.offsetLeft < tp.offsetWidth) {
    //     slideimg(tp);
    // }
}

function slideimg(aimg) {
    var init = d1;
    aimg.style.left = init + "px";
}

function view() {
    var d = document.getElementById("content");
    var ds = d.children;
    for (var i = 0; i < ds.length; i++) {
        console.log("nodetype:" + ds[i].nodeType);
        console.log("nodeName:" + ds[i].nodeName);
        console.log("nodeValue:'" + ds[i].nodeValue + "'");
    }
}