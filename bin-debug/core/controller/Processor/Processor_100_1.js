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
            _super.call(this);
        }
        var d = __define,c=Processor_100_1;p=c.prototype;
        /**
         * 注册消息
         */
        p.register = function () {
            this.facade.registerCommand("Processor_100_1", Processor_100_1);
        };
        p.execute = function (notification) {
            var data = notification.getBody(); //携带数据
            //创建user_login_class
            var user_login_class = Global.getMessage("user_login");
            //反序列化
            var new_user_login = user_login_class.decode(data.buffer);
            console.log("反序列化数据：", new_user_login);
            this.sendNotification(UserInfoNotify.UPDATE_DATA, new_user_login);
        };
        Processor_100_1.NAME = "Processor_100_1";
        return Processor_100_1;
    })(puremvc.SimpleCommand);
    game.Processor_100_1 = Processor_100_1;
    egret.registerClass(Processor_100_1,"game.Processor_100_1",["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
