/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

    export class QianghuaMediator extends BaseMediator {
        public static NAME: string = "QianghuaMediator";

        public constructor(viewComponent: any = null) {
            super(QianghuaMediator.NAME,viewComponent);
        }

        public listNotificationInterests(): Array<any> {
            return [
                PanelNotify.OPEN_QIANGHUA,
                PanelNotify.CLOSE_QIANGHUA,
                SysNotify.CONNECT_SERVER_SUCCESS,
                UserInfoNotify.UPDATE_DATA
            ];
        }
        private qinghuaPanel: QianghuaPanel = new QianghuaPanel();
        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch(notification.getName()) {
                case PanelNotify.OPEN_QIANGHUA: {
                    //显示角色面板
                    this.showUI(this.qinghuaPanel,false,0,0,3);
                    break;
                }
                case PanelNotify.CLOSE_QIANGHUA: {
                    this.closePanel(1);
                    break;
                }
                case SysNotify.CONNECT_SERVER_SUCCESS: {
                    this.qinghuaPanel.showText.text += "服务器连接成功...\n";
                    break;
                }
                case UserInfoNotify.UPDATE_DATA: {
                    this.qinghuaPanel.showText.text += "userId:"+data.getUserId()+"\nuserName:"+data.getUserName();
                    break;
                }
            }
        }       

        /**
         * 初始化面板ui
         */
        public initUI(): void {
            this.qinghuaPanel.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeButtonClick,this);
            this.qinghuaPanel.connectServer.addEventListener(egret.TouchEvent.TOUCH_TAP,this.connectServerButtonClick,this);
            this.qinghuaPanel.sendMsg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.sendMsgButtonClick,this);
        }	

        /**
         * 初始化面板数据
         */
        public initData(): void {
 

        }

        private connectServerButtonClick(event: egret.TouchEvent): void {
            SocketManager.connectServer("echo.websocket.org",80);
        }
        
        private sendMsgButtonClick(event: egret.TouchEvent): void {
            UserInfoRequest.sendUserInfo(Number(this.qinghuaPanel.input1.text),this.qinghuaPanel.input2.text);
        }
        
        private closeButtonClick(event: egret.TouchEvent): void {
            this.closePanel(1);
        }
    }
}