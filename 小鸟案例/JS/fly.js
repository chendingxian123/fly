(function(window){
	var fly={};
	fly.toRadian=function(angle){
		return angle / 180 * Math.PI;
	};
	fly.loadImages=function( imgSrc, callback){
		 var count = 0,
          len = imgSrc.length,
          imgList = {};
  	
          imgSrc.forEach(function(src) {
          var img = new Image();
          img.src = 'imgs/' + src + '.png';

          img.addEventListener('load', function() {
	        count++;
	        imgList[src] = img;

	        if(count >= len) {
	          // 只要这个条件成立了，就说明所有的图片都加载完成了！
	          callback( imgList );
	        }
      });
    });
	}
     window.fly=fly;
})(window)