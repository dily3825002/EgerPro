var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 主界面
 */
var game;
(function (game) {
    var MainUI = (function (_super) {
        __extends(MainUI, _super);
        function MainUI() {
            var _this = _super.call(this) || this;
            _this.isHide = false;
            _this.skinName = "MainUISkin";
            return _this;
        }
        MainUI.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            //画一个红色的正方形
            var square1 = new egret.Shape();
            square1.graphics.beginFill(0xff0000);
            square1.x = this.functionBar.x;
            square1.y = this.functionBar.y;
            square1.graphics.drawRect(0, 0, this.functionBar.width, this.functionBar.height);
            square1.graphics.endFill();
            this.addChild(square1);
            //画一个红色的正方形
            var square2 = new egret.Shape();
            square2.graphics.beginFill(0xff0000);
            square2.x = this.activityBar.x;
            square2.y = this.activityBar.y;
            square2.graphics.drawRect(0, 0, this.activityBar.width, this.activityBar.height);
            square2.graphics.endFill();
            this.addChild(square2);
            this.mainBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMainBtnClick, this);
            this.functionBar.mask = square1;
            this.activityBar.mask = square2;
            this.functionBar.roleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRoleBtnClick, this);
            this.functionBar.backpackBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackpackBtnClick, this);
            this.functionBar.qianghuaBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQianghuaBtnClick, this);
            this.functionBar.zhaoXianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZhaoXianBtnClick, this);
            this.functionBar.chuangDangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChuangDangBtnClick, this);
            this.functionBar.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopBtnClick, this);
            this.functionBar.mapBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMapBtnClick, this);
        };
        MainUI.prototype.onMainBtnClick = function (e) {
            if (this.isHide) {
                this.isHide = !this.isHide;
                egret.Tween.get(this.functionBar).to({ x: 291 }, 300, egret.Ease.backOut);
                egret.Tween.get(this.activityBar).to({ y: 319 }, 300, egret.Ease.backOut);
            }
            else {
                this.isHide = !this.isHide;
                egret.Tween.get(this.functionBar).to({ x: GameConfig.curWidth() }, 300, egret.Ease.backOut);
                egret.Tween.get(this.activityBar).to({ y: GameConfig.curHeight() }, 300, egret.Ease.backOut);
            }
        };
        MainUI.prototype.onRoleBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_ROLE);
        };
        MainUI.prototype.onBackpackBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_BACKPACK);
        };
        MainUI.prototype.onQianghuaBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_QIANGHUA);
        };
        MainUI.prototype.onZhaoXianBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_ZHAOXIAN);
        };
        MainUI.prototype.onChuangDangBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_CHUANGDANG);
        };
        MainUI.prototype.onShopBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_SHOP);
        };
        MainUI.prototype.onMapBtnClick = function (e) {
            game.AppFacade.getInstance().sendNotification(PanelNotify.OPEN_MAP);
        };
        MainUI.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        return MainUI;
    }(eui.Component));
    game.MainUI = MainUI;
    __reflect(MainUI.prototype, "game.MainUI");
})(game || (game = {}));
//# sourceMappingURL=MainUI.js.map