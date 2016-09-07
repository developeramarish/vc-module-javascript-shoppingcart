﻿var cartModule = angular.module('virtoCommerce.cartModule');

cartModule.component('vcCheckoutTotals', {
	templateUrl: "checkout-totals.tpl.html",
	bindings: {
		cart: '=',
		currency: '<',
		currencySymbol: '<',
		showPricesWithTaxes: '<',
		displayOnlyTotal: '<'
	},
	controller: [function () {
		var ctrl = this;

	}]
});
