import Set from './Set';

export function testSet() {
    const mySet = new Set();

    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    mySet.add(4);
    mySet.add(5);

    window.console.log(mySet.show());

    mySet.remove(1);
    mySet.remove(2);
    mySet.remove(3);
    mySet.remove(4);
    mySet.remove(5);

    window.console.log(mySet.show());

    const anotherSet = new Set();

    anotherSet.add(1);
    anotherSet.add(2);
    anotherSet.add(3);
    anotherSet.add(4);
    anotherSet.add(5);

    const unitedSet = mySet.union(anotherSet);
    window.console.log(unitedSet.show());

    const intersectedSet = unitedSet.intersect(anotherSet);
    window.console.log(intersectedSet.show());

    window.console.log(intersectedSet.subset(anotherSet), intersectedSet.show(), anotherSet.show());

    const differencedSet = anotherSet.difference(mySet);
    window.console.log(differencedSet.show(), anotherSet.show(), mySet.show());
}
