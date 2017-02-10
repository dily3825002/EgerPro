  /**
    * 注册controller
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    */
module game {

	export class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{

		public constructor(){
			super();
		}
		public execute(notification:puremvc.INotification):void{
    		(new SceneManager()).register();
            (new MainManager()).register();
            
            //服务器返回command
            (new Processor_100_1()).register();
        }
	}
}