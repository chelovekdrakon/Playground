
export default class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;

        for (let i = numElements; i > 0; i--) {
            this.dataStore.push(i);
        }

        this.gaps = [];
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
        const len = this.numElements;

        for (let outer = len; outer >= 0; outer--) {

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
        const len = this.numElements;

        for (let outer = 0; outer <= len; outer++) {
            let min = outer;

            for (let inner = outer + 1; inner < len; inner++) {
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

        const len = this.numElements;

        for (let outer = 1; outer < len; outer++) {
            let value = this.dataStore[outer];
            let inner = outer;

            while (inner > 0 && this.dataStore[inner - 1] > value) {
                this.swap(inner, inner - 1);
                inner--;
            }
            // window.console.log(`Passage number ${outer}: ${this.toString()}`);
        }
    }

    shellSort() {
        this.gaps.forEach( gap => {

            const len = this.numElements;

            for (let outer = gap; outer < len; outer += gap) {
                let value = this.dataStore[outer];
                let inner = outer;

                while (inner >= gap && this.dataStore[inner - gap] > value) {
                    this.swap(inner, inner - gap);
                    inner--;
                }
                // window.console.log(`Passage number ${outer}: ${this.toString()}`);
            }

        });
    }

    setGaps(arr) {
        this.gaps = arr;
    }

}
