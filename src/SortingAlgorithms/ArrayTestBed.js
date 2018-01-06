export default class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;

        for (let i = numElements; i > 0; i--) {
            this.dataStore.push(i);
        }
    }

    setData() {
        this.dataStore = this.dataStore.map( element => {
            return Math.floor( Math.random() * (this.numElements + 1));
        });
    }

    clear() {
        this.dataStore = this.dataStore.map( element => 0 );
    }

    insert(element) {
        this.dataStore[this.pos++] = element;
    }

    toString() {
        return this.dataStore.toString();
    }

    swap(index1, index2) {
        let arr = this.dataStore;
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    bubbleSort() {
        // window.console.log(`init array: ${this.toString()}`);

        for (let outer = this.numElements; outer >= 0; outer--) {

            for (let inner = 0; inner < outer; inner++) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(inner, inner + 1);
                }
            }
            // window.console.log(`Passage number ${outer}: ${this.toString()}`);
        }
    }

    selectionSort() {
        // window.console.log(`init array: ${this.toString()}`);

        for (let outer = 0; outer < this.numElements - 1; outer++) {
            let min = outer;

            for (let inner = outer + 1; inner < this.numElements; inner++) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(outer, min);
            // window.console.log(`Passage number ${outer}: ${this.toString()}`);
        }
    }

    insertionSort() {
        // window.console.log(`init array: ${this.toString()}`);

        for (let outer = 1; outer < this.numElements; outer++) {
            let inner = outer;

            while (inner > 0 && this.dataStore[inner - 1] >= this.dataStore[outer]) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                inner--;
            }
            // window.console.log(`Passage number ${outer}: ${this.toString()}`);
        }
    }

}
