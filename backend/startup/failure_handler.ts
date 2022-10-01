function handler(err: Error) {
  console.log(err);
  process.exit(-1);
}

export function handleFailures() {
  process.on("uncaughtException", handler);
  process.on("unhandledRejection", handler);
}
