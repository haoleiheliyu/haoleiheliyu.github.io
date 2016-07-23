/**
 * Created by XiaoBai on 2016/6/22.
 */
(function(){
    var olunbo1=document.getElementById("lunbo1");
    var ali=olunbo1.getElementsByTagName("li");
    var oleft=document.getElementById("left");
    var oright=document.getElementById("right");
    var olunbo2=document.getElementById("lunbo2");
    var ali2=olunbo2.getElementsByTagName("li");
    var index=0;
    choose(index);
    olunbo1.style.width=(ali.length*1484)+"px";
    olunbo2.style.width=(ali2.length*400)+"px";
    /*function choose(index)
    {
        for(var i=0;i<ali2.length;i++)
        {
            ali2[i].className="";
        }
        ali2[index].className="choose";
    }*/
    function choose(index)
    {
        for(var i=0;i<ali2.length;i++)
        {
            var span=ali2[i].getElementsByTagName("span");
            span[0].style.display="block";
            span[1].style.background="";
        }
        var span1=ali2[index].getElementsByTagName("span");
        span1[0].style.display="none";
        span1[1].style.background="#9ACD32";
    }

    var time=setInterval(function(){
        index++;
        if(index==ali2.length)
        index=0
        change(index);
        change2(index)
    },2000);

    function change(idx)
    {
        if(idx==0)
        {
            $(olunbo2).stop().animate({
                left:0
            })
            choose(idx);
        }
        else if(idx==ali2.length-1)
        {
            $(olunbo2).stop().animate(
                {
                    left:-(idx-2)*400
                }
            )
            choose(idx);
        }
        else
        {
            $(olunbo2).stop().animate(
                {
                    left:-(idx-1)*400
                }
            )
            choose(idx);
        }
    }
    function change2(idx2)
    {
        $(olunbo1).animate({
            left:-idx2*1484
        })
    }
    for(var i=0;i<ali2.length;i++)
    {
        ali2[i].index=i;
        ali2[i].onclick=function()
        {
            //alert(this.index);
            change(this.index);
            change2(this.index);
        }
    }
    olunbo2.onmouseover=oright.onmouseover=oleft.onmouseover=function()
    {
        clearInterval(time);
        this.onmouseout=function(){
            time=setInterval(function(){
                index++;
                if(index==ali2.length)
                    index=0
                change(index);
                change2(index)
            },2000);
        }
    }
    oleft.onclick=function()
    {
        index--;
        if(index==-1)
        {
            index=ali2.length-1;
        }
        change(index);
        change2(index);
    }
    oright.onclick=function()
    {
        index++;
        if(index==ali2.length)
        {
            index=0;
        }
        change(index);
        change2(index);
    }
    var oliebiao=document.getElementById("liebiao");
    var ali3=oliebiao.getElementsByTagName("li");
    var sudu=50;
    oliebiao.innerHTML+=oliebiao.innerHTML;
    oliebiao.style.width=(ali3.length*(270+40))+"px";
    oliebiao.style.left=-((ali3.length*(270+40)))/2+"px";
    var time2=setInterval(function(){
        if(oliebiao.offsetLeft>0)
        {
            oliebiao.style.left=-((ali3.length*(270+40)))/2+"px";
        }
        else if(oliebiao.offsetLeft<=-((ali3.length*(270+40)))/2)
        {
            oliebiao.style.left=0;
        }
        oliebiao.style.left=oliebiao.offsetLeft+sudu+"px";
    },300)
    var oup=document.getElementById("up");
    var odown=document.getElementById("down");
    oup.onmouseover=function()
    {
        sudu=-50;
    }
    odown.onmouseover=function()
    {
        sudu=50;
    }
   /* var time3=setInterval(function(){
        if(oliebiao.offsetLeft<=-((ali3.length*(270+40)))/2)
        {
            oliebiao.style.left=0;
        }
        oliebiao.style.left=oliebiao.offsetLeft-sudu+"px";
    },300);*/
    var osection1right=document.getElementById("section1-right");
    var orightbottomul=document.getElementById("right-bottom-ul");
    var orightbottom=document.getElementById("right-bottom");
    var ali4=orightbottomul.getElementsByTagName("li");
    var osection1=document.getElementById("section1");

    //osection1right.style.height=40+Math.ceil(ali4.length/3)*ali4[0].offsetHeight+"px";
    //orightbottomul.style.height=Math.ceil(ali4.length/3)*ali4[0].offsetHeight+"px";
    //orightbottom.style.height=Math.ceil(ali4.length/3)*ali4[0].offsetHeight+"px";
    osection1.style.height=40+Math.ceil(ali4.length/3)*(ali4[0].offsetHeight+20)+30+"px";





})();
