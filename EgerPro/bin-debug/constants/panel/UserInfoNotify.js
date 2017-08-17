var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* 用户信息
* by dily
* (c) copyright 2014 - 2035
* All Rights Reserved.
*/
var UserInfoNotify = (function () {
    function UserInfoNotify() {
    }
    //打开角色
    UserInfoNotify.UPDATE_DATA = "UPDATE_DATA";
    return UserInfoNotify;
}());
__reflect(UserInfoNotify.prototype, "UserInfoNotify");
