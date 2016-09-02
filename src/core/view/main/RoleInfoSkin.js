var RoleInfoSkin=(function (_super) {
	__extends(RoleInfoSkin, _super);
	function RoleInfoSkin() {
		_super.call(this);
		
		this.height = 120;
		this.width = 600;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = RoleInfoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "roleInfoImg_png";
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
	return RoleInfoSkin;
})(eui.Skin);