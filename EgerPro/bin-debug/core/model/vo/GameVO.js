var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 游戏数据存储vo
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var GameVO = (function () {
    function GameVO() {
        /**
         * 框架名称
        */
        this.gameName = "Eger pro";
    }
    return GameVO;
}());
__reflect(GameVO.prototype, "GameVO");
//# sourceMappingURL=GameVO.js.map