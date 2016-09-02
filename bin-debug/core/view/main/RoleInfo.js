/**
 * 角色信息
 */
var game;
(function (game) {
    var RoleInfo = (function (_super) {
        __extends(RoleInfo, _super);
        function RoleInfo() {
            _super.call(this);
            this.skinName = "src/core/view/main/RoleInfoSkin.exml";
        }
        var d = __define,c=RoleInfo;p=c.prototype;
        return RoleInfo;
    })(eui.Component);
    game.RoleInfo = RoleInfo;
    egret.registerClass(RoleInfo,"game.RoleInfo");
})(game || (game = {}));
