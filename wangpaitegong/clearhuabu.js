/**
 * Created by XiaoBai on 2016/6/10.
 */
function clearhuabu(tegong)
{
    //地图清空
    for(var i=0;i<16;i++)
    {
        for(var j=0;j<28;j++)
        {
            ditubianse(ditu[i][j]);
        }
    };
    //重新画特工
    huategong(tegong);
    //重新画目标
    huamubiao(zhongdian);
    //重新画出当前障碍物
    for(var i=0;i<zhangaiwushuzu.length;i++)
    {
        bianhei(zhangaiwushuzu[i]);
    }
    //重新画出当前敌人和他的视觉范围
    //画敌人
    for(var i=0;i<direnshuzu.length;i++)
    {
        huadiren(direnshuzu[i]);
    }
    //画敌人视觉
    for(var i=0;i<direnshuzu.length;i++)
    {
        shijue(direnshuzu[i]);
    }
    //画线条
    for(var i=0;i<direnshuzu.length;i++)
    {
        julixian(tegong,direnshuzu[i]);
    }
    for(var i=0;i<zidanshuzu.length;i++)
    {
        huazidan(zidanshuzu[i]);
    }

}