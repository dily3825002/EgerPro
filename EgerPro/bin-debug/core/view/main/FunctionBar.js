var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 功能条
 */
var game;
(function (game) {
    var FunctionBar = (function (_super) {
        __extends(FunctionBar, _super);
        function FunctionBar() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/core/view/main/FunctionBarSkin.exml";
            return _this;
        }
        return FunctionBar;
    }(eui.Component));
    game.FunctionBar = FunctionBar;
    __reflect(FunctionBar.prototype, "game.FunctionBar");
})(game || (game = {}));
//# sourceMappingURL=FunctionBar.js.map