export class MinHeap {
    private _heap: number[] = [];

    constructor() {}

    public Enqueue(value: number): void {
        this._heap.push(value);
        this.HeapifyUp();
    }

    public PrintHeap(): void {
        console.log(this._heap);
    }

    public Poll(): number | null {
        if (this._heap.length === 0) {
            return null;
        }

        if (this._heap.length === 1) {
            return this._heap.shift() as number;
        }

        const min = this._heap[0];
        this._heap[0] = this._heap.pop() as number;
        this.HeapifyDown();
        return min;
    }

    public Peek(): number | null {
        if (this._heap.length === 0) {
            return null;
        }
        return this._heap[0];
    }

    private GetParentIndex(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private GetLeftIndex(i: number): number {
        return 2 * i + 1;
    }

    private GetRightIndex(i: number): number {
        return 2 * i + 2;
    }

    private HeapifyUp(): void {
        let index = this._heap.length - 1;
        while (
            index > 0 &&
            this._heap[this.GetParentIndex(index)] > this._heap[index]
        ) {
            [this._heap[this.GetParentIndex(index)], this._heap[index]] =
                [this._heap[index], this._heap[this.GetParentIndex(index)]];
            index = this.GetParentIndex(index);
        }
    }

    private HeapifyDown(): void {
        let index = 0;
        while (this.GetLeftIndex(index) < this._heap.length) {
            let smallerIndex = this.GetLeftIndex(index);
            
            if (
                this.GetRightIndex(index) < this._heap.length &&
                this._heap[this.GetRightIndex(index)] < this._heap[smallerIndex]
            ) {
                smallerIndex = this.GetRightIndex(index);
            }

            if (this._heap[index] <= this._heap[smallerIndex]) {
                break;
            }

            [this._heap[index], this._heap[smallerIndex]] = 
                [this._heap[smallerIndex], this._heap[index]];
            index = smallerIndex;
        }
    }
}
