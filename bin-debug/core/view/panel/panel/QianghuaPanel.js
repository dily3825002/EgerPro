/**
 *
 */
var game;
(function (game) {
    var QianghuaPanel = (function (_super) {
        __extends(QianghuaPanel, _super);
        function QianghuaPanel() {
            _super.call(this);
            this.skinName = "src/core/view/panel/ui/QianghuaSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
        }
        var d = __define,c=QianghuaPanel;p=c.prototype;
        p.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        p.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return QianghuaPanel;
    })(eui.Component);
    game.QianghuaPanel = QianghuaPanel;
    egret.registerClass(QianghuaPanel,"game.QianghuaPanel");
})(game || (game = {}));
