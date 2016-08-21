require('normalize.css/normalize.css');
require('styles/App.scss');
//获取图片数据
var imageDatas=require('../data/imageDatas.json');
//利用自执行函数，将图片信息转成图片URL信息
function genImageURL(imageDatasArr) {
  for(var i=0;i<imageDatasArr.length;i++)
  {
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.img);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
}
imageDatas=genImageURL(imageDatas);
// console.log(imageDatas);

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
     <div className="stage">
       <div className="img-sec"></div>
       <div className="controller-nav"></div>
     </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
