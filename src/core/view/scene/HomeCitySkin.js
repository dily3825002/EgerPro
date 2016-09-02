var HomeCitySkin=(function (_super) {
	__extends(HomeCitySkin, _super);
	function HomeCitySkin() {
		_super.call(this);
		
		this.height = 960;
		this.width = 1280;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = HomeCitySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 960;
		t.source = "homeBg1_jpg";
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return [];
		},
		enumerable: true,
		configurable: true
	});
	return HomeCitySkin;
})(eui.Skin);