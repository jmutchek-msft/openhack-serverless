const { v4: uuidv4 } = require("uuid");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.bindings.ratingsDocument = JSON.stringify({
        productId: uuidv4(),
        userId: 'test',
        timestamp: "2018-05-21 21:27:47Z",
        locationName: "Sample ice cream shop",
        rating: 5,
        userNotes: "I love the subtle notes of orange in this ice cream!"
        });
    
        //   context.done();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}