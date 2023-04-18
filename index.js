// просто рандомные числа в массиве  arr
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const arr = [];
while(arr.length < 1000) {
    let n = getRandomIntInclusive(1, 300);
    arr.push(n);
}// просто рандомные числа в массиве arr




// стандартный способ
const original = arr
const serialized = JSON.stringify(original)
const deserialized = JSON.parse(serialized)
console.log(serialized)
console.log(deserialized)




// способ с перевод в 16чный систему
const parseSixteen = arr.map(el=> el.toString(16))
console.log(JSON.stringify(parseSixteen).replace(/"/g,""))
// ничего не придумал без алгоритмов сжатия , взял в 16чный код перевел так как ASCII (можно было ещё больше кодировку сделать)
// и сделал стандартный способ JSON - так как это просто массив с числами(были бы другие типы как регулярка, то использовал бы кастом функцию)


