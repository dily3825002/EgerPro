var MainUISkin=(function (_super) {
	__extends(MainUISkin, _super);
	function MainUISkin() {
		_super.call(this);
		
		this.height = 960;
		this.width = 1280;
		this.elementsContent = [this.activityBar_i(),this.functionBar_i(),this.mainBtn_i(),this.roleInfo_i()];
	}
	var _proto = MainUISkin.prototype;

	_proto.activityBar_i = function () {
		var t = new ();
		t.skinName = ActivityBarSkin;
		t.x = 1151;
		t.y = 319;
		return t;
	};
	_proto.functionBar_i = function () {
		var t = new ();
		t.skinName = FunctionBarSkin;
		t.x = 291;
		t.y = 832;
		return t;
	};
	_proto.mainBtn_i = function () {
		var t = new eui.Button();
		this.mainBtn = t;
		t.label = "按钮";
		t.skinName = "main.MainBtnSkin";
		t.x = 1157;
		t.y = 836;
		return t;
	};
	_proto.roleInfo_i = function () {
		var t = new ();
		t.skinName = RoleInfoSkin;
		t.x = 0;
		t.y = 0;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["activityBar","functionBar","mainBtn","roleInfo"];
		},
		enumerable: true,
		configurable: true
	});
	return MainUISkin;
})(eui.Skin);