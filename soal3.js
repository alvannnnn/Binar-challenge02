function getAngkaTerbesarKedua(personName) {
  let angkaTerbesar = personName[0];
  let angkaTerbesarKedua = personName[1];

  for (let i = 2; i < personName.length; i++) {
    if (personName[i] > angkaTerbesar) {
      angkaTerbesarKedua = angkaTerbesar;
      angkaTerbesar = personName[i];
    } else if (
      personName[i] > angkaTerbesarKedua &&
      personName[i] !== angkaTerbesar
    ) {
      angkaTerbesarKedua = personName[i];
    }
  }
  return angkaTerbesarKedua;
}

const dataAngka = [9, 4, 7, 3, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());
