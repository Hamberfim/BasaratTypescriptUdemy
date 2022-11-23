// express base
export interface Request {
  body: any;
}

// express JSON middleware
// typescript will merge this interface and the above interface so that both properties are available in the handleRequest function
export interface Request {
  json: any;
}

// an app - handles an express request
function handleRequest(req: Request) {
  req.body; // available because of interface Request body
  req.json; // available because of interface Request json
}
