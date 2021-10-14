module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing a request.');
    
    // set up locals
    var currentStatus = 200;
    var responseBody = "Thank you! process completed... hopefully"   
   
    var saveThis = JSON.stringify(req.body.body);
     
    context.bindings.mergedRecords = saveThis; 
    context.log (saveThis)   ;

    // return the proper status code

    context.res = {
        status: currentStatus,
        body: responseBody
    };
}