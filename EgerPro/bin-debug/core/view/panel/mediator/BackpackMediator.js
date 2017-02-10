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
    var BackpackMediator = (function (_super) {
        __extends(BackpackMediator, _super);
        function BackpackMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, BackpackMediator.NAME, viewComponent) || this;
            _this.backpackPanel = new game.BackpackPanel();
            return _this;
        }
<<<<<<< HEAD:EgerPro/bin-debug/core/view/panel/mediator/BackpackMediator.js
<<<<<<< HEAD:bin-debug/core/view/panel/mediator/BackpackMediator.js
        var d = __define,c=BackpackMediator,p=c.prototype;
        p.listNotificationInterests = function () {
=======
        BackpackMediator.prototype.listNotificationInterests = function () {
>>>>>>> dev:EgerPro/bin-debug/core/view/panel/mediator/BackpackMediator.js
=======
        BackpackMediator.prototype.listNotificationInterests = function () {
>>>>>>> dev:EgerPro/bin-debug/core/view/panel/mediator/BackpackMediator.js
            return [
                PanelNotify.OPEN_BACKPACK,
                PanelNotify.CLOSE_BACKPACK
            ];
        };
        BackpackMediator.prototype.handleNotification = function (notification) {
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
        BackpackMediator.prototype.initUI = function () {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.backpackPanel.readProxy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.readProxyButtonClick, this);
            this.backpackPanel.saveProxy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saveProxyButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        BackpackMediator.prototype.initData = function () {
        };
        BackpackMediator.prototype.saveProxyButtonClick = function (event) {
            P.getGameDataProxy().setGameName(this.backpackPanel.input1.text);
            this.backpackPanel.showText.text += "保存成功...\n" + P.getGameDataProxy().getGameName() + "\n";
        };
        BackpackMediator.prototype.readProxyButtonClick = function (event) {
            this.backpackPanel.showText.text += P.getGameDataProxy().getGameName() + "\n";
        };
        BackpackMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return BackpackMediator;
    }(BaseMediator));
<<<<<<< HEAD:EgerPro/bin-debug/core/view/panel/mediator/BackpackMediator.js
<<<<<<< HEAD:bin-debug/core/view/panel/mediator/BackpackMediator.js
    game.BackpackMediator = BackpackMediator;
    egret.registerClass(BackpackMediator,'game.BackpackMediator');
=======
    BackpackMediator.NAME = "BackpackMediator";
    game.BackpackMediator = BackpackMediator;
    __reflect(BackpackMediator.prototype, "game.BackpackMediator");
>>>>>>> dev:EgerPro/bin-debug/core/view/panel/mediator/BackpackMediator.js
=======
    BackpackMediator.NAME = "BackpackMediator";
    game.BackpackMediator = BackpackMediator;
    __reflect(BackpackMediator.prototype, "game.BackpackMediator");
>>>>>>> dev:EgerPro/bin-debug/core/view/panel/mediator/BackpackMediator.js
})(game || (game = {}));
//# sourceMappingURL=BackpackMediator.js.map