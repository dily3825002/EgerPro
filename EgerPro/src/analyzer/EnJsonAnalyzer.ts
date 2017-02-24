//加载通过AES加密过得JSON
//通过通种方法在外部加密
let EnJsonAnalyzer: RES.processor.Processor = {
	async onLoadStart(host, resource) {
		let data = await host.load(resource, RES.processor.TextProcessor);
		
		let my = new newaes();

		//这个密码需要注意隐藏
        let key = "dily6666";//长度是8的倍数，是你的加密密码
        let iv = "PKcs7";//PKcs7是一种编码标准不要修改

		//解密
        let dData = my.dx(data, key, iv);
		
		dData = JSON.parse(dData);

		return dData;
	},

	onRemoveStart(host, request) {
		return Promise.resolve();
	}
}
