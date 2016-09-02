var skins;
(function (skins) {
	var CheckBoxSkin=(function (_super) {
		__extends(CheckBoxSkin, _super);
		function CheckBoxSkin() {
			_super.call(this);
			
			this.elementsContent = [this._Group1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","alpha",0.7)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","alpha",0.5)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","resource/assets/CheckBox/checkbox_select_up.png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","resource/assets/CheckBox/checkbox_select_down.png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","resource/assets/CheckBox/checkbox_select_disabled.png")
					])
			];
		}
		var _proto = CheckBoxSkin.prototype;
	
		_proto._Group1_i = function () {
			var t = new eui.Group();
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.layout = this._HorizontalLayout1_i();
			t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			return t;
		};
		_proto._HorizontalLayout1_i = function () {
			var t = new eui.HorizontalLayout();
			t.verticalAlign = "middle";
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.alpha = 1;
			t.fillMode = "scale";
			t.source = "resource/assets/CheckBox/checkbox_unselect.png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Tahoma";
			t.size = 20;
			t.textAlign = "center";
			t.textColor = 0x707070;
			t.verticalAlign = "middle";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["labelDisplay"];
			},
			enumerable: true,
			configurable: true
		});
		return CheckBoxSkin;
	})(eui.Skin);
})(skins || (skins = {}));