/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var MapMediator = (function (_super) {
        __extends(MapMediator, _super);
        function MapMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, MapMediator.NAME, viewComponent);
            this.mapPanel = new game.MapPanel();
        }
        var d = __define,c=MapMediator;p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MAP,
                PanelNotify.CLOSE_MAP
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_MAP: {
                    //显示角色面板
                    this.showUI(this.mapPanel, false, 0, 0, 5);
                    break;
                }
                case PanelNotify.CLOSE_MAP: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        p.initUI = function () {
            this.mapPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            //            this.mapPanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readExcelButtonClick,this);
            this.mapPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn1Click, this);
            this.mapPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn2Click, this);
            this.mapPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn3Click, this);
            this.mapPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn4Click, this);
            this.mapPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn5Click, this);
            this.mapPanel.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btn6Click, this);
            TipsManager.addTips(this.mapPanel.img1, "没有动画tips！", 0);
            TipsManager.addTips(this.mapPanel.img2, "从下到上渐现", 1);
            TipsManager.addTips(this.mapPanel.img3, "从左向右", 2);
            TipsManager.addTips(this.mapPanel.img4, "从右向左", 3);
        };
        p.btn1Click = function (event) {
            EffectUtils.showTips("从下到上弹出", 1);
        };
        p.btn2Click = function (event) {
            EffectUtils.showTips("从左至右弹出", 2);
        };
        p.btn3Click = function (event) {
            EffectUtils.showTips("从右至左弹出", 3);
        };
        p.btn4Click = function (event) {
            EffectUtils.showTips("从中间弹出渐渐消失", 4);
        };
        p.btn5Click = function (event) {
            EffectUtils.showTips("从大变小", 5);
        };
        p.btn6Click = function (event) {
            EffectUtils.showTips("警告字体颜色", 5, true);
        };
        /**
         * 初始化面板数据
         */
        p.initData = function () {
        };
        p.readExcelButtonClick = function (event) {
        };
        p.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        MapMediator.NAME = "MapMediator";
        return MapMediator;
    })(BaseMediator);
    game.MapMediator = MapMediator;
    egret.registerClass(MapMediator,"game.MapMediator");
})(game || (game = {}));
