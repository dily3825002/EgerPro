var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            _super.call(this);
        }
        var d = __define,c=AppFacade;p=c.prototype;
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        };
        p.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(AppFacade.STARTUP, game.StartupCommand);
        };
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        p.startUp = function (rootView) {
            this.sendNotification(AppFacade.STARTUP, rootView);
            this.removeCommand(AppFacade.STARTUP); //PureMVC初始化完成，注销STARUP命令
        };
        AppFacade.STARTUP = "startup";
        return AppFacade;
    })(puremvc.Facade);
    game.AppFacade = AppFacade;
    egret.registerClass(AppFacade,"game.AppFacade",["puremvc.IFacade","puremvc.INotifier"]);
})(game || (game = {}));
