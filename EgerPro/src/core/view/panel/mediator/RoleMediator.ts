  /**
    * 人物角色面板
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    */
module game {

    export class RoleMediator extends BaseMediator{
        public static NAME:string = "RoleMediator";

        public constructor(viewComponent:any = null){
            super(RoleMediator.NAME, viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_ROLE,
                PanelNotify.CLOSE_ROLE
            ];
        }
        private rolePanel: RolePanel = new RolePanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_ROLE: {
                    //显示角色面板
                    this.showUI(this.rolePanel,false,0,0,4);
                    break;
                }       
                case PanelNotify.CLOSE_ROLE: {
                    this.closePanel(1); 
                    break;
                }  
            }
        }       

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.rolePanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
            this.rolePanel.readExcel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readExcelButtonClick,this);
        }	

        /**
         * 初始化面板数据
         */
        public initData(): void {
            
        }	      

        private readExcelButtonClick(event: egret.TouchEvent): void {
            //下面是测试excel读取
            var dataProxy = P.getTemplateDataProxy().getGameData();
            this.rolePanel.showText.text += 
            dataProxy[this.rolePanel.input1.text][this.rolePanel.input2.text] + "\n";
            
        }
        private closeButtonClick(event: egret.TouchEvent): void 
        {
            this.closePanel(1); 
        }
    }
}