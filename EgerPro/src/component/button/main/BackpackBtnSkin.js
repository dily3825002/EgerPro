var main;
(function (main) {
	var BackpackBtnSkin=(function (_super) {
		__extends(BackpackBtnSkin, _super);
		function BackpackBtnSkin() {
			_super.call(this);
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("","width",112),
						new eui.SetProperty("","height",112)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90),
						new eui.SetProperty("_Image1","x",6),
						new eui.SetProperty("_Image1","y",6),
						new eui.SetProperty("_Image1","source","backpackBtn_png"),
						new eui.SetProperty("","width",112),
						new eui.SetProperty("","height",112)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90),
						new eui.SetProperty("_Image1","x",6),
						new eui.SetProperty("_Image1","y",6),
						new eui.SetProperty("","width",112),
						new eui.SetProperty("","height",112)
					])
			];
		}
		var _proto = BackpackBtnSkin.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backpackBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = 0;
			t.italic = true;
			t.size = 24;
			t.text = "标签";
			t.textAlign = "center";
			t.textColor = 0x2EFF00;
			t.verticalCenter = 0;
			t.width = 110;
			t.x = 10;
			t.y = 10;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["labelDisplay"];
			},
			enumerable: true,
			configurable: true
		});
		return BackpackBtnSkin;
	})(eui.Skin);
})(main || (main = {}));