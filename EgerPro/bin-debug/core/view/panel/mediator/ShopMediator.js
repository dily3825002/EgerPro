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
    var ShopMediator = (function (_super) {
        __extends(ShopMediator, _super);
        function ShopMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ShopMediator.NAME, viewComponent) || this;
            _this.shopPanel = new game.ShopPanel();
            _this.isPlay1 = false;
            _this.isPlay2 = false;
            _this.isPlay3 = false;
            _this.isPlay4 = false;
            _this.isPlay5 = false;
            _this.isPlay6 = false;
            _this.isPlay7 = false;
            _this.isPlay8 = false;
            _this.isPlay9 = false;
            _this.isPlay10 = false;
            return _this;
        }
        ShopMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_SHOP,
                PanelNotify.CLOSE_SHOP
            ];
        };
        ShopMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_SHOP: {
                    //显示角色面板
                    this.showUI(this.shopPanel, false, 0, 0, 6);
                    break;
                }
                case PanelNotify.CLOSE_SHOP: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ShopMediator.prototype.initUI = function () {
            this.shopPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.shopPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn1Click, this);
            this.shopPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn2Click, this);
            this.shopPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn3Click, this);
            this.shopPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn4Click, this);
            this.shopPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn5Click, this);
            this.shopPanel.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn6Click, this);
            this.shopPanel.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn7Click, this);
            this.shopPanel.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn8Click, this);
            this.shopPanel.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn9Click, this);
            this.shopPanel.btn10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn10Click, this);
        };
        /**
         * 初始化面板数据
         */
        ShopMediator.prototype.initData = function () {
        };
        ShopMediator.prototype.btn1Click = function (event) {
            if (!this.isPlay1) {
                EffectUtils.showTips("旋转特效", 5);
                EffectUtils.rotationEffect(this.shopPanel.img1, 1000);
                this.isPlay1 = true;
            }
            else {
                EffectUtils.showTips("取消旋转特效", 5);
                EffectUtils.removeRotationEffect(this.shopPanel.img1);
                this.isPlay1 = false;
            }
        };
        ShopMediator.prototype.btn2Click = function (event) {
            if (!this.isPlay2) {
                EffectUtils.showTips("中心旋转特效", 5);
                EffectUtils.rotationEffect(this.shopPanel.img2, 1000);
                this.isPlay2 = true;
            }
            else {
                EffectUtils.showTips("取消中心旋转特效", 5);
                EffectUtils.removeRotationEffect(this.shopPanel.img2);
                this.isPlay2 = false;
            }
        };
        ShopMediator.prototype.btn3Click = function (event) {
            EffectUtils.showTips("闪烁特效", 5);
            EffectUtils.blinkEffect(this.shopPanel.img3, 1000);
        };
        ShopMediator.prototype.btn4Click = function (event) {
            EffectUtils.showTips("抖动特效", 5);
            EffectUtils.shakeObj(this.shopPanel.img4);
        };
        ShopMediator.prototype.btn5Click = function (event) {
            EffectUtils.showTips("按下弹大", 5);
            EffectUtils.playEffect(this.shopPanel.img5, 1);
        };
        ShopMediator.prototype.btn6Click = function (event) {
            EffectUtils.showTips("按下轻微弹大", 5);
            EffectUtils.playEffect(this.shopPanel.img6, 2);
        };
        ShopMediator.prototype.btn7Click = function (event) {
            EffectUtils.showTips("按下变小放开变大", 5);
            EffectUtils.playEffect(this.shopPanel.img7, 3);
        };
        ShopMediator.prototype.btn8Click = function (event) {
            if (!this.isPlay8) {
                this.isPlay8 = true;
                EffectUtils.showTips("持续变大变小", 5);
                EffectUtils.playScaleEffect(this.shopPanel.img8);
            }
            else {
                EffectUtils.showTips("正在持续变大变小呢！", 5);
            }
        };
        ShopMediator.prototype.btn9Click = function (event) {
            if (!this.isPlay9) {
                this.isPlay9 = true;
                EffectUtils.showTips("上下浮动特效", 5);
                EffectUtils.flyObj(this.shopPanel.img9, 1000, 15);
            }
            else {
                EffectUtils.showTips("正在上下浮动呢！", 5);
            }
        };
        ShopMediator.prototype.btn10Click = function (event) {
            if (!this.isPlay10) {
                this.isPlay10 = true;
                EffectUtils.showTips("摇头特效", 5);
                EffectUtils.rockObj(this.shopPanel.img10, 500);
            }
            else {
                EffectUtils.showTips("正在摇头呢！", 5);
            }
        };
        ShopMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return ShopMediator;
    }(BaseMediator));
    ShopMediator.NAME = "ShopMediator";
    game.ShopMediator = ShopMediator;
    __reflect(ShopMediator.prototype, "game.ShopMediator");
})(game || (game = {}));
//# sourceMappingURL=ShopMediator.js.map