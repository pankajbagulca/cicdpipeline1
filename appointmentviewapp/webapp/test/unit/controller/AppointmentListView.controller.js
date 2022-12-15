/*global QUnit*/

sap.ui.define([
	"appointmentviewapp/controller/AppointmentListView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppointmentListView Controller");

	QUnit.test("I should test the AppointmentListView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
