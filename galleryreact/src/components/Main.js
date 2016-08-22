require('normalize.css/normalize.css');
require('styles/App.scss');
//获取图片数据
var imageDatas=require('../data/imageDatas.json');
//利用自执行函数，将图片信息转成图片URL信息
function genImageURL(imageDatasArr) {
  for(var i=0;i<imageDatasArr.length;i++)
  {
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData['img']);
    // console.log(singleImageData.img);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
}
imageDatas=genImageURL(imageDatas);
// console.log(imageDatas);

import React from 'react';
import ReactDOM from 'react-dom';

// let yeomanImage = require('../images/yeoman.png');
// 舞台代码


// 产生随机位置的函数
function getRangeRandom(low,high) {
  return Math.ceil(Math.random() * (high-low)+low);
}
//产生随机旋转角度的函数 0-30之间的任意正负值
function get30deg() {
  return (Math.random()>0.5?"":"-")+Math.ceil(Math.random()*30);

}
var AppComponent = React.createClass ({
  Constant:{
    centerPos:{
      left:0,
      right:0
    },
    hPosRange:{//水平方向的取值范围
      zuofenquX:[0,0],
      youfenquX:[0,0],
      y:[0,0]
    },
    vPosRange:{//垂直方向的取值范围
      x:[0,0],
     topY:[0,0]
    }
  },
  // 翻转图片
  // 输入当前被执行inverse操作的图片对应的图片信息数组的index值
  // return {Function}这是一个闭包函数,其内return一个真正待被执行的函数
  inverse:function (index) {
    return function () {
      var imgsArrangeArr=this.state.imgsArrangeArr;
      imgsArrangeArr[index].isInverse=!imgsArrangeArr[index].isInverse;
      this.setState(
        {
          imgsArrangeArr:imgsArrangeArr
        }
      );
    }.bind(this);
  },



  // 重新布局所有元素,指定居中哪个图片
  rearrange:function (centerIndex) {

    var imgsArrangeArr=this.state.imgsArrangeArr;
     var    Constant=this.Constant,
          centerPos=Constant.centerPos,
       hPosRange=Constant.hPosRange,
       vPosRange=Constant.vPosRange,
       //水平方向的
       zuofengquX=hPosRange.zuofenquX,
       youfengquX=hPosRange.youfenquX,
       y=hPosRange.y,
       //垂直方向的
       x=vPosRange.x,
       topY=vPosRange.topY,
       imgsArrangeTopArr=[],
       topImgNum=Math.ceil(Math.random()*2),
       //取一个或者不取
       topImgSpliceIndex=0,
       imgsArrangeCenterArr=imgsArrangeArr.splice(centerIndex,1);
        // 首先居中centerIndex图片
        imgsArrangeCenterArr[0].pos=centerPos;
        imgsArrangeCenterArr[0].rotate=0;
        // 取出要布局上侧的图片的状态信息
      topImgSpliceIndex=Math.ceil((imgsArrangeArr.length-topImgNum) * Math.random());
    imgsArrangeTopArr=imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);
    // 布局位于上侧的图片
    imgsArrangeTopArr.forEach(function (value,index) {
      imgsArrangeTopArr[index]={
          pos:{
            top:getRangeRandom(topY[0],topY[1]),
            left:getRangeRandom(x[0],x[1])
          },
        rotate:get30deg()
      }
    });
    // 布局左右两侧的图片
    for(var i=0,j=imgsArrangeArr.length,k=j/2;i<j;i++)
    {
      var hPosRangeLORX=null;
      // 前半部分布局左边，右半部分布局右边
      if(i<k)
      {
        hPosRangeLORX=zuofengquX;
      }
      else
      {
        hPosRangeLORX=youfengquX;
      }
      imgsArrangeArr[i]={
        pos:{
          top:getRangeRandom(y[0],y[1]),
          left:getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
        },
        rotate:get30deg()

      }
    }

    if(imgsArrangeTopArr&&imgsArrangeTopArr[0])
    {
      imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);

    }

    imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);

    this.setState(
      {
        imgsArrangeArr:imgsArrangeArr
      }
    );






  },
  getInitialState:function () {
    return {
      imgsArrangeArr:[
        {
          /*pos:{
            left:'0',
            top:'0'
          },
          rotate:0,
          isInverse:false //false正面,true反面
          */
        }
      ]

    };

  },
  //组件加载以后，为每张图片计算其位置的范围
  componentDidMount:function () {
    // 首先拿到舞台的大小
    var stageDOM=document.getElementById("stage"),
      stageW=stageDOM.offsetWidth,
      stageH=stageDOM.offsetHeight,
      halfstageW=Math.ceil(stageW/2),
      halfstageH=Math.ceil(stageH/2);
    // console.log(stageW);

    //拿到一个imgFigure的大小
    var imgFigureDOM=document.getElementById("figure"),
      imgW=imgFigureDOM.offsetWidth,
      imgH=imgFigureDOM.offsetHeight,
      halfimgW=Math.ceil(imgW/2),
      halfimgH=Math.ceil(imgH/2);
    // 计算中心图片的位置点
    this.Constant.centerPos={
      left:halfstageW-halfimgW,
      top:halfstageH=halfimgH
    }
    // 计算左侧，右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.zuofenquX[0]=-halfimgW;
    this.Constant.hPosRange.zuofenquX[1]=halfstageW-halfimgW*3;
    this.Constant.hPosRange.youfenquX[0]=halfstageW+halfimgW;
    this.Constant.hPosRange.youfenquX[1]=stageW-halfimgW;
    this.Constant.hPosRange.y[0]=-halfimgH;
    this.Constant.hPosRange.y[1]=stageH-halfimgH;
    // 计算上侧区域图片排布位置的取值范围
    this.Constant.vPosRange.topY=[-halfimgH,halfstageH-halfimgH*3];
    this.Constant.vPosRange.x=[halfstageW-imgW,halfstageW];
    // console.log(this.Constant.vPosRange.topY);
    this.rearrange(0);

  },

  render: function() {
    var controllerUnits=[],
      imgFigures=[];
    // console.log(this);
    for(var i=0;i<imageDatas.length;i++)
    {
      // console.log(this);
      if(!this.state.imgsArrangeArr[i])
      {
        this.state.imgsArrangeArr[i]={
          pos:{
            left:0,
            right:0
          },
          rotate:0,
          isInverse:false
        }
      }

      imgFigures.push(<ImgFigure data={imageDatas[i]} key={imageDatas[i].imageURL} ref={'imgFigure'+i}
       arrange={this.state.imgsArrangeArr[i]} inverse={this.inverse(i)}/>);
    }
    // console.log(this.state.imgsArrangeArr[1]);
    return (
     <div className="stage" ref='stage' id="stage">
       <div className="img-sec">
         {imgFigures}
       </div>
       <div className="controller-nav">
         {controllerUnits}
       </div>
     </div>
    );
  }
})
// console.log(imageDatas[0].imageURL);

// 图片代码
var ImgFigure=React.createClass({
  // imgFigure的点击事件函数
 /* handleClick:function (e) {
    this.props.inverse();
    e.stopPropagation();
    e.preventDefault();
  },*/
  handleClick:function (e) {
    this.props.inverse();
    e.stopPropagation();
    e.preventDefault();
  },
  render:function () {
    var styleObj={};
    //如果props属性中指定了这张图片的位置，则使用
    if(this.props.arrange.pos)
    {
      styleObj=this.props.arrange.pos;
    }
    if(this.props.arrange.rotate)
    {
      styleObj['transform']='rotate('+this.props.arrange.rotate+'deg)';
      // styleObj['-webkit-transform']='rotate('+this.props.arrange.rotate+'deg)';
      // styleObj['-moz-transform']='rotate('+this.props.arrange.rotate+'deg)';
      // styleObj['-o-transform']='rotate('+this.props.arrange.rotate+'deg)';
      // styleObj['-ms-transform']='rotate('+this.props.arrange.rotate+'deg)';
    }
    var imgFigureClassName="img-figure";
      imgFigureClassName+=this.props.arrange.isInverse? ' is-inverse': '';

    return(
      <div id="figure" className={imgFigureClassName} style={styleObj}>
        <div className="front" onClick={this.handleClick} ref="a">
          <img src={this.props.data.imageURL} alt={this.props.data.desc} style={{width:'100%',height:'100%'}}
               />
        </div>


          <div className="img-back" onClick={this.handleClick} ref="b">
            <p>
              {this.props.data.desc}
            </p>


        </div>
      </div>
    )


  }
})



AppComponent.defaultProps = {
};

export default AppComponent;
