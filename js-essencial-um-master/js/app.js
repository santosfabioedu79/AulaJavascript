let numero = [1, [2,[3,[4]]]];
console.log(numero.flat().flat().flat().map(num => num * num).map(num => num / 2));
