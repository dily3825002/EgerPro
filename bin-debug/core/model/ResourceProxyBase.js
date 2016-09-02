/**
  * 数据读取基类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var ResourceProxyBase = (function (_super) {
    __extends(ResourceProxyBase, _super);
    function ResourceProxyBase(proxyName) {
        if (proxyName === void 0) { proxyName = ""; }
        _super.call(this, proxyName);
        this._dataMap = new Array(); //存储excel数据
        this._proxyName = ""; //excel名称
        this._proxyName = proxyName;
    }
    var d = __define,c=ResourceProxyBase;p=c.prototype;
    /**
     * 开发状态：json可读
     * TODO
     * 上线状态：加载bin文件，在这里解密【文件小，加密】
     * 是预加载json文件还是到时候使用到再加载
     */
    p.getData = function () {
        var jsonData = RES.getRes(this._proxyName);
        return jsonData;
    };
    return ResourceProxyBase;
})(puremvc.Proxy);
egret.registerClass(ResourceProxyBase,"ResourceProxyBase",["puremvc.IProxy","puremvc.INotifier"]);
