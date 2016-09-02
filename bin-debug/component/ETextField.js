/**
  * 多颜色文本类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 使用方法：this.textTF.setText("haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa");
  */
var ETextField = (function (_super) {
    __extends(ETextField, _super);
    function ETextField() {
        _super.call(this);
    }
    var d = __define,c=ETextField;p=c.prototype;
    //demo
    //"haa<font size='60' color='0x2bff00' i='true' b='false'>aaaa</font>aaaaaa<i>aaaa</i>aaaaaaaa"
    p.setText = function (str) {
        if (str === void 0) { str = ""; }
        var styleParser = new egret.HtmlTextParser();
        this.textFlow = styleParser.parser(str);
    };
    return ETextField;
})(egret.TextField);
egret.registerClass(ETextField,"ETextField");
