// const axios = require('axios');

module.exports = async function (context, req) {
    
    context.log('JavaScript HTTP trigger function processed a request.');

    var currentStatus = 0;
    var currentStatusMessage = '';
    var responseMessage = '';
    
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

    // const url = `https://serverlessohapi.azurewebsites.net/api/GetUser?userId=${userId}`;
    // try {
    //     const { data } = await axios.get(url);
    //     context.log(data);
    // } catch (err) {
    //     context.log(err)
    // }

    // validate productId against existing API
    // e.g. https://serverlessohapi.azurewebsites.net/api/GetProduct?productId=75542e38-563f-436f-adeb-f426f1dabb5c
    // TODO

    // validate ratings is an integer between 0 and 5
    // TODO

    // build ratings document for cosmosDB

    if (currentStatus == 200) {

        context.bindings.ratingsDocument = JSON.stringify({
            productId: productId,
            userId: userId,
            timestamp: Date.now(),
            locationName: locationName,
            rating: rating,
            userNotes: userNotes
        });
        
        // return the entire review JSON payload with the newly created id and timestamp

        responseMessage = context.bindings.ratingsDocument

        // return the proper status code

        // TODO
    }

    context.res = {
        status: currentStatus,
        body: responseMessage
    };

}