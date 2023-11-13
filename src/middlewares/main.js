export function primeiro(req, res, next) {
    console.log('primeiro.....');
    next();
  }
  
  export function segundo(req, res, next) {
    console.log('segundo.....');
    next();
  }
  