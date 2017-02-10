var skins;
(function (skins) {
	var ToggleSwitchSkin=(function (_super) {
		__extends(ToggleSwitchSkin, _super);
		function ToggleSwitchSkin() {
			_super.call(this);
			
			this.elementsContent = [this._Image1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","source","resource/assets/ToggleSwitch/off.png")
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","resource/assets/ToggleSwitch/off.png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","resource/assets/ToggleSwitch/off.png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image2","horizontalCenter",18)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image2","horizontalCenter",18)
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image2","horizontalCenter",18)
					])
			];
		}
		var _proto = ToggleSwitchSkin.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.source = "resource/assets/ToggleSwitch/on.png";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			this._Image2 = t;
			t.horizontalCenter = -18;
			t.source = "resource/assets/ToggleSwitch/handle.png";
			t.verticalCenter = 0;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return [];
			},
			enumerable: true,
			configurable: true
		});
		return ToggleSwitchSkin;
	})(eui.Skin);
})(skins || (skins = {}));