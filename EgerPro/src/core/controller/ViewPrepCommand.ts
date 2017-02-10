  /**
    * 注册mediator
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    */
module game {

	export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
           
		public constructor(){
			super();
		}
		public execute(notification:puremvc.INotification):void{
			var main = GameLayerManager.gameLayer().panelLayer;
			this.facade.registerMediator( new RoleMediator() );
            this.facade.registerMediator(new BackpackMediator());
            this.facade.registerMediator(new QianghuaMediator());
            this.facade.registerMediator(new ZhaoXianMediator());
            this.facade.registerMediator(new ChuangDangMediator());
            this.facade.registerMediator(new ShopMediator());
            this.facade.registerMediator(new MapMediator());
		}
	}
}