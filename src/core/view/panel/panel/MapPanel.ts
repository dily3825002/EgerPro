/**
 * 
 */

module game {

    export class MapPanel extends eui.Component {

        public constructor() {
            super();
            this.skinName = "src/core/view/panel/ui/MapSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        }

        public closeBtn: eui.Button;
        public btn1: eui.Button;
        public btn2: eui.Button;
        public btn3: eui.Button;
        public btn4: eui.Button;
        public btn5: eui.Button;
        public btn6: eui.Button;
        public btn10: eui.Button;
        public img1: eui.Image;
        public img2: eui.Image;
        public img3: eui.Image;
        public img4: eui.Image;
        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }
    }
}