function heapify(arr, chunkLength, idx) {
    let indexOfLargest = idx
    const leftIndex = idx * 2 + 1
    const rightIndex = leftIndex + 1

    if (leftIndex < chunkLength && arr[leftIndex] > arr[indexOfLargest]) {
        indexOfLargest = leftIndex
    }

    if (rightIndex < chunkLength && arr[rightIndex] > arr[indexOfLargest]) {
        indexOfLargest = rightIndex
    }

    if (indexOfLargest !== idx) {
        [arr[idx], arr[indexOfLargest]] = [arr[indexOfLargest], arr[idx]]
        heapify(arr, chunkLength, indexOfLargest)
    }

    return arr
}

function heapsort(arr) {
    const len = arr.length
    let a = Math.floor(len / 2 - 1)
    let b = len - 1

    while (a >= 0) {
        if (a * 2 < len) {
            heapify(arr, len, a)
        }
        a--
    }

    while (b >= 0) {
        [arr[0], arr[b]] = [arr[b], arr[0]]
        heapify(arr, b, 0)
        b--
    }

    return arr
}

function concatlists(arr1, arr2, arr3) {
    const merged = Array(arr1.length + arr2.length + arr3.length)

    let nextAvailableIndex = 0

    for (let i = 0, len = arr1.length; i < len; i++) {
        merged[nextAvailableIndex] = arr1[i]
        nextAvailableIndex++
    }

    for (let i = 0, len = arr2.length; i < len; i++) {
        merged[nextAvailableIndex] = arr2[i]
        nextAvailableIndex++
    }

    for (let i = 0, len = arr3.length; i < len; i++) {
        merged[nextAvailableIndex] = arr3[i]
        nextAvailableIndex++
    }

    return merged
}

function quicksort(arr) {
    const len = arr.length

    if (len <= 1) {
        return arr
    }

    const pivot = arr[len - 1]

    const itemsLower = []
    const itemsHigher = []
    const sortedItems = []

    for (let i = 0; i < len; i++) {
        const item = arr[i]

        if (item < pivot) {
            itemsLower.push(item)
        } else if (item > pivot) {
            itemsHigher.push(item)
        } else {
            sortedItems.push(item)
        }
    }

    return concatlists(
        itemsLower.length > 0 ? quicksort(itemsLower) : [],
        sortedItems,
        itemsHigher.length > 0 ? quicksort(itemsHigher) : []
    )
}

function bubblesort(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr
}

function insertionsort(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        let idx = i
        while (idx > 0 && arr[idx] < arr[idx - 1]) {
            [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]]
            idx--
        }
    }

    return arr
}

function mergelists(leftList, rightList) {
    const leftLen = leftList.length
    const rightLen = rightList.length

    const merged = Array(leftLen + rightLen)

    let currentLeftIndex = 0
    let currentRightIndex = 0

    while (currentLeftIndex < leftLen && currentRightIndex < rightLen) {
        if (leftList[currentLeftIndex] > rightList[currentRightIndex]) {
            merged[currentLeftIndex + currentRightIndex] = rightList[currentRightIndex]
            currentRightIndex++
        } else {
            merged[currentLeftIndex + currentRightIndex] = leftList[currentLeftIndex]
            currentLeftIndex++
        }
    }

    while (currentLeftIndex < leftLen) {
        merged[currentLeftIndex + currentRightIndex] = leftList[currentLeftIndex]
        currentLeftIndex++
    }

    while (currentRightIndex < rightLen) {
        merged[currentLeftIndex + currentRightIndex] = rightList[currentRightIndex]
        currentRightIndex++
    }

    return merged
}

function mergesort(arr) {
    const len = arr.length

    if (len <= 1) {
        return arr
    }

    const midpointIndex = Math.floor(len / 2)

    return mergelists(
        mergesort(arr.slice(0, midpointIndex)),
        mergesort(arr.slice(midpointIndex, len))
    )
}

const unsortedArray = Array(10000)
    .fill(0)
    .map((_, i) => Math.floor(Math.random() * (10000 + i)))

const sorts = [
    ["heap sort", () => {
        const arrCopy = [...unsortedArray]
        heapsort(arrCopy)
        return arrCopy
    }],
    ["quick sort", () => {
        const arrCopy = [...unsortedArray]
        return quicksort(arrCopy)
    }],
    ["insertion sort", () => {
        const arrCopy = [...unsortedArray]
        return insertionsort(arrCopy)
    }],
    ["bubble sort", () => {
        const arrCopy = [...unsortedArray]
        bubblesort(arrCopy)
        return arrCopy
    }],
    ["merge sort", () => {
        const arrCopy = [...unsortedArray]
        return mergesort(arrCopy)
    }]
]

export default { sorts }
