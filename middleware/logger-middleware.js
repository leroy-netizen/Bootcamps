// @description logs requests to console

const logger = (req, res, next) => {
  req.hello = 'hello world';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`
  );

  next();
};

export default logger;
