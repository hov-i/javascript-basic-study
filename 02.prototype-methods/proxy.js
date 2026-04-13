const Obj = {
  a: 10,
  b: 20,
};

const proxyObj = new Proxy(obj, {
  get: (obj, prop) => {
    const result = obj[prop];
    if (result < 3) {
      throw Error("error");
    }
  },
});

console.log(proxyObj.a);
