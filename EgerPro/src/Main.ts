class Main extends eui.UILayer {

    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;    

    protected createChildren(): void {
        super.createChildren();

        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        
        this.stage.registerImplementation("eui.IAssetAdapter",assetAdapter);

        //资源加载--todo
        //loading条初始化显示移除
        var theme = new eui.Theme("resource/default.thm.json", this.stage);

        //游戏自定义容器添加到舞台上
        this.addChild(GameLayerManager.gameLayer());


        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void{
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadGroup("loading",1);
        RES.loadGroup("preload");
    }
    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if(event.groupName=="loading"){
            //设置加载进度界面
            this.loadingView  = new LoadingUI();
            GameLayerManager.gameLayer().addChild(this.loadingView);
        }
        else if(event.groupName=="preload"){
            GameLayerManager.gameLayer().removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
            this.createGameScene();
        }
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if(event.groupName=="preload"){
            this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
        }
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

