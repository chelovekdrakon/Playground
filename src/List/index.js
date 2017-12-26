import List from './List';



export function testList() {

    /*
     *
     *
     *  task 1
     *
     *
     *
     */

    const names = new List();

    names.append('lol');
    names.append('gnol');
    names.append('troll');
    names.append('poll');

    names.front();
    window.console.log(names.getElement());
    names.next();
    window.console.log(names.getElement());
    names.next();
    window.console.log(names.getElement());
    names.prev();
    window.console.log(names.getElement());

    ifGreater(names, 'qop');
    window.console.log(names.toString());

    /*
     *
     *
     * task 2
     *
     *
     *
     */

    const numbers = new List();

    numbers.append(1);
    numbers.append(2);
    numbers.append(3);

    ifSmaller(numbers, 7);
    window.console.log(numbers.toString());

    /*
     *
     *
     * task 3
     *
     *
     *
     */

    const persons = new List();
    persons.append({name: 'bob', gender: 'male'});
    persons.append({name: 'top', gender: 'male'});
    persons.append({name: 'qob', gender: 'male'});
    persons.append({name: 'wob', gender: 'male'});
    persons.append({name: 'eob', gender: 'male'});
    persons.append({name: 'rob', gender: 'male'});
    persons.append({name: 'aob', gender: 'female'});
    persons.append({name: 'sob', gender: 'female'});
    persons.append({name: 'dob', gender: 'female'});
    persons.append({name: 'fob', gender: 'female'});
    persons.append({name: 'gob', gender: 'female'});
    persons.append({name: 'hob', gender: 'female'});

    window.console.log(showSameGender(persons, 'female'));
}



function ifGreater(list, value) {
    let res = null;
    list.toString().forEach( node => {
        if (node > value) {
            res = true;
        }
    });
    return res ? false : list.append(value);
}



function ifSmaller(list, value) {
    let res = null;
    list.toString().forEach( node => {
        if (node < value) {
            res = true;
        }
    });
    return res ? false : list.append(value);
}



function showSameGender(list, gender) {
    let res = [];
    list.toString().forEach( node => {
        if (node.gender === gender) {
            res.push(node.name);
        }
    });
    return res;
}
