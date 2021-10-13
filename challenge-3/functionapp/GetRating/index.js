module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const ratingid = (req.query.ratingid || (req.body && req.body.ratingid));

   var documents = context.bindings.ratingid;
   var results = JSON.stringify(documents); 

    context.res = {       
        body: results
    };
}
