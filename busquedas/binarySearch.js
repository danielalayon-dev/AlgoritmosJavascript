function binarySearch(arr, inicio, fin, numeroBuscado) {
    if (fin >= inicio) {
        let medio = parseInt(inicio + (fin - inicio) / 2);
        if (arr[medio] === numeroBuscado) {
            return medio;
        }
        if (arr[medio] > numeroBuscado) {
            return binarySearch(arr, inicio, medio - 1, numeroBuscado);
        } else {
            return binarySearch(arr, medio + 1, fin, numeroBuscado);
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5];
let tam = arr.length;
let numeroBuscado = 7;

let resultado = parseInt(binarySearch(arr, 0, tam - 1, numeroBuscado));
if (resultado == -1) {
    console.log('El elemento no fue encontrado');
} else {
    console.log('El elemento fue encontrado en la posicion ' + resultado);
}
