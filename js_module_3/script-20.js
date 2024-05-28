const girls = [
    { age: 23, name: "Оля" },
    { age: 29, name: "Аня" },
    { age: 10, name: "Юля" },
    { age: 20, name: "Катя" },
  ];
  
  let totalAge = 0;
  for (let i = 0; i < girls.length; i++) {
    totalAge += girls[i].age;
  }
  
  const averageAge = totalAge / girls.length;
  console.log("Середній вік: " + averageAge);
  