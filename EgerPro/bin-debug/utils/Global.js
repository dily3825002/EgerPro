/**
  * 游戏公用方法汇总
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法如：Global.setCookie()
  */
var Global;
(function (Global) {
    //显示等待界面
    function showWaritPanel() {
        Global.waitPanel = new WaitPanel(1);
        GameLayerManager.gameLayer().maskLayer.removeChildren();
        GameLayerManager.gameLayer().maskLayer.addChild(Global.waitPanel);
    }
    Global.showWaritPanel = showWaritPanel;
    //移除界面
    function hideWaritPanel() {
        if ((Global.waitPanel != null) && GameLayerManager.gameLayer().maskLayer.contains(Global.waitPanel)) {
            GameLayerManager.gameLayer().maskLayer.removeChild(Global.waitPanel);
        }
    }
    Global.hideWaritPanel = hideWaritPanel;
    //获取html文本
    function getTextFlow(str) {
        var styleParser = new egret.HtmlTextParser();
        return styleParser.parser(str);
    }
    Global.getTextFlow = getTextFlow;
    function getMessage(str) {
        if (Global.message == null) {
            //初始化template_proto
            Global.message = dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
        }
        return Global.message.build(str);
    }
    Global.getMessage = getMessage;
    //获取大写数字
    function getNumber(num) {
        switch (num) {
            case 0:
                return "零";
            case 1:
                return "一";
            case 2:
                return "二";
            case 3:
                return "三";
            case 4:
                return "四";
            case 5:
                return "五";
            case 6:
                return "六";
            case 7:
                return "七";
            case 8:
                return "八";
            case 9:
                return "九";
            default:
                // TODO: Implemente default case
                console.log("default case");
        }
    }
    Global.getNumber = getNumber;
})(Global || (Global = {}));
//# sourceMappingURL=Global.js.map