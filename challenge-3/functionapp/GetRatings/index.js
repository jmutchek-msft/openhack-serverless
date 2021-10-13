const axios = require('axios');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const userId = (req.query.userId || (req.body && req.body.userId));

    var url = `https://serverlessohapi.azurewebsites.net/api/GetUser?userId=${userId}`
    var results = "";

    await axios.get(url)
        .then(function (response) {
            context.log(response.data)
            currentStatus = response.status
        })
        .catch(function (error) {
            context.log(error.response.data);
            currentStatus = 404
            results = error.response.data
        });
        
        if (currentStatus == 200) { 
                var documents = context.bindings.userId;
                if (documents.length < 1)
                {
                    currentStatus = 404;
                }
                else{
                    results = JSON.stringify(documents); 
                    currentStatus = 200;
                }

            }

   

    context.res = {       
        body: results,
        status: currentStatus
    };
}