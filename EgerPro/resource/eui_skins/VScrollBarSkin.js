var skins;
(function (skins) {
	var VScrollBarSkin=(function (_super) {
		__extends(VScrollBarSkin, _super);
		function VScrollBarSkin() {
			_super.call(this);
			
			this.minHeight = 20;
			this.minWidth = 8;
			this.elementsContent = [this.thumb_i()];
		}
		var _proto = VScrollBarSkin.prototype;
	
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.height = 30;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(3,3,2,2);
			t.source = "resource/assets/ScrollBar/roundthumb.png";
			t.width = 8;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["thumb"];
			},
			enumerable: true,
			configurable: true
		});
		return VScrollBarSkin;
	})(eui.Skin);
})(skins || (skins = {}));