var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
        var theme = new eui.Theme("resource/default.thm.json", this.stage);
        RES.processor.map("proto", ProtoAnalyzer);
        RES.processor.map("txt", EnJsonAnalyzer);
        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());
        this.loadRes();
        var sss = new Map();
        var sym2 = Symbol("key"); // 可选的字符串key
    };
    Main.prototype.loadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self, loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, RES.loadConfig()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("loading")];
                    case 2:
                        _a.sent();
                        //设置加载进度界面
                        self.loadingView = new LoadingUI();
                        GameLayerManager.gameLayer().addChild(self.loadingView);
                        loading = {
                            onProgress: function (current, total) {
                                self.loadingView.setProgress(current, total);
                            }
                        };
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loading)];
                    case 3:
                        _a.sent();
                        GameLayerManager.gameLayer().removeChild(this.loadingView);
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     */
    Main.prototype.createGameScene = function () {
        this.testEnJson();
        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
        game.AppFacade.getInstance().sendNotification(MainNotify.OPEN_MAIN);
    };
    //测试Json加密解密
    Main.prototype.testEnJson = function () {
        // var my = new newaes();
        // var key = "dily6666";//长度是8的倍数，是你的加密密码
        // var iv = "PKcs7";//PKcs7是一种编码标准不要修改
        // var times = new Date();
        // console.log(times.toLocaleDateString());
        // console.log(times.getMilliseconds().toString());
        // var str = { "name": "dily", "qq": "595850892" };
        // var newStr = JSON.stringify(str);
        // var myTest = my.ex(newStr, key, iv);
        // console.log(myTest.toString());
        // var yTest = my.dx(myTest.toString(), key, iv);
        // var yStr = JSON.parse(yTest);
        var test = RES.getRes("enJson_txt");
    };
    return Main;
}(eui.UILayer));
Main = __decorate([
    RES.mapConfig("config.json", function () { return "resource"; }, function (path) {
        var ext = path.substr(path.lastIndexOf(".") + 1);
        var typeMap = {
            "jpg": "image",
            "png": "image",
            "webp": "image",
            "json": "json",
            "fnt": "font",
            "pvr": "pvr",
            "mp3": "sound",
            "proto": "proto",
            "txt": "txt"
        };
        var type = typeMap[ext];
        if (type == "json") {
            if (path.indexOf("sheet") >= 0) {
                type = "sheet";
            }
            else if (path.indexOf("movieclip") >= 0) {
                type = "movieclip";
            }
            ;
        }
        return type;
    })
], Main);
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map