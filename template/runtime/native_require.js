
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/puremvc/puremvc.js",
	"libs/modules/protobuf/protobuf.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/WaitPanel.js",
	"bin-debug/component/EButton.js",
	"bin-debug/component/EImage.js",
	"bin-debug/component/ETextField.js",
	"bin-debug/config/GameConfig.js",
	"bin-debug/config/GlobalData.js",
	"bin-debug/constants/MainNotify.js",
	"bin-debug/constants/PanelNotify.js",
	"bin-debug/constants/SceneNotify.js",
	"bin-debug/constants/SysNotify.js",
	"bin-debug/constants/panel/UserInfoNotify.js",
	"bin-debug/core/AppFacade.js",
	"bin-debug/core/controller/ControllerPrepCommand.js",
	"bin-debug/core/controller/ModelPrepCommand.js",
	"bin-debug/core/controller/Processor/Processor_100_1.js",
	"bin-debug/core/controller/StartupCommand.js",
	"bin-debug/core/controller/ViewPrepCommand.js",
	"bin-debug/core/controller/request/UserInfoRequest.js",
	"bin-debug/core/model/P.js",
	"bin-debug/core/model/ResourceProxyBase.js",
	"bin-debug/core/model/proxy/GameProxy.js",
	"bin-debug/core/model/proxy/TemplateProxy.js",
	"bin-debug/core/model/vo/GameVO.js",
	"bin-debug/core/view/GameLayerManager.js",
	"bin-debug/core/view/MainManager.js",
	"bin-debug/core/view/SceneManager.js",
	"bin-debug/core/view/main/ActivityBar.js",
	"bin-debug/core/view/main/FunctionBar.js",
	"bin-debug/core/view/main/MainUI.js",
	"bin-debug/core/view/main/RoleInfo.js",
	"bin-debug/core/view/panel/BaseMediator.js",
	"bin-debug/core/view/panel/PopUpManager.js",
	"bin-debug/core/view/panel/mediator/BackpackMediator.js",
	"bin-debug/core/view/panel/mediator/ChuangDangMediator.js",
	"bin-debug/core/view/panel/mediator/MapMediator.js",
	"bin-debug/core/view/panel/mediator/QianghuaMediator.js",
	"bin-debug/core/view/panel/mediator/RoleMediator.js",
	"bin-debug/core/view/panel/mediator/ShopMediator.js",
	"bin-debug/core/view/panel/mediator/ZhaoXianMediator.js",
	"bin-debug/core/view/panel/panel/BackpackPanel.js",
	"bin-debug/core/view/panel/panel/ChuangDangPanel.js",
	"bin-debug/core/view/panel/panel/MapPanel.js",
	"bin-debug/core/view/panel/panel/QianghuaPanel.js",
	"bin-debug/core/view/panel/panel/RolePanel.js",
	"bin-debug/core/view/panel/panel/ShopPanel.js",
	"bin-debug/core/view/panel/panel/ZhaoXianPanel.js",
	"bin-debug/core/view/scene/HomeCity.js",
	"bin-debug/net/SocketManager.js",
	"bin-debug/utils/EffectUtils.js",
	"bin-debug/utils/Global.js",
	"bin-debug/utils/NativeApi.js",
	"bin-debug/utils/RegUtils.js",
	"bin-debug/utils/TipsManager.js",
	"bin-debug/utils/TipsPanel.js",
	"bin-debug/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/utils/UtilsClass/TipsUtils.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 1280,
		contentHeight: 960,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};