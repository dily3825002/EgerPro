var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 活动条
 */
var game;
(function (game) {
    var ActivityBar = (function (_super) {
        __extends(ActivityBar, _super);
        function ActivityBar() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/core/view/main/ActivityBarSkin.exml";
            return _this;
        }
        return ActivityBar;
    }(eui.Component));
    game.ActivityBar = ActivityBar;
    __reflect(ActivityBar.prototype, "game.ActivityBar");
})(game || (game = {}));
//# sourceMappingURL=ActivityBar.js.map