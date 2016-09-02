/**
  * 注册controller
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            _super.call(this);
        }
        var d = __define,c=ControllerPrepCommand;p=c.prototype;
        p.execute = function (notification) {
            (new game.SceneManager()).register();
            (new game.MainManager()).register();
            //服务器返回command
            (new game.Processor_100_1()).register();
        };
        return ControllerPrepCommand;
    })(puremvc.SimpleCommand);
    game.ControllerPrepCommand = ControllerPrepCommand;
    egret.registerClass(ControllerPrepCommand,"game.ControllerPrepCommand",["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
