const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing a request.');
    
    // set up locals
    var currentStatus = 0
    var responseBody = ""
    
    // retrieve input payload elements
    const userId = req.body.userId;
    const productId = req.body.productId;
    const locationName = req.body.locationName;
    const rating = req.body.rating;
    const userNotes = req.body.userNotes;

    // validate userId against existing API 
    // e.g. https://serverlessohapi.azurewebsites.net/api/GetUser?userId=cc20a6fb-a91f-4192-874d-132493685376

    var url = `https://serverlessohapi.azurewebsites.net/api/GetUser?userId=${userId}`
    
    await axios.get(url)
        .then(function (response) {
            context.log(response.data)
            currentStatus = response.status
        })
        .catch(function (error) {
            context.log(error.response.data);
            currentStatus = 404
            responseBody = error.response.data
        });
        
    // validate productId against existing API
    // e.g. https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=75542e38-563f-436f-adeb-f426f1dabb5c

    url = `https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=${productId}`

    if (currentStatus == 200) {
        await axios.get(url)
            .then(function (response) {
                context.log(response.data)
                currentStatus = response.status
            })
            .catch(function (error) {
                context.log(error.response.data);
                currentStatus = 404
                responseBody = error.response.data
            });    
        }

    // validate ratings is an integer between 0 and 5
    
    if (currentStatus == 200 && (rating < 0 || rating > 5)) {
        currentStatus = 400
        responseBody = "Only ratings from 0 to 5 are allowed."
    }

    // build ratings document for cosmosDB

    if (currentStatus == 200) {
        responseBody = JSON.stringify({
            productId: productId,
            userId: userId,
            timestamp: new Date(Date.now()).toISOString(),
            locationName: locationName,
            rating: rating,
            userNotes: userNotes
        });

        // return the entire review JSON payload with the newly created id and timestamp
        context.bindings.ratingsDocument = responseBody
    }

    // return the proper status code

    context.res = {
        status: currentStatus,
        body: responseBody
    };
}