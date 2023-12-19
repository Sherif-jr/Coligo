const errorHandler = (error, req, res, next) => {
  if (error) {
    if (error.statusCode == 400 && "body" in error)
      return res.status(400).json({ scucess: "false", message: "Bad request" });

    if (error.name == "ValidationError")
      return res.status(400).json({ scucess: false, message: error.message });

    console.log(error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
export default errorHandler;
