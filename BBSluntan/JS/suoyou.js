/**
 * Created by leon on 2016/6/5.
 */
var oui=document.getElementById("ui");
var odenglu=document.getElementById("denglu");
var oaniu1=document.getElementById("anniu1");
var oanniu2=document.getElementById("anniu2");
var oanniu3=document.getElementById("anniu3");
var oanniu4=document.getElementById("anniu4");
var op=document.getElementById("p");
var op2=document.getElementById("p2");
var oul=document.getElementById("daohang");
var ali=oul.getElementsByTagName("li");
var ozhuce=document.getElementById("zhuce");


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

ozhuce.onmousedown= function (e) {
    this.style.index=1;
    e=e||window.event;
    var chazhix= e.clientX-ozhuce.offsetLeft;
//        console.log(chazhix);
    var chazhiy= e.clientY-ozhuce.offsetTop;
    document.onmousemove=function(e){
        e=e||window.event;
        ozhuce.style.top= e.clientY-chazhiy+"px";
        ozhuce.style.left= e.clientX-chazhix+"px";
    }

    document.onmouseup=function(e)
    {
        document.onmousemove=null;
    }
    //return false;
}

for(var i=0;i<ali.length;i++)
{
    ali[i].onmouseover=function()
    {
        this.style.background="black";
        this.style.opacity=0.6;
        this.onmouseout=function()
        {
            this.style.background="";
            this.style.opacity=1;
        }
    }
}
oaniu1.onmouseover=oanniu2.onmouseover=oanniu3.onmouseover=oanniu4.onmouseover=function()
{
    this.style.background="#0db225";
    oaniu1.onmouseout=oanniu2.onmouseout=oanniu3.onmouseout=oanniu4.onmouseout= function () {
        this.style.background="green";
    }
}
odenglu.onclick=function()
{
    oui.style.display="block";
}
op.onclick=function(){
    oui.style.display="none";
}
op2.onclick=function(){
    ozhuce.style.display="none";
}

oanniu2.onclick=function()
{
    ozhuce.style.display="block";

}