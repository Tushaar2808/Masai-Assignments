Input = [
    { name: "Alice", marks: 58 },
  
    { name: "Bob", marks: 85 },
  
    { name: "Charlie", marks: 92 },
  
    { name: "David", marks: 45 },
  ];
  
  function processStudents(input) {
    return input
      .filter((a) => a.marks > 60)
      .sort((a, b) => b.marks - a.marks)
      .map((a) => a.name);
  }
  
  let sorted = processStudents(Input);
  console.log(sorted);