module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
this.add('role:product, cmd:getProductPrice', ProductPrice);

    //To DO: add the pattern functions and describe the logic inside the function

    function ProductPrice (args, done){
        var productId=args.product_id;
        var product=findProductInDatabase(productId);
        var productPrice=product.product_price;
        done(null, productPrice);
    }

};