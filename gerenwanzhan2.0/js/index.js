/**
 * Created by XiaoBai on 2016/8/3.
 */

var osection0=document.getElementById("section0");
// osection0.style.height=osection0.offsetWidth/(2.14795)+"px";
if(document.body.offsetWidth<=420)
{
    osection0.style.height=osection0.offsetWidth/(2.147959183673469)+"px";
}
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
        adiv1[0].style.top="43%";
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
        adiv1[0].style.top="43%";
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