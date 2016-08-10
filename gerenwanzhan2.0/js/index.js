/**
 * Created by XiaoBai on 2016/8/3.
 */
// section0控制模块
var osection0=document.getElementById("section0");
// osection0.style.height=osection0.offsetWidth/(2.14795)+"px";
/*if(document.body.offsetWidth<=420)
{
    osection0.style.height=osection0.offsetWidth/(2.147959183673469)+"px";
}*/
var op1=document.getElementById("p1");
$(op1).on("mouseover",function () {
    $(this).stop().animate({
        left:10
    })
    $(this).on("mouseout",function () {
        $(this).stop().animate({
            left:0
        })
    })
})
/*
var xiaoyuan=document.getElementById("xiaoyuan");
$(xiaoyuan).on("mouseover",function () {

},800)*/



var opart3=document.getElementById("part3");
var apart3=opart3.getElementsByTagName("div");
for(var i=0;i<apart3.length;i++)
{
    apart3[i].onmouseover=function () {
        var adiv1=this.children;

        adiv1[0].style.opacity=1;
        adiv1[0].style.top="41%";
        adiv1[1].style.opacity=0.6;
        adiv1[2].style.transform="scale(1.05)";
        this.onmouseout=function () {
            adiv1[0].style.opacity=0;
            adiv1[0].style.top="58%";
            adiv1[1].style.opacity=0;
            adiv1[2].style.transform="scale(1)";
        }

    }
}

var opart4=document.getElementById("part4");
var apart4=opart4.getElementsByTagName("div");
for(var i=0;i<apart4.length;i++)
{
    apart4[i].onmouseover=function () {
        var adiv1=this.children;

        adiv1[0].style.opacity=1;
        adiv1[0].style.top="41%";
        adiv1[1].style.opacity=0.6;
        adiv1[2].style.transform="scale(1.05)";
        this.onmouseout=function () {
            adiv1[0].style.opacity=0;
            adiv1[0].style.top="58%";
            adiv1[1].style.opacity=0;
            adiv1[2].style.transform="scale(1)";
        }

    }
}
// osection0控制模块结束

//第二个模块控制元素开始！画廊！
//   3.通用函数
function g(selector) {
    return document.querySelectorAll(selector);
}
//    随机生成一个值 支持取值范围 [min,max]
function random(range) {
    var max=Math.max(range[0],range[1]);
    var min=Math.min(range[0],range[1]);
    var diff=max-min;
    var number=Math.ceil((Math.random()*diff+min));
    return number;
}
//    4.输出所有数据
var data=data;
function addPhotos() {
    var template=g("#wrap")[0].innerHTML;
    var html=[];
    var nav=[];
    console.log(data[data.length-1]);
    for(var s in data)
    {
        var _html='<div class="photo photo_front" onclick="turn(this)" id="photo_'+s+'"><div class="photo-wrap"><div class="side side-front"><p class="image"><img src="images/'+data[s].img+'" alt=""></p></div><div class="side side-back"><p class="desc">'+data[s].desc+'</p></div></div></div>';
        html.push(_html);
        nav.push('<span class="i" id="nav_'+s+'" onclick="turn(g(\'#photo_'+s+'\')[0])"></span>');
    }
    html.push('<div class="nav">'+nav.join("")+'</div>')
    g("#wrap")[0].innerHTML=html.join('');
    rsort(random([-1,data.length-1]));
}
addPhotos();

//    6.计算左右分区的范围
function range() {
    var range={
        left:{
            x:[],
            y:[]
        },
        right:{
            x:[],
            y:[]
        }
    }
    var wrap={
        w:g("#wrap")[0].clientWidth,
        h:g("#wrap")[0].clientHeight
    }
    var photo={
        w:g(".photo")[0].clientWidth,
        h:g(".photo")[0].clientHeight
    }
    range.wrap=wrap;
    range.photo=photo;
    range.left.x=[(0-photo.w)/2,wrap.w/2-photo.w/2];
    range.left.y=[(0-photo.h)/2,wrap.h];
    range.right.x=[wrap.w/2+photo.w/2,(wrap.w+photo.w)-photo.w/2];
    range.right.y=range.left.y;
    return range;
}

//    5.排序海报
function rsort(n) {
    var _photo=g('.photo');
    var photos=[];
    for(var s=0;s<_photo.length;s++)
    {
        _photo[s].className=_photo[s].className.replace(/\s*photo_center\s*/," ");
        _photo[s].className=_photo[s].className.replace(/\s*photo_front\s*/," ");
        _photo[s].className=_photo[s].className.replace(/\s*photo_back\s*/," ");
        _photo[s].className+=' photo_front ';
        _photo[s].style.left="";
        _photo[s].style.top="";
        _photo[s].style['-webkit-transform']='rotate(360deg) scale(1.3)';
        _photo[s].style['-o-transform']='rotate(360deg) scale(1.3)';
        _photo[s].style['-moz-transform']='rotate(360deg) scale(1.3)';
        _photo[s].style['-ms-transform']='rotate(360deg) scale(1.3)';
        _photo[s].style['transform']='rotate(360deg) scale(1.3)';


        photos.push(_photo[s]);
    }
    var photo_center=g('#photo_'+n)[0];
    photo_center.className+=" photo_center";
    photo_center=photos.splice(n,1)[0];
    //把海报分为左右两个部分
    var photos_left=photos.splice(0,Math.ceil(photos.length/2));
    var photos_right=photos;
    var ranges=range();
    for(s in photos_left)
    {
        var photo=photos_left[s];
        photo.style.left=random(ranges.left.x)+"px";
        photo.style.top=random(ranges.left.y)+"px";
        photo.style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-o-transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-moz-transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-ms-transform']='rotate('+random([-150,150])+'deg) scale(1)';

    }
    for(s in photos_right)
    {
        var photo=photos_right[s];
        photo.style.left=random(ranges.right.x)+"px";
        photo.style.top=random(ranges.right.y)+"px";
        photo.style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-ms-transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-moz-transform']='rotate('+random([-150,150])+'deg) scale(1)';
        photo.style['-o-transform']='rotate('+random([-150,150])+'deg) scale(1)';
    }
//    控制器按钮
    var navs=g(".i");
    for(var s=0;s<navs.length;s++)
    {
        navs[s].className=navs[s].className.replace(/\s*i_current\s*/,"");
        navs[s].className=navs[s].className.replace(/\s*i_back\s*/,"");
    }
    g('#nav_'+n)[0].className+=' i_current '
    console.log(photos_left.length,photos_right.length);
}

//  1.  画面控制
function turn(elem) {
    var cls=elem.className;
    var n=elem.id.split('_')[1];
    if(!/photo_center/.test(cls))
    {
        return rsort(n);
    }
    if(/photo_front/.test(cls))
    {
        cls=cls.replace(/photo_front/,'photo_back');
        g("#nav_"+n)[0].className+=' i_back';
    }
    else
    {
        cls=cls.replace(/photo_back/,'photo_front');
        g("#nav_"+n)[0].className=g("#nav_"+n)[0].className.replace(/\s*i_back\s*/,"");
    }
    return elem.className=cls;
}
// 第二个元素控制模块结束