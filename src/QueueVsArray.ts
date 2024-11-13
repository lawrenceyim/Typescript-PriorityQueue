import { MinHeap } from "./MinHeap";

type VoidFunc = () => void;

function MeasureFunctionRuntime(func: VoidFunc) {
    const start = performance.now();
    func();
    const end = performance.now();
    console.log(`Runtime: ${end - start} milliseconds`);
}

const largeTestValues: number[] = [57, 30, 47, 64, 82, 78, 87, 98, 83, 74, 45, 28, 5, 47, 51, 14, 85, 
    93, 57, 61, 34, 26, 90, 58, 44, 41, 54, 6, 72, 62, 48, 6, 72, 60, 64, 3, 67, 15, 76, 25, 8, 
    55, 83, 8, 14, 5, 76, 75, 90, 96, 61, 51, 57, 1, 82, 12, 45, 51, 3, 99, 30, 42, 88, 81, 30, 
    36, 31, 24, 39, 78, 35, 30, 8, 83, 31, 6, 96, 64, 82, 77, 44, 34, 36, 13, 31, 90, 55, 53, 70, 
    38, 81, 70, 100, 13, 14, 64, 18, 95, 47, 31];

// MeasureFunctionRuntime(() => {
//     let unorderedArray: number[] = [];
//     for (let value of largeTestValues) {
//         unorderedArray.push(value);
//     }

//     while (unorderedArray.length > 0) {
//         unorderedArray = unorderedArray.sort((a,b) => a - b);
//         unorderedArray.shift() as number;
//     }
// })

// MeasureFunctionRuntime(() => {
//     const heap = new MinHeap();
//     for (let value of largeTestValues) {
//         heap.Enqueue(value);
//     }

//     while (heap.Count() > 0) {
//         heap.Poll() as number;
//     }
// });

// const smallTestValues: number[] = [5, 10, 12, 13, 15, 25, 21, 0, 942, 142];

// MeasureFunctionRuntime(() => {
//     let unorderedArray: number[] = [];
//     for (let value of smallTestValues) {
//         unorderedArray.push(value);
//     }
    
//     while (unorderedArray.length > 0) {
//         unorderedArray = unorderedArray.sort((a,b) => a - b);
//         unorderedArray.shift() as number;
//     }
// })

// MeasureFunctionRuntime(() => {
//     const heap = new MinHeap();
//     for (let value of smallTestValues) {
//         heap.Enqueue(value);
//     }

//     while (heap.Count() > 0) {
//         heap.Poll() as number;
//     }
// });

// More realistic
MeasureFunctionRuntime(() => {
    let orderedArray: number[] = new Array();

    let unorderedArray: number[] = [];
    for (let i = 0; i < largeTestValues.length; i++) {
        unorderedArray.push(largeTestValues[i]);

        if (i % 4 == 0) {
            unorderedArray = unorderedArray.sort((a,b) => a - b);
            unorderedArray.shift();
        }
    }
    
    while (unorderedArray.length > 0) {
        unorderedArray = unorderedArray.sort((a,b) => a - b);
        unorderedArray.shift();
    }
})

MeasureFunctionRuntime(() => {
    const heap = new MinHeap();

    for (let i = 0; i < largeTestValues.length; i++) {
        heap.Enqueue(largeTestValues[i]);

        if (i % 4 == 0) {
            heap.Poll() as number;
        }
    }
    
    while (heap.Count() > 0) {
        heap.Poll() as number;
    }
});