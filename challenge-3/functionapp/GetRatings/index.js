const { v4: uuidv4 } = require("uuid");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const userId = (req.query.userId || (req.body && req.body.userId));

   var documents = context.bindings.userId;
   var results = JSON.stringify(documents); 

    context.res = {       
        body: results
    };
}