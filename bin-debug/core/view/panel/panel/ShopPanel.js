/**
 *
 */
var game;
(function (game) {
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/ShopSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=ShopPanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ShopPanel;
    })(eui.Component);
    game.ShopPanel = ShopPanel;
    egret.registerClass(ShopPanel,"game.ShopPanel");
})(game || (game = {}));
