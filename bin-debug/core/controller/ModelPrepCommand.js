/**
  * 注册注册proxy
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            _super.call(this);
        }
        var d = __define,c=ModelPrepCommand;p=c.prototype;
        p.execute = function (notification) {
            //excel数据
            this.facade.registerProxy(new TemplateProxy());
            //游戏其他需要存储数据
            this.facade.registerProxy(new GameProxy());
        };
        return ModelPrepCommand;
    })(puremvc.SimpleCommand);
    game.ModelPrepCommand = ModelPrepCommand;
    egret.registerClass(ModelPrepCommand,"game.ModelPrepCommand",["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
