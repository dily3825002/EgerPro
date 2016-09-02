/**
  * 通讯等待类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 和服务端通讯时的显示效果
  */
var WaitPanel = (function (_super) {
    __extends(WaitPanel, _super);
    function WaitPanel(type) {
        if (type === void 0) { type = 1; }
        _super.call(this);
        this.bg = new egret.Sprite();
        this.w = 0;
        this.h = 0;
        this.createView();
    }
    var d = __define,c=WaitPanel;p=c.prototype;
    p.createView = function () {
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
        EffectUtils.rotationEffect(this.waitImg, 1000);
    };
    return WaitPanel;
})(egret.Sprite);
egret.registerClass(WaitPanel,"WaitPanel");
