/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"roots/FX_Rates/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});