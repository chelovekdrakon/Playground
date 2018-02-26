export default class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    insert(element, pos) {
        // const insertPos = this.find(pos);
        // if (insertPos > -1) {
        //     this.dataStore.splice(pos+1, 0, element);
        //     ++this.listSize;
        // }
        // return insertPost > -1 ? true : false;
        this.dataStore.splice(pos, 0, element);
        ++this.listSize;
        return true;
    }

    append(element) {
        this.dataStore.push(element);
        ++this.listSize;
    }

    find(element) {
        // let result = -1;
        // this.dataStore.forEach( (node, index) => {
        //     if (node === element) {
        //         result = index;
        //     }
        // });
        // return result;
        return this.dataStore.indexOf(element);
    }

    remove(element) {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
        }
        return foundAt > -1 ? true : false;
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        --this.pos;
    }

    next() {
        return this.pos < this.listSize - 1 ? ++this.pos : 'you are in the end of the list';
    }

    length() {
        return this.listSize;
    }

    currPos() {
        return this.pos;
    }

    moveTo(pos) {
        this.pos = pos;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

    toString() {
        return this.dataStore;
    }

    contains(element) {
        const obj = {};
        obj['element'] = element;
        obj['positions'] = [];

        this.dataStore.forEach((node, index) => {
            if (element === node) {
                obj['positions'].push(index);
            }
        });

        return obj['positions'].length > 0 ? obj : false;
    }

    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
        return true;
    }
}
