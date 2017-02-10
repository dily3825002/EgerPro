var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
            return _super.call(this) || this;
        }
        ModelPrepCommand.prototype.execute = function (notification) {
            //excel数据
            this.facade.registerProxy(new TemplateProxy());
            //游戏其他需要存储数据
            this.facade.registerProxy(new GameProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    game.ModelPrepCommand = ModelPrepCommand;
    __reflect(ModelPrepCommand.prototype, "game.ModelPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ModelPrepCommand.js.map