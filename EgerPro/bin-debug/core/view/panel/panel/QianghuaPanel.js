/**
 *
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var QianghuaPanel = (function (_super) {
        __extends(QianghuaPanel, _super);
        function QianghuaPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/core/view/panel/ui/QianghuaSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        QianghuaPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        QianghuaPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return QianghuaPanel;
    }(eui.Component));
    game.QianghuaPanel = QianghuaPanel;
    __reflect(QianghuaPanel.prototype, "game.QianghuaPanel");
})(game || (game = {}));
//# sourceMappingURL=QianghuaPanel.js.map