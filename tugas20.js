function cari(x){
    var kalimat1 = 
    `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`;

    var kata = kalimat1.match(x);

    return kata;
}

console.log(cari('are'))
console.log(cari('words'))
