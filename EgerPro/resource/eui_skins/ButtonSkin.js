var skins;
(function (skins) {
	var ButtonSkin=(function (_super) {
		__extends(ButtonSkin, _super);
		function ButtonSkin() {
			_super.call(this);
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/assets/Button/button_down.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
			];
		}
		var _proto = ButtonSkin.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(1,3,8,8);
			t.source = "resource/assets/Button/button_up.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bottom = 8;
			t.fontFamily = "Tahoma 'Microsoft Yahei'";
			t.left = 8;
			t.right = 8;
			t.size = 20;
			t.textAlign = "center";
			t.textColor = 0xFFFFFF;
			t.top = 8;
			t.verticalAlign = "middle";
			return t;
		};
		_proto.iconDisplay_i = function () {
			var t = new eui.Image();
			this.iconDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["labelDisplay","iconDisplay"];
			},
			enumerable: true,
			configurable: true
		});
		return ButtonSkin;
	})(eui.Skin);
})(skins || (skins = {}));