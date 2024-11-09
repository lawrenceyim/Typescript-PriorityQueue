import { MinHeap } from "./MinHeap";
import { AreEqual, IsTrue, IsFalse } from "./TestUtils";

// Test if MinHeap works with a small set of values
{
    const heap = new MinHeap();
    heap.Enqueue(5);
    heap.Enqueue(6);
    heap.Enqueue(1);
    heap.Enqueue(0);
    AreEqual(heap.Peek(), 0);
    AreEqual(heap.Poll(), 0);
    AreEqual(heap.Poll(), 1);
    AreEqual(heap.Poll(), 5);
    AreEqual(heap.Poll(), 6);
    AreEqual(heap.Poll(), null);
}

// Test if MinHeap works with a larger set of values
{
    const testValues: number[] = [57, 30, 47, 64, 82, 78, 87, 98, 83, 74, 45, 28, 5, 47, 51, 14, 85, 
        93, 57, 61, 34, 26, 90, 58, 44, 41, 54, 6, 72, 62, 48, 6, 72, 60, 64, 3, 67, 15, 76, 25, 8, 
        55, 83, 8, 14, 5, 76, 75, 90, 96, 61, 51, 57, 1, 82, 12, 45, 51, 3, 99, 30, 42, 88, 81, 30, 
        36, 31, 24, 39, 78, 35, 30, 8, 83, 31, 6, 96, 64, 82, 77, 44, 34, 36, 13, 31, 90, 55, 53, 70, 
        38, 81, 70, 100, 13, 14, 64, 18, 95, 47, 31];
    
    const heap = new MinHeap();
    for (let value of testValues) {
        heap.Enqueue(value);
    }
    
    const sortedValues: number[] = testValues.sort((a, b) => a - b)
    for (let value of sortedValues) {
        AreEqual(heap.Poll(), value);
    }

    AreEqual(heap.Poll(), null);
}