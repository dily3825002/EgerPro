/**
 * 
 */

module game {

    export class ShopPanel extends eui.Component {

        public constructor() {
            super();
            this.skinName = "src/core/view/panel/ui/ShopSkin.exml";
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
        public btn7: eui.Button;
        public btn8: eui.Button;
        public btn9: eui.Button;
        public btn10: eui.Button;
        public img1: eui.Image;
        public img2: eui.Image;
        public img3: eui.Image;
        public img4: eui.Image;
        public img5: eui.Image;
        public img6: eui.Image;
        public img7: eui.Image;
        public img8: eui.Image;
        public img9: eui.Image;
        public img10: eui.Image;
        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }
    }
}