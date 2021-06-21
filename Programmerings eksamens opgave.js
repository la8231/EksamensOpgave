let arr = [5, 1, 2, 3, 3, 3 ,3, 5, 5, 1, 1, 2];

function Fjernegentagelser(arr) {
    let unique = [];
    arr.forEach(number => {
        if (!unique.includes(number)) {
            unique.push(number)
        }
    });
    return unique;
}
console.log(Fjernegentagelser(arr));