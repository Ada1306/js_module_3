for (let i = 0; i < 3; i++) {
    let number = prompt("Введіть число більше за 100", "");
    if (number === null || Number(number) > 100) {
      if (number !== null) {
        console.log("Ви ввели число більше за 100: " + number);
      }
      break;
    }
  }
  
  if (i === 3) {
    console.log("Ви ввели некоректне число або скасували ввід.");
  }
  