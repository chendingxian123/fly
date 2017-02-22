(function(fly){
	var Birds=function(obj){
	    this.frameIndex = 0;
	  	this.birds = obj.birds;
	  	this.imgW = this.birds.width / 3;
	  	this.imgH = this.birds.height;
	  	this.y = 100;
	  	this.speed = 0;
	  	this.a = 0.0005;
	  	this.maxAngle = 45;
	  	this.maxSpeed = 0.3;
	  	this.curAngle = 0;
	  	this.ctx=ctx;
	};
	Birds.prototype={
		constructor:Birds,
		draw:function(delta){
           this.curAngle = this.speed / this.maxSpeed * this.maxAngle;
		      if(this.speed >= this.maxSpeed) {
		        this.curAngle = this.maxAngle;
		      } else if(this.speed <= -this.maxSpeed) {
		        this.curAngle = -this.maxAngle;
		      }

		      // 根据角度旋转
		      this.ctx.translate(100, this.y);
		      this.ctx.rotate(fly.toRadian(this.curAngle));

		  		this.ctx.drawImage(this.birds, this.imgW * this.frameIndex++, 0, this.imgW, this.imgH, -1/2*this.imgW, -1/2*this.imgH, this.imgW, this.imgH);
		  		this.frameIndex %= 3;

		  		// 计算速度和位置
		  		this.speed += this.a * delta;
		  		this.y += this.speed * delta + 1/2 * this.a * Math.pow(delta, 2);
				}
	}
	fly.Birds=Birds;
})(fly)