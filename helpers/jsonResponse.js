// responseObject = (res, statusCode, message, data, success) => {
//   res.status(statusCode || 200).json({
//     code: statusCode || 200,
//     success: success,
//     message: message || "success",
//     data: data || {},
//   });
// };

const responseObject = (success, message, data) => {
  const object = {
    success: success,
    message: message,
    data: data || {},
  };
  return object;
};

module.exports = responseObject;
