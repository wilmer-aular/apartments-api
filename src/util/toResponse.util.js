export const toResponse = async (promise, res, service) => {
  try {
    const data = await promise;
    res.json(data);
  } catch (err) {
    const myError = {
      request: JSON.stringify(err.stack.split("\n").slice(1, 4)),
      message: err.message,
      service,
      type: "error",
    };
    console.error("error en el util manejador de promesas", myError);
    //syncService.createLogs(myError); no necesito guardar los errores aun;
    res.json(myError);
  }
};
