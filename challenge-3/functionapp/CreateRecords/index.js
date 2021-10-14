module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processing a request.');
    
    // set up locals
   
   // var currentStatus = 200;
    var responseBody = "Thank you! process completed... hopefully"     
    
    context.log ("original request==>" + req)   ;
    context.bindings.mergedRecords = req.body.body; 
    context.log ("req.body.body==>" + req.body.body);
    responseBody = req.body.body ;

    // return the proper status code

    context.res = {       
        body: responseBody
    };
}
