/**
  * 系统消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var SysNotify = (function () {
    function SysNotify() {
    }
    var d = __define,c=SysNotify;p=c.prototype;
    //服务器连接成功
    SysNotify.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
    //服务器返回数据
    SysNotify.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    return SysNotify;
})();
egret.registerClass(SysNotify,"SysNotify");
