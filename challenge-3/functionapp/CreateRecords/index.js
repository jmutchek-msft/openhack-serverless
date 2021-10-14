module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing a request.');    
    
    context.log ("original request==>" +  JSON.stringify(req));
   // var currentStatus = 200;
    var saveThis = JSON.parse(req.body).body;
    context.log ("req.body.body==>" + saveThis);

    var responseBody = "Thank you! process completed... hopefully"     
    
    
    context.bindings.mergedRecords = saveThis; 
    
    responseBody = saveThis ;

    // return the proper status code

    context.res = {       
        body: responseBody
    };
}
