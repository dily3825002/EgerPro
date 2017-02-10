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
    var ChuangDangPanel = (function (_super) {
        __extends(ChuangDangPanel, _super);
        function ChuangDangPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/core/view/panel/ui/ChuangDangSkin.exml";
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        ChuangDangPanel.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.COMPLETE, this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        };
        ChuangDangPanel.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return ChuangDangPanel;
    }(eui.Component));
    game.ChuangDangPanel = ChuangDangPanel;
    __reflect(ChuangDangPanel.prototype, "game.ChuangDangPanel");
})(game || (game = {}));
//# sourceMappingURL=ChuangDangPanel.js.map