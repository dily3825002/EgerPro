var skins;
(function (skins) {
	var HSliderSkin=(function (_super) {
		__extends(HSliderSkin, _super);
		function HSliderSkin() {
			_super.call(this);
			
			this.minHeight = 8;
			this.minWidth = 20;
			this.elementsContent = [this.track_i(),this.thumb_i()];
		}
		var _proto = HSliderSkin.prototype;
	
		_proto.track_i = function () {
			var t = new eui.Image();
			this.track = t;
			t.height = 6;
			t.scale9Grid = new egret.Rectangle(1,1,4,4);
			t.source = "resource/assets/Slider/track.png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.source = "resource/assets/Slider/thumb.png";
			t.verticalCenter = 0;
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["track","thumb"];
			},
			enumerable: true,
			configurable: true
		});
		return HSliderSkin;
	})(eui.Skin);
})(skins || (skins = {}));