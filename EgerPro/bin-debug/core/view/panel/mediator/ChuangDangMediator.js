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
    var ChuangDangMediator = (function (_super) {
        __extends(ChuangDangMediator, _super);
        function ChuangDangMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, ChuangDangMediator.NAME, viewComponent) || this;
            _this.chuangDangPanel = new game.ChuangDangPanel();
            return _this;
        }
        ChuangDangMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_CHUANGDANG,
                PanelNotify.CLOSE_CHUANGDANG
            ];
        };
        ChuangDangMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_CHUANGDANG: {
                    //显示角色面板
                    this.showUI(this.chuangDangPanel, false, 0, 0, Number(this.chuangDangPanel.input1.text));
                    break;
                }
                case PanelNotify.CLOSE_CHUANGDANG: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        ChuangDangMediator.prototype.initUI = function () {
            this.chuangDangPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.chuangDangPanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        ChuangDangMediator.prototype.initData = function () {
        };
        ChuangDangMediator.prototype.readExcelButtonClick = function (event) {
            egret.setTimeout(function () {
                this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
            }, this, 100);
            this.closePanel(0);
        };
        ChuangDangMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return ChuangDangMediator;
    }(BaseMediator));
    ChuangDangMediator.NAME = "ChuangDangMediator";
    game.ChuangDangMediator = ChuangDangMediator;
    __reflect(ChuangDangMediator.prototype, "game.ChuangDangMediator");
})(game || (game = {}));
//# sourceMappingURL=ChuangDangMediator.js.map