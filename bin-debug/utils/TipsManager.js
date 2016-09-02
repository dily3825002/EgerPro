/**
  * tips弹出管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * tips弹出的管理类
  */
var TipsManager;
(function (TipsManager) {
    //tips面板
    var _tips;
    //tip 对象数据存贮
    // var _dict:Object;
    var _dict = [];
    /**
    * 添加tips方法
    * attachment       		绑定对象
    * descStr        		tips内容
    * effectType        0：没有动画 1:从下到上渐现 2：从左向右 3：从右向左
    */
    function addTips(attachment, descStr, effectType) {
        if (descStr === void 0) { descStr = ""; }
        if (effectType === void 0) { effectType = 0; }
        if (this._dict == null) {
            this._dict = [];
        }
        attachment.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showTips, this);
        attachment.addEventListener(egret.TouchEvent.TOUCH_END, this.removeTips, this);
        attachment.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.removeTips, this);
        if (this._dict[attachment.hashCode] == null) {
            this._dict[attachment.hashCode] = [];
            this._dict[attachment.hashCode].descStr = descStr;
            this._dict[attachment.hashCode].effectType = effectType;
        }
    }
    TipsManager.addTips = addTips;
    /**
    * 显示tips方法
    */
    function showTips(e) {
        var attachment = e.currentTarget;
        var descStr = "";
        var effectType = 0;
        if (this._tips == null) {
            if (this._dict[attachment.hashCode] != null) {
                descStr = this._dict[attachment.hashCode].descStr;
                effectType = this._dict[attachment.hashCode].effectType;
            }
            this._tips = new TipsPanel(this._dict[attachment.hashCode].descStr);
            if (!GameLayerManager.gameLayer().effectLayer.contains(this._tips)) {
                GameLayerManager.gameLayer().effectLayer.addChild(this._tips);
            }
            var point = attachment.parent.localToGlobal(attachment.x, attachment.y);
            point.x = point.x + attachment.width / 2;
            point.y = point.y - this._tips.getHeight();
            //tips定位
            if (point.x + this._tips.getWidth() > GameConfig.curWidth()) {
                point.x = GameConfig.curWidth() - this._tips.getWidth();
            }
            else if (point.x < 0) {
                point.x = 0;
            }
            if (point.y + this._tips.getHeight() > GameConfig.curHeight()) {
                point.y = GameConfig.curHeight() - this._tips.getHeight();
            }
            else if (point.y < 0) {
                point.y = 0;
            }
            this._tips.x = point.x;
            this._tips.y = point.y;
            switch (effectType) {
                case 0: {
                    // TODO: Implement case content
                    this._tips.alpha = 0;
                    egret.Tween.get(this._tips).to({ alpha: 1 }, 300);
                    break;
                }
                case 1: {
                    this._tips.alpha = 0;
                    this._tips.y += this._tips.getHeight();
                    egret.Tween.get(this._tips).to({ alpha: 1, y: this._tips.y - this._tips.getHeight() }, 500, egret.Ease.backOut);
                    break;
                }
                case 2: {
                    this._tips.alpha = 0;
                    this._tips.x -= this._tips.getWidth();
                    egret.Tween.get(this._tips).to({ alpha: 1, x: this._tips.x + this._tips.getWidth() }, 500, egret.Ease.backOut);
                    break;
                }
                case 3: {
                    this._tips.alpha = 0;
                    this._tips.x += this._tips.getWidth();
                    egret.Tween.get(this._tips).to({ alpha: 1, x: this._tips.x - this._tips.getWidth() }, 500, egret.Ease.backOut);
                    break;
                }
                default: {
                }
            }
        }
    }
    TipsManager.showTips = showTips;
    /**
    * 移除tips方法
    */
    function removeTips(e) {
        var attachment = e.currentTarget;
        if (this._tips != null) {
            var onComplete = function () {
                if (GameLayerManager.gameLayer().effectLayer.contains(this._tips)) {
                    GameLayerManager.gameLayer().effectLayer.removeChild(this._tips);
                    this._tips = null;
                }
            };
            egret.Tween.get(this._tips).to({ alpha: 0 }, 300).call(onComplete, this);
        }
    }
    TipsManager.removeTips = removeTips;
})(TipsManager || (TipsManager = {}));
