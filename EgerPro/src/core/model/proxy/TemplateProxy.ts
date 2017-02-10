  /**
    * 数据读取模板
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    */
class TemplateProxy extends ResourceProxyBase{
    public static NAME:string = "template";//必须和excel导出文件一致
    
    public constructor(){
        super(TemplateProxy.NAME);
    }
       
    /**
     * 获取excel数据
     */ 
    public getGameData(): JSON {
        return this.getData();
    }     
}
