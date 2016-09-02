/**
 *
 */
var game;
(function (game) {
    var RolePanel = (function (_super) {
        __extends(RolePanel, _super);
        function RolePanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/RoleSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=RolePanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return RolePanel;
    })(eui.Component);
    game.RolePanel = RolePanel;
    egret.registerClass(RolePanel,"game.RolePanel");
})(game || (game = {}));
