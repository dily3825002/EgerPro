/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

    export class ShopMediator extends BaseMediator {
        public static NAME: string = "ShopMediator";

        public constructor(viewComponent: any = null) {
            super(ShopMediator.NAME,viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_SHOP,
                PanelNotify.CLOSE_SHOP
            ];
        }
        private shopPanel: ShopPanel = new ShopPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_SHOP: {
                    //显示角色面板
                    this.showUI(this.shopPanel,false,0,0,6);
                    break;
                }
                case PanelNotify.CLOSE_SHOP: {
                    this.closePanel(1);
                    break;
                }
            }
        }       

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.shopPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
            this.shopPanel.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn1Click,this);
            this.shopPanel.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn2Click,this);
            this.shopPanel.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn3Click,this);
            this.shopPanel.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn4Click,this);
            this.shopPanel.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn5Click,this);
            this.shopPanel.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn6Click,this);
            this.shopPanel.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn7Click,this);
            this.shopPanel.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn8Click,this);
            this.shopPanel.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn9Click,this);
            this.shopPanel.btn10.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btn10Click,this);
        }	

        /**
         * 初始化面板数据
         */
        public initData(): void {


        }
        private isPlay1: boolean = false;
        private isPlay2: boolean = false;
        private isPlay3: boolean = false;
        private isPlay4: boolean = false;
        private isPlay5: boolean = false;
        private isPlay6: boolean = false;
        private isPlay7: boolean = false;
        private isPlay8: boolean = false;
        private isPlay9: boolean = false;
        private isPlay10: boolean = false;
        private btn1Click(event: egret.TouchEvent): void {
            if(!this.isPlay1) {
                EffectUtils.showTips("旋转特效",5);
                EffectUtils.rotationEffect(this.shopPanel.img1,1000);
                this.isPlay1 = true;
            } else {
                EffectUtils.showTips("取消旋转特效",5);
                EffectUtils.removeRotationEffect(this.shopPanel.img1);
                this.isPlay1 = false;
            }
        }
        private btn2Click(event: egret.TouchEvent): void {
            if(!this.isPlay2) {
                EffectUtils.showTips("中心旋转特效",5);
                EffectUtils.rotationEffect(this.shopPanel.img2,1000);
                this.isPlay2 = true;
            } else {
                EffectUtils.showTips("取消中心旋转特效",5);
                EffectUtils.removeRotationEffect(this.shopPanel.img2);
                this.isPlay2 = false;
            }
        }
        private btn3Click(event: egret.TouchEvent): void {
            EffectUtils.showTips("闪烁特效",5);
            EffectUtils.blinkEffect(this.shopPanel.img3,1000);
        }
        private btn4Click(event: egret.TouchEvent): void {
            EffectUtils.showTips("抖动特效",5);
            EffectUtils.shakeObj(this.shopPanel.img4);
        }
        private btn5Click(event: egret.TouchEvent): void {
            EffectUtils.showTips("按下弹大",5);
            EffectUtils.playEffect(this.shopPanel.img5,1);
        }
        private btn6Click(event: egret.TouchEvent): void {
            EffectUtils.showTips("按下轻微弹大",5);
            EffectUtils.playEffect(this.shopPanel.img6,2);
        }
        private btn7Click(event: egret.TouchEvent): void {
            EffectUtils.showTips("按下变小放开变大",5);
            EffectUtils.playEffect(this.shopPanel.img7,3);
        }
        private btn8Click(event: egret.TouchEvent): void {
            if(!this.isPlay8) {
                this.isPlay8 = true;
                EffectUtils.showTips("持续变大变小",5);
                EffectUtils.playScaleEffect(this.shopPanel.img8);
            } else {
                EffectUtils.showTips("正在持续变大变小呢！",5);
            }
        }
        private btn9Click(event: egret.TouchEvent): void {
            if(!this.isPlay9) {
                this.isPlay9 = true;
                EffectUtils.showTips("上下浮动特效",5);
                EffectUtils.flyObj(this.shopPanel.img9,1000,15);
            } else {
                EffectUtils.showTips("正在上下浮动呢！",5);
            }
        }
        private btn10Click(event: egret.TouchEvent): void {
            if(!this.isPlay10) {
                this.isPlay10 = true;
                EffectUtils.showTips("摇头特效",5);
                EffectUtils.rockObj(this.shopPanel.img10,500);
            } else {
                EffectUtils.showTips("正在摇头呢！",5);
            }
        }
 
        
        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel(1);
        }
    }
}