/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

    export class ZhaoXianMediator extends BaseMediator {
        public static NAME: string = "ZhaoXianMediator";

        public constructor(viewComponent: any = null) {
            super(ZhaoXianMediator.NAME,viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_ZHAOXIAN,
                PanelNotify.CLOSE_ZHAOXIAN
            ];
        }
        private zhaoXianPanel: ZhaoXianPanel = new ZhaoXianPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_ZHAOXIAN: {
                    //显示角色面板
                    this.showUI(this.zhaoXianPanel,false,0,0,5);
                    break;
                }
                case PanelNotify.CLOSE_ZHAOXIAN: {
                    this.closePanel(1);
                    break;
                }
            }
        }       

        private menuBtn: EButton;
        private setBtn: EButton;
        private buttonBtn: EButton;
        private imgBtn: EButton;
        private panelBtn: EButton;
        private sceneBtn: EButton;
        private tipsBtn: EButton;
        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.zhaoXianPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
        
            this.menuBtn = new EButton(this,"yellowBtn_png",this.onMenuBtnTouchTap,"按钮特效1",30,1,null);
            this.menuBtn.x = -300;
            this.menuBtn.y = 300;
            this.zhaoXianPanel.addChild(this.menuBtn);

            this.setBtn = new EButton(this,"yellowBtn_png",this.onSetBtnTouchTap,"按钮特效12",30,2,null);
            this.setBtn.x = -300;
            this.setBtn.y = 400
            this.zhaoXianPanel.addChild(this.setBtn);

            this.buttonBtn = new EButton(this,"yellowBtn_png",this.onButtonBtnTouchTap,"按钮特效3",30,3,null);
            this.buttonBtn.x = -300;
            this.buttonBtn.y = 500;
            this.zhaoXianPanel.addChild(this.buttonBtn);   
            
            this.initEffect();
        }	

        private initEffect(): void {
            egret.setTimeout(function() {
                egret.Tween.get(this.menuBtn).to({ x: this.w / 2 - this.menuBtn.width / 2 },600,egret.Ease.backOut);
            },this,150 * 1);
            egret.setTimeout(function() {
                egret.Tween.get(this.setBtn).to({ x: this.w / 2 - this.setBtn.width / 2 },600,egret.Ease.backOut);
            },this,150 * 2);
            egret.setTimeout(function() {
                egret.Tween.get(this.buttonBtn).to({ x: this.w / 2 - this.buttonBtn.width / 2 },600,egret.Ease.backOut);
            },this,150 * 3);
        }       
        
        private onMenuBtnTouchTap(event: egret.TouchEvent): void {

        }
        private onSetBtnTouchTap(event: egret.TouchEvent): void {

        }
        private onButtonBtnTouchTap(event: egret.TouchEvent): void {

        }
      
        /**
         * 初始化面板数据
         */
        public initData(): void {

        }

        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel(1);
        }
    }
}