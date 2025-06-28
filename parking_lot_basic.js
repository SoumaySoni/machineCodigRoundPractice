const park = (vehicleNumber) => {
    let array = [];
    let i = 0;
    while (i <= array.length) {
        if (!array[i]) {
            array[i] = vehicleNumber;
            return `Allocated slot number : ${i+1}`
        };
    };
    i++;
};

console.log(park("soumay"));
console.log(park("soumay"));
