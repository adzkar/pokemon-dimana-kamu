//Convert Array to Object
export function ArrToObj(arr, identityFn) {
  return arr.reduce((accum, obj) => {
    accum[identityFn(obj)] = obj;
    return accum;
  }, {});
}

export function ObjToArr(obj) {
  var x = Object.values(obj);
  var ans = [];
  x.map(item => {
    item.map(i => {
      ans.push(i);
      return 0;
    });
    return 0;
  });
  return ans;
}

//convert 1000 to 1.000
export function ToPrice(x, currency = "Rp. ") {
  if (!x) {
    return currency + "0";
  }
  return currency + x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export function threeDigit(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

//return input to integer
export function CheckInteger(x) {
  const ans = x.replace(/(?!-)[^0-9]/g, "");
  return parseInt(ans < 0 || ans === "" ? 0 : ans, 10);
}

export function SumObj(obj1, key, numOfItem) {
  var ans = 0;
  Object.keys(obj1).map(function(s, a) {
    ans += obj1[a][key] * (numOfItem === undefined ? 1 : obj1[a][numOfItem]);
    return 0;
  });
  return ans;
}

export function SumObjOfArr(arr, key, perItem) {
  if (arr === null) {
    return 0;
  }
  let ans = 0;
  for (var i = 0; i < arr.length; i++) {
    ans += arr[i][key] * (perItem === undefined ? 1 : arr[i][perItem]);
  }
  return ans;
}
