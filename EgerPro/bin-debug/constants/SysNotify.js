var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 系统消息
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var SysNotify = (function () {
    function SysNotify() {
    }
    //服务器连接成功
    SysNotify.CONNECT_SERVER_SUCCESS = "CONNECT_SERVER_SUCCESS";
    //服务器返回数据
    SysNotify.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    return SysNotify;
}());
__reflect(SysNotify.prototype, "SysNotify");
