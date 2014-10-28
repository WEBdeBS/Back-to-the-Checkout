var assert = require('assert'),
    Checkout = require('../libs/checkout');

describe('checkout', function() {
	var priceList = {
                'A': 50,
                'B': 30,
                'C': 20,
                'D': 15
            };
    describe(' with 0 discount', function() {
        beforeEach(function() {        

            this.checkout = new Checkout(priceList, function(){ return 0; });

        });

        it('empty cart should return price 0', function() {
            assert.equal(this.checkout.price(), 0);
        });

        it('scanning A product should return 50', function() {
            this.checkout.scan('A');
            assert.equal(this.checkout.price(), 50);
        });

        it('scanning B product should return 30', function() {
            this.checkout.scan('B');
            assert.equal(this.checkout.price(), 30);
        });

        it('scanning C product should return 20', function() {
            this.checkout.scan('C');
            assert.equal(this.checkout.price(), 20);
        });

        it('scanning D product should return 15', function() {
            this.checkout.scan('D');
            assert.equal(this.checkout.price(), 15);
        });

        it('scanning A and B product should return 80', function() {
            this.checkout.scan('A');
            this.checkout.scan('B');
            assert.equal(this.checkout.price(), 80);
        });

        it('scanning A and C product should return 70', function() {
            this.checkout.scan('A');
            this.checkout.scan('C');
            assert.equal(this.checkout.price(), 70);
        });

        it('scanning A + A + B + C product should return 150', function() {
	        this.checkout.scan('A');
	        this.checkout.scan('A');
	        this.checkout.scan('B');
	        this.checkout.scan('C');
	        assert.equal(this.checkout.price(), 150);
    		});
    });

    it('scanning three times A product should return 130', function() {
        this.checkout = new Checkout(priceList, function(){ return 20; });
        this.checkout.scan('A');
        this.checkout.scan('A');
        this.checkout.scan('A');
        assert.equal(this.checkout.price(), 130);
    });

    it('scanning two times B product should return 45', function() {
        this.checkout = new Checkout(priceList, function(){ return 15; });
        this.checkout.scan('B');
        this.checkout.scan('B');
        assert.equal(this.checkout.price(), 45);
    });

    

    it('scanning six As should return 260', function() {
        this.checkout = new Checkout(priceList, function(){ return 40; });
        this.checkout.scan('A');
        this.checkout.scan('A');
        this.checkout.scan('A');
        this.checkout.scan('A');
        this.checkout.scan('A');
        this.checkout.scan('A');
        assert.equal(this.checkout.price(), 260);
    });

    it('scanning four Bs should return 90', function() {
        this.checkout = new Checkout(priceList, function(){ return 30; });
        this.checkout.scan('B');
        this.checkout.scan('B');
        this.checkout.scan('B');
        this.checkout.scan('B');

        assert.equal(this.checkout.price(), 90);
    });


});
