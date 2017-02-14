@RES.mapConfig("config.json",()=>"resource",path => {
    var ext = path.substr(path.lastIndexOf(".") + 1);
    var typeMap = {
        "jpg": "image",
        "png": "image",
        "webp": "image",
        "json": "json",
        "fnt": "font",
        "pvr": "pvr",
        "mp3": "sound",
        "proto": "proto"
    }
    var type = typeMap[ext];
    if (type == "json") {
        if (path.indexOf("sheet") >= 0) {
            type = "sheet";
        } else if (path.indexOf("movieclip") >= 0) {
            type = "movieclip";
        };
    }
    return type;
})
class Main extends eui.UILayer {

    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;    

    protected createChildren(): void {
        super.createChildren();

        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        
        this.stage.registerImplementation("eui.IAssetAdapter",assetAdapter);

        var theme = new eui.Theme("resource/default.thm.json", this.stage);

        RES.processor.map("proto", ProtoAnalyzer);

        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());

        this.loadRes();
    }

    private async loadRes()
    {
        let self = this;

        await RES.loadConfig();
        
        await RES.loadGroup("loading");
       
        //设置加载进度界面
        self.loadingView  = new LoadingUI();
        GameLayerManager.gameLayer().addChild(self.loadingView);

        let loading:RES.PromiseTaskReporter = {
            onProgress(current: number, total: number){
                // console.log(current+"/"+total)
                self.loadingView.setProgress(current,total);
            }
        };
        await RES.loadGroup("preload",0,loading);
        GameLayerManager.gameLayer().removeChild(this.loadingView);

        this.createGameScene();
    }

    /**
     * 创建游戏场景
     */
    private createGameScene():void {
        
        game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());
        game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
        game.AppFacade.getInstance().sendNotification(MainNotify.OPEN_MAIN);

    }


}

