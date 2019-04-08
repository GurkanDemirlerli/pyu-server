import { verify } from 'jsonwebtoken';
export function authorize(req, res, next): void {
    let token: string = req.get('Authorization') || undefined;
    if (token !== undefined) {
        verify(token, 'MySecret', (err, decoded) => {
            if (err) {
                console.log('UnAuthorized Access');
                return res.status(403).json({
                    message: 'Error: You need to authenticate to access this part of the API',
                    success: false
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
}