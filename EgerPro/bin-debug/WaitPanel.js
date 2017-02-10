var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        var _this = _super.call(this) || this;
        _this.bg = new egret.Sprite();
        _this.w = 0;
        _this.h = 0;
        _this.createView();
        return _this;
    }
    WaitPanel.prototype.createView = function () {
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
}(egret.Sprite));
__reflect(WaitPanel.prototype, "WaitPanel");
//# sourceMappingURL=WaitPanel.js.map