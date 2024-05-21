function mincost(arr) {
    function heapify(array) {
        for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
            siftDown(array, i, array.length);
        }
    }

    function siftDown(heap, i, max) {
        let iBig, c1, c2;
        while (i < max) {
            iBig = i;
            c1 = 2 * i + 1;
            c2 = c1 + 1;
            if (c1 < max && heap[c1] < heap[iBig]) iBig = c1;
            if (c2 < max && heap[c2] < heap[iBig]) iBig = c2;
            if (iBig === i) return;
            [heap[i], heap[iBig]] = [heap[iBig], heap[i]];
            i = iBig;
        }
    }

    function heapPop(heap) {
        const root = heap[0];
        if (heap.length > 1) {
            heap[0] = heap.pop();
            siftDown(heap, 0, heap.length);
        } else {
            heap.pop();
        }
        return root;
    }

    function heapPush(heap, value) {
        heap.push(value);
        let i = heap.length - 1;
        let parent = Math.floor((i - 1) / 2);
        while (i > 0 && heap[i] < heap[parent]) {
            [heap[i], heap[parent]] = [heap[parent], heap[i]];
            i = parent;
            parent = Math.floor((i - 1) / 2);
        }
    }

    heapify(arr);
    let totalCost = 0;
    while (arr.length > 1) {
        const first = heapPop(arr);
        const second = heapPop(arr);
        const combinedLength = first + second;
        totalCost += combinedLength;
        heapPush(arr, combinedLength);
    }
    return totalCost;
}


module.exports=mincost;
