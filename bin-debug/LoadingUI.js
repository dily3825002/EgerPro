/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.w = 0;
        this.h = 0;
        this.createGameScene();
    }
    var d = __define,c=LoadingUI;p=c.prototype;
    /**
     * 创建游戏场景
     */
    p.createGameScene = function () {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg = new egret.Bitmap;
        this.bg.texture = RES.getRes("PreLoadingBg_png");
        this.addChild(this.bg);
        this.pgBg = new egret.Bitmap;
        this.pgBg.texture = RES.getRes("PreLoadingBarBg_png");
        this.pgBg.x = this.w / 2 - this.pgBg.width / 2;
        this.pgBg.y = this.h - this.pgBg.height - 50;
        this.addChild(this.pgBg);
        this.pgBar = new egret.Bitmap;
        this.pgBar.texture = RES.getRes("PreLoadingBar_png");
        this.pgBar.x = this.w / 2 - this.pgBar.width / 2;
        this.pgBar.y = this.pgBg.y + 20;
        this.addChild(this.pgBar);
        this.textField = new egret.TextField();
        this.textField.size = 24;
        this.textField.textColor = 0xFFFFFF;
        this.textField.bold = true;
        this.textField.stroke = 1;
        this.textField.strokeColor = 0x000000;
        this.addChild(this.textField);
        this.textField.width = 100;
        this.textField.x = this.w / 2 - this.textField.width / 2;
        this.textField.y = this.pgBg.y + 20;
        this.textField.textAlign = "center";
        this.textField.text = "0%";
        this.pgBar.width = 0;
    };
    /**
     * 进度条
     */
    // public progressBar:egret.gui.ProgressBar;
    p.setProgress = function (current, total) {
        // if(this.progressBar)
        // {
        //     this.progressBar.maximum = total;
        //     this.progressBar.value = current;
        // }
        var rate = Math.round((current / total) * 100);
        this.textField.text = rate + "%";
        this.pgBar.width = 641 * (current / total);
    };
    return LoadingUI;
})(eui.UILayer);
egret.registerClass(LoadingUI,"LoadingUI");
