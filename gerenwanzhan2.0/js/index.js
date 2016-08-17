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
        adiv1[2].style.transform="scale(1.2)";
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
        adiv1[2].style.transform="scale(1.2)";
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
    // console.log(data[data.length-1]);
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
    // console.log(photos_left.length,photos_right.length);
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

// nav控制模块 header
var alink=document.querySelectorAll(".link")

for(var i=0;i<alink.length;i++)
{
    alink[i].onclick=function (e) {
        e=e||window.event;
        // console.log(this.href);
        var hash=this.href.substring(this.href.indexOf('#')+1);
        // console.log(hash);
        var odiv=document.getElementById(hash);
        // console.log(odiv);
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var target=odiv.offsetTop;
        // console.log(target);
        var current=scrollTop;
        if(target>current)
        {
            var time=setInterval(function () {
                var speed=(target-scrollTop)/8;
                speed=Math.ceil(speed);
                current+=speed;
                if(current>=target)
                {
                    current=target;
                    clearInterval(time);
                }

                window.scrollTo(0,current);
            },40)
        }
        else
        {
            var time=setInterval(function () {
                var speed=(target-scrollTop)/8;
                speed=Math.ceil(speed);
                current+=speed;
                if(current<=target)
                {
                    current=target;
                    clearInterval(time);
                }

                window.scrollTo(0,current);
            },40)
        }
        e.preventDefault();
    }
}
// nav控制模块header


//返回按钮
var ofanhui=document.getElementById("fanhui");
var oheader=document.getElementById("header");
var owrap=document.getElementById("wrap");
var twrap=owrap.offsetTop;
// console.log(twrap)
var osection3=document.getElementById("section3");
var tsection3=osection3.offsetTop;
// console.log(tsection3);
var osection0=document.getElementById("section0");
var tsection0=osection0.offsetTop;
var osection1=document.getElementById("section1");
var tsection1=osection1.offsetTop;
var ocontact=document.getElementById("contact");
var tcontact=ocontact.offsetTop;
window.onscroll=function () {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>400)
    {
        ofanhui.style.display="block";
    }
    /*if(scrollTop>=0&&scrollTop<twrap)
    {
        for(var i=0;i<alink.length;i++)
        {
            alink[i].style.color="";
        }
        alink[0].style.color="yellow";
    }
    if(scrollTop>=twrap&&scrollTop<tsection3)
    {
        for(var i=0;i<alink.length;i++)
        {
            alink[i].style.color="";
        }
        alink[1].style.color="yellow";
    }
    if(scrollTop>=tsection3&&scrollTop<tsection0)
    {
        for(var i=0;i<alink.length;i++)
        {
            alink[i].style.color="";
        }
        alink[2].style.color="yellow";
    }
    if(scrollTop>=tsection0&&scrollTop<tsection1)
    {
        for(var i=0;i<alink.length;i++)
        {
            alink[i].style.color="";
        }
        alink[3].style.color="yellow";
    }
    if(scrollTop>=tsection1&&scrollTop<tcontact-100)
    {
        for(var i=0;i<alink.length;i++)
        {
            alink[i].style.color="";
        }
        alink[4].style.color="yellow";
    }
    if(scrollTop>=tcontact-100)
    {
        for(var i=0;i<alink.length;i++)
        {
            alink[i].style.color="";
        }
        alink[5].style.color="yellow";
    }*/


}
//返回按钮

// section1
var olunbo1ul=document.getElementById("lunbo1-ul");
olunbo1ul.innerHTML+=olunbo1ul.innerHTML;
var alunbo1li=olunbo1ul.getElementsByTagName("li");

for(var i=0;i<alunbo1li.length;i++)
{
    alunbo1li[i].style.left=i*alunbo1li[0].offsetWidth+"px";
}
olunbo1ul.style.width=alunbo1li[0].offsetWidth*alunbo1li.length+"px";
var olunboright=document.getElementById("section1-right");
var olunboleft=document.getElementById("section1-left");
var flag=1;
var flag2=1;
alunbo1li[1].className="a";
olunboright.onclick=function () {
    if(flag==0)
    {
        return;
    }
    flag=0;
    setTimeout(function () {
        flag=1;
    },1000)
    if(olunbo1ul.offsetLeft==0)
    {
        olunbo1ul.style.left=-olunbo1ul.offsetWidth/2+"px";
    }

    bianhuan(1);

}
olunboleft.onclick=function () {
    if(flag2==0)
    {
        return;
    }
    flag2=0;
    setTimeout(function () {
        flag2=1;
    },1000)
    if(olunbo1ul.offsetLeft==-(alunbo1li.length*alunbo1li[0].offsetWidth)+3*alunbo1li[0].offsetWidth)
    {
        olunbo1ul.style.left=-alunbo1li[0].offsetWidth+"px";
    }
    bianhuan(-1)
}
function bianhuan(n) {
    for(var i in alunbo1li)
    {
        alunbo1li[i].className="";
    }
    if(n>0)
    {
        var a=-olunbo1ul.offsetLeft/(alunbo1li[0].offsetWidth);
    }
    else
    {
        var a=-olunbo1ul.offsetLeft/(alunbo1li[0].offsetWidth)+2;
    }
    alunbo1li[a].className="a";
    $(olunbo1ul).stop().animate(
        {
            left:(olunbo1ul.offsetLeft+(alunbo1li[0].offsetWidth)*n)
        },1000
    )

}
// section1

// 登录弹出层
var otanchuui=document.getElementById("tanchuui");
var oui=document.getElementById("ui");
var op=document.getElementById("p");
var flag6=true;
otanchuui.onclick=function () {
    if(flag6)
    {
        oui.style.display="block";
        flag6=!flag;
    }
    else
    {
        oui.style.display="none";
        flag6=!flag6;
    }

}
op.onclick=function () {
    oui.style.display="none";
    flag6=!flag6;
}

oui.onmousedown= function (e) {
    e=e||window.event;
    var chazhix= e.clientX-oui.offsetLeft;
//        console.log(chazhix);
    var chazhiy= e.clientY-oui.offsetTop;
    document.onmousemove=function(e){
        e=e||window.event;
        oui.style.top= e.clientY-chazhiy+"px";
        oui.style.left= e.clientX-chazhix+"px";
    }

    document.onmouseup=function(e)
    {
        document.onmousemove=null;
    }
    //return false;
}
// 登录弹出层

// menu按钮
var omenu=document.getElementById("menu");
var onav=document.getElementById("nav");
var flag3=1;
$(omenu).on("click",function () {
    if(flag3){
        $(onav).stop().slideDown();
        flag3=!flag3;
    }
    else
    {
        $(onav).stop().slideUp();
        flag3=!flag3;
    }
})

// menu按钮


// section3
var atu=document.querySelectorAll(".tu");
// console.log(atu);
for(var i in atu)
{
    // console.log(atu[0].children);

    atu[i].onmouseover=function () {
        var children=this.children;
        // console.log(children);
        children[1].style.display="block";
        children[2].style.display="block";
        this.onmouseout=function () {
            children[1].style.display="none";
            children[2].style.display="none";
        }
    }
}

// 蒙版打开关闭
var omengban=document.getElementById("mengban");
var oguanbi2=document.getElementById("guanbi2");
var omengbancontent=document.getElementById("mengban-content");
var aimg=document.querySelectorAll(".m");
oguanbi2.onclick=function () {
    omengban.style.display="none";
    omengbancontent.style.display="none";
}
var oright=document.getElementById("you1");
var oleft=document.getElementById("zuo1");
var index2=0;
oright.onclick=function () {
    $(aimg[index2]).fadeOut("slow");
    if(index2==3)
    {
        index2=0;
        lunzhuan(index2);
    }
    else
    {
        index2++;
        lunzhuan(index2);
    }
}
oleft.onclick=function () {
    $(aimg[index2]).fadeOut("slow");
    if(index2==0)
    {
        index2=3;
        lunzhuan(index2);
    }
    else
    {
        index2--;
        lunzhuan(index2);
    }
}


function lunzhuan(idx) {
    // console.log(aimg)
    for(var i=0;i<aimg.length;i++)
    {
        aimg[i].style.display="none";
    }
    $(aimg[idx]).fadeIn("slow");
    // alert("hello");
}
// lunzhuan(index2);

for(var i=0;i<atu.length;i++)
{
    atu[i].index=i;

    atu[i].onclick=function () {
        omengban.style.display="block";
        omengbancontent.style.display="block";
        // console.log(this.index)
        index2=this.index;
        lunzhuan(index2);
    }
}
for(var i=0;i<aimg.length;i++)
{
    aimg[i].onclick=function () {
        $(aimg[index2]).fadeOut("slow");
        if(index2==3)
        {
            index2=0;
            lunzhuan(index2);
        }
        else
        {
            index2++;
            lunzhuan(index2);
        }

    }
}

// 蒙版打开关闭

// section3

// 鼠标划到才出现
var height= $(window).height();

var oxiangji=document.getElementById("xiangji");
window.onscroll=function () {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(height);
    var top0=osection3.offsetTop;
    if(scrollTop>=osection3.offsetTop-height/1.5)
    {
        for(var i=0;i<aimg.length;i++)
        {
            atu[i].style.transform="scale(1)";
        }
        oxiangji.style.transform="scale(1)";

    }



}
// 鼠标划到才出现

/*
var index3=0;
var abj=document.querySelectorAll(".bj");
function bianhuan2(current,idx) {
   abj[current].style.opacity="0";
    for(var i=0;i<abj.length;i++)
    {
        abj[i].style.opacity="0";
    }
    abj[idx].style.opacity="1";
}
var time=setInterval(function () {
    if(index3>=abj.length)
    {
        index3=0;
    }
    bianhuan2(index3,index3++)
},4000)
*/


