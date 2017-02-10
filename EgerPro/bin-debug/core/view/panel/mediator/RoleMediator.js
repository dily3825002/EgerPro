var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 人物角色面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var RoleMediator = (function (_super) {
        __extends(RoleMediator, _super);
        function RoleMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, RoleMediator.NAME, viewComponent) || this;
            _this.rolePanel = new game.RolePanel();
            return _this;
        }
        RoleMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ROLE,
                PanelNotify.CLOSE_ROLE
            ];
        };
        RoleMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_ROLE: {
                    //显示角色面板
                    this.showUI(this.rolePanel, false, 0, 0, 4);
                    break;
                }
                case PanelNotify.CLOSE_ROLE: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        RoleMediator.prototype.initUI = function () {
            this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.rolePanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        RoleMediator.prototype.initData = function () {
        };
        RoleMediator.prototype.readExcelButtonClick = function (event) {
            //下面是测试excel读取
            var dataProxy = P.getTemplateDataProxy().getGameData();
            this.rolePanel.showText.text +=
                dataProxy[this.rolePanel.input1.text][this.rolePanel.input2.text] + "\n";
        };
        RoleMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return RoleMediator;
    }(BaseMediator));
    RoleMediator.NAME = "RoleMediator";
    game.RoleMediator = RoleMediator;
    __reflect(RoleMediator.prototype, "game.RoleMediator");
})(game || (game = {}));
//# sourceMappingURL=RoleMediator.js.map