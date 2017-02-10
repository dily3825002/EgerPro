var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 角色信息
 */
var game;
(function (game) {
    var RoleInfo = (function (_super) {
        __extends(RoleInfo, _super);
        function RoleInfo() {
            var _this = _super.call(this) || this;
            _this.skinName = "src/core/view/main/RoleInfoSkin.exml";
            return _this;
        }
        return RoleInfo;
    }(eui.Component));
    game.RoleInfo = RoleInfo;
    __reflect(RoleInfo.prototype, "game.RoleInfo");
})(game || (game = {}));
//# sourceMappingURL=RoleInfo.js.map