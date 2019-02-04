window.onload=function () {
    // 1.实现瀑布流布局
    waterfull('main','box');

    // 2.动态加载图片
    window.onscroll=function(){
        // console.log(document.documentElement.scrollTop);
        if(checkWillLoadImage())
        {
            // 2.1 造数据
            var dataArr=[
                {'src':'images/4.jpg'},
                {'src':'images/14.jpg'},
                {'src':'images/3.jpg'},
                {'src':'images/7.jpg'},
                {'src':'images/9.jpg'},
                {'src':'images/11.jpg'},
                {'src':'images/16.jpg'},
                {'src':'images/2.jpg'},
                {'src':'images/5.jpg'},
                {'src':'images/8.jpg'},
                {'src':'images/1.jpg'},
                {'src':'images/3.jpg'},
                {'src':'images/10.jpg'},
                {'src':'images/12.jpg'},
            ];
            // 2.2创建元素
            for(var i=0;i<dataArr.length;i++)
            {
                var newBox=document.createElement('div');
                newBox.className='box';
                var newPic=document.createElement('div');
                newPic.className='pic';
                var newImg=document.createElement('img');
                newImg.src=dataArr[i].src;

                newPic.appendChild(newImg);
                newBox.appendChild(newPic);
                $('main').appendChild(newBox);

            }
            // 对元素重新设置瀑布流布局，主要是对新加的元素
            waterfull('main','box');
        }
    }
}


/*
* 实现瀑布流布局
* */
function waterfull(parent,child) {
    // 1父盒子居中
    // 1.1获取所有子盒子
    var cs=$(parent).getElementsByClassName(child);
    //1.2获取子盒子宽度
    var boxwidth=cs[0].offsetWidth;
    // 1.3获取窗口宽度
    var screenWidth=document.documentElement.clientWidth;
    // 1.4 计算当前窗口的子盒子列数
    var cols=parseInt(screenWidth/boxwidth);
    //1.5 计算父盒子宽度，并居中
    $(parent).style.width=cols*boxwidth+'px';
    $(parent).style.margin='0 auto';
    $(parent).style.border='1px solid red';
    console.log(cols);

    // 2.子盒子的定位
    // 2.1定义高度数组
    var heightArr=[];
    var boxheight;
    var minboxheight=0;//最矮合作的高度
    var minBoxIndex=0;//最矮盒子的索引
    for(var i=0;i<cs.length;i++)
    {
        // 2.2.1求出每个子盒子的高度
        boxheight=cs[i].offsetHeight;
        //2.2.2取出第一行的盒子高度放入高度数组
        if(i<cols)
        {
           heightArr.push(boxheight);
        }else{//剩余行
            // 1.取出最矮盒子的高度
            minboxheight=_.min(heightArr);
            //2.求出最矮盒子对应的索引
            minBoxIndex=getMinBoxIndex(heightArr,minboxheight)
            //3.子盒子定位
            cs[i].style.position='absolute';

            cs[i].style.left=minBoxIndex*boxwidth+'px';
            cs[i].style.top=minboxheight+'px';
            console.log(minboxheight);
            // 4.更新数组中的高度
            heightArr[minBoxIndex]+=boxheight;
        }
    }



}
/*
* 获取数组中最矮元素的索引
* */
function getMinBoxIndex(arr,minHeight)
{

    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]===minHeight)
            return i;
    }
}
function $(id) {
    return typeof id==='string'?document.getElementById(id):null;

}
/*
* 判断是否开始加载条件
* */
function checkWillLoadImage() {
  // 1.获取最后一个合作
    var allBox=document.getElementsByClassName('box');
    var lastBox=allBox[allBox.length-1];
    //2 求出最后一个合作自身高度的一半+offsettop高度
    var lastBoxDis=lastBox.offsetTop+lastBox.offsetHeight/2;
    // 3.屏幕的高度
    var screeHeight=document.documentElement.clientHeight;

    // 4.页面偏离浏览器窗口的高度
    var scrollTop=document.documentElement.scrollTop;
    console.log('lastBoxDis='+lastBoxDis);
    console.log('scrolltop='+scrollTop);
    return lastBoxDis<=screeHeight+scrollTop;
}

