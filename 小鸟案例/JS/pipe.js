(function(fly){
var Pipe=function(obj){
this.imgT=obj.PipeT;
this.imgB=obj.PipeB;
this.Wimg=this.imgT.width;
this.Himg=this.imgT.height;
this.ctx=obj.ctx;
this.random=Math.random()*200+50;
this.Ty=this.random-this.Himg;
this.By=this.random+100;
this.x=obj.x;
this.speed=-1;
};
Pipe.prototype={
	constructor:Pipe,
	draw:function(){
		if(this.x<=-this.Wimg*3){
			this.x=this.Wimg*3*5;
			this.random=Math.random()*200+50;
			this.Ty=this.random-this.Himg;
			this.By=this.random+100;

   };
   this.ctx.drawImage(this.imgT,this.x+=this.speed,this.Ty,this.Wimg,this.Himg);
   this.ctx.drawImage(this.imgB,this.x+=this.speed,this.By,this.Wimg,this.Himg);

   this.ctx.rect(this.x+this.speed,0,this.Wimg,this.random);
   this.ctx.rect(this.x+this.speed,this.By,this.Wimg,cv.height-this.By);
   // this.speed-=1.5;
	},

   

};
fly.Pipe=Pipe;
})(fly)