/**
  * 数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var TemplateProxy = (function (_super) {
    __extends(TemplateProxy, _super);
    function TemplateProxy() {
        _super.call(this, TemplateProxy.NAME);
    }
    var d = __define,c=TemplateProxy;p=c.prototype;
    /**
     * 获取excel数据
     */
    p.getGameData = function () {
        return this.getData();
    };
    TemplateProxy.NAME = "template"; //必须和excel导出文件一致
    return TemplateProxy;
})(ResourceProxyBase);
egret.registerClass(TemplateProxy,"TemplateProxy");
