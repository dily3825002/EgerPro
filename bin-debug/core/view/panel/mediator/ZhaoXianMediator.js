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
            _super.call(this, ZhaoXianMediator.NAME, viewComponent);
            this.zhaoXianPanel = new game.ZhaoXianPanel();
        }
        var d = __define,c=ZhaoXianMediator;p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ZHAOXIAN,
                PanelNotify.CLOSE_ZHAOXIAN
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
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
        p.initEffect = function () {
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
        p.onMenuBtnTouchTap = function (event) {
        };
        p.onSetBtnTouchTap = function (event) {
        };
        p.onButtonBtnTouchTap = function (event) {
        };
        /**
         * 初始化面板数据
         */
        p.initData = function () {
        };
        p.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        ZhaoXianMediator.NAME = "ZhaoXianMediator";
        return ZhaoXianMediator;
    })(BaseMediator);
    game.ZhaoXianMediator = ZhaoXianMediator;
    egret.registerClass(ZhaoXianMediator,"game.ZhaoXianMediator");
})(game || (game = {}));
