var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
  * 注册mediator
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var game;
(function (game) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            return _super.call(this) || this;
        }
<<<<<<< HEAD:bin-debug/core/controller/ViewPrepCommand.js
        var d = __define,c=ViewPrepCommand,p=c.prototype;
        p.execute = function (notification) {
=======
        ViewPrepCommand.prototype.execute = function (notification) {
>>>>>>> dev:EgerPro/bin-debug/core/controller/ViewPrepCommand.js
            var main = GameLayerManager.gameLayer().panelLayer;
            this.facade.registerMediator(new game.RoleMediator());
            this.facade.registerMediator(new game.BackpackMediator());
            this.facade.registerMediator(new game.QianghuaMediator());
            this.facade.registerMediator(new game.ZhaoXianMediator());
            this.facade.registerMediator(new game.ChuangDangMediator());
            this.facade.registerMediator(new game.ShopMediator());
            this.facade.registerMediator(new game.MapMediator());
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    game.ViewPrepCommand = ViewPrepCommand;
<<<<<<< HEAD:bin-debug/core/controller/ViewPrepCommand.js
    egret.registerClass(ViewPrepCommand,'game.ViewPrepCommand',["puremvc.ICommand","puremvc.INotifier"]);
=======
    __reflect(ViewPrepCommand.prototype, "game.ViewPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
>>>>>>> dev:EgerPro/bin-debug/core/controller/ViewPrepCommand.js
})(game || (game = {}));
//# sourceMappingURL=ViewPrepCommand.js.map