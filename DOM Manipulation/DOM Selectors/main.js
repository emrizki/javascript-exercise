class Manusia {
 constructor(nama) {
   this.nama = nama;
 }

 perkenalan() {
   console.log(`Namaku ${this.nama}`);
 }

 acakAngka() {
  return Math.floor(Math.random() * 101);
 }

 tebakAngka(angka) {
   let acak = this.acakAngka();
  if(angka > acak) {
    console.log(angka + " > " + acak);
    console.log("Anda Menang!!")
  } else if(angka < acak) {
    console.log(angka + " < " + acak);
    console.log("Anda Kalah!!");
  } else if (angka === acak) {
    console.log(angka + " === " + acak);
    console.log("Seri!!!");
  }
 }
}

let saya = new Manusia("rizki");

saya.perkenalan();
saya.tebakAngka(22);