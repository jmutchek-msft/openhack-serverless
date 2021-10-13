module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const ratingid = (req.query.id || (req.body && req.body.id));

   var documents = context.bindings.retingid;
   var results = JSON.stringify(documents); 

    context.res = {       
        body: results
    };
}
