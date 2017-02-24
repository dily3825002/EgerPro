/*
模块名称:newaes
模块说明:按照egret的要求,重新组织AES接口,提供加密解密调用;
修改:毛明超;
日期:2016-6-8
QQ:4176244, 3128666862
*/

declare class newaes {
    constructor();
    ex(data:any, key:any, iv:any):any;
	dx(data:any, key:any, iv:any):any;
}