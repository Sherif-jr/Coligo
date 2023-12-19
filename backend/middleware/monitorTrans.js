import clc from "cli-color";
export const monitorTrans = (req, res, next) => {
  let method;
  switch (req.method) {
    case "GET":
      method = clc.green(req.method);
      break;
    case "POST":
      method = clc.yellowBright(req.method);
      break;
    case "PATCH":
      method = clc.magenta(req.method);
      break;
    case "PUT":
      method = clc.cyan(req.method);
      break;
    case "DELETE":
      method = clc.red(req.method);
      break;

    default:
      break;
  }
  console.log(method, clc.yellow(req.url));
  next();
};
