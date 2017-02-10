var main;
(function (main) {
	var MainBtnSkin=(function (_super) {
		__extends(MainBtnSkin, _super);
		function MainBtnSkin() {
			_super.call(this);
			
			this.minHeight = 50;
			this.minWidth = 100;
			this.elementsContent = [this._Image1_i()];
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
						new eui.SetProperty("_Image1","source","mainBtn_png"),
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
		var _proto = MainBtnSkin.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mainBtn_png";
			t.percentWidth = 100;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return [];
			},
			enumerable: true,
			configurable: true
		});
		return MainBtnSkin;
	})(eui.Skin);
})(main || (main = {}));