import CArray from './ArrayTestBed';

export function testAlgorithms() {

    const numElements = 10000;
    const myNums = new CArray(numElements);
    myNums.setData();
    // myNums.clear();


    // myNums.bubbleSort();
    // myNums.selectionSort();
    // myNums.insertionSort();

    let start = Date.now();
    myNums.insertionSort();
    let stop = Date.now();
    let timeDiff = stop - start;
    window.console.log(timeDiff / 1000);

    start = Date.now();
    myNums.selectionSort();
    stop = Date.now();
    timeDiff = stop - start;
    window.console.log(timeDiff / 1000);

    start = Date.now();
    myNums.bubbleSort();
    stop = Date.now();
    timeDiff = stop - start;
    window.console.log(timeDiff / 1000);


    window.console.log(myNums);

}
