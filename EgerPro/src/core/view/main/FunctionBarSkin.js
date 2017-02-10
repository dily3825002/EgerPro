var FunctionBarSkin=(function (_super) {
	__extends(FunctionBarSkin, _super);
	function FunctionBarSkin() {
		_super.call(this);
		
		this.height = 120;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.roleBtn_i(),this.backpackBtn_i(),this.qianghuaBtn_i(),this.zhaoXianBtn_i(),this.chuangDangBtn_i(),this.shopBtn_i(),this.mapBtn_i()];
	}
	var _proto = FunctionBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hengImg_png";
		t.x = 32;
		t.y = 21;
		return t;
	};
	_proto.roleBtn_i = function () {
		var t = new eui.Button();
		this.roleBtn = t;
		t.enabled = true;
		t.label = "Excel";
		t.skinName = "main.RoleBtnSkin";
		t.x = 34;
		t.y = 6;
		return t;
	};
	_proto.backpackBtn_i = function () {
		var t = new eui.Button();
		this.backpackBtn = t;
		t.label = "prox数据存取";
		t.skinName = "main.BackpackBtnSkin";
		t.x = 153;
		t.y = 6;
		return t;
	};
	_proto.qianghuaBtn_i = function () {
		var t = new eui.Button();
		this.qianghuaBtn = t;
		t.label = "protobuf测试";
		t.skinName = "main.QianghuaBtnSkin";
		t.x = 273;
		t.y = 6;
		return t;
	};
	_proto.zhaoXianBtn_i = function () {
		var t = new eui.Button();
		this.zhaoXianBtn = t;
		t.label = "按钮";
		t.skinName = "main.ZhaoXianBtnSkin";
		t.x = 392;
		t.y = 6;
		return t;
	};
	_proto.chuangDangBtn_i = function () {
		var t = new eui.Button();
		this.chuangDangBtn = t;
		t.label = "按钮";
		t.skinName = "main.ChuangDangBtnSkin";
		t.x = 511;
		t.y = 6;
		return t;
	};
	_proto.shopBtn_i = function () {
		var t = new eui.Button();
		this.shopBtn = t;
		t.label = "按钮";
		t.skinName = "main.ShopBtnSkin";
		t.x = 631;
		t.y = 6;
		return t;
	};
	_proto.mapBtn_i = function () {
		var t = new eui.Button();
		this.mapBtn = t;
		t.label = "按钮";
		t.skinName = "main.MapBtnSkin";
		t.x = 750;
		t.y = 6;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["roleBtn","backpackBtn","qianghuaBtn","zhaoXianBtn","chuangDangBtn","shopBtn","mapBtn"];
		},
		enumerable: true,
		configurable: true
	});
	return FunctionBarSkin;
})(eui.Skin);