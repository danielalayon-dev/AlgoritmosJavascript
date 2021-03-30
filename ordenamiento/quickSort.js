function partition(array, low, high) {
    pivot = array[high];
    i = low - 1;
    for (j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i += 1;
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

arr = [5, 3, 1, 2, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
