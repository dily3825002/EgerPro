/**
 * 主城
 */
/**
 *
 */
var game;
(function (game) {
    var HomeCity = (function (_super) {
        __extends(HomeCity, _super);
        function HomeCity() {
            _super.call(this);
            this.skinName = "src/core/view/scene/HomeCitySkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=HomeCity;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
            GameLayerManager.gameLayer().sceneLayer.addChild(this);
        };
        //        public closeBtn: eui.Button;
        // public settingButton:egret.gui.Button;
        // public levelButton:IconButton;
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return HomeCity;
    })(eui.Component);
    game.HomeCity = HomeCity;
    egret.registerClass(HomeCity,"game.HomeCity");
})(game || (game = {}));
