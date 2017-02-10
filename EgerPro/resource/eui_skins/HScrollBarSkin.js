var skins;
(function (skins) {
	var HScrollBarSkin=(function (_super) {
		__extends(HScrollBarSkin, _super);
		function HScrollBarSkin() {
			_super.call(this);
			
			this.minHeight = 8;
			this.minWidth = 20;
			this.elementsContent = [this.thumb_i()];
		}
		var _proto = HScrollBarSkin.prototype;
	
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.height = 8;
			t.scale9Grid = new egret.Rectangle(3,3,2,2);
			t.source = "resource/assets/ScrollBar/roundthumb.png";
			t.verticalCenter = 0;
			t.width = 30;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["thumb"];
			},
			enumerable: true,
			configurable: true
		});
		return HScrollBarSkin;
	})(eui.Skin);
})(skins || (skins = {}));