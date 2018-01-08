import CArray from './ArrayTestBed';

export function testAlgorithms() {

    const numElements = 10000;
    const myNums = new CArray(numElements);
    myNums.setData();
    // myNums.clear();
    window.console.log(myNums);

    // myNums.bubbleSort();
    // myNums.selectionSort();
    // myNums.insertionSort();

    // let start = Date.now();
    // myNums.insertionSort();
    // let stop = Date.now();
    // let timeDiff = stop - start;
    // window.console.log(timeDiff / 1000);

    // let start = Date.now();
    // myNums.selectionSort();
    // let stop = Date.now();
    // let timeDiff = stop - start;
    // window.console.log(timeDiff / 1000);
    //
    // let start = Date.now();
    // myNums.bubbleSort();
    // let stop = Date.now();
    // let timeDiff = stop - start;
    // window.console.log(timeDiff / 1000);

    let start = Date.now();
    myNums.shellSort();
    let stop = Date.now();
    let timeDiff = stop - start;
    window.console.log(timeDiff / 1000);


}
