function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min); //Максимум и минимум включаются
  }
  getRandomIntInclusive(1, 4)