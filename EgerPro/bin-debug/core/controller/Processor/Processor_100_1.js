var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 服务器命令返回
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var Processor_100_1 = (function (_super) {
        __extends(Processor_100_1, _super);
        function Processor_100_1() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        Processor_100_1.prototype.register = function () {
            this.facade.registerCommand("Processor_100_1", Processor_100_1);
        };
        Processor_100_1.prototype.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            //创建user_login_class
            var user_login_class = Global.getMessage("user_login");
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：", new_user_login);
            this.sendNotification(UserInfoNotify.UPDATE_DATA, new_user_login);
        };
        return Processor_100_1;
    }(puremvc.SimpleCommand));
    Processor_100_1.NAME = "Processor_100_1";
    game.Processor_100_1 = Processor_100_1;
    __reflect(Processor_100_1.prototype, "game.Processor_100_1", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=Processor_100_1.js.map