function sumValues(i) {
    if (i < 1) {
        return i;
    } else {
        return sumValues(i - 1) + i;
    }
}
console.log(sumValues(3));
