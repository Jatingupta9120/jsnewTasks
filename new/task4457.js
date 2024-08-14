const obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: 2,
    l: [{ f: 45 },{k:46}],
  },
};

function deepClone(obj) {
  const res = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {

        // TODO checks failing....
      if (obj[key] !== null && typeof obj[key] === "object") {
        res[key] = deepClone(obj[key]);
      } else {
        res[key] = obj[key];
      }
    }
  }

  return res;
}

const cloned = deepClone(obj2);

cloned.c.d = 5;

console.log("Original:", obj2);
console.log("Cloned:", cloned);
