/**
  * 通过excel名称获得excel数据proxy
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var P;
(function (P) {
    //=========================excel数据=============================
    /**
     * 这个是一个读取excel数据的例子
     */
    function getTemplateDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(TemplateProxy.NAME);
    }
    P.getTemplateDataProxy = getTemplateDataProxy;
    //=========================游戏其他数据数据=============================
    /**
     * 这个是一个读取游戏数据的例子
     */
    function getGameDataProxy() {
        return game.AppFacade.getInstance().retrieveProxy(GameProxy.NAME);
    }
    P.getGameDataProxy = getGameDataProxy;
})(P || (P = {}));
