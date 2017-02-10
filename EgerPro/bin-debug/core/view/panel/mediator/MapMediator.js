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
    var MapMediator = (function (_super) {
        __extends(MapMediator, _super);
        function MapMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, MapMediator.NAME, viewComponent) || this;
            _this.mapPanel = new game.MapPanel();
            return _this;
        }
        MapMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_MAP,
                PanelNotify.CLOSE_MAP
            ];
        };
        MapMediator.prototype.handleNotification = function (notification) {
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
        MapMediator.prototype.initUI = function () {
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
        MapMediator.prototype.btn1Click = function (event) {
            EffectUtils.showTips("从下到上弹出", 1);
        };
        MapMediator.prototype.btn2Click = function (event) {
            EffectUtils.showTips("从左至右弹出", 2);
        };
        MapMediator.prototype.btn3Click = function (event) {
            EffectUtils.showTips("从右至左弹出", 3);
        };
        MapMediator.prototype.btn4Click = function (event) {
            EffectUtils.showTips("从中间弹出渐渐消失", 4);
        };
        MapMediator.prototype.btn5Click = function (event) {
            EffectUtils.showTips("从大变小", 5);
        };
        MapMediator.prototype.btn6Click = function (event) {
            EffectUtils.showTips("警告字体颜色", 5, true);
        };
        /**
         * 初始化面板数据
         */
        MapMediator.prototype.initData = function () {
        };
        MapMediator.prototype.readExcelButtonClick = function (event) {
        };
        MapMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return MapMediator;
    }(BaseMediator));
    MapMediator.NAME = "MapMediator";
    game.MapMediator = MapMediator;
    __reflect(MapMediator.prototype, "game.MapMediator");
})(game || (game = {}));
//# sourceMappingURL=MapMediator.js.map