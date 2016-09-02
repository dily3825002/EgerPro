/**
 * 活动条
 */
var game;
(function (game) {
    var ActivityBar = (function (_super) {
        __extends(ActivityBar, _super);
        function ActivityBar() {
            _super.call(this);
            this.skinName = "src/core/view/main/ActivityBarSkin.exml";
        }
        var d = __define,c=ActivityBar;p=c.prototype;
        return ActivityBar;
    })(eui.Component);
    game.ActivityBar = ActivityBar;
    egret.registerClass(ActivityBar,"game.ActivityBar");
})(game || (game = {}));
