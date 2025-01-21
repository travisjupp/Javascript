function heapMemUsed(arg) {
  const initMem = process.memoryUsage().heapUsed;
  let data = arg;
  return process.memoryUsage().heapUsed - initMem;
}

