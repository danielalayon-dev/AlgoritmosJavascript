function burbuja(array) {
    largo = array.length;
    for (i = 0; i < largo; i++) {
        for (j = 0; j < largo - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}
array = [5, 2, 4, 1];
console.log(burbuja(array));
