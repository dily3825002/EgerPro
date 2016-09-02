  /**
    * 场景管理类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 所有的弹窗都需要在register注册事件
    * 在execute添加消息处理面板打开关闭事件
    */
module game {

    export class SceneManager extends puremvc.SimpleCommand implements puremvc.ICommand{

        private homeCity:HomeCity;

        public constructor(){
            super();
        }

        public static NAME:string = "SceneManager";

        /**
         * 注册消息
         */
        public register():void{
            this.facade.registerCommand(SceneNotify.OPEN_HOME , SceneManager);//打开主城
            this.facade.registerCommand(SceneNotify.CLOSE_HOME , SceneManager);//关闭主城
        }

        public execute(notification:puremvc.INotification):void{
            var data:any = notification.getBody();//携带数据
            var panelCon = GameLayerManager.gameLayer().sceneLayer;
            switch(notification.getName()){
                case SceneNotify.OPEN_HOME:{
                    if(this.homeCity == null){
                        this.homeCity = new HomeCity();
                        panelCon.addChild(this.homeCity);
                    }
                    break;
                }
                case SceneNotify.CLOSE_HOME:{
                    if(this.homeCity != null){
                        panelCon.removeChild(this.homeCity);
                        this.homeCity = null;
                    }
                    break;
                }
            }
        }
    }
}
