var ActivityBarSkin=(function (_super) {
	__extends(ActivityBarSkin, _super);
	function ActivityBarSkin() {
		_super.call(this);
		
		this.height = 550;
		this.width = 120;
		this.elementsContent = [this._Image1_i(),this.activityBtn_i(),this.kaiFuBtn_i(),this.infoBtn_i()];
	}
	var _proto = ActivityBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.source = "shuImg_png";
		t.x = 18;
		return t;
	};
	_proto.activityBtn_i = function () {
		var t = new eui.Button();
		this.activityBtn = t;
		t.label = "按钮";
		t.skinName = "main.ActivityBtnSkin";
		t.x = 4;
		t.y = 128;
		return t;
	};
	_proto.kaiFuBtn_i = function () {
		var t = new eui.Button();
		this.kaiFuBtn = t;
		t.label = "按钮";
		t.skinName = "main.KaiFuBtnSkin";
		t.x = 4;
		t.y = 266;
		return t;
	};
	_proto.infoBtn_i = function () {
		var t = new eui.Button();
		this.infoBtn = t;
		t.label = "按钮";
		t.skinName = "main.InfoBtnSkin";
		t.x = 4;
		t.y = 403;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["activityBtn","kaiFuBtn","infoBtn"];
		},
		enumerable: true,
		configurable: true
	});
	return ActivityBarSkin;
})(eui.Skin);