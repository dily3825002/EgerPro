var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
  * 数据读取模板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  */
var TemplateProxy = (function (_super) {
    __extends(TemplateProxy, _super);
    function TemplateProxy() {
        return _super.call(this, TemplateProxy.NAME) || this;
    }
    /**
     * 获取excel数据
     */
    TemplateProxy.prototype.getGameData = function () {
        return this.getData();
    };
    TemplateProxy.NAME = "template_json"; //必须和excel导出文件一致
    return TemplateProxy;
}(ResourceProxyBase));
__reflect(TemplateProxy.prototype, "TemplateProxy");
