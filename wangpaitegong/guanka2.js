/**
 * Created by XiaoBai on 2016/6/9.
 */

    //画敌人所需要的函数
var direnshuzu=[];
function huadiren(node)
{
    huabu.beginPath();
    huabu.arc(node.x+10,node.y+10,8,0,2*Math.PI,true);
    huabu.fillStyle="red";
    huabu.fill();
    huabu.strokeStyle="red";
    huabu.stroke();
}

function diren()
{
    var a=Math.floor(Math.random()*16);
    var b=Math.floor(Math.random()*28);
    while(a==zhongdian.i&&b==zhongdian.j)
    {
        var a=Math.floor(Math.random()*16);
        var b=Math.floor(Math.random()*28);
    }
    while(ditu[a][b].flag==1)
    {
        var a=Math.floor(Math.random()*16);
        var b=Math.floor(Math.random()*28);
    }
    ditu[a][b].flag=1;
    //huadiren(ditu[a][b]);
    direnshuzu.push(ditu[a][b]);
}
//画敌人的视觉范围
function shijue(node)
{
    huabu.beginPath();
    huabu.arc(node.x+10,node.y+10,90,0,2*Math.PI,true);
    huabu.strokeStyle="red";
    huabu.stroke();
    huabu.closePath();
}

//画线函数
function julixian(tegong,diren)
{
    huabu.beginPath();
    huabu.moveTo(tegong.x+10,tegong.y+10);
    huabu.lineTo(diren.x+10,diren.y+10);
    huabu.strokeStyle="#FF00FF";
    huabu.stroke();

}


//第二关初始化函数

function chushihua()
{
    for(var i=0;i<16;i++)
    {
        for(var j=0;j<28;j++)
        {
            ditu[i][j].x=i*20;
            ditu[i][j].y=j*20;
            ditu[i][j].fatherx=0;
            ditu[i][j].fathery=0;
            ditu[i][j].flag=0;
            ditu[i][j].i=i;
            ditu[i][j].j=j;
            ditu[i][j].juli=0;
            ditubianse(ditu[i][j]);
        }
    };
    container.onclick=null;
    tegong=ditu[7][0];
    tegong.fatherx=-1;
    tegong.fathery=-1;
    tegong.flag=1;
    //画特工
    function huategong(tegong)
    {
        huabu.beginPath();
        huabu.arc(tegong.x+10,tegong.y+10,8,0,2*Math.PI,true);
        huabu.fillStyle="blue";
        huabu.fill();
        huabu.strokeStyle="blue";
        huabu.stroke();
    }
    huategong(tegong);
    //画出目标
    zhongdian=ditu[7][27];
    function huamubiao(node){
        huabu.beginPath();
        huabu.moveTo(node.x,node.y);
        huabu.lineTo(node.x+20,node.y);
        huabu.lineTo(node.x+10,node.y+20);
        huabu.closePath();
        huabu.fillStyle="orange";
        huabu.fill();
    }
    huamubiao(zhongdian);

    //画出障碍物
    zhangaiwushuzu=[];
    function bianhei(node){
        huabu.beginPath();
        huabu.rect(node.x,node.y,20,20);
        huabu.fillStyle="black";
        huabu.fill();
        huabu.strokeStyle="black";
        huabu.stroke();
    }

    function zhangaiwu()
    {
        var a=Math.floor(Math.random()*16);
        var b=Math.floor(Math.random()*28);
        while(a==zhongdian.i&&b==zhongdian.j)
        {
             a=Math.floor(Math.random()*16);
             b=Math.floor(Math.random()*28);
        }
        while(ditu[a][b].flag==1)
        {
            a=Math.floor(Math.random()*16);
            b=Math.floor(Math.random()*28);
        }
        ditu[a][b].flag=1;
        bianhei(ditu[a][b]);
        zhangaiwushuzu.push(ditu[a][b]);
    }
    for(var n=0;n<50;n++)
    {
        zhangaiwu();
    }

    container.onclick=function(e)
    {
        duilie=[];
        luxianshuzu=[];
//              console.log(tegong);
        e=e||window.event;
        var mx= Math.floor(e.pageX/20);
        var my= Math.floor(e.pageY/20);
        if(ditu[mx][my].flag==1)
        {
            return;
        }
        xunlusuanfa(ditu[mx][my]);
    }

    //定义敌人
    direnshuzu=[];
    for(var d=0;d<3;d++)
    {
        diren();
    }
    for(var i=0;i<direnshuzu.length;i++)
    {
        huadiren(direnshuzu[i]);
    }
    //console.log(direnshuzu);
    //画敌人的视觉范围

    for(var i=0;i<direnshuzu.length;i++)
    {
        shijue(direnshuzu[i]);
    }

    //画出敌人和特工的距离线

    for(var i=0;i<direnshuzu.length;i++)
    {
        julixian(tegong,direnshuzu[i]);
    }




}

