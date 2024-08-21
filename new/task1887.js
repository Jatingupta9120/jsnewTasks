const obj1 = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
};
const url = "https://localhost:400";

function toGenerateQueryUrl(obj1, url) {
  let res = {};
  if (typeof obj1 !== "object" || !obj1)
    throw new Error("First argument must be an object");
  if (typeof url !== "string" || !url)
    throw new Error("Second argument must be an string");

  let arrayObj = Object.entries(obj1);

  const queryString = arrayObj
    .map(([k, v]) => {
      return `${k.trim()}${v.trim()}`;
    })
    .join("&");
    
  return `${url}?${queryString}`;
}
try {
  console.log(toGenerateQueryUrl(obj1, url));
} catch (error) {
  console.log("err aa gya");
}
