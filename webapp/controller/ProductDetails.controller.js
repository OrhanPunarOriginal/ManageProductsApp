sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"opensapManageProducts/ManageProducts/model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("opensapManageProducts.ManageProducts.controller.ProductDetails", {

		formatter: formatter,

		onInit: function () {
			this.byId("categoryLabel").setVisible(false);
			this.byId("category").setVisible(false);
		}
	});

});