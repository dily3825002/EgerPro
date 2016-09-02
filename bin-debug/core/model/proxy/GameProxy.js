/**
  * 游戏数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
var GameProxy = (function (_super) {
    __extends(GameProxy, _super);
    function GameProxy() {
        _super.call(this, GameProxy.NAME);
        this.vo = new GameVO();
    }
    var d = __define,c=GameProxy;p=c.prototype;
    /**
     * 获取游戏名称
     */
    p.getGameName = function () {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        return this.vo.gameName;
    };
    /**
     * 设置游戏名称
     */
    p.setGameName = function (name) {
        if (!this.vo) {
            this.vo = new GameVO();
        }
        this.vo.gameName = name;
    };
    GameProxy.NAME = "GameProxy"; //必须和excel导出文件一致
    return GameProxy;
})(ResourceProxyBase);
egret.registerClass(GameProxy,"GameProxy");
