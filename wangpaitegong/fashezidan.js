/**
 * Created by XiaoBai on 2016/6/11.
 */

function Zidan(x,y)
{
    this.x=x;
    this.y=y;
}
var zidanshuzu=[];
function huazidan(zidan)
{
    huabu.beginPath();
//          console.log("a");
    huabu.moveTo(zidan.x,zidan.y);
    huabu.arc(zidan.x,zidan.y,2,0,2*Math.PI,true);
    huabu.fillStyle="red";
    huabu.fill();
    huabu.strokeStyle="red";
    huabu.stroke();
    huabu.closePath();
}

function fashezidan(qidian,zhongdian0)
{
    var zidan=new Zidan(qidian.x,qidian.y);
    zidanshuzu.push(zidan);
    var sudu0=4;
    var d=Math.sqrt((zhongdian0.y-qidian.y)*(zhongdian0.y-qidian.y)+(zhongdian0.x-qidian.x)*(zhongdian0.x-qidian.x));
    var cos=Math.abs((zhongdian0.x-qidian.x)/d);
    var sudu=sudu0*cos;
    var k=(qidian.y-zhongdian0.y)/(qidian.x-zhongdian0.x);
    var b=(qidian.y+10)-k*(qidian.x+10);
    //console.log(k,b);


    var i=0;
    var time3=null;
    time3=setInterval(function(){
        //clearhuabu(tegong);
        if(k==-Infinity)
        {
            //console.log("wao");
            zidan.x=qidian.x+10;
            zidan.y=qidian.y+10+i*sudu0;
            //huazidan(zidan);
            i++;
        }
        else if(k==Infinity)
        {
            //console.log("wao");
            zidan.x=qidian.x+10;
            zidan.y=qidian.y+10+i*sudu0;
            //huazidan(zidan);
            i--;

        }
        else
        {
            huabu.beginPath();
//          console.log("a");
            zidan.x=qidian.x+10+i*sudu;
            zidan.y=k*(zidan.x)+b;
            //huazidan(zidan);
            if(qidian.x>zhongdian0.x)
            {
                i--;
            }
            else
            {
                i++;
            }

        }


        //console.log(zidan.x,zidan.y);

        var jizhongjuli=(zidan.x+2-tegong.x-10)*(zidan.x+2-tegong.x-10)
            +(zidan.y+2-tegong.y-10)*(zidan.y+2-tegong.y-10);
        //console.log(jizhongjuli);
        if(jizhongjuli<=100)
        {
           alert("你死了");
            chushihua();
        }

        //console.log("定时器没被销毁");
        var a0=(zidan.x-10);
        var b0=(zidan.y-10);
        //console.log(a0,b0);

        if(a0<-20||a0>320||b0<-20||b0>560)
        {
            //clearhuabu2(tegong);
            clearInterval(time3);

        }






    },20);


}