var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ZhaoXianMediator = (function (_super) {
        __extends(ZhaoXianMediator, _super);
        function ZhaoXianMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ZhaoXianMediator.NAME, viewComponent) || this;
            _this.zhaoXianPanel = new game.ZhaoXianPanel();
            return _this;
        }
        ZhaoXianMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ZHAOXIAN,
                PanelNotify.CLOSE_ZHAOXIAN
            ];
        };
        ZhaoXianMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_ZHAOXIAN: {
                    //显示角色面板
                    this.showUI(this.zhaoXianPanel, false, 0, 0, 5);
                    break;
                }
                case PanelNotify.CLOSE_ZHAOXIAN: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ZhaoXianMediator.prototype.initUI = function () {
            this.zhaoXianPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.menuBtn = new EButton(this, "yellowBtn_png", this.onMenuBtnTouchTap, "按钮特效1", 30, 1, null);
            this.menuBtn.x = -300;
            this.menuBtn.y = 300;
            this.zhaoXianPanel.addChild(this.menuBtn);
            this.setBtn = new EButton(this, "yellowBtn_png", this.onSetBtnTouchTap, "按钮特效12", 30, 2, null);
            this.setBtn.x = -300;
            this.setBtn.y = 400;
            this.zhaoXianPanel.addChild(this.setBtn);
            this.buttonBtn = new EButton(this, "yellowBtn_png", this.onButtonBtnTouchTap, "按钮特效3", 30, 3, null);
            this.buttonBtn.x = -300;
            this.buttonBtn.y = 500;
            this.zhaoXianPanel.addChild(this.buttonBtn);
            this.initEffect();
        };
        ZhaoXianMediator.prototype.initEffect = function () {
            egret.setTimeout(function () {
                egret.Tween.get(this.menuBtn).to({ x: this.w / 2 - this.menuBtn.width / 2 }, 600, egret.Ease.backOut);
            }, this, 150 * 1);
            egret.setTimeout(function () {
                egret.Tween.get(this.setBtn).to({ x: this.w / 2 - this.setBtn.width / 2 }, 600, egret.Ease.backOut);
            }, this, 150 * 2);
            egret.setTimeout(function () {
                egret.Tween.get(this.buttonBtn).to({ x: this.w / 2 - this.buttonBtn.width / 2 }, 600, egret.Ease.backOut);
            }, this, 150 * 3);
        };
        ZhaoXianMediator.prototype.onMenuBtnTouchTap = function (event) {
        };
        ZhaoXianMediator.prototype.onSetBtnTouchTap = function (event) {
        };
        ZhaoXianMediator.prototype.onButtonBtnTouchTap = function (event) {
        };
        /**
         * 初始化面板数据
         */
        ZhaoXianMediator.prototype.initData = function () {
        };
        ZhaoXianMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return ZhaoXianMediator;
    }(BaseMediator));
    ZhaoXianMediator.NAME = "ZhaoXianMediator";
    game.ZhaoXianMediator = ZhaoXianMediator;
    __reflect(ZhaoXianMediator.prototype, "game.ZhaoXianMediator");
})(game || (game = {}));
//# sourceMappingURL=ZhaoXianMediator.js.map