const checkTypeNumber = (givenNumber) => {
  // memeriksa parameter ada atau tidaknya
  if (typeof givenNumber == "undefined") {
    return "Error: Bro where is the parameter?";
  }
  // memvalidasi type data parameter
  if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  }

  // memeriksa angka genap atau ganjil
  if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
