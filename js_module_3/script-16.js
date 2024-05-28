const fruts = [
    { id: 0, name: "Apple" },
    { id: 1, name: "Tomat" },
    { id: 2, name: "Cherry" },
    { id: 3, name: "Orange" },
  ];
  
  const names = [];
  for (const fruit of fruts) {
    names.push(fruit.name);
  }
  
  console.log(names);  