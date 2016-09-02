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
            _super.call(this);
        }
        var d = __define,c=ViewPrepCommand;p=c.prototype;
        p.execute = function (notification) {
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
    })(puremvc.SimpleCommand);
    game.ViewPrepCommand = ViewPrepCommand;
    egret.registerClass(ViewPrepCommand,"game.ViewPrepCommand",["puremvc.ICommand","puremvc.INotifier"]);
})(game || (game = {}));
