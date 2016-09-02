/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

    export class ChuangDangMediator extends BaseMediator {
        public static NAME: string = "ChuangDangMediator";

        public constructor(viewComponent: any = null) {
            super(ChuangDangMediator.NAME,viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_CHUANGDANG,
                PanelNotify.CLOSE_CHUANGDANG
            ];
        }
        private chuangDangPanel: ChuangDangPanel = new ChuangDangPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_CHUANGDANG: {
                    //显示角色面板
                    this.showUI(this.chuangDangPanel,false,0,0,Number(this.chuangDangPanel.input1.text));
                    break;
                }
                case PanelNotify.CLOSE_CHUANGDANG: {
                    this.closePanel(1);
                    break;
                }
            }
        }       

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.chuangDangPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
            this.chuangDangPanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readExcelButtonClick,this);
        }	

        /**
         * 初始化面板数据
         */
        public initData(): void {


        }

        private readExcelButtonClick(event: egret.TouchEvent): void {
            egret.setTimeout(function() {
                this.sendNotification(PanelNotify.OPEN_CHUANGDANG);
            },this,100);
            this.closePanel(0);
            
            
        }
        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel(1);
        }
    }
}