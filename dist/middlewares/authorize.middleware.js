"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
function authorize(req, res, next) {
    let token = req.get('Authorization') || undefined;
    if (token !== undefined) {
        jsonwebtoken_1.verify(token, 'MySecret', (err, decoded) => {
            if (err) {
                console.log('UnAuthorized Access');
                return res.status(403).json({
                    message: 'Error: Your token has expired',
                    success: false
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(403).json({
            message: 'Error: You need to authenticate to access this part of the API',
            success: false
        });
    }
}
exports.authorize = authorize;
//# sourceMappingURL=authorize.middleware.js.map