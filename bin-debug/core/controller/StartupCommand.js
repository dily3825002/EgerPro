/**
  * 初始化mvc controller
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            _super.call(this);
        }
        var d = __define,c=StartupCommand;p=c.prototype;
        p.initializeMacroCommand = function () {
            this.addSubCommand(game.ControllerPrepCommand);
            this.addSubCommand(game.ModelPrepCommand);
            this.addSubCommand(game.ViewPrepCommand);
        };
        return StartupCommand;
    })(puremvc.MacroCommand);
    game.StartupCommand = StartupCommand;
    egret.registerClass(StartupCommand,"game.StartupCommand");
})(game || (game = {}));
