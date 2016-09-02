/**
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  *
  */
var GameLayerManager = (function (_super) {
    __extends(GameLayerManager, _super);
    //构造方法
    function GameLayerManager() {
        _super.call(this);
        // 场景层 如 战场、主城、副本战场之类的
        this.sceneLayer = new eui.UILayer();
        // 主UI层 如 底部功能栏
        this.mainLayer = new eui.UILayer();
        // 弹窗层 如 设置、背包、装备之类的
        this.panelLayer = new eui.UILayer();
        // 特效层 如 闪烁、飘字之类的
        this.effectLayer = new eui.UILayer();
        // 通讯遮罩层 和服务器通讯UI
        this.maskLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        this.loadLayer = new eui.UILayer();
        this.init();
    }
    var d = __define,c=GameLayerManager;p=c.prototype;
    //游戏容器管理器单例
    GameLayerManager.gameLayer = function () {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    };
    //初始化场景类
    p.init = function () {
        this.touchThrough = true;
        this.sceneLayer.touchThrough = true;
        this.mainLayer.touchThrough = true;
        this.panelLayer.touchThrough = true;
        this.effectLayer.touchThrough = true;
        this.maskLayer.touchThrough = true;
        this.loadLayer.touchThrough = true;
        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
    };
    return GameLayerManager;
})(eui.UILayer);
egret.registerClass(GameLayerManager,"GameLayerManager");
