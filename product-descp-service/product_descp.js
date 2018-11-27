module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function

    function productURL(args, done){
            var productId=args.product_id;
            var product=findProductInDatabase(productId);
            var productUrl=product.product_url;
            done(null, productUrl);
        }

    function productName(args, done){
        var productId=args.product_id;
        var product=findProductInDatabase(productId);
        var productName=product.product_name;
        done(null, productName);

    }
}