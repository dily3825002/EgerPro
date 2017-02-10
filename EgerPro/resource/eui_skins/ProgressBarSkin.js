var skins;
(function (skins) {
	var ProgressBarSkin=(function (_super) {
		__extends(ProgressBarSkin, _super);
		function ProgressBarSkin() {
			_super.call(this);
			
			this.minHeight = 18;
			this.minWidth = 30;
			this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
		}
		var _proto = ProgressBarSkin.prototype;
	
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(1,1,4,4);
			t.source = "resource/assets/ProgressBar/track.png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.percentHeight = 100;
			t.source = "resource/assets/ProgressBar/thumb.png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Tahoma";
			t.horizontalCenter = 0;
			t.size = 15;
			t.textAlign = "center";
			t.textColor = 0x707070;
			t.verticalAlign = "middle";
			t.verticalCenter = 0;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["thumb","labelDisplay"];
			},
			enumerable: true,
			configurable: true
		});
		return ProgressBarSkin;
	})(eui.Skin);
})(skins || (skins = {}));