var approuter = require('@sap/approuter');

var ar = approuter();
ar.start();

ar.beforeRequestHandler.use('/my-ext', function myMiddleware(req, res, next) {
    res.setHeader('x-my-ext', 'passed');
    next();
});