/**
 * Created by XiaoBai on 2016/6/10.
 */
//寻路算法
function xunlusuanfa(mubiao)
{
    container.onclick=null;
    //将原点和八个方向加入队列
    duilie.push(tegong);
    zouguodeshuzu.push(tegong);
    //遍历八个方向
    function bagefangxiang(i,j){

        var paixushuzu=[];
        //1
        /* if((i-1>=0&&i-1<=15)&&(j-1>=0&&j-1<=27))
         {
         if(ditu[i][j-1].flag!=1)
         {
         ditu[i-1][j-1].juli=(i-1-mubiao.i)*(i-1-mubiao.i)+(j-1-mubiao.j)*(j-1-mubiao.j);
         paixushuzu.push(ditu[i-1][j-1]);
         }
         }*/
        //2
        if((i>=0&&i<=15)&&(j-1>=0&&j-1<=27))
        {
            if(ditu[i][j-1].flag!=1)
            {
                ditu[i][j-1].juli=(i-mubiao.i)*(i-mubiao.i)+(j-1-mubiao.j)*(j-1-mubiao.j);
                paixushuzu.push(ditu[i][j-1]);
            }
        }
        //3
        /*if((i+1>=0&&i+1<=15)&&(j-1>=0&&j-1<=27))
         {
         if(ditu[i+1][j-1].flag!=1)
         {
         ditu[i+1][j-1].juli=(i+1-mubiao.i)*(i+1-mubiao.i)+(j-1-mubiao.j)*(j-1-mubiao.j);
         paixushuzu.push(ditu[i+1][j-1]);
         }

         }*/
        //4
        if((i-1>=0&&i-1<=15)&&(j>=0&&j<=27))
        {
            if(ditu[i-1][j].flag!=1)
            {
                ditu[i-1][j].juli=(i-1-mubiao.i)*(i-1-mubiao.i)+(j-mubiao.j)*(j-mubiao.j);
                paixushuzu.push(ditu[i-1][j]);
            }

        }
        //5
        if((i+1>=0&&i+1<=15)&&(j>=0&&j<=27))
        {
            if(ditu[i+1][j].flag!=1)
            {
                ditu[i+1][j].juli=(i+1-mubiao.i)*(i+1-mubiao.i)+(j-mubiao.j)*(j-mubiao.j);
                paixushuzu.push(ditu[i+1][j]);
            }


        }
        //6
        /*if((i-1>=0&&i-1<=15)&&(j+1>=0&&j+1<=27))
         {
         if(ditu[i-1][j+1].flag!=1)
         {
         ditu[i-1][j+1].juli=(i-1-mubiao.i)*(i-1-mubiao.i)+(j+1-mubiao.j)*(j+1-mubiao.j);
         paixushuzu.push(ditu[i-1][j+1]);
         }

         }*/
        //7
        if((i>=0&&i<=15)&&(j+1>=0&&j+1<=27))
        {
            if(ditu[i][j+1].flag!=1)
            {
                ditu[i][j+1].juli=(i-mubiao.i)*(i-mubiao.i)+(j+1-mubiao.j)*(j+1-mubiao.j);
                paixushuzu.push(ditu[i][j+1]);
            }

        }
        //8
        /* if((i+1>=0&&i+1<=15)&&(j+1>=0&&j+1<=27))
         {
         if(ditu[i+1][j+1].flag!=1)
         {
         ditu[i+1][j+1].juli=(i+1-mubiao.i)*(i+1-mubiao.i)+(j+1-mubiao.j)*(j+1-mubiao.j);
         paixushuzu.push(ditu[i+1][j+1]);
         }

         }*/


        function sort1(a,b)
        {
            return a.juli- b.juli;
        }
        paixushuzu.sort(sort1);
//              console.log(paixushuzu);
        for(var k=0;k<paixushuzu.length;k++)
        {
            paixushuzu[k].flag=1;
            paixushuzu[k].fatherx=ditu[i][j].i;
            paixushuzu[k].fathery=ditu[i][j].j;
            duilie.push(paixushuzu[k]);
            zouguodeshuzu.push(paixushuzu[k]);

        }


    }
    //八方向变色
    function bafangxiangbianse(){

        for(var k=0;k<duilie.length;k++)
        {
            zouguode(duilie[k]);
        }
    }

    //走过的变色
    function zouguode(node){
        huabu.beginPath();
        huabu.rect(node.x,node.y,20,20);
        huabu.fillStyle="orange";
        huabu.fill();
        huabu.strokeStyle="orange";
        huabu.stroke();

    }

    function panduan(){
        for(var h=0;h<duilie.length;h++)
        {
            if(duilie[h]==mubiao)
            {

                return true;
                break;
            }
        }
        return false;
    }

    var a,b;
    function xunhuan(){
//            console.log(duilie[0].fatherx,duilie[0].fathery);
        a=duilie[0].i;
        b=duilie[0].j;
        bagefangxiang(a,b);
//              bafangxiangbianse();
        duilie.shift(duilie[0]);
        var p=panduan();
        if(p==true)
        {
//                  clearInterval(time);
            hualujin();
        }
        else
        {
            xunhuan();
        }

    }
    xunhuan();
//          var time=setInterval(xunhuan,1);
    //画路径
    function hualujin()
    {

        function luxian(node)
        {
            huabu.beginPath();
            huabu.rect(node.x,node.y,20,20);
            huabu.fillStyle="grey";
            huabu.fill();
            huabu.strokeStyle="grey";
            huabu.stroke();
        }
        /*while (mubiao.fatherx!=-1&&mubiao.fathery!=-1)
         {
         //                console.log(mubiao.fatherx,mubiao.fathery);
         mubiao=ditu[mubiao.fatherx][mubiao.fathery];
         luxian(mubiao);
         //                console.log(mubiao.fatherx,mubiao.fathery);
         }*/
        luxianshuzu=[];
        while(mubiao.fatherx!=-1&&mubiao.fathery!=-1)
        {
            luxianshuzu.push(mubiao);
            mubiao=ditu[mubiao.fatherx][mubiao.fathery];
        }
        luxianshuzu.push(tegong);
        var z=luxianshuzu.length-1;
        var time2=setInterval(function(){
            tegong=luxianshuzu[z];
            for(var i=0;i<direnshuzu.length;i++)
            {
                var juli=(tegong.x-direnshuzu[i].x)*(tegong.x-direnshuzu[i].x)+
                    (tegong.y-direnshuzu[i].y)*(tegong.y-direnshuzu[i].y);
                var jiexian=98*98;
                if(juli<jiexian)
                {
                    console.log("警告");
                    fashezidan(direnshuzu[i],tegong);
                }

                //console.log(juli);
            }

            //clearhuabu(tegong);
            z--;
            if(z==-1)
            {

                for (var h=0;h<zouguodeshuzu.length;h++)
                {

                    zouguodeshuzu[h].flag=0;
                    zouguodeshuzu[h].fatherx=0;
                    zouguodeshuzu[h].fathery=0;
//                          console.log(zouguodeshuzu[h]);
                }
                zouguodeshuzu=[];
                tegong=luxianshuzu[0];
                tegong.fatherx=-1;
                tegong.fathery=-1;
                tegong.flag=1;
                clearInterval(time2);




                container.onclick=function(e)
                {
                    duilie=[];
                    luxianshuzu=[];
//                          console.log(tegong);
                    e=e||window.event;
                    var mx= Math.floor(e.pageX/20);
                    var my= Math.floor(e.pageY/20);
                    /*if(mx==tegong.i&&my==tegong.j)
                     {
                     return;
                     }
                     for(var i=0;i<zhangaiwushuzu.length;i++)
                     {
                     if(mx==zhangaiwushuzu[i].i&&my==zhangaiwushuzu[i].j)
                     {
                     return;
                     }
                     }*/
                    if(ditu[mx][my].flag==1)
                    {
                        return;
                    }
                    xunlusuanfa(ditu[mx][my]);
                }

//                      console.log(tegong);
                if(tegong==zhongdian)
                {
                    alert("你通关了");
                    chushihua();
                }

            }

        },20);
//            console.log(ditu[0][13].fatherx,ditu[0][13].fathery);

    }

}