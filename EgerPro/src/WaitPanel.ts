  /**
    * 通讯等待类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 和服务端通讯时的显示效果
    */
class WaitPanel extends egret.Sprite {

    private waitImg: egret.Bitmap;
    private bg: egret.Sprite = new egret.Sprite();
    private w: number = 0;
    private h: number = 0;
    constructor(type:number = 1) {
        super();
        this.createView();
    }

    private createView(): void {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;

        this.bg.graphics.beginFill(0x000000, 0.2);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = true;

        this.waitImg = new egret.Bitmap;
        this.waitImg.texture = RES.getRes("loadingCircle_png");
        this.addChild(this.waitImg);
        this.waitImg.x = this.w / 2;
        this.waitImg.y = this.h / 2;
        this.waitImg.anchorOffsetX = this.waitImg.width / 2;
        this.waitImg.anchorOffsetY = this.waitImg.height / 2;
        
        EffectUtils.rotationEffect(this.waitImg,1000);
    }

}