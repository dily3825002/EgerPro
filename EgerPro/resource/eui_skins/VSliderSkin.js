var skins;
(function (skins) {
	var VSliderSkin=(function (_super) {
		__extends(VSliderSkin, _super);
		function VSliderSkin() {
			_super.call(this);
			
			this.minHeight = 30;
			this.minWidth = 25;
			this.elementsContent = [this.track_i(),this.thumb_i()];
		}
		var _proto = VSliderSkin.prototype;
	
		_proto.track_i = function () {
			var t = new eui.Image();
			this.track = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.scale9Grid = new egret.Rectangle(1,1,4,4);
			t.source = "resource/assets/Slider/track.png";
			t.width = 7;
			return t;
		};
		_proto.thumb_i = function () {
			var t = new eui.Image();
			this.thumb = t;
			t.horizontalCenter = 0;
			t.source = "resource/assets/Slider/thumb.png";
			return t;
		};
		Object.defineProperty(_proto, "skinParts", {
			get: function () {
				return ["track","thumb"];
			},
			enumerable: true,
			configurable: true
		});
		return VSliderSkin;
	})(eui.Skin);
})(skins || (skins = {}));