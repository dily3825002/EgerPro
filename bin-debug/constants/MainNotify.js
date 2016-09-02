/**
  * 主界面消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 包括 角色UI、主功能、活动等等
  */
var MainNotify = (function () {
    function MainNotify() {
    }
    var d = __define,c=MainNotify;p=c.prototype;
    //打开主界面UI
    MainNotify.OPEN_MAIN = "MainNotify_OPEN_MAIN";
    //关闭主界面UI
    MainNotify.CLOSE_MAIN = "MainNotify_CLOSE_MAIN";
    //打开角色UI
    MainNotify.OPEN_ROLE = "MainNotify_OPEN_ROLE";
    //关闭角色UI
    MainNotify.CLOSE_ROLE = "MainNotify_CLOSE_ROLE";
    //打开功能UI
    MainNotify.OPEN_FUNCTION = "MainNotify_OPEN_FUNCTION";
    //关闭功能UI
    MainNotify.CLOSE_FUNCTION = "MainNotify_CLOSE_FUNCTION";
    //打开活动UI
    MainNotify.OPEN_ACTIVITY = "MainNotify_OPEN_ACTIVITY";
    //关闭活动UI
    MainNotify.CLOSE_ACTIVITY = "MainNotify_CLOSE_ACTIVITY";
    return MainNotify;
})();
egret.registerClass(MainNotify,"MainNotify");
