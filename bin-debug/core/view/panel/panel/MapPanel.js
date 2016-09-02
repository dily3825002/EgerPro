/**
 *
 */
var game;
(function (game) {
    var MapPanel = (function (_super) {
        __extends(MapPanel, _super);
        function MapPanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/MapSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=MapPanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return MapPanel;
    })(eui.Component);
    game.MapPanel = MapPanel;
    egret.registerClass(MapPanel,"game.MapPanel");
})(game || (game = {}));
