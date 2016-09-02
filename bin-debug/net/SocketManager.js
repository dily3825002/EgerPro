/**
 * 网络公共类
 * by dily
 * (c) copyright 2014 - 2035
 * All Rights Reserved.
 * 存放网络公共方法
 * 注意：是同步请求，不是异步
 */
var SocketManager;
(function (SocketManager) {
    var sock = new egret.WebSocket();
    //连接服务器
    function connectServer(host, port) {
        if (host === void 0) { host = ""; }
        if (port === void 0) { port = 80; }
        Global.showWaritPanel();
        this.sock = new egret.WebSocket();
        this.sock.type = "webSocketTypeBinary";
        this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.sock.connect(host, port);
    }
    SocketManager.connectServer = connectServer;
    //连接成功返回
    function onSocketOpen() {
        Global.hideWaritPanel();
        game.AppFacade.getInstance().sendNotification(SysNotify.CONNECT_SERVER_SUCCESS);
    }
    SocketManager.onSocketOpen = onSocketOpen;
    //消息返回  
    function onReceiveMessage() {
        Global.hideWaritPanel();
        var _arr = new egret.ByteArray();
        this.sock.readBytes(_arr);
        var mainId = _arr.readInt();
        var subId = _arr.readShort();
        var cmdDataBA = new egret.ByteArray();
        _arr.readBytes(cmdDataBA);
        //        //初始化template_proto
        //        var message = dcodeIO.ProtoBuf.loadProto(RES.getRes("template_proto"));
        //            
        //        //创建user_login_class
        //        var user_login_class = message.build("user_login");
        //            
        //        //反序列化
        //        var new_user_login = user_login_class.decode(cmdDataBA.buffer);
        //        console.log("反序列化数据：",new_user_login);  
        game.AppFacade.getInstance().sendNotification("Processor_" + mainId + "_" + subId, cmdDataBA);
    }
    SocketManager.onReceiveMessage = onReceiveMessage;
    //向服务端发送消息
    function sendMessage(mainId, subId, msg) {
        Global.showWaritPanel();
        var sendMsg = new egret.ByteArray();
        sendMsg.writeInt(mainId);
        sendMsg.writeShort(subId);
        sendMsg.writeBytes(new egret.ByteArray(msg));
        this.sock.writeBytes(sendMsg);
    }
    SocketManager.sendMessage = sendMessage;
})(SocketManager || (SocketManager = {}));
