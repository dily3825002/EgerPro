

module game {

	export class AppFacade extends puremvc.Facade implements puremvc.IFacade{

		public constructor(){
			super();
		}
		public static STARTUP:string = "startup";
		
		public static getInstance():AppFacade{
			if ( this.instance == null ) this.instance = new AppFacade();
			return <AppFacade><any> (this.instance);
		}
		
		public initializeController():void{
			super.initializeController();
			this.registerCommand(AppFacade.STARTUP, StartupCommand);
		}
		
		/**
		 * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
		 * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
		 */
		public startUp(rootView:egret.DisplayObjectContainer):void{
			this.sendNotification(AppFacade.STARTUP, rootView);
			this.removeCommand(AppFacade.STARTUP); //PureMVC初始化完成，注销STARUP命令
		}
	}
}