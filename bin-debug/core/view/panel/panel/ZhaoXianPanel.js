/**
 *
 */
var game;
(function (game) {
    var ZhaoXianPanel = (function (_super) {
        __extends(ZhaoXianPanel, _super);
        function ZhaoXianPanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/ZhaoXianSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=ZhaoXianPanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ZhaoXianPanel;
    })(eui.Component);
    game.ZhaoXianPanel = ZhaoXianPanel;
    egret.registerClass(ZhaoXianPanel,"game.ZhaoXianPanel");
})(game || (game = {}));
