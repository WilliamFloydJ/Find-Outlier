const Outlier = (Ary) => {
  let odd = [];
  let even = [];
  Ary.forEach((element) => {
    if (element % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  });

  if (even.length > odd.length) {
    return odd;
  } else {
    return even;
  }
};

console.log(Outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
