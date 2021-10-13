const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing a request.');
    
    // set up locals
    context.bindings.ratingsDocument = JSON.stringify({})
    var currentStatus = 0
    var responseMessage = ""
    
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
        });
        
    // validate productId against existing API
    // e.g. https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=75542e38-563f-436f-adeb-f426f1dabb5c

    url = `https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=${productId}`
    
    await axios.get(url)
        .then(function (response) {
            context.log(response.data)
            currentStatus = response.status
        })
        .catch(function (error) {
            context.log(error.response.data);
            currentStatus = 404
        });    

    // validate ratings is an integer between 0 and 5
    
    if (rating < 0 || rating > 5) {
        currentStatus = 400
        responseMessage = "Only ratings from 0 to 5 are allowed."
    }

    // build ratings document for cosmosDB

    // return the entire review JSON payload with the newly created id and timestamp


    // return the proper status code
    // TODO

    context.res = {
        status: currentStatus,
        body: responseMessage
    };
}