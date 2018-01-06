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

    swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    bubbleSort() {
        window.console.log(`init array: ${this.toString()}`);

        for (let outer = this.numElements; outer >= 0; outer--) {

            for (let inner = 0; inner < outer; inner++) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
            window.console.log(`Passage number ${outer}: ${this.toString()}`);
        }
    }


}
