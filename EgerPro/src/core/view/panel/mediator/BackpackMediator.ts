/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

    export class BackpackMediator extends BaseMediator {
        public static NAME: string = "BackpackMediator";

        public constructor(viewComponent: any = null) {
            super(BackpackMediator.NAME,viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_BACKPACK,
                PanelNotify.CLOSE_BACKPACK
            ];
        }
        private backpackPanel: BackpackPanel = new BackpackPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_BACKPACK: {
                    //显示角色面板
                    this.showUI(this.backpackPanel,false,0,0,1);
                    break;
                }
                case PanelNotify.CLOSE_BACKPACK: {
                    this.closePanel(1);
                    break;
                }
            }
        }       

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.backpackPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
            this.backpackPanel.readProxy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readProxyButtonClick,this);
            this.backpackPanel.saveProxy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.saveProxyButtonClick,this);
        }	

        /**
         * 初始化面板数据
         */
        public initData(): void {

        }

        private saveProxyButtonClick(event: egret.TouchEvent): void {
            P.getGameDataProxy().setGameName(this.backpackPanel.input1.text);
            this.backpackPanel.showText.text += "保存成功...\n" + P.getGameDataProxy().getGameName() + "\n";
        }
        private readProxyButtonClick(event: egret.TouchEvent): void {
            this.backpackPanel.showText.text += P.getGameDataProxy().getGameName() + "\n";

        }
        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel(1);
        }
    }
}