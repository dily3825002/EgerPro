var skins;
(function (skins) {
	var ScrollerSkin=(function (_super) {
		__extends(ScrollerSkin, _super);
		function ScrollerSkin() {
			_super.call(this);
			
			this.minHeight = 20;
			this.minWidth = 20;
			this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
		}
		var _proto = ScrollerSkin.prototype;
	
		_proto.horizontalScrollBar_i = function () {
			var t = new eui.HScrollBar();
			this.horizontalScrollBar = t;
			t.bottom = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.right = 0;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["horizontalScrollBar","verticalScrollBar"];
			},
			enumerable: true,
			configurable: true
		});
		return ScrollerSkin;
	})(eui.Skin);
})(skins || (skins = {}));