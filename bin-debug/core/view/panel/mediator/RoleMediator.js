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
            _super.call(this, RoleMediator.NAME, viewComponent);
            this.rolePanel = new game.RolePanel();
        }
        var d = __define,c=RoleMediator;p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_ROLE,
                PanelNotify.CLOSE_ROLE
            ];
        };
        p.handleNotification = function (notification) {
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
        p.initUI = function () {
            this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.rolePanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readExcelButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        p.initData = function () {
        };
        p.readExcelButtonClick = function (event) {
            //下面是测试excel读取
            var dataProxy = P.getTemplateDataProxy().getGameData();
            this.rolePanel.showText.text += dataProxy[this.rolePanel.input1.text][this.rolePanel.input2.text] + "\n";
        };
        p.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        RoleMediator.NAME = "RoleMediator";
        return RoleMediator;
    })(BaseMediator);
    game.RoleMediator = RoleMediator;
    egret.registerClass(RoleMediator,"game.RoleMediator");
})(game || (game = {}));
