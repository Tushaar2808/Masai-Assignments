function categoryCount(input) {
    let ans = input.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return ans;
  }
  
  function sorted(val) {
    return Object.entries(val)
      .sort((a, b) => b[1] - a[1])
      .map((entries) => entries[0]);
  }
  
  const Input = [
    "gadgets",
    "fashion",
    "gadgets",
    "toys",
    "fashion",
    "toys",
    "toys",
  ];
  let countCategory = categoryCount(Input);
  console.log(countCategory);
  
  let sort = sorted(countCategory);
  console.log(sort);