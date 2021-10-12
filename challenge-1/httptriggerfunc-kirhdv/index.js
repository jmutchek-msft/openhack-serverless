module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const id = (req.query.id || context.bindingData.id);
    const responseMessage =  `The product name for your product id ${id} is Starfruit Explosion`

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}