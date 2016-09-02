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
            _super.call(this, ChuangDangMediator.NAME, viewComponent);
            this.chuangDangPanel = new game.ChuangDangPanel();
        }
        var d = __define,c=ChuangDangMediator;p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_CHUANGDANG,
                PanelNotify.CLOSE_CHUANGDANG
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
            this.chuangDangPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.chuangDangPanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        p.initData = function () {
        };
        p.readExcelButtonClick = function (event) {
            egret.setTimeout(function () {
                this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
            }, this, 100);
            this.closePanel(0);
        };
        p.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        ChuangDangMediator.NAME = "ChuangDangMediator";
        return ChuangDangMediator;
    })(BaseMediator);
    game.ChuangDangMediator = ChuangDangMediator;
    egret.registerClass(ChuangDangMediator,"game.ChuangDangMediator");
})(game || (game = {}));
