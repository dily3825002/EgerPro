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
    var QianghuaMediator = (function (_super) {
        __extends(QianghuaMediator, _super);
        function QianghuaMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, QianghuaMediator.NAME, viewComponent) || this;
            _this.qinghuaPanel = new game.QianghuaPanel();
            return _this;
        }
        QianghuaMediator.prototype.listNotificationInterests = function () {
            return [
                PanelNotify.OPEN_QIANGHUA,
                PanelNotify.CLOSE_QIANGHUA,
                SysNotify.CONNECT_SERVER_SUCCESS,
                UserInfoNotify.UPDATE_DATA
            ];
        };
        QianghuaMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case PanelNotify.OPEN_QIANGHUA: {
                    //显示角色面板
                    this.showUI(this.qinghuaPanel, false, 0, 0, 3);
                    break;
                }
                case PanelNotify.CLOSE_QIANGHUA: {
                    this.closePanel(1);
                    break;
                }
                case SysNotify.CONNECT_SERVER_SUCCESS: {
                    this.qinghuaPanel.showText.text += "服务器连接成功...\n";
                    break;
                }
                case UserInfoNotify.UPDATE_DATA: {
                    this.qinghuaPanel.showText.text += "userId:" + data.getUserId() + "\nuserName:" + data.getUserName();
                    break;
                }
            }
        };
        /**
         * 初始化面板ui
         */
        QianghuaMediator.prototype.initUI = function () {
            this.qinghuaPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeButtonClick, this);
            this.qinghuaPanel.connectServer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.connectServerButtonClick, this);
            this.qinghuaPanel.sendMsg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendMsgButtonClick, this);
        };
        /**
         * 初始化面板数据
         */
        QianghuaMediator.prototype.initData = function () {
        };
        QianghuaMediator.prototype.connectServerButtonClick = function (event) {
            SocketManager.connectServer("echo.websocket.org", 80);
        };
        QianghuaMediator.prototype.sendMsgButtonClick = function (event) {
            UserInfoRequest.sendUserInfo(Number(this.qinghuaPanel.input1.text), this.qinghuaPanel.input2.text);
        };
        QianghuaMediator.prototype.closeButtonClick = function (event) {
            this.closePanel(1);
        };
        return QianghuaMediator;
    }(BaseMediator));
    QianghuaMediator.NAME = "QianghuaMediator";
    game.QianghuaMediator = QianghuaMediator;
    __reflect(QianghuaMediator.prototype, "game.QianghuaMediator");
})(game || (game = {}));
//# sourceMappingURL=QianghuaMediator.js.map