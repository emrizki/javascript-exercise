const angka = {
  kumpulan: [2, 5, 3, 7, 8, 1],
  total: 0
}

// for loop
for(let i = 0; i < angka.kumpulan.length; i++) {
  angka.total += angka.kumpulan[i];
}

// for in & while
for(item in angka) {
  let i = 0;
  while(i < angka[item].length) {
    angka.total = angka.total + angka[item][i];
    i++;
  }
}

console.log(angka);
console.log(angka.total);


