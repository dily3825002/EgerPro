  /**
    * 数据读取基类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    */
class ResourceProxyBase extends puremvc.Proxy implements puremvc.IProxy{
    private _dataMap:Array<any> = new Array();//存储excel数据
    private _proxyName: string = "";//excel名称
    
    public constructor(proxyName: string = "") {
        super(proxyName);
        this._proxyName = proxyName;
    }
    
    /**
     * 开发状态：json可读
     * TODO
     * 上线状态：加载bin文件，在这里解密【文件小，加密】 
     * 是预加载json文件还是到时候使用到再加载
     */ 
    public getData():JSON{
        var jsonData: JSON = RES.getRes(this._proxyName);
        return jsonData;
    }        
    
}
