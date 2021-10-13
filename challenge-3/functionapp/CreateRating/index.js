const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing a request.');
    context.bindings.ratingsDocument = JSON.stringify({})
    
    // retrieve input payload elements
    const userId = req.body.userId;
    const productId = req.body.productId;
    const locationName = req.body.locationName;
    const rating = req.body.rating;
    const userNotes = req.body.userNotes;

    // validate userId against existing API 
    // e.g. https://serverlessohapi.azurewebsites.net/api/GetUser?userId=cc20a6fb-a91f-4192-874d-132493685376
    // TODO

    // validate productId against existing API
    // e.g. https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=75542e38-563f-436f-adeb-f426f1dabb5c
    // TODO

    // validate ratings is an integer between 0 and 5
    // TODO

    // build ratings document for cosmosDB

    // return the entire review JSON payload with the newly created id and timestamp

    const responseMessage = "Hello. This HTTP triggered function executed successfully."

    // return the proper status code
    // TODO

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}