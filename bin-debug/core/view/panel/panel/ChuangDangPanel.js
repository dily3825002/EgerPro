/**
 *
 */
var game;
(function (game) {
    var ChuangDangPanel = (function (_super) {
        __extends(ChuangDangPanel, _super);
        function ChuangDangPanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/ChuangDangSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=ChuangDangPanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ChuangDangPanel;
    })(eui.Component);
    game.ChuangDangPanel = ChuangDangPanel;
    egret.registerClass(ChuangDangPanel,"game.ChuangDangPanel");
})(game || (game = {}));
