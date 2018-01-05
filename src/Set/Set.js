export default class Set {
    constructor() {
        this.dataSet = [];
    }

    add (data) {
        if (this.dataSet.indexOf(data) < 0) {
            this.dataSet.push(data);
            return true;
        } else {
            return false;
        }
    }

    remove(data) {
        const pos = this.dataSet.indexOf(data);

        if (pos > -1) {
            this.dataSet.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    show() {
        return this.dataSet;
    }

    contains(data) {
        return this.dataSet.indexOf(data) > -1 ? true : false ;
    }

    union(set) {
        const tempSet = new Set();

        this.dataSet.forEach( element => {
            tempSet.add(element);
        });

        set.show().forEach( element => {
            if (!tempSet.contains(element)) {
                tempSet.add(element);
            }
        });

        return tempSet;
    }

    intersect(set) {
        const tempSet = new Set();

        this.dataSet.forEach( element => {
            if (set.contains(element)) {
                tempSet.add(element);
            }
        });

        return tempSet;
    }

    size() {
        return this.dataSet.length;
    }

    subset(set) {
        if (this.size() < set.size()) {
            return false;
        } else if ( !set.show().every( element => set.contains(element)) ) {
            return false;
        } else {
            return true;
        }
    }

    difference(set) {
        const tempSet = new Set();

        this.dataSet.forEach( element => {
            if (!set.contains(element)) {
                tempSet.add(element);
            }
        });

        return tempSet;
    }

}
