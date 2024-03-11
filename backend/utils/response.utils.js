// success response handler which is used in controllers if request is performed successfully
const successs = (
    res,
    data = null,
    message = "Request Sent Successfully",
    status = 200
  ) => {
    return res.status(status).json({
      message: message,
      status: status,
      data: data,
    });
  };
  
  // error response handler which is used in controllers if error
  const error = (res, data, message, status) => {
    let dataContent = data && data.length > 0 ? data : null;
    const messageContent = message ?? "Request Failed";
    const statusContent = status ?? 500;
    return res.status().json({
      message: `${messageContent}`,
      status: `${statusContent}`,
      data: `${dataContent}`,
    });
  };
  
  const Responder = {
    successs,
    error,
  };
  
  export default Responder;
  