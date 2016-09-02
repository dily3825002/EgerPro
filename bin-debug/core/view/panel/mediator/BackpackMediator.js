/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var BackpackMediator = (function (_super) {
        __extends(BackpackMediator, _super);
        function BackpackMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            _super.call(this, BackpackMediator.NAME, viewComponent);
            this.backpackPanel = new game.BackpackPanel();
        }
        var d = __define,c=BackpackMediator;p=c.prototype;
        p.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_BACKPACK,
                PanelNotify.CLOSE_BACKPACK
            ];
        };
        p.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_BACKPACK: {
                    //显示角色面板
                    this.showUI(this.backpackPanel, false, 0, 0, 1);
                    break;
                }
                case PanelNotify.CLOSE_BACKPACK: {
                    this.closePanel(1);
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        p.initUI = function () {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.backpackPanel.readProxy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readProxyButtonClick, this);
            this.backpackPanel.saveProxy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveProxyButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        p.initData = function () {
        };
        p.saveProxyButtonClick = function (event) {
            P.getGameDataProxy().setGameName(this.backpackPanel.input1.text);
            this.backpackPanel.showText.text += "保存成功...\n" + P.getGameDataProxy().getGameName() + "\n";
        };
        p.readProxyButtonClick = function (event) {
            this.backpackPanel.showText.text += P.getGameDataProxy().getGameName() + "\n";
        };
        p.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        BackpackMediator.NAME = "BackpackMediator";
        return BackpackMediator;
    })(BaseMediator);
    game.BackpackMediator = BackpackMediator;
    egret.registerClass(BackpackMediator,"game.BackpackMediator");
})(game || (game = {}));
