
module.exports = (function (Checkout) {
	
	var _priceList;
	var _cart;
	var _discountService;

	Checkout = function (priceList, discountService) {
		_priceList = priceList;
		_discountService = discountService;
		_cart = [];
	};

	Checkout.prototype.scan = function (sku) {
		_cart[sku] = ++_cart[sku] || 1;
	};

	Checkout.prototype.price = function () {
		
		var price = Object.keys(_cart).reduce(
			function (_price, sku) {
				_price += _priceList[sku] * _cart[sku];
				return _price;
			}, 0
		);

		return price - _discountService(_cart);

	};

	return Checkout;

})();