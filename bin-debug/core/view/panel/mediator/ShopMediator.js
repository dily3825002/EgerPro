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
            _super.call(this, ShopMediator.NAME, viewComponent);
            this.shopPanel = new game.ShopPanel();
            this.isPlay1 = false;
            this.isPlay2 = false;
            this.isPlay3 = false;
            this.isPlay4 = false;
            this.isPlay5 = false;
            this.isPlay6 = false;
            this.isPlay7 = false;
            this.isPlay8 = false;
            this.isPlay9 = false;
            this.isPlay10 = false;
        }
        var d = __define,c=ShopMediator;p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_SHOP,
                PanelNotify.CLOSE_SHOP
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
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
        p.initData = function () {
        };
        p.btn1Click = function (event) {
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
        p.btn2Click = function (event) {
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
        p.btn3Click = function (event) {
            EffectUtils.showTips("闪烁特效", 5);
            EffectUtils.blinkEffect(this.shopPanel.img3, 1000);
        };
        p.btn4Click = function (event) {
            EffectUtils.showTips("抖动特效", 5);
            EffectUtils.shakeObj(this.shopPanel.img4);
        };
        p.btn5Click = function (event) {
            EffectUtils.showTips("按下弹大", 5);
            EffectUtils.playEffect(this.shopPanel.img5, 1);
        };
        p.btn6Click = function (event) {
            EffectUtils.showTips("按下轻微弹大", 5);
            EffectUtils.playEffect(this.shopPanel.img6, 2);
        };
        p.btn7Click = function (event) {
            EffectUtils.showTips("按下变小放开变大", 5);
            EffectUtils.playEffect(this.shopPanel.img7, 3);
        };
        p.btn8Click = function (event) {
            if (!this.isPlay8) {
                this.isPlay8 = true;
                EffectUtils.showTips("持续变大变小", 5);
                EffectUtils.playScaleEffect(this.shopPanel.img8);
            }
            else {
                EffectUtils.showTips("正在持续变大变小呢！", 5);
            }
        };
        p.btn9Click = function (event) {
            if (!this.isPlay9) {
                this.isPlay9 = true;
                EffectUtils.showTips("上下浮动特效", 5);
                EffectUtils.flyObj(this.shopPanel.img9, 1000, 15);
            }
            else {
                EffectUtils.showTips("正在上下浮动呢！", 5);
            }
        };
        p.btn10Click = function (event) {
            if (!this.isPlay10) {
                this.isPlay10 = true;
                EffectUtils.showTips("摇头特效", 5);
                EffectUtils.rockObj(this.shopPanel.img10, 500);
            }
            else {
                EffectUtils.showTips("正在摇头呢！", 5);
            }
        };
        p.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        ShopMediator.NAME = "ShopMediator";
        return ShopMediator;
    })(BaseMediator);
    game.ShopMediator = ShopMediator;
    egret.registerClass(ShopMediator,"game.ShopMediator");
})(game || (game = {}));
