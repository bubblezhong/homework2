window.onload=function(){
  //图片索引
  var PicIndex=0;
  //获取html图片元素
  var imgObj=document.getElementById("imgObj");
  //图片路径
  var srcArr=["image/banner0.png","image/banner1.png","image/banner2.png","image/banner3.png"];   
   
  //定时器，每隔1秒修改图片路径一次
  setInterval(function(){
      if (PicIndex==srcArr.length-1){
        PicIndex=0;
      }else{
        PicIndex+=1;
      }
      imgObj.src=srcArr[PicIndex];
  },2000);
}

 
