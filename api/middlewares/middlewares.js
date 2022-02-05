const errorMiddleware = async (context, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
  }
};

const userTokenMiddleware = async (context, next) => {
  try {
    context.token = context.request.headers.get("token");
    await next();
  } catch (e) {
    console.log(e);
  }
};

export { errorMiddleware, userTokenMiddleware };
