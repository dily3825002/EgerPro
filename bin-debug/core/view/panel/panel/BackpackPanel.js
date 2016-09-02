/**
 *
 */
var game;
(function (game) {
    var BackpackPanel = (function (_super) {
        __extends(BackpackPanel, _super);
        function BackpackPanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/BackpackSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=BackpackPanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return BackpackPanel;
    })(eui.Component);
    game.BackpackPanel = BackpackPanel;
    egret.registerClass(BackpackPanel,"game.BackpackPanel");
})(game || (game = {}));
