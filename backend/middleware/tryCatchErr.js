export default function tryCatchErr(fun) {
  const tryCatchFun = async (req, res, next) => {
    try {
      await fun(req, res, next);
    } catch (error) {
      console.log('catched');
      next(error);
    }
  };
  return tryCatchFun;
}
