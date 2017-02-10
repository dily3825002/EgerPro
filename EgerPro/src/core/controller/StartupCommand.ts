  /**
    * 初始化mvc controller
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    */
module game {

	export class StartupCommand extends puremvc.MacroCommand{

		public constructor(){
			super();
		}
		public initializeMacroCommand():void{
			this.addSubCommand(ControllerPrepCommand);
			this.addSubCommand(ModelPrepCommand);
			this.addSubCommand(ViewPrepCommand);
		}
	}
}