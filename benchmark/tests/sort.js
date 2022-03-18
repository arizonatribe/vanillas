function heapify(arr, chunkLength, idx) {
    let indexOfLargest = idx
    let leftIndex = idx * 2 + 1
    let rightIndex = leftIndex + 1

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
        heapify(arr, len, a)
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

    const pivotIndex = len - 1

    const itemsLower = []
    const itemsHigher = []
    const sortedItems = []

    for (let i = 0; i < len; i++) {
        if (arr[i] < arr[pivotIndex]) {
            itemsLower.push(arr[i])
        } else if (arr[i] > arr[pivotIndex]) {
            itemsHigher.push(arr[i])
        } else {
            sortedItems.push(arr[i])
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
