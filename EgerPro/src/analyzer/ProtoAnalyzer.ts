let ProtoAnalyzer: RES.processor.Processor = {
	async onLoadStart(host, resource) {
		let data = await host.load(resource, RES.processor.TextProcessor);
		return data;
	},

	onRemoveStart(host, request) {
		return Promise.resolve();
	}
}
