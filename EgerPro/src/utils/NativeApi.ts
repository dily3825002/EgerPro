  /**
	* 调用原生api方法汇总
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* 使用方法如：Global.setCookie()
    */

module NativeApi {

    // 储存数据需要key和value，都必须是字符串
	export function setLocalData(key:string, value:string):void
	{ 
		egret.localStorage.setItem(key,value);
	}

	// 读取数据
	export function getLocalData(key:string):string
	{ 
		return egret.localStorage.getItem(key);
	}

	// 删除数据
	export function deleteLocalData(key:string):void
	{ 
		egret.localStorage.removeItem(key);
	}

	// 将所有数据清空
	export function clearLocalData():void
	{ 
		egret.localStorage.clear();
	}

	//调用麦克风  
	export function getMic():void {
    	//getUserMedia API 大部分手机不支持，所以暂不考虑
    } 

	//调用canvas截屏
	export function getScreen():void {
      
    } 	

	//调用打电话功能
	export function callPhone(telNum:number):void {
    	window.open("tel:"+telNum,'_self') 
    } 

	//调用发短信功能
	export function sendMessage(telNum:number):void {
    	window.open("sms:"+telNum,'_self') 
    } 	

	//获取当前地址
	export function getCurUrl():string {
		return window.location.href;
    } 	

	//当前游戏角度
	export var curAngle:number = Number(window["orientation"]);	


}