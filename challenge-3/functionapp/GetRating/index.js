module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const ratingid = (req.query.ratingid || (req.body && req.body.ratingid));

   var documents = context.bindings.ratingid;
   var results = JSON.stringify(documents); 
    
    // Check is returns a result
    if (documents.length < 1) {
        status = 404;
    }
    else {
        status = 200;
    }

    context.res = {       
        body: results,
        status: status
    };
}
