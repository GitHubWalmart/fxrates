sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("roots.FX_Rates.controller.mainView", {
		onInit: function () {
			/*	var oModel = this.getView().getModel("PR4");
				var sServiceUrl = "/sap/opu/odata/sap/ZFXRATES_CL_SRV/";
				var oDraftModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
					json: true,
					loadMetadataAsync: false
				});
				var sPath = "/CountSet";
				var oUrlParam = {
					"$expand": "ExchangeRate"
				};
				var oView = this.getView();
				oDraftModel.setUseBatch(false);
				var oPayload = oDraftModel.read(sPath, {
					urlParameters: oUrlParam,
					success:function(oData){
						var aExchangeRate = oData.results;
						var oPR4 = new sap.ui.model.json.JSONModel(aExchangeRate);
						oView.setModel(oPR4);
						//debugger;
					}
				});*/
		},
		setCount: function (counter) {
			// return 'Success';
			// var oModel = this.getView().getModel("PR4");
			// var sServiceUrl = "/sap/opu/odata/sap/ZFXRATES_CL_SRV/";
			// var oDraftModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, {
			// 	json: true,
			// 	loadMetadataAsync: false
			// });
			// var sPath = "/CountSet";
			// var oUrlParam = {
			// 	"$expand": "ExchangeRate"
			// };

			// oDraftModel.setUseBatch(false);
			// var oPayload = oDraftModel.read(sPath, {
			// 	urlParameters: oUrlParam
			// });

		},
		onPress: function () {
			debugger
			
			
		},
		
		color:function(){
			
		}
	});
});