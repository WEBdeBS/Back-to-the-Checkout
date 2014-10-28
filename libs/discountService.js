module.exports= function(){
   return function (cart) {
      var _discountRules = [
        function (cart) {
          return (Math.floor(cart.A / 3) * 20 ) || 0;
        },
        function (cart) {
          return (Math.floor(cart.B / 2 ) * 15) || 0;
        }
      ];
      var discount = 0;
      _discountRules.forEach(function (rule) {
        discount += rule(cart);
      });
      return discount;
    };
}();