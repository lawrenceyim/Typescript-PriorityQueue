import { MinHeap } from "./MinHeap";

const heap = new MinHeap();
heap.PrintHeap();
heap.Enqueue(5);
heap.Enqueue(6);
heap.Enqueue(1);
heap.Enqueue(0);
heap.PrintHeap();
heap.Poll();
heap.PrintHeap();
heap.Poll();
heap.PrintHeap();
heap.Poll();
heap.PrintHeap();
heap.Poll();
heap.PrintHeap();
heap.Poll();
heap.PrintHeap();
