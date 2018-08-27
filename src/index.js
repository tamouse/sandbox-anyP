const _ = require("lodash");
document.getElementById("app").innerHTML = `
blah
`;

function anyP(collection, callback) {
  return _.reduce(
    collection,
    function(accum, item) {
      if (accum === true) return accum;
      return !!callback(item);
    },
    false
  );
}

const coll = ["yarn.lock", "package-lock.json", ".*.snap$"];

function isInP(collection, item) {
  return anyP(collection, matcher => {
    const regex = new RegExp(matcher);
    return regex.test(item);
  });
}

console.log(isInP(coll, "yarn.lock"));
console.log(isInP(coll, "package.json"));
console.log(isInP(coll, "package-lock.json"));
console.log(isInP(coll, "app/src/__snapshots__/some.test.js.snap"));
