function PrintHeapIndicesPyramid(countTo) {
    let index = 0;
    let width = 1;
    while (index <= countTo) {
        row = "";
        for (let i = 0; i < width; i++) {
            row += index++ + " ";
        }
        width *= 2;
        console.log(row);
    }
}

PrintHeapIndicesPyramid(10);
