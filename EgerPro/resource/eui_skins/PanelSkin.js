var skins;
(function (skins) {
	var PanelSkin=(function (_super) {
		__extends(PanelSkin, _super);
		function PanelSkin() {
			_super.call(this);
			
			this.minHeight = 230;
			this.minWidth = 450;
			this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.contentGroup_i(),this.closeButton_i()];
		}
		var _proto = PanelSkin.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.scale9Grid = new egret.Rectangle(2,2,12,12);
			t.source = "resource/assets/Panel/border.png";
			t.top = 0;
			return t;
		};
		_proto.moveArea_i = function () {
			var t = new eui.Group();
			this.moveArea = t;
			t.height = 45;
			t.left = 0;
			t.right = 0;
			t.top = 0;
			t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.bottom = 0;
			t.left = 0;
			t.right = 0;
			t.source = "resource/assets/Panel/header.png";
			t.top = 0;
			return t;
		};
		_proto.titleDisplay_i = function () {
			var t = new eui.Label();
			this.titleDisplay = t;
			t.fontFamily = "Tahoma";
			t.left = 15;
			t.right = 5;
			t.size = 20;
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			t.wordWrap = false;
			return t;
		};
		_proto.contentGroup_i = function () {
			var t = new eui.Group();
			this.contentGroup = t;
			t.bottom = 30;
			t.top = 50;
			t.percentWidth = 100;
			return t;
		};
		_proto.closeButton_i = function () {
			var t = new eui.Button();
			this.closeButton = t;
			t.bottom = 5;
			t.horizontalCenter = 0;
			t.label = "close";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["titleDisplay","moveArea","contentGroup","closeButton"];
			},
			enumerable: true,
			configurable: true
		});
		return PanelSkin;
	})(eui.Skin);
})(skins || (skins = {}));