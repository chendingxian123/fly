(function(fly){
	var Sky=function(obj){
		    this.ctx=obj.ctx;
		    this.img=obj.sky;
		    this.Swidth=this.img.width;
		    this.Sheight=this.img.height;
		    this.Sy=obj.y;
		    this.speed=-1;
	};
	  Sky.prototype={
        constructor:Sky,
        draw:function(){
		       if(this.Sy<=-this.Swidth){
		        this.Sy+=this.Swidth*2
		      }
		       this.ctx.drawImage(this.img,this.Sy+=this.speed,0,this.Swidth,this.Sheight);


		  }

	}
	fly.Sky=Sky;
})(fly)